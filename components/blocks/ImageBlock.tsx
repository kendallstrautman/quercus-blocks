import { BlocksControls, InlineImage } from 'react-tinacms-inline'
import { getPosition, BlockPositionProps, GridColumnProps } from '../../utils'
import { BlockProps } from './BodyCopyBlock'

interface ImageBlockProps extends BlockProps {
  data: {
    src: string
    alt: string
    position: BlockPositionProps
  }
}

export function Image({ data, index }: ImageBlockProps) {
  const { align } = data.position

  /*
   ** Forces far left / right images bleed
   ** to very edge of page beyond grid margins
   */
  function getWidth(): string {
    return (align === 'Left' || align === 'Right') && 'calc(100% + 20px)'
  }

  function getTranslateX(): string {
    return align === 'Left' && 'translateX(-20px)'
  }

  const gridCol: GridColumnProps = getPosition(data.position)

  return (
    <>
      <div className="block">
        <BlocksControls
          index={index}
          focusRing={{ offset: { x: 0, y: 0 }, borderRadius: 0 }}
          insetControls
        >
          <InlineImage
            name="src"
            parse={media => `/img/${media.filename}`}
            uploadDir={() => '/public/img/'}
            focusRing={false}
          >
            {p => (
              <div className="img--wrap">
                <img src={p.src} alt={data.alt} />
              </div>
            )}
          </InlineImage>
        </BlocksControls>
      </div>
      <style jsx>{`
        div.block {
          grid-column-start: ${gridCol.colStart};
          grid-column-end: ${gridCol.colEnd};
          grid-row-start: ${index + 1};
          width: ${getWidth()};
          transform: ${getTranslateX()};
        }
        .img--wrap {
          display: flex;
        }
        img {
          object-fit: cover;
          width: 100%;
          min-height: 100%;
          padding-top: 0;
          padding-bottom: 0;
          flex-grow: 1;
        }
      `}</style>
    </>
  )
}

export const imageBlock = {
  Component: Image,
  template: {
    type: 'image',
    label: 'Image',
    defaultItem: {
      _template: 'image',
      src: '/img/tomas-robertson-tqe-NKrSXTw-unsplash__SM.jpg',
      alt: '',
      position: {
        align: 'Right',
        width: 'Large',
      },
    },
    key: undefined,
    fields: [
      {
        name: 'src',
        label: 'Image',
        component: 'image',
        parse: filename => `/img/${filename}`,
        uploadDir: () => '/public/img/',
      },
      {
        name: 'alt',
        label: 'Alt Text',
        component: 'text',
      },
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
