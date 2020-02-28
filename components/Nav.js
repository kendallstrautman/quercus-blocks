import React from 'react'
import EditLink from './EditLink'

export default function Nav() {
  const [isOpen, setIsOpen] = React.useState(false)
  function handleOpenNav(e) {
    e.preventDefault()
    const navClass = document.querySelector('nav').classList
    const chevronClass = document.querySelector('.chevron').classList

    if (isOpen) {
      navClass.remove('isOpen')
      chevronClass.remove('pointsUp')
    } else {
      navClass.add('isOpen')
      chevronClass.add('pointsUp')
    }
    setIsOpen(!isOpen)
  }

  return (
    <>
      <nav>
        <span className="nav-items">
          <EditLink />
          <a onClick={handleOpenNav} className="info-link">
            <p>Info</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="chevron"
            >
              <path d="M16.293 9.293L12 13.586 7.707 9.293 6.293 10.707 12 16.414 17.707 10.707z" />
            </svg>
          </a>
        </span>
      </nav>
      <style jsx>{`
        nav {
          width: 100%;
          border-bottom: 1px solid black;
          height: 68vh;
          position: absolute;
          top: 0;
          background-color: white;
          transform: translateY(-62vh);
          transition: transform 350ms ease-in-out;
        }
        nav.isOpen {
          transform: translateY(0);
          transition: transform 375ms ease;
        }
        svg {
          transform: rotate(0deg);
          transition: transform 200ms ease;
        }
        svg.pointsUp {
          transform: rotate(-180deg);
          transition: transform 275ms ease;
        }
        span.nav-items {
          width: 100%;
          padding: var(--sm);
          display: flex;
          justify-content: space-between;
          position: absolute;
          bottom: 0;
        }

        .info-link {
          display: flex;
        }
        .info-link p {
          padding-right: var(--xs);
        }
      `}</style>
    </>
  )
}
