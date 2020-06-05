import { BlocksControls, BlockTextarea } from 'react-tinacms-inline'
import { getPosition, BlockPositionProps } from '../../utils'

export interface BlockProps {
  data: { position: BlockPositionProps }
  index: number
}

export function BodyCopy({ data, index }: BlockProps) {
  const position = getPosition(data.position)
  return (
    <>
      <p className="block">
        <BlocksControls index={index}>
          <BlockTextarea name="text" />
        </BlocksControls>
      </p>

      <style jsx>{`
        p {
          grid-column-start: ${position.colStart};
          grid-column-end: ${position.colEnd};
          grid-row-start: ${index + 1};
        }
      `}</style>
    </>
  )
}

export const body_copy_template = {
  type: 'body_copy',
  label: 'Body Copy',
  defaultItem: {
    _template: 'body_copy',
    text:
      'What is a house but a sedes, a seat?—better if a country seat. I discovered many a site for a house not likely to be soon improved, which some might have thought too far from the village, but to my eyes the village was too far from it.',
    position: {
      width: 'Medium',
      align: 'Center',
    },
  },
  key: 'body-copy',
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
