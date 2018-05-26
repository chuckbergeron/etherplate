import React, { Component } from 'react'
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

  constructor (props) {
    super(props)

    this.state = {
      tokenIds: []
    }
  }

  componentDidMount() {
    this._isMounted = true;

    this.refreshTokenList();
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  refreshTokenList() {
    nfToken(window.web3).then((instance) => {
      instance.myTokens().then((result) => {
        this.setState({ tokenIds: result })
      }).catch((error) => {
        console.error(error)
      })
    })
    .catch((error) => {
      console.error(error)
    })
  }

  render () {
    let content
    if (this.state.tokenIds.length) {
      let tokenIds = [...this.state.tokenIds].reverse()

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
                  {tokenIds.map((tokenId) => {
                    return <TokenRow tokenId={tokenId.toNumber()} key={tokenId.toNumber()} />
                  } )}
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

export default PurchaseHistory
