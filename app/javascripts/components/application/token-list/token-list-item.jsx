import React, {
  Component
} from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import Loading from '@/components/loading'
import { Address } from '@/components/address'
import nfTokenTypeImageUrl from '@/services/nfToken-type-image-url'
import getToken from '@/services/get-token'

import PlaceholderImg from '@/../images/placeholder.png'

const TokenListItem = class extends Component {
  constructor (props) {
    super(props)
    this.state = {
      type: null,
      title: ''
    }
  }

  componentDidMount () {
    if (typeof this.props.token.args !== 'undefined')
      this.getTokenFromBlockchain();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (
      prevState.type === null
      && typeof prevProps.token.args === 'undefined'
      && typeof this.props.token.args !== 'undefined'
    )
      this.getTokenFromBlockchain();
  }

  getTokenFromBlockchain() {
    let tokenId = this.props.token.args.tokenId.toNumber()
    getToken(tokenId, window.web3).then((values) => {
      this.setState({
        type: values[0],
        title: values[1]
      })
    }).catch((error) => {
      console.error(error)
    })
  }

  render () {
    var tokenHtml
    var image
    var title

    if (typeof this.props.token.args === 'undefined') {
      image = <Loading />
      title = 'Confirming ...'
    } else if (this.state.type !== null) {
      image =
        <figure className="image is-square">
          <Link to={`/tokens/${this.props.token.args.tokenId}`}>
            <img src={nfTokenTypeImageUrl(this.state.type)} />
          </Link>
        </figure>
      title =
        <Link to={`/tokens/${this.props.token.args.tokenId}`}>
          {this.state.title}
        </Link>
    } else {
      image =
        <figure className="image is-square">
          <img src={`/${PlaceholderImg}`} />
        </figure>
      title = '...'
    }

    return (
      <div className="card">
        <div className="card-image">
          {image}
        </div>

        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">
                {title}
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

TokenListItem.propTypes = {
  token: PropTypes.object.isRequired
}

export default TokenListItem;
