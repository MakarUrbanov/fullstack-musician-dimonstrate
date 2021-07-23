import Page from '@components/Page/Page'
import React from 'react'
import Last_Release from '@components/Modules/Last-release'
import Songs from '@components/Modules/Songs'
import Insta from '@components/Modules/Insta'

export default function Main_page() {
  const body = (
    <div className="main-wrapper">
      <Last_Release />
      <Songs />
      <Insta />
    </div>
  )

  return <Page title="Dimonstrate" body={body} />
}
