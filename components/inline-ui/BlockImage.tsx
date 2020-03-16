import * as React from 'react'
import { BlockField } from './BlockText'
import { InlineImageField } from './InlineImageField'

interface BlockImage {
  name: string
}
export function BlockImage({ name }: BlockImage) {
  return (
    <BlockField name={name}>
      {({ input, status }) => {
        if (status === 'active') {
          return (
            <InlineImageField
              parse={filename => `/img/${filename}`}
              uploadDir={() => '/public/img/'}
              {...input}
            />
          )
        }
        return <img src={input.value} />
      }}
    </BlockField>
  )
}
