import { getGithubPreviewProps, parseJson } from 'next-tinacms-github'

import Layout from '../components/Layout'
import IndexBlocks from '../components/IndexBlocks'

const Index = props => {
  console.log('props!', props)
  return (
    <Layout
      editMode={props.preview}
      siteTitle={props.title}
      siteDescription={props.description}
      infoBlurb={props.infoBlurb}
    >
      {/* <IndexBlocks form={form} /> */}
    </Layout>
  )
}

export default Index

export async function getStaticProps<GetStaticProps>({ preview, previewData }) {
  if (preview) {
    return getGithubPreviewProps({
      ...previewData,
      fileRelativePath: '/data/blocks.json',
      parse: parseJson,
    })
  } else {
    const configData = await import(`../data/config.json`)
    const blocksData = await import('../data/blocks.json')

    return {
      props: {
        ...configData,
        sourceProvider: null,
        error: null,
        preview: false,
        jsonFile: {
          fileRelativePath: `data/blocks.json`,
          data: blocksData.default,
        },
      },
    }
  }
}
