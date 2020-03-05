import { InlineField } from 'react-tinacms-inline'
// import { ImageUpload } from 'tinacms'

/**
 * InlineImageField
 */
interface InlineImageProps {
  name: string
  path?: string
  // previewSrc(form: any, field: any): string
  // uploadDir(form: any): string
  clearable?: boolean // defaults to true
}

export function InlineImageField({ name }: InlineImageProps) {
  return (
    <InlineField name={name}>
      {({ input, status }) => {
        if (status === 'active') {
          return <img src={input.value} {...input} />
        }
        return <img src={input.value} />
      }}
    </InlineField>
  )
}
