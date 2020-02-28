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

Index.getInitialProps = async function() {
  const configData = await import(`../data/config.json`)
  const blocksData = await import('../data/blocks.json')

  return {
    ...configData,
    jsonFile: {
      fileRelativePath: `data.blocks.json`,
      data: blocksData.default,
    },
  }
}
