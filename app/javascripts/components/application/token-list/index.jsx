import React, {
  Component
} from 'react'

import TokenListItem from './token-list-item'

export default class extends Component {
  render () {
    var content
    if (this.props.tokens.length) {
      content =
        <section className='section'>
          <div className='container'>
            <div className="columns is-multiline">
                {
                  this.props.tokens.map(
                    token => {
                      return (
                        <div key={token} className="column is-one-quarter-desktop">
                          <TokenListItem tokenId={token} />
                        </div>
                      )
                    }
                  )
                }
            </div>
          </div>
        </section>
    } else {
      content =
        <section className='hero is-medium'>
          <div className='hero-body'>
            <div className='container'>
              <h1 className='title has-text-grey-light has-text-centered'>
                You haven't received any tokens yet.
              </h1>
            </div>
          </div>
        </section>
    }

    return content;
  }
}
