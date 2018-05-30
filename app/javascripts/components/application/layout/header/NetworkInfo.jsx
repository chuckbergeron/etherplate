import React, { Component } from 'react'

import GetNetworkNameService from '@/services/get-network-name-service'

import Address from '@/components/address'
import Ether from '@/components/ether'

import AvatarPlaceholderImage from '@/../images/avatar-placeholder.png'

// import './header.scss';

const NetworkInfo = class extends Component {

  constructor (props) {
    super(props)

    this.state = {
      accountAddress: '',
      balance: null,
      networkName: ''
    }
  }

  componentDidMount() {
    if (
      window.web3
      && window.web3.eth.defaultAccount
      && window.web3.eth.defaultAccount.length > 0
    ) {
      this.setState({ accountAddress: window.web3.eth.defaultAccount })
      this.setState({ networkName: GetNetworkNameService() })
      this.getBalance()
    }
  }

  getBalance() {
    window.web3.eth.getBalance(window.web3.eth.defaultAccount, (err, balance) => {
      if (err) console.error(err)

      this.setState({ balance: balance.toString() })
    });
  }

  render() {
    if (
      window.web3
      && window.web3.eth.defaultAccount
      && window.web3.eth.defaultAccount.length > 0
    ) {
      return (
        <div className="navbar-menu">
          <div className="navbar-end">
            <div className="navbar-item">
              <span className="has-text-success">{'\u2b24'}</span> &nbsp; {this.state.networkName}
            </div>
            <div className="navbar-item">
              <Ether wei={this.state.balance} />
            </div>
            <div className="navbar-item">
              <figure className="image is-32x32">
                <img className="is-circular" src={`/${AvatarPlaceholderImage}`} />
              </figure>
              &nbsp;
              <Address address={this.state.accountAddress} toggleFull={true} />
            </div>
          </div>
        </div>
      )
    } else {
      return null
    }
  }
}

export default NetworkInfo;
