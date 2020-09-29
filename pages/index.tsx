import {
  getGithubPreviewProps,
  parseJson,
  GithubFile,
  GithubError,
} from 'next-tinacms-github'
import {
  useGithubJsonForm,
  useGithubToolbarPlugins,
} from 'react-tinacms-github'
import { ModalProvider, Form } from 'tinacms'
import { InlineForm } from 'react-tinacms-inline'

import Layout from '../components/Layout'
import IndexBlocks from '../components/IndexBlocks'

interface IndexProps {
  repoFullName: string
  branch: string
  file: GithubFile<any> | null
  error: GithubError | null
  title: string
  description: string
  infoBlurb: string
}

function Index(props: IndexProps) {
  const { file, title, description, infoBlurb } = props
  const formOptions = {
    label: 'Index Page',
    fields: [{ name: 'title', component: 'text' }],
  }

  const [, form] = useGithubJsonForm(file, formOptions)

  useGithubToolbarPlugins()

  return (
    <Layout
      siteTitle={title}
      siteDescription={description}
      infoBlurb={infoBlurb}
    >
      <ModalProvider>
        <InlineForm form={form as Form}>
          <IndexBlocks />
        </InlineForm>
      </ModalProvider>
    </Layout>
  )
}

export default Index

export async function getStaticProps({ preview, previewData }) {
  const siteMeta = await import(`../data/config.json`)

  if (preview) {
    const githubPreviewData = await getGithubPreviewProps({
      ...previewData,
      fileRelativePath: 'data/blocks.json',
      parse: parseJson,
    })

    return {
      props: {
        ...githubPreviewData.props,
        ...siteMeta.default,
      },
    }
  } else {
    const blocksData = await import('../data/blocks.json')

    return {
      props: {
        ...siteMeta.default,
        sourceProvider: null,
        error: null,
        preview: false,
        file: {
          fileRelativePath: `data/blocks.json`,
          data: blocksData.default,
        },
      },
    }
  }
}
