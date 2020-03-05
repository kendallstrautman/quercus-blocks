import * as React from 'react'
import { BlockField } from './BlockText'
import { InlineImageField } from './InlineImageField'

/**
 * InlineTextAreaField
 */
interface BlockImage {
  name: string
}
export function BlockImage({ name }: BlockImage) {
  return (
    <BlockField name={name}>
      {({ input, status }) => {
        if (status === 'active') {
          return <InlineImageField type="text" {...input} />
        }
        return <img src={input.value} />
      }}
    </BlockField>
  )
}
