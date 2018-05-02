import React, {
  Component
} from 'react'
import PropTypes from 'prop-types'

export class Modal extends Component {
  render () {
    if (this.props.isOpen) {
      var result = (
        <div className='modal is-active'>
          <div className='modal-background' onClick={this.props.onClose}/>
          <div className='modal-content'>
            {this.props.children}
          </div>
          <button className="modal-close is-large" aria-label="close" onClick={this.props.onClose}></button>
        </div>
      )
    } else {
      result = <div />
    }
    return result
  }
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
}
