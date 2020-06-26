import { BlocksControls, InlineTextarea } from 'react-tinacms-inline'
import { getPosition, BlockPositionProps, GridColumnProps } from '../../utils'

export interface BlockProps {
  data: { position: BlockPositionProps }
  index: number
}

function BodyCopy({ data, index }: BlockProps) {
  const gridCol: GridColumnProps = getPosition(data.position)
  return (
    <>
      <p className="block">
        <BlocksControls index={index}>
          <InlineTextarea name="text" focusRing={false} />
        </BlocksControls>
      </p>

      <style jsx>{`
        p {
          grid-column-start: ${gridCol.colStart};
          grid-column-end: ${gridCol.colEnd};
          grid-row-start: ${index + 1};
        }
      `}</style>
    </>
  )
}

export const bodyCopyBlock = {
  Component: BodyCopy,
  template: {
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
  },
}
