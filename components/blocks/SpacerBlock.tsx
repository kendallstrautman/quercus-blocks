export function Spacer({ data }) {
  // TODO: add dynamic spacer sizes
  return (
    <>
      <div className="spacer"></div>
      <style jsx>{`
        div.spacer {
          height: var(--med);
          grid-column: span 4;
          grid-column-row: ${data.row};
        }
        @media (min-width: 1200px) {
          div.spacer {
            height: var(--lrg);
          }
        }
      `}</style>
    </>
  )
}

export const spacer_template = {
  type: 'spacer',
  label: 'Spacer',
  defaultItem: {
    _template: 'spacer',
  },
  key: undefined,
  // todo add fields here for position and width etc.
  fields: [],
}
