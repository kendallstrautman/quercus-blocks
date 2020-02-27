export function Image({ data }) {
  return (
    <>
      <div>
        <img src={data.src} />
      </div>
      <style jsx>{`
        div {
          grid-column-start: ${data.col_start};
          grid-column-end: ${data.col_end};
          grid-row-start: ${data.row};
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
    position: 'right',
    width: 'large',
    'col-start': 2,
    'col-end': 4,
  },
  key: undefined,
  // todo add fields here for position and width etc.
  fields: [],
}
