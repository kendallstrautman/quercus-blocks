import React from 'react'
import EditLink from './EditLink'

export default function Nav(props) {
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
        <div className="infoBlurb">
          <h2>{props.infoBlurb}</h2>
        </div>
        <span className="navItems">
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
          z-index: 100;
          width: 100%;
          height: 100vh;
          position: fixed;
          top: 0;
          background-color: white;
          transform: translateY(calc(-100vh + 50px));
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
        div.infoBlurb {
          display: flex;
          width: 100%;
          height: 100%;
          justify-content: center;
          align-items: center;
        }
        div.infoBlurb h2 {
          color: var(--orange);
          margin-top: -38px;
          padding: 0 var(--med);
          text-align: center;
          max-width: 768px;
        }
        span.navItems {
          width: 100%;
          padding: var(--sm);
          display: flex;
          justify-content: space-between;
          position: absolute;
          bottom: 0;
          border-top: 1px solid black;
          border-bottom: 1px solid black;
        }

        .info-link {
          display: flex;
        }
        .info-link p {
          padding-right: var(--xs);
        }
        @media (min-width: 1280px) {
          nav {
            height: 75vh;
            transform: translateY(calc(-75vh + 50px));
          }
          span.navItems {
            padding: var(--sm) var(--med);
          }
        }
      `}</style>
    </>
  )
}
