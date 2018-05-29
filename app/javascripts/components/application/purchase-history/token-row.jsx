import React, {
  Component
} from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import getToken from '@/services/get-token'
import nfTokenTypeImageUrl from '@/services/nfToken-type-image-url'

const TokenRow = class extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  componentDidMount () {
    getToken(this.props.tokenId, window.web3).then((values) => {
      this.setState({
        type: values[0],
        title: values[1]
      })
    }).catch((error) => {
      console.error(error)
    })
  }

  render () {
    let tokenLinkUrl = `/tokens/${this.props.tokenId}`

    return (
      <tr className='token-row'>
        <td>
          <Link to={tokenLinkUrl}>
            <img src={nfTokenTypeImageUrl(this.state.type, 'small')} className='token-row__token-img' />
          </Link>
        </td>
        <td>
          <Link to={tokenLinkUrl}>{this.state.title}</Link>
        </td>
      </tr>
    )
  }
}

TokenRow.propTypes = {
  tokenId: PropTypes.number.isRequired
}

export default TokenRow;
