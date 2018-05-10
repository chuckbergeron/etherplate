import React, {
  Component
} from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import style from './style.scss'

export default class TokenType extends Component {
  render () {
    return (
      <div
        className={classnames('token-type has-text-centered', { 'selected': this.props.selected })}
        onClick={this.props.onClick}>
        <img src={this.props.url} className='token-type__img' />
      </div>
    )
  }
}

TokenType.propTypes = {
  onClick: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
  url: PropTypes.string.isRequired
}
