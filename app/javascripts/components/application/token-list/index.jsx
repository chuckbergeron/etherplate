import React, {
  Component
} from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Hero from '@/components/hero'
import TokenListItem from './token-list-item'

const TokenList = class extends Component {
  render () {
    var content
    if (this.props.tokens.length) {
      var tokens = [...this.props.tokens].reverse()
      content =
        <section className='section'>
          <div className='container'>
            <div className="columns is-multiline">
                {
                  tokens.map(
                    token => {
                      return (
                        <div key={token.transactionHash} className="column is-one-quarter-desktop is-half-tablet is-half-mobile">
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

export default TokenList
