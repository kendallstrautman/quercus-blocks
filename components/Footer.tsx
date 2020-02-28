export default function Footer() {
  return (
    <>
      <footer>
        <p>
          <a href="https://tinacms.org/">Made by: TinaCMS 🦙</a>
        </p>
        <div className="socialItems">
          <p>
            <a href="https://github.com/tinacms/tinacms/">Github</a>
          </p>
          |{' '}
          <p>
            <a href="https://twitter.com/tina_cms">Twitter</a>
          </p>
        </div>
      </footer>
      <style jsx>
        {`
          footer {
            width: 100%;
            border-top: solid 1px black;
            border-bottom: solid 1px black;
            padding: var(--sm);
            display: flex;
            justify-content: space-between;
          }
          div.socialItems {
            display: flex;
          }
          div.socialItems p:last-child {
            padding-left: var(--xs);
          }
          div.socialItems p:first-child {
            padding-right: var(--xs);
          }
          @media (min-width: 1000px) {
            footer {
              padding: var(--med);
            }
          }
        `}
      </style>
    </>
  )
}
