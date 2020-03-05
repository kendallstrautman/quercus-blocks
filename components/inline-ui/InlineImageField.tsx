import { InlineField } from 'react-tinacms-inline'
import styled from 'styled-components'
import { useCMS } from 'react-tinacms'
import { useDropzone } from 'react-dropzone'

/**
 * InlineImageField
 */
interface InlineImageProps {
  name: string
  path?: string
  parse(filename: string): string
  uploadDir(form: any): string
}

export function InlineImageField({ name, uploadDir, parse }: InlineImageProps) {
  const cms = useCMS()

  return (
    <InlineField name={name}>
      {props => {
        if (props.status === 'active') {
          return (
            <ImageUpload
              value={props.input.value}
              onDrop={async ([file]: File[]) => {
                const directory = uploadDir(props.form)

                // //posts to github api
                const [media] = await cms.media.store.persist([
                  {
                    directory,
                    file,
                  },
                ])
                if (media) {
                  props.input.onChange(parse(media.filename))
                } else {
                  // TODO Handle failure
                }
                return null
              }}
              {...props.input}
            />
          )
        }
        return <img src={props.input.value} />
      }}
    </InlineField>
  )
}

interface ImageUploadProps {
  onDrop: (acceptedFiles: any[]) => void
  value?: string
}

export const ImageUpload = ({ onDrop, value }: ImageUploadProps) => {
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({ accept: 'image/*', onDrop })

  return (
    <div {...getRootProps({ isDragActive, isDragAccept, isDragReject })}>
      <input {...getInputProps()} />
      {value ? (
        <div>
          <img src={value} />
        </div>
      ) : (
        <div>
          Drag 'n' drop some files here,
          <br />
          or click to select files
        </div>
      )}
    </div>
  )
}
