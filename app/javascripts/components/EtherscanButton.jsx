import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactTooltip from 'react-tooltip'

import GetEtherscanUrlService from '@/services/get-etherscan-url-service'

// Creates a button with the proper Etherscan URL for the chosen Ethereum network
//
// For a link to a wallet or contract address, pass this.props.walletAddress
// Otherwise, pass a transaction hash as this.props.txHash for a link to a transaction
const EtherscanButton = class extends Component {

  render() {
    const protocolAndHost = GetEtherscanUrlService()
    let [fullUrl, tooltipText, onClick] = ['', '', () => '']
    let path = this.props.txHash.length > 0 ? 'tx' : 'address'
    let hash = this.props.txHash.length > 0 ? this.props.txHash : this.props.walletAddress

    // For an unknown network or 127.0.0.1/localhost (testrpc, ganache, etc)
    // render a tooltip saying that this link is only available for testnet and
    // mainnet transactions & addresses
    if (protocolAndHost.length === 0) {
      fullUrl = '#';
      onClick = (e) => e.preventDefault();
      tooltipText = 'Etherscan unavailable for current network <br /> (localhost or unknown network)'
    } else {
      fullUrl = `${protocolAndHost}/${path}/${hash}`;
    }

    return (
      <span>
        <a href={fullUrl} className="button is-text" onClick={onClick} data-tip={tooltipText}>
          {this.props.linkText}
        </a>
        <ReactTooltip
          effect='solid'
          border={true}
          multiline={true} />
      </span>
    )
  }

}

EtherscanButton.propTypes = {
  txHash: PropTypes.string,
  walletAddress: PropTypes.string,
  linkText: PropTypes.string.isRequired
}

export default EtherscanButton;
