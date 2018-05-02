import React, {
  Component
} from 'react'
import { Link } from 'react-router-dom'

import getToken from '@/services/get-item'
import nfTokenTypeImageUrl from '@/services/nfToken-type-image-url'

export default class extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  componentDidMount () {
    getToken(this.props.itemId).then((values) => {
      this.setState({
        type: values[0],
        title: values[1]
      })
    })
  }

  render () {
    let itemLinkUrl = `/items/${this.props.itemId}`

    return (
      <tr>
        <td>
          <Link to={itemLinkUrl}>
            <img src={nfTokenTypeImageUrl(this.state.type, 'small')} className='item-row__item-img' />
          </Link>
        </td>
        <td><Link to={itemLinkUrl}>{this.state.title}</Link></td>
      </tr>
    )
  }
}
