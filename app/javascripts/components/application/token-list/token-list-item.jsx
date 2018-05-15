import React, {
  Component
} from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import Loading from '@/components/loading'
import { Address } from '@/components/address'
import nfTokenTypeImageUrl from '@/services/nfToken-type-image-url'
import getToken from '@/services/get-token'

export default class TokenListItem extends Component {
  constructor (props) {
    super(props)
    this.state = {
      type: null,
      title: ''
    }
  }

  componentDidMount () {
    if (typeof this.props.token.args !== 'undefined') {
      getToken(this.props.token.args.tokenId.toNumber()).then((values) => {
        this.setState({
          type: values[0],
          title: values[1]
        })
      })
    }
  }

  render () {
    var tokenHtml

    if (typeof this.props.token.args === 'undefined') {
      tokenHtml = (
        <div className="card">
          <div className="card-image">
            <figure className="image">
              <Loading />
            </figure>
          </div>

          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="title is-4">
                  Loading ...
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    } else if (this.state.type !== null) {
      tokenHtml = (
        <div className="card">
          <div className="card-image">
            <figure className="image">
              <Link to={`/tokens/${this.props.token.args.tokenId}`}>
                <img src={nfTokenTypeImageUrl(this.state.type)} />
              </Link>
            </figure>
          </div>

          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="title is-4">
                  {this.state.title}
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    } else {
      tokenHtml = <span></span>
    }

    return (
      <span>{tokenHtml}</span>
    )
  }
}

TokenListItem.propTypes = {
  token: PropTypes.object.isRequired
}
