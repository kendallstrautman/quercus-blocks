import React from 'react'
import App from 'next/app'
import { TinaProvider, TinaCMS } from 'tinacms'
import {
  GithubClient,
  TinacmsGithubProvider,
  GithubMediaStore,
} from 'react-tinacms-github'

export default class Site extends App {
  cms: TinaCMS

  constructor(props) {
    super(props)
    const client = new GithubClient({
      proxy: '/api/proxy-github',
      authCallbackRoute: '/api/create-github-access-token',
      clientId: process.env.GITHUB_CLIENT_ID,
      baseRepoFullName: process.env.BASE_REPO_FULL_NAME, // e.g: tinacms/tinacms.org,
    })

    this.cms = new TinaCMS({
      enabled: props.pageProps.preview,
      apis: {
        github: client,
      },
      media: {
        store: new GithubMediaStore(client),
      },
      sidebar: {
        hidden: true,
      },
      toolbar: {
        hidden: !props.pageProps.preview,
      },
    })
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <TinaProvider cms={this.cms}>
        <TinacmsGithubProvider
          editMode={pageProps.preview}
          enterEditMode={enterEditMode}
          exitEditMode={exitEditMode}
          error={pageProps.error}
        >
          <Component {...pageProps} />
        </TinacmsGithubProvider>
      </TinaProvider>
    )
  }
}

const enterEditMode = () => {
  return fetch(`/api/preview`).then(() => {
    window.location.href = window.location.pathname
  })
}

const exitEditMode = () => {
  return fetch(`/api/reset-preview`).then(() => {
    window.location.reload()
  })
}
