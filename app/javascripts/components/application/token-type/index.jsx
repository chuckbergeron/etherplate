import React, {
  Component
} from 'react'
import classnames from 'classnames'

import style from './style'

export default class extends Component {
  render () {
    return (
      <div
        className={classnames('token-type has-text-centered', { 'selected': this.props.selected })}
        onClick={this.props.onClick}><img src={this.props.url} className='token-type__img' /></div>
    )
  }
}
