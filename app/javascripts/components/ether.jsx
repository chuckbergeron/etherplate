import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Ether extends Component {
  render() {
    let balance = (this.props.wei === null)
      ? '?'
      : parseFloat(window.web3.fromWei(this.props.wei, 'ether')).toFixed(3)

    return `${balance} Ξ`
  }
}

Ether.propTypes = {
  wei: PropTypes.string
}
