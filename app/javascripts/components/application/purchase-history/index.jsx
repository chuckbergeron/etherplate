import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import nfToken from '@/contracts/nfTokenFactory'
import { BigNumber } from 'bignumber.js';

import Hero from '@/components/hero'
import TokenRow from './token-row'

require('./style.scss')

//
// This component demos using a view method on the contract to pull
// the current Ethereum addresses tokens directly, instead of
// replaying the events as is the case in the parent Application component
//
const PurchaseHistory = class extends Component {

  seconds = 1000;

  constructor (props) {
    super(props)

    this.state = {
      tokens: []
    }
  }

  componentDidMount() {
    this._isMounted = true;

    this.refreshTokensInterval = setInterval(this.refreshTokenList.bind(this), this.seconds);
  }

  componentWillUnmount() {
    this._isMounted = false;

    clearInterval(this.refreshTokensInterval);
  }

  refreshTokenList() {
    if (this.props && this.props.web3 !== null) {
      nfToken(this.props.web3).then((instance) => {
        instance.methods.myTokens().call((error, result) => {
          if (this._isMounted) {
            if (result !== undefined) {
              this.setState({
                tokens: result.map( (tokenId) => {
                  return new BigNumber(tokenId)
                } )
              })
            }
          }
        })
      })
      .catch((error) => {
        console.error(error)
      })
    }
  }

  render () {
    var content
    if (this.state.tokens.length) {
      var tokens = [...this.state.tokens].reverse()

      content =
        <section className='section'>
          <div className='container'>
            <div className='table__wrapper'>
              <table className='table is-striped is-fullwidth'>
                <thead>
                  <tr>
                    <th>
                    </th>
                    <th>
                      Title
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tokens.map((tokenId) => <TokenRow tokenId={tokenId.toNumber()} key={tokenId.toNumber()} /> )}
                </tbody>
              </table>
            </div>
          </div>
        </section>
    } else {
      content =
        <Hero>
          <h1 className='title has-text-grey-light has-text-centered'>
            You haven't purchased any tokens.
          </h1>
        </Hero>
    }
    return content
  }
}

PurchaseHistory.propTypes = {
  web3: PropTypes.object
}

const mapStateToProps = (state, props) => {
  return { web3: state.web3 }
}

export default connect(mapStateToProps)(PurchaseHistory)
