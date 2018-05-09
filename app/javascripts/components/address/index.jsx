import React, {
  Component
} from 'react'
import PropTypes from 'prop-types'

require('./address.scss')

export default class Address extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showFull: false
    }
  }

  toggleFull () {
    if (this.props.toggleFull) {
      this.setState({ showFull: !this.state.showFull })
    }
  }

  render () {
    if (this.props.address) {
      var address = this.props.address.toString()
    } else {
      address = ''
    }
    if (this.state.showFull) {
      var displayed =
        <span className='tag address__full'>{address}</span>
    }
    else
    {
      displayed = <span onClick={() => this.toggleFull()} className="address__short">
        {address.substring(0, 6)}...
      </span>
    }
    return (
      <span title={address} className='address'>
        {displayed}
      </span>
    )
  }
}

Address.propTypes = {
  address: PropTypes.string.isRequired,
  toggleFull: PropTypes.bool
}

Address.defaultProps = {
  toggleFull: true
}
