import React, {
  Component
} from 'react'
import PropTypes from 'prop-types'

export default class Ether extends Component {
  render() {
    return `${web3.fromWei(this.props.wei, 'ether').toString()} ETH`
  }
}

Ether.propTypes = {
  wei: PropTypes.number.isRequired
}
