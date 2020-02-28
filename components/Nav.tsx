import React from 'react'
import EditLink from './EditLink'
import Chevron from './icons/Chevron'

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
            <Chevron />
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
          background-color: var(--orange);
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
          color: var(--seafoam);
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
          background-color: white;
        }

        .info-link {
          display: flex;
        }
        .info-link p {
          padding-right: var(--xs);
        }
        @media (min-width: 1000px) {
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
