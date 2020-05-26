import { BlocksControls, BlockTextarea } from 'react-tinacms-inline'
import { getPosition } from '../../utils'

export function H1({ data, index }) {
  const { width, align } = data
  const position = getPosition(width, align)
  return (
    <>
      <h1>
        <BlocksControls index={index}>
          <BlockTextarea name="text" />
        </BlocksControls>
      </h1>

      <style jsx>{`
        h1 {
          grid-column-start: ${position.colStart};
          grid-column-end: ${position.colEnd};
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
    width: 'wide',
    align: 'left',
  },
  key: undefined,
  fields: [
    {
      name: 'width',
      label: 'Width',
      component: 'select',
      options: ['Narrow', 'Medium', 'Wide', 'Fullwidth'],
    },
    {
      name: 'align',
      label: 'Alignment',
      component: 'select',
      options: ['Left', 'Right', 'Center'],
    },
  ],
}

export function H2({ data, index }) {
  const { width, align } = data
  const position = getPosition(width, align)
  return (
    <>
      <h2>
        <BlocksControls index={index}>
          <BlockTextarea name="text" />
        </BlocksControls>
      </h2>

      <style jsx>{`
        h2 {
          grid-column-start: ${position.colStart};
          grid-column-end: ${position.colEnd};
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
    width: 'medium',
    align: 'center',
  },
  key: undefined,
  fields: [
    {
      name: 'width',
      label: 'Width',
      component: 'select',
      options: ['Narrow', 'Medium', 'Wide', 'Fullwidth'],
    },
    {
      name: 'align',
      label: 'Alignment',
      component: 'select',
      options: ['Left', 'Right', 'Center'],
    },
  ],
}
