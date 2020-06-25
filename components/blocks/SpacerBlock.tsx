import { BlocksControls } from 'react-tinacms-inline'
import { getSpacerSize, SpacerSize } from '../../utils'

interface SpacerProps {
  index: number
  data: { size: string }
}

function Spacer({ index, data }: SpacerProps) {
  const { mobile, desktop }: SpacerSize = getSpacerSize(data.size)
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
          height: ${mobile};
          display: inline-block;
        }
        @media (min-width: 1200px) {
          div.spacer span {
            height: ${desktop};
          }
        }
      `}</style>
    </>
  )
}

export const spacerBlock = {
  Component: Spacer,
  template: {
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
  },
}
