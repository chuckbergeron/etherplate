import React, { Component } from 'react'

import Hero from '@/components/hero'

import DownloadMetamaskButtonImg from '../../images/button--download-metamask.png'

import AppStoreButtonImg from '../../images/button--app-store.png'
import PlayStoreButtonImg from '../../images/button--play-store.png'

// This is a Higher Order Component (HOC) that wraps up any components that require
// an unlocked Web3 account instance
export default function(WrappedComponent) {

  // ...and returns another component...
  const Web3Wrap = class extends Component {

    render () {
      var contents = <div />

      if (
        window.web3
        && window.web3.eth.defaultAccount
        && window.web3.eth.defaultAccount.length > 0
      ) {
        return <WrappedComponent {...this.props} />
      } else if ((typeof web3 !== 'undefined')) {
        return (
          <Hero>
            <div className="columns">
              <div className="column" />
              <div className="column is-two-thirds">
                <h1 className="title">
                  Hoo-ray! <strong>MetaMask</strong> is installed!
                </h1>
                <h2 className="subtitle">
                  However, you need to unlock your account or create a new one. Click the Fox in the top-right corner of your browser, then refresh the page.
                </h2>
              </div>
              <div className="column" />
            </div>
          </Hero>
        )
      } else {
        return (
          <Hero>
            <div className="columns">
              <div className="column" />
              <div className="column is-two-thirds">
                <h1 className="title">
                  Hold up ...
                </h1>
                <h2 className="subtitle">
                  To use Etherplate you will need to install the <a href='https://metamask.io/' title='MetaMask' target='_blank'>MetaMask</a> extension for Chrome, Firefox or Brave desktop browsers:
                </h2>
                <a href="https://metamask.io" title="Download Metamask"><img src={`/${DownloadMetamaskButtonImg}`} alt="Metamask Download Button" width="200" /></a>
                <br />
                <br />

                <h2 className="subtitle">
                  If you're on mobile, download the Trust browser:
                </h2>
                <a href="https://itunes.apple.com/us/app/trust-ethereum-wallet/id1288339409" title="Download Trust from Apple App Store"><img src={`/${AppStoreButtonImg}`} alt="Apple App Store Button" /></a>
                &nbsp; &nbsp; &nbsp;
                <a href="https://play.google.com/store/apps/details?id=com.wallet.crypto.trustapp" title="Download Trust from Google Play Store"><img src={`/${PlayStoreButtonImg}`} alt="Google Play Store Button" /></a>
              </div>
              <div className="column" />
            </div>
          </Hero>
        )
      }

      return contents
    }

  }

  return Web3Wrap;

}
