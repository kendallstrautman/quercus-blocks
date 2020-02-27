import Layout from '../components/Layout'
import Blocks from '../components/Blocks'

const Index = props => {
	return (
		<Layout
			pathname='/'
			siteTitle={props.title}
			siteDescription={props.description}
		>
			<section>
				<Blocks data={props.blocks} />
			</section>
		</Layout>
	)
}

export default Index

Index.getInitialProps = async function() {
	const configData = await import(`../data/config.json`)
	const blocksData = await import('../data/blocks.json')

	return {
		...configData,
		blocks: blocksData.default
	}
}
