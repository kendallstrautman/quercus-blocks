import { useMemo } from 'react'
import { InlineBlocks, useInlineForm } from 'react-tinacms-inline'

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

interface InlineBlocksProps {
  editMode: boolean
}

export default function IndexBlocks({ editMode }: InlineBlocksProps) {
  const { deactivate, activate } = useInlineForm()

  function handleInlineEditMode() {
    editMode ? activate() : deactivate()
  }

  useMemo(handleInlineEditMode, [editMode])

  return <InlineBlocks name="index_blocks" blocks={INDEX_PAGE_BLOCKS} />
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
