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
import { ModalProvider, Form, useCMS } from 'tinacms'
import { InlineForm, InlineImageField } from 'react-tinacms-inline'

import Layout from '../components/Layout'
import IndexBlocks from '../components/IndexBlocks'

interface IndexProps {
  preview: boolean
  repoFullName: string
  branch: string
  file: GithubFile<any> | null
  error: GithubError | null
  title: string
  description: string
  infoBlurb: string
}

function Index(props: IndexProps) {
  const { file, preview, title, description, infoBlurb } = props
  const formOptions = {
    label: 'Index Page',
    fields: [{ name: 'title', component: 'text' }],
  }

  const [, form] = useGithubJsonForm(file, formOptions)

  useGithubToolbarPlugins()

  const cms = useCMS()

  return (
    <Layout
      editMode={preview}
      siteTitle={title}
      siteDescription={description}
      infoBlurb={infoBlurb}
    >
      <ModalProvider>
        <InlineForm form={form as Form}>
          <InlineImageField
            name="hero"
            previewSrc={formValues => {
              const workingRepository = cms.api.github.workingRepoFullName
              /**
               * TODO: this getter causes stack overflow
               * Once that's fixed, update 'master' in src path
               * to ${branchName}
               *  */

              // const branchName = cms.api.github.branchName
              return `https://raw.githubusercontent.com/${workingRepository}/add-media/public${formValues.hero}`
            }}
            parse={filename => `/img/${filename}`}
            uploadDir={() => '/public/img/'}
          />
          <IndexBlocks editMode={preview} />
        </InlineForm>
      </ModalProvider>
    </Layout>
  )
}

export default Index

export async function getStaticProps<GetStaticProps>({ preview, previewData }) {
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
