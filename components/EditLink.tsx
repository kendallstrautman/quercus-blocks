import { useCMS } from 'tinacms'

export default function EditLink() {
  const cms = useCMS()

  return (
    <>
      <p onClick={cms.enabled ? cms.disable : cms.enable}>
        <a>{cms.enabled ? 'Exit Edit Mode ✗' : 'Edit This Page ✐ '}</a>
      </p>
      <style jsx>{`
        p {
          margin-bottom: 0;
          border-right: 1px solid black;
          padding: var(--sm);
          color: inherit;
          transition: all 250ms ease;
          background-color: white;
        }
        a {
          color: inherit;
          transition: color 250ms ease;
        }
        p:hover {
          background-color: var(--orange);
          color: var(--seafoam);
          transition: all 250ms ease;
        }
        a:hover {
          background-all: var(--orange);
          color: var(--seafoam);
          transition: color 250ms ease;
        }
        @media (min-width: 1000px) {
          p {
            padding: var(--sm) var(--med);
          }
        }
      `}</style>
    </>
  )
}
