interface ChevronProps {
  pointsUp: boolean
}

export default function Chevron({ pointsUp }: ChevronProps) {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="chevron"
      >
        <path d="M16.293 9.293L12 13.586 7.707 9.293 6.293 10.707 12 16.414 17.707 10.707z" />
      </svg>
      <style jsx>
        {`
          svg {
            fill: var(--orange);
            transform: rotate(0deg);
            transition: transform 200ms ease;
            ${pointsUp &&
              `  transform: rotate(-180deg);
            transition: transform 275ms ease;`}
          }
        `}
      </style>
    </>
  )
}
