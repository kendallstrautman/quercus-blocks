import * as React from 'react'
import { InlineTextFieldProps } from 'react-tinacms-inline'
import { BlockField } from './BlockText'
import { InlineTextarea } from './InlineTextareaField'

/**
 * InlineTextAreaField
 */
interface BlockTextArea {
  name: string
}
export function BlockTextArea({ name }: InlineTextFieldProps) {
  return (
    <BlockField name={name}>
      {({ input, status }) => {
        if (status === 'active') {
          return <InlineTextarea type="text" {...input} />
        }
        return <>{input.value}</>
      }}
    </BlockField>
  )
}
