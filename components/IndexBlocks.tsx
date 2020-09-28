import { InlineBlocks } from 'react-tinacms-inline'

import {
  h1Block,
  h2Block,
  imageBlock,
  spacerBlock,
  bodyCopyBlock,
} from './blocks'

export default function IndexBlocks() {
  return (
    <>
      <InlineBlocks
        name="index_blocks"
        blocks={pageBlocks}
        className="index-blocks"
      />
      <style jsx global>{`
        div.index-blocks {
          padding: var(--lrg) var(--sm) var(--sm) var(--sm);
          width: 100%;
          max-width: 768px;
          margin: 0 auto;
        }
        .block {
          padding: var(--sm) 0;
        }
        @media (min-width: 768px) {
          div.index-blocks {
            padding: var(--xl) var(--med) var(--med) var(--med);
          }
        }
        @media (min-width: 1000px) {
          div.index-blocks {
            display: grid;
            max-width: none;
            padding: 88px var(--med) var(--med) var(--med);
            grid-template-columns: repeat(4, 1fr);
            grid-template-rows: auto;
          }
          .block {
            padding: var(--med) 0;
          }
        }
      `}</style>
    </>
  )
}

const pageBlocks = {
  heading_1: h1Block,
  heading_2: h2Block,
  body_copy: bodyCopyBlock,
  image: imageBlock,
  spacer: spacerBlock,
}
