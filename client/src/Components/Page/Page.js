import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

class Page extends Component {
  render() {
    return (
      <div className="screen">
        <Helmet>
          <title>{this.props.title}</title>
        </Helmet>
        {this.props.body}
      </div>
    )
  }
}

export default Page
