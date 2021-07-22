import Page from '@components/Page/Page'
import React from 'react'
import Last_Release from '@components/Modules/Last-release'

export default function Main_page() {
  const body = (
    <div className="main-wrapper">
      <Last_Release />
    </div>
  )

  return <Page title="Dimonstrate" body={body} />
}
