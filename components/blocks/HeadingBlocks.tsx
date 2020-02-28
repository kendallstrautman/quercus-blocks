import { BlockTextArea } from '../inline-ui'
import { BlocksControls } from '../inline-ui'

export function H1({ data, index }) {
  return (
    <>
      <h1>
        <BlocksControls index={index}>
          <BlockTextArea name="text" />
        </BlocksControls>
      </h1>

      <style jsx>{`
        h1 {
          grid-column-start: ${data.col_start};
          grid-column-end: ${data.col_end};
          grid-row-start: ${index + 1};
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
    col_start: 1,
    col_end: 4,
  },
  key: undefined,
  // todo add fields here for position and width etc.
  fields: [],
}

export function H2({ data, index }) {
  return (
    <>
      <h2>
        <BlocksControls index={index}>
          <BlockTextArea name="text" />
        </BlocksControls>
      </h2>

      <style jsx>{`
        h2 {
          grid-column-start: ${data.col_start};
          grid-column-end: ${data.col_end};
          grid-row-start: ${index + 1};
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
    col_start: 2,
    col_end: 4,
  },
  key: undefined,
  // todo add fields here for position and width etc.
  fields: [],
}
