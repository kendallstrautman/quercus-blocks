import EditLink from './EditLink'

export default function Nav() {
  return (
    <>
      <nav>
        <EditLink />
        <div className="info-link">
          <p>Info</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M16.293 9.293L12 13.586 7.707 9.293 6.293 10.707 12 16.414 17.707 10.707z" />
          </svg>
        </div>
      </nav>
      <style jsx>{`
        nav {
          width: 100%;
          display: flex;
          justify-content: space-between;
          padding: var(--sm);
          border-bottom: 1px solid black;
        }
        div.info-link {
          display: flex;
        }
        div.info-link p {
          padding-right: var(--xs);
        }
      `}</style>
    </>
  )
}
