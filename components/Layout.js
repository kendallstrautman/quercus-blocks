import Meta from './Meta'
import Nav from './Nav'

export default function Layout(props) {
  return (
    <section className="layout">
      <Meta
        siteTitle={props.siteTitle}
        siteDescription={props.siteDescription}
      />
      <Nav />
      <div className="content">{props.children}</div>
      <style jsx global>
        {`
          .layout {
            overflow-x: hidden;
            display: flex;
            flex-direction: column;
          }
          div.content {
            padding: 5vh var(--sm) var(--sm) var(--sm);
            width: 100%;
            max-width: 768px;
            margin: 0 auto;
          }
          div.content * {
            padding: var(--med) 0;
          }
          @media (min-width: 768px) {
            div.content {
              padding: var(--sm);
            }
          }
          @media (min-width: 1280px) {
            div.content {
              display: grid;
              max-width: none;
              padding: 8vh var(--med) var(--med) var(--med);
              grid-template-columns: repeat(4, 1fr);
              grid-template-rows: auto;
            }
            div.content * {
              padding: var(--med) 0;
            }
          }
        `}
      </style>
    </section>
  )
}