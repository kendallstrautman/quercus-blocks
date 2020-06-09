import { BlocksControls } from 'react-tinacms-inline'
import { getSpacerSize } from '../../utils'

interface SpacerProps {
  index: number
  data: { size: string }
}

export function Spacer({ index, data }: SpacerProps) {
  return (
    <>
      <div className="spacer block">
        <BlocksControls index={index}>
          <span></span>
        </BlocksControls>
      </div>
      <style jsx>{`
        div.spacer {
          grid-column: span 4;
          grid-column-row: ${index + 1};
        }

        div.spacer span {
          height: ${getSpacerSize(data.size)};
          display: inline-block;
        }
        @media (min-width: 1200px) {
          div.spacer span {
            height: ${getSpacerSize(data.size)};
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
    size: 'Medium',
  },
  key: undefined,
  fields: [
    {
      name: 'size',
      label: 'Spacer Size',
      component: 'select',
      options: ['Small', 'Medium', 'Large'],
    },
  ],
}
