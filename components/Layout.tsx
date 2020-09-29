import Meta from './Meta'
import Nav from './Nav'
import Footer from './Footer'

interface LayoutProps {
  children?: any
  infoBlurb: string
  siteTitle: string
  siteDescription: string
}

export default function Layout(props: LayoutProps) {
  return (
    <section className="layout">
      <Meta siteTitle={props.siteTitle} description={props.siteDescription} />
      <Nav infoBlurb={props.infoBlurb} />
      {props.children}
      <Footer />
      <style jsx global>
        {`
          .layout {
            overflow-x: hidden;
            display: flex;
            flex-direction: column;
            scrollbar-width: none;
          }

          ::webkit-scrollbar {
            display: none;
          }
        `}
      </style>
    </section>
  )
}
