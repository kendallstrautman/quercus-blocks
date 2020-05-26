export default function Footer() {
  return (
    <>
      <footer>
        <p>
          <a href="https://tinacms.org/" target="_blank">
            Made with TinaCMS 🦙
          </a>
        </p>
        <div className="socialItems">
          <p>
            <a href="https://github.com/tinacms/tinacms/" target="_blank">
              GitHub
            </a>
          </p>

          <p>
            <a href="https://twitter.com/tina_cms" target="_blank">
              Twitter
            </a>
          </p>
        </div>
      </footer>
      <style jsx>
        {`
          footer {
            width: 100%;
            border-top: solid 1px black;
            border-bottom: solid 1px black;
            display: flex;
            justify-content: space-between;
          }
          footer > :first-child {
            border-right: solid 1px black;
            padding: var(--sm);
            background-color: white;
            color: inherit;
            transition: all 250ms ease;
          }
          footer > :first-child:hover {
            background-color: var(--orange);
            color: var(--seafoam);
            transition: all 250ms ease;
          }
          footer > :first-child a {
            color: inherit;
            transition: color 250ms ease;
          }
          footer > :first-child a:hover {
            color: var(--seafoam);
            transition: color 250ms ease;
          }
          div.socialItems {
            display: flex;
          }
          div.socialItems p {
            border-left: black solid 1px;
            padding: var(--sm);
            color: inherit;
            background-color: white;
            transition: all 250ms ease;
          }
          div.socialItems a {
            color: inherit;
            transition: color 250ms ease;
          }
          div.socialItems p:hover {
            background-color: var(--orange);
            color: var(--seafoam);
            transition: all 250ms ease;
          }
          div.socialItems a:hover {
            color: var(--seafoam);
            transition: color 250ms ease;
          }

          @media (min-width: 1000px) {
            footer > p:first-child {
              padding: var(--sm) var(--med);
            }
            div.socialItems p {
              padding: var(--sm) var(--med);
            }
          }
        `}
      </style>
    </>
  )
}
