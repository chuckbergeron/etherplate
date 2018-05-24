import React, {
  Component
} from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import _ from 'lodash';
import PropTypes from 'prop-types'
import { BigNumber } from 'bignumber.js';
import Address from '@/components/address'

import nfTokenTypeImageUrl from '@/services/nfToken-type-image-url'
import getToken from '@/services/get-token'

require('./style.scss')

const Token = class extends Component {

  seconds = 1000;

  constructor (props) {
    super(props)
    this.state = {
      type: null
    }
  }

  tokenId () {
    return this.props.match.params.tokenId
  }

  componentDidMount() {
    this._isMounted = true;

    this.getTokenInterval = setInterval(this.getTokenFromBlockchain.bind(this), this.seconds);
  }

  componentWillUnmount() {
    this._isMounted = false;

    clearInterval(this.getTokenInterval);
  }

  getTokenFromBlockchain() {
    var tokenId = this.tokenId()

    if (this.props.web3 !== null) {
      getToken(tokenId, this.props.web3).then((values) => {
        if (this._isMounted) {
          this.setState({
            type: values[0],
            title: values[1]
          })
        }
      })
    }
  }

  render () {
    var content
    if (this.state.type !== null) {
      var address = 'no-address';
      if (typeof this.props.token.transactionHash !== 'undefined')
        address = this.props.token.transactionHash

      content = (
        <div className="token columns is-centered">
          <div className='column is-three-quarters-tablet is-three-quarters-desktop is-one-half-widescreen is-one-half-fullhd has-text-centered'>
            <figure
              className="token__image">
              <img src={nfTokenTypeImageUrl(this.state.type)} />
            </figure>

            <p className="token__title title has-text-grey">
              {this.state.title}
            </p>

            <table className='table is-striped is-fullwidth'>
              <thead>
                <tr>
                  <th>
                    TokenID
                  </th>
                  <th>
                    Transaction Hash
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    {this.tokenId()}
                  </td>
                  <td>
                    <Address address={address} toggleFull={true} />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    }

    return (
      <section className='section'>
        <div className='container'>
          {content}
        </div>
      </section>
    )
  }
}

Token.propTypes = {
  match: PropTypes.object.isRequired
}

Token.defaultProps = {
  token: PropTypes.object
}

const mapStateToProps = function(state, props) {
  let token = {}

  if (state.tokens.length > 0) {
    let tokenIdAsBigNumber = new BigNumber(props.match.params.tokenId)
    token = _.find(state.tokens, { args: { tokenId: tokenIdAsBigNumber } })
  }

  return {
    token: token,
    web3: state.web3
  }
}

export default connect(mapStateToProps)(Token);
