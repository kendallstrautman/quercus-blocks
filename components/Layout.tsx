import Meta from './Meta'
import Nav from './Nav'
import Footer from './Footer'

interface LayoutProps {
  editMode: boolean
  infoBlurb: string
  children: any
  siteTitle: string
  siteDescription: string
}

export default function Layout(props: LayoutProps) {
  return (
    <section className="layout">
      <Meta siteTitle={props.siteTitle} description={props.siteDescription} />
      <Nav editMode={props.editMode} infoBlurb={props.infoBlurb} />
      <div className="content">{props.children}</div>
      <Footer />
      <style jsx global>
        {`
          .layout {
            overflow-x: hidden;
            display: flex;
            flex-direction: column;
          }
          div.content {
            padding: var(--lrg) var(--sm) var(--sm) var(--sm);
            width: 100%;
            max-width: 768px;
            margin: 0 auto;
          }
          div.content > * {
            padding: var(--sm) 0;
          }
          @media (min-width: 768px) {
            div.content {
              padding: var(--xl) var(--med) var(--med) var(--med);
            }
          }
          @media (min-width: 1000px) {
            div.content {
              display: grid;
              max-width: none;
              padding: 88px var(--med) var(--med) var(--med);
              grid-template-columns: repeat(4, 1fr);
              grid-template-rows: auto;
            }
            div.content > * {
              padding: var(--med) 0;
            }
          }
        `}
      </style>
    </section>
  )
}
