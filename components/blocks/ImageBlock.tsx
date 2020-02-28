import { BlocksControls } from '../inline-ui'

export function Image({ data, index }) {
  function getWidth() {
    const width =
      (data.col_end === 5 || data.col_start === 1) && 'calc(100% + 20px)'
    console.log('colstart', data.col_start)
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
    <BlocksControls index={index}>
      <div>
        <img src={data.src} />
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
    </BlocksControls>
  )
}

export const image_template = {
  type: 'image',
  label: 'Image',
  defaultItem: {
    _template: 'image',
    src: '/img/tomas-robertson-tqe-NKrSXTw-unsplash__SM.jpg',
    position: 'right',
    width: 'large',
    'col-start': 2,
    'col-end': 4,
  },
  key: undefined,
  // todo add fields here for position and width etc.
  fields: [],
}
