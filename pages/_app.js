import React from 'react'
import App from 'next/app'
import { Tina, TinaCMS } from 'tinacms'
import { GitClient } from '@tinacms/git-client'

export default class Site extends App {
  constructor() {
    super()
    this.cms = new TinaCMS({
      apis: {
        git: new GitClient('http://localhost:3000/___tina'),
      },
      sidebar: {
        position: 'overlay',
        hidden: process.env.NODE_ENV === 'production',
      },
    })
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <Tina cms={this.cms}>
        <Component {...pageProps} />
      </Tina>
    )
  }
}
