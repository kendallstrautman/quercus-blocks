import { useJsonForm } from 'next-tinacms-json'
import { ModalProvider, BlockTemplate } from 'tinacms'
import {
  InlineForm,
  InlineBlocks,
  BlocksControls,
  BlockText,
} from 'react-tinacms-inline'

import {
  BodyCopy,
  body_copy_template,
  H1,
  heading_1_template,
  H2,
  heading_2_template,
  Image,
  image_template,
  Spacer,
  spacer_template,
} from './blocks'

import { InlineControls, EditToggle, DiscardButton } from './inline-ui'

export default function IndexBlocks({ jsonFile }) {
  const _data = jsonFile.data.index_blocks
  const [data, form] = useJsonForm(jsonFile)
  console.log('data', data)
  console.log('form', form)
  return (
    <ModalProvider>
      <InlineForm form={form}>
        <InlineControls>
          <EditToggle />
          <DiscardButton />
        </InlineControls>
      </InlineForm>
    </ModalProvider>
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

/*
    // <H1 data={_data[0]} />
    // <Spacer data={_data[1]} />
    // <BodyCopy data={_data[2]} />
    // <Image data={_data[3]} />
    // <H2 data={_data[4]} />
*/
