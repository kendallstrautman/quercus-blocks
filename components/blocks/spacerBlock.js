export function Spacer({ data }) {
  return (
    <>
      <div></div>
      <style jsx>{`
        div {
          height: var(--lrg);
          grid-column: span 4;
          grid-column-row: ${data.row};
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
