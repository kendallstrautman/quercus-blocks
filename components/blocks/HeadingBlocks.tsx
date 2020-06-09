import { BlocksControls, InlineTextarea } from 'react-tinacms-inline'
import { getPosition, GridColumnProps } from '../../utils'
import { BlockProps } from './BodyCopyBlock'

export function H1({ data, index }: BlockProps) {
  const gridCol: GridColumnProps = getPosition(data.position)
  return (
    <>
      <h1 className="block">
        <BlocksControls index={index}>
          <InlineTextarea name="text" />
        </BlocksControls>
      </h1>

      <style jsx>{`
        h1 {
          grid-column-start: ${gridCol.colStart};
          grid-column-end: ${gridCol.colEnd};
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
    position: {
      width: 'Wide',
      align: 'Left',
    },
  },
  key: undefined,
  fields: [
    {
      name: 'position.width',
      label: 'Width',
      component: 'select',
      options: ['Narrow', 'Medium', 'Wide', 'Fullwidth'],
    },
    {
      name: 'position.align',
      label: 'Alignment',
      component: 'select',
      options: ['Left', 'Right', 'Center'],
    },
  ],
}

export function H2({ data, index }: BlockProps) {
  const gridCol: GridColumnProps = getPosition(data.position)
  return (
    <>
      <h2 className="block">
        <BlocksControls index={index}>
          <InlineTextarea name="text" />
        </BlocksControls>
      </h2>

      <style jsx>{`
        h2 {
          grid-column-start: ${gridCol.colStart};
          grid-column-end: ${gridCol.colEnd};
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
    position: {
      width: 'Medium',
      align: 'Center',
    },
  },
  key: undefined,
  fields: [
    {
      name: 'position.width',
      label: 'Width',
      component: 'select',
      options: ['Narrow', 'Medium', 'Wide', 'Fullwidth'],
    },
    {
      name: 'position.align',
      label: 'Alignment',
      component: 'select',
      options: ['Left', 'Right', 'Center'],
    },
  ],
}
