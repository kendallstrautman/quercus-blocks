import {
  BodyCopy,
  body_copy_template,
} from '../components/blocks/bodyCopyBlock'
import {
  H1,
  heading_1_template,
  H2,
  heading_2_template,
} from '../components/blocks/headingBlocks'
import { Image, image_template } from '../components/blocks/imageBlock'
import { Spacer, spacer_template } from './blocks/spacerBlock'

export default function Blocks(props) {
  const data = props.data.index_blocks

  return (
    <>
      <H1 data={data[0]} />
      <Spacer data={data[1]} />
      <BodyCopy data={data[2]} />
      <Image data={data[3]} />
      <H2 data={data[4]} />
    </>
  )
}

export const INDEX_PAGE_BLOCKS = {
  heading_1: {
    Component: H1,
    template: heading_1_template,
  },
  heading_2: {
    Component: H2,
    template: heading_2_template,
  },
  body_copy: {
    Component: BodyCopy,
    template: body_copy_template,
  },
  image: {
    Component: Image,
    template: image_template,
  },
  spacer: {
    Component: Spacer,
    template: spacer_template,
  },
}
