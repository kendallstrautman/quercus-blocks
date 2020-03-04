import Layout from '../components/Layout'
import IndexBlocks from '../components/IndexBlocks'

const Index = props => {
  return (
    <Layout
      pathname="/"
      siteTitle={props.title}
      siteDescription={props.description}
      infoBlurb={props.infoBlurb}
    >
      <IndexBlocks jsonFile={props.jsonFile} />
    </Layout>
  )
}

export default Index

export async function unstable_getStaticProps() {
  const configData = await import(`../data/config.json`)
  const blocksData = await import('../data/blocks.json')

  return {
    props: {
      ...configData,
      jsonFile: {
        fileRelativePath: `data.blocks.json`,
        data: blocksData.default,
      },
    },
  }
}
