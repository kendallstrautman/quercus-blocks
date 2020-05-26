import { useCMS } from 'tinacms'
import { BlocksControls, BlockImage } from 'react-tinacms-inline'
import { getPosition } from '../../utils'

export function Image({ data, index }) {
  const { width, align, src } = data

  /*
   ** Forces far left / right images bleed
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

  const position = getPosition(width, align)

  const cms = useCMS()
  const workingRepository = cms.api.github.workingRepoFullName
  const currentBranch = cms.api.github.branchName

  return (
    <>
      <div>
        <BlocksControls index={index}>
          <BlockImage
            name="src"
            previewSrc={formValues => {
              const currentBlockImage = formValues.index_blocks[index].src
              return `https://raw.githubusercontent.com/${workingRepository}/${currentBranch}/public${currentBlockImage}`
            }}
            parse={filename => `/img/${filename}`}
            uploadDir={() => '/public/img/'}
          >
            {() => {
              return <img src={src} />
            }}
          </BlockImage>
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
  },
  key: undefined,
  fields: [
    {
      name: 'width',
      label: 'Width',
      component: 'select',
      options: ['Narrow', 'Medium', 'Wide', 'Fullwidth'],
    },
    {
      name: 'align',
      label: 'Alignment',
      component: 'select',
      options: ['Left', 'Right', 'Center'],
    },
    {
      name: 'alt',
      label: 'Alt Text',
      component: 'text',
    },
  ],
}
