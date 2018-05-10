import React, {
  Component
} from 'react'

import Hero from '@/components/hero'

export default class NotFound extends React.Component {

  render () {
    return (
      <Hero>
        <div className="columns">
          <div className="column" />
          <div className="column is-two-thirds">
            <h1 className="title">
              404: Page Not Found
            </h1>
            <h2 className="subtitle">
              Looks like we took a wrong turn somewhere!
              <br />Use the menu above to head back to safety.
            </h2>
          </div>
          <div className="column" />
        </div>
      </Hero>
    )
  }

}
