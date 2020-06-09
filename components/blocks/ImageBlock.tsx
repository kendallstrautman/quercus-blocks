import { useCMS } from 'tinacms'
import { BlocksControls, InlineImage } from 'react-tinacms-inline'
import { getPosition, BlockPositionProps, getBlockIndex } from '../../utils'
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
  function getWidth() {
    return (align === 'Left' || align === 'Right') && 'calc(100% + 20px)'
  }

  function getTranslateX() {
    return align === 'Left' && 'translateX(-20px)'
  }

  const position = getPosition(data.position)

  const cms = useCMS()
  const workingRepository = cms.api.github.workingRepoFullName
  const currentBranch = cms.api.github.branchName

  return (
    <>
      <div className="block">
        <BlocksControls index={index}>
          <InlineImage
            name="src"
            previewSrc={formValues => {
              const currentBlock = formValues.index_blocks[index].src
              return `https://raw.githubusercontent.com/${workingRepository}/${currentBranch}/public${currentBlock}`
            }}
            parse={filename => `/img/${filename}`}
            uploadDir={() => '/public/img/'}
          >
            {props => {
              return <img src={props?.previewSrc || data.src} alt={data.alt} />
            }}
          </InlineImage>
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
      previewSrc: (formValues, input) => {
        /** Todo: add a block context to access index within the settings modal */
        const cms = useCMS()
        const index = getBlockIndex(input.field)
        const currentBlockImage = formValues.index_blocks[index].src
        const workingRepository = cms.api.github.workingRepoFullName
        const currentBranch = cms.api.github.branchName
        return `https:raw.githubusercontent.com/${workingRepository}/${currentBranch}/public${currentBlockImage}`
      },
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
}
