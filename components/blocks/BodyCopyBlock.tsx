import { BlockTextArea } from '../inline-ui'
import { BlocksControls } from 'react-tinacms-inline'

export function BodyCopy({ data, index }) {
  return (
    <>
      <p>
        <BlocksControls index={index}>
          <BlockTextArea name="text" />
        </BlocksControls>
      </p>

      <style jsx>{`
        p {
          grid-column-start: ${data.col_start};
          grid-column-end: ${data.col_end};
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
    col_start: 2,
    col_end: 3,
  },
  key: undefined,
  fields: [
    {
      name: 'col_start',
      label: 'Column Start',
      component: 'select',
      options: [1, 2, 3, 4, 5],
    },
    {
      name: 'col_end',
      label: 'Column End',
      component: 'select',
      options: [1, 2, 3, 4, 5],
    },
  ],
}
