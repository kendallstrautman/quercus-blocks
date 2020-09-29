import React from 'react'
import { useCMS } from 'tinacms'
import EditLink from './EditLink'
import Chevron from './icons/Chevron'

interface NavProps {
  infoBlurb: string
}

export default function Nav({ infoBlurb }: NavProps) {
  const [isOpen, setIsOpen] = React.useState(false)
  const cms = useCMS()

  function handleOpenCloseNav(e) {
    e.preventDefault()
    setIsOpen(!isOpen)
  }

  return (
    <>
      <nav>
        <div className="infoBlurb">
          <h2>{infoBlurb}</h2>
        </div>
        <span className="navItems">
          <EditLink />
          <a onClick={handleOpenCloseNav} className="info-link">
            <Chevron pointsUp={isOpen} />
          </a>
        </span>
      </nav>
      <style jsx>{`
        nav {
          z-index: 100;
          width: 100%;
          height: 100vh;
          position: fixed;
          ${cms.enabled ? `top: 62px;` : `top: 0;`}
          background-color: var(--orange);
          transition: transform 350ms ease-in-out;
          ${isOpen
            ? `transform: translateY(0);
            transition: transform 375ms ease;`
            : `transform: translateY(calc(-100vh + 50px));`}
        }

        div.infoBlurb {
          display: flex;
          width: 100%;
          height: 100%;
          justify-content: center;
          align-items: center;
        }
        div.infoBlurb h2 {
          color: var(--seafoam);
          margin-top: -38px;
          padding: 0 var(--med);
          text-align: center;
          max-width: 768px;
        }
        span.navItems {
          width: 100%;
          display: flex;
          justify-content: space-between;
          position: absolute;
          bottom: 0;
          border-top: 1px solid black;
          border-bottom: 1px solid black;
          background-color: white;
        }

        .info-link {
          display: flex;
          padding: var(--sm);
        }

        @media (min-width: 1000px) {
          nav {
            height: 75vh;
            ${isOpen
              ? `transform: translateY(0);`
              : `transform: translateY(calc(-75vh + 50px));`}
          }
          .info-link {
            padding: var(--sm) var(--med);
          }
        }
      `}</style>
    </>
  )
}
