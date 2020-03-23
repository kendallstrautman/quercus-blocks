import { BlocksControls, BlockImage } from '../inline-ui'
import { getPosition } from '../../utils'


export function Image({ data, index }) {
  /*
   ** Makes it so far left / right images bleed
   ** to very edge of page beyond grid margins
   */
  function getWidth() {
    const width =
      (data.col_end === 5 || data.col_start === 1) && 'calc(100% + 20px)'
    return width
  }
  function getTranslateX() {
    const translateX = data.col_start === 1 && 'translateX(-20px)'
    return translateX
  }
  const { width, align } = data
  const position = getPosition(width, align)
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
          grid-column-start: ${position.colStart};
          grid-column-end: ${position.colEnd};
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
    // col_start: 2,
    // col_end: 4,
  },
  key: undefined,
  fields: [
    {
      name: 'width',
      label: 'Width',
      component: 'select',
      options: ['narrow', 'medium', 'wide', 'fullwidth'],
    },
    {
      name: 'align',
      label: 'Alignment',
      component: 'select',
      options: ['left', 'right', 'center'],
    },
    {
      name: 'alt',
      label: 'Alt Text',
      component: 'text',
    },
    // {
    //   name: 'col_start',
    //   label: 'Column Start',
    //   component: 'select',
    //   options: [1, 2, 3, 4, 5],
    // },
    // {
    //   name: 'col_end',
    //   label: 'Column End',
    //   component: 'select',
    //   options: [1, 2, 3, 4, 5],
    // },
  ],
}
