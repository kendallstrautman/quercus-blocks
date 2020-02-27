export function H1({ data }) {
  return (
    <>
      <h1>{data.text}</h1>
      <style jsx>{`
        h1 {
          grid-column-start: ${data.col_start};
          grid-column-end: ${data.col_end};
          grid-row-start: ${data.row};
        }
      `}</style>
    </>
  )
}

export const heading_1_template = {
  type: 'heading_1',
  label: 'Heading 1',
  defaultItem: {
    _template: 'heading_1',
    text:
      'Wherever I sat, there I might live, and the landscape radiated from me accordingly.',
    position: 'left',
    width: 'large',
    col_start: 1,
    col_end: 4,
  },
  key: undefined,
  // todo add fields here for position and width etc.
  fields: [],
}

export function H2({ data }) {
  const colStart = data.col_start
  const colEnd = data.col_end
  const row = data.row
  return (
    <>
      <h2>{data.text}</h2>{' '}
      <style jsx>{`
        h2 {
          grid-column-start: ${colStart};
          grid-column-end: ${colEnd};
          grid-row-start: ${row};
        }
      `}</style>
    </>
  )
}

export const heading_2_template = {
  type: 'heading_2',
  label: 'Heading 2',
  defaultItem: {
    _template: 'heading_2',
    text:
      'Wherever I sat, there I might live, and the landscape radiated from me accordingly.',
    position: 'center',
    width: 'medium',
    col_start: 2,
    col_end: 4,
  },
  key: undefined,
  // todo add fields here for position and width etc.
  fields: [],
}
