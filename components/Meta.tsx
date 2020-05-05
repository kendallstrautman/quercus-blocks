import Head from 'next/head'

interface MetaProps {
  siteTitle: string
  description: string
}

export default function Meta(props: MetaProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>{props.siteTitle}</title>
        <meta name="Description" content={props.description}></meta>
      </Head>
      <style jsx global>
        {`
          /* RESET -----------------------------------------*/
          * {
            box-sizing: inherit;
          }
          html {
            box-sizing: border-box;
            overflow-y: scroll;
            -ms-overflow-style: none;
          }
          ::webkit-scrollbar {
            display: none;
          }
          body {
            margin: 0;
            font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
            overflow-x: hidden;
            color: #000;
            font-size: 16px;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
          a {
            text-decoration: none;
            color: inherit;
            transition: color 0.2s ease;
          }
          a:hover {
            transition: color 0.2s ease;
            color: var(--orange);
            text-decoration-color: inherit;
            cursor: pointer;
          }
          ul {
            list-style: none;
            margin: 0;
            padding-bottom: 0;
            padding-left: 0;
            padding-right: 0;
            padding-top: 0;
            list-style-position: outside;
            list-style-image: none;
          }
          ol {
            margin: 0;
            padding-bottom: 0;
            padding-left: 0;
            padding-right: 0;
            padding-top: 0;
            list-style-position: outside;
            list-style-image: none;
          }
          ul,
          ol,
          p {
            margin-bottom: 1.45rem;
          }
          img {
            max-width: 100%;
          }
          img,
          figure,
          table,
          fieldset {
            margin-left: 0;
            margin-right: 0;
            margin-top: 0;
            padding-bottom: 0;
            padding-left: 0;
            padding-right: 0;
            padding-top: 0;
            margin-bottom: 0;
          }
          pre {
            margin-left: 0;
            margin-right: 0;
            margin-top: 0;
            margin-bottom: 1.45rem;
            font-size: 0.85rem;
            line-height: 1.42;
            background: hsla(0, 0%, 0%, 0.04);
            border-radius: 3px;
            overflow: auto;
            word-wrap: normal;
            padding: 1.45rem;
          }
          table {
            font-size: 1rem;
            line-height: 1.45rem;
            border-collapse: collapse;
            width: 100%;
          }
          blockquote {
            margin-left: 1.45rem;
            margin-right: 1.45rem;
            margin-top: 0;
            padding-bottom: 0;
            padding-left: 0;
            padding-right: 0;
            padding-top: 0;
            margin-bottom: 1.45rem;
          }
          strong {
            font-weight: bold;
          }
          li {
            margin-bottom: calc(1.45rem / 2);
          }
          ol li {
            padding-left: 0;
          }
          ul li {
            padding-left: 0;
          }
          li > ol {
            margin-left: 1.45rem;
            margin-bottom: calc(1.45rem / 2);
            margin-top: calc(1.45rem / 2);
          }
          li > ul {
            margin-left: 1.45rem;
            margin-bottom: calc(1.45rem / 2);
            margin-top: calc(1.45rem / 2);
          }
          blockquote *:last-child {
            margin-bottom: 0;
          }
          li > p {
            margin-bottom: calc(1.45rem / 2);
          }
          code {
            font-size: 0.85rem;
            line-height: 1.45rem;
          }

           {
            /* TYPOGRAPHY------------------------------------- */
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          h6,
          p {
            font-family: 'Work Sans', 'Helvetica Neue', Helvetica, sans-serif;
            margin-left: 0;
            margin-right: 0;
            margin-top: 0;
            padding-bottom: 0;
            padding-left: 0;
            padding-right: 0;
            padding-top: 0;
            margin-bottom: 0;
            color: inherit;
            text-rendering: optimizeLegibility;
          }

          h1,
          h2 {
            font-weight: normal;
          }

          h1 {
            font-size: 3.2rem;
            letter-spacing: -1px;
            line-height: 1;
          }

          h2 {
            font-size: 1.5rem;
            letter-spacing: -0.75px;
            line-height: 1.1;
          }

          h3 {
            font-size: 1.2rem;
            letter-spacing: -0.5px;
            line-height: 1.1875;
            font-weight: normal;
          }

          p {
            font-size: 1.125rem;
            letter-spacing: -0.5px;
            line-height: 1.2;
          }

          @media (min-width: 1200px) {
            h1 {
              font-size: 4.625rem;
              letter-spacing: -1px;
              line-height: 1.1;
            }

            h2 {
              font-size: 2rem;
              letter-spacing: -0.75px;
              line-height: 1.25;
            }

            h3 {
              font-size: 1rem;
              letter-spacing: -0.5px;
              line-height: 1.1875;
            }

            p {
              font-size: 1.25rem;
            }
          }

          /* VARIABLES ------------------------------------*/
          :root {
            --xs: 8px;
            --sm: 12px;
            --med: 20px;
            --lrg: 48px;
            --xl: 74px;
            --orange: #ec4815;
            --seafoam: #e6faf8;
          }
        `}
      </style>
    </>
  )
}
