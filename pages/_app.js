import React from 'react'
import App from 'next/app'
import { TinaProvider, TinaCMS } from 'tinacms'
import { GitClient, GitMediaStore } from '@tinacms/git-client'

export default class Site extends App {
  constructor() {
    super()

    const client = new GitClient('http://localhost:3000/___tina')

    this.cms = new TinaCMS({
      apis: {
        git: client,
      },
      media: {
        store: new GitMediaStore(client),
      },
      sidebar: {
        position: 'overlay',
        hidden: true,
      },
      toolbar: {
        hidden: false,
      },
    })
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <TinaProvider cms={this.cms}>
        <Component {...pageProps} />
      </TinaProvider>
    )
  }
}
