import { BlocksControls } from 'react-tinacms-inline'
import { BlockImage } from '../inline-ui'

export function Image({ data, index }) {
  function getWidth() {
    const width =
      (data.col_end === 5 || data.col_start === 1) && 'calc(100% + 20px)'
    return width
  }
  function getTranslateX() {
    const translateX = data.col_start === 1 && 'translateX(-20px)'
    return translateX
  }
  /*
   ** TODO: Need inline image field here
   */
  return (
    <>
      <div>
        <BlocksControls index={index}>
          <BlockImage name="src" />
        </BlocksControls>
      </div>
      <style jsx>{`
        div {
          grid-column-start: ${data.col_start};
          grid-column-end: ${data.col_end};
          grid-row-start: ${index + 1};
          width: ${getWidth()};
          transform: ${getTranslateX()};
        }
        img {
          object-fit: cover;
          width: 100%;
          min-height: 100%;
          padding-top: 0;
          padding-bottom: 0;
        }
      `}</style>
    </>
  )
}

export const image_template = {
  type: 'image',
  label: 'Image',
  defaultItem: {
    _template: 'image',
    src: '/img/tomas-robertson-tqe-NKrSXTw-unsplash__SM.jpg',
    alt: '',
    position: 'right',
    width: 'large',
    col_start: 2,
    col_end: 4,
  },
  key: undefined,
  fields: [
    {
      name: 'src',
      label: 'Image Path',
      component: 'text',
    },
    {
      name: 'alt',
      label: 'Image Alt Text',
      component: 'text',
    },
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
