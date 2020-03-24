import { BlocksControls } from 'react-tinacms-inline'

export function Spacer({ data, index }) {
  // TODO: add dynamic spacer sizes
  //TODO: add edit mode text to note that this is a spacer
  return (
    <>
      <div className="spacer">
        <BlocksControls index={index}>
          <span></span>
        </BlocksControls>
      </div>
      <style jsx>{`
        div.spacer {
          height: var(--med);
          grid-column: span 4;
          grid-column-row: ${index + 1};
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
  // todo add fields here for sizing etc.
  fields: [],
}
