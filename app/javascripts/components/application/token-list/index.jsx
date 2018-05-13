import React, {
  Component
} from 'react'
import PropTypes from 'prop-types'

import Hero from '@/components/hero'
import TokenListItem from './token-list-item'

export default class TokenList extends Component {
  render () {
    var content
    if (this.props.tokens.length) {
      content =
        <section className='section'>
          <div className='container'>
            <div className="columns is-multiline">
                {
                  this.props.tokens.reverse().map(
                    token => {
                      return (
                        <div key={token.args.tokenId.toNumber()} className="column is-one-quarter-desktop">
                          <TokenListItem token={token} />
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
        <Hero>
          <h1 className='title has-text-grey-light has-text-centered'>
            Nobody has bought any tokens yet.
          </h1>
        </Hero>
    }

    return content;
  }
}

TokenList.propTypes = {
  tokens: PropTypes.array.isRequired
}

TokenList.defaultProps = {
  tokens: []
}
