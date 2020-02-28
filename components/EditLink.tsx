export default function EditLink() {
  return (
    <>
      <p>
        <a>Edit This Page ✐ </a>
      </p>
      <style jsx>{`
        p {
          margin-bottom: 0;
          border-right: 1px solid black;
          padding: padding: var(--sm);
          color: inherit;
          transition: color 250ms ease;
          background-color: white;
        }
        p:hover {
          background-color: var(--orange);
          color: var(--seafoam);
          transition: all 250ms ease;
        }
        a:hover {
          background-all: var(--orange);
          color: var(--seafoam);
          transition: all 250ms ease;
        }
        @media(min-width: 1000px) {
          p {
            padding: var(--sm) var(--med);
          }
        }
      `}</style>
    </>
  )
}
