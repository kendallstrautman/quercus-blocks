import { getGithubPreviewProps, parseJson } from 'next-tinacms-github'
import { useGithubJsonForm } from 'react-tinacms-github'

import Layout from '../components/Layout'
import IndexBlocks from '../components/IndexBlocks'

const Index = ({ githubPreviewData, siteMetaData }) => {
  const formOptions = {
    label: 'Index Page',
  }

  const [, form] = useGithubJsonForm(githubPreviewData.file, formOptions)

  return (
    <Layout
      editMode={githubPreviewData.preview}
      siteTitle={siteMetaData.title}
      siteDescription={siteMetaData.description}
      infoBlurb={siteMetaData.infoBlurb}
    >
      <IndexBlocks form={form} />
    </Layout>
  )
}

export default Index

export async function getStaticProps<GetStaticProps>({ preview, previewData }) {
  const siteMeta = await import(`../data/config.json`)

  if (preview) {
    const githubPreviewData = await getGithubPreviewProps({
      ...previewData,
      fileRelativePath: '/data/blocks.json',
      parse: parseJson,
    })

    return {
      props: {
        githubPreviewData: githubPreviewData.props,
        siteMetaData: siteMeta.default,
      },
    }
  } else {
    const blocksData = await import('../data/blocks.json')

    return {
      props: {
        siteMetaData: siteMeta.default,
        githubPreviewData: {
          sourceProvider: null,
          error: null,
          preview: false,
          file: {
            fileRelativePath: `data/blocks.json`,
            data: blocksData.default,
          },
        },
      },
    }
  }
}
