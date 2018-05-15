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
    if (typeof this.props.token.args !== 'undefined')
      getToken(this.props.token.args.tokenId.toNumber()).then((values) => {
        this.setState({
          type: values[0],
          title: values[1]
        })
      })
  }

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   if (prevState.type === null && nextProps.token.args === 'object') {

  //   }
  //   else {
  //     return null
  //   }
  // }

  componentDidUpdate(prevProps, prevState, snapshot) {
    getToken(this.props.token.args.tokenId.toNumber()).then((values) => {
      return {
        type: values[0],
        title: values[1]
      }
    })
  }

  render () {
    var tokenHtml
    var image
    var title

    if (typeof this.props.token.args === 'undefined') {
      image = <Loading />
      title = 'Loading ...'
    } else if (this.state.type !== null) {
      image =
        <Link to={`/tokens/${this.props.token.args.tokenId}`}>
          <img src={nfTokenTypeImageUrl(this.state.type)} />
        </Link>
      title =
        <Link to={`/tokens/${this.props.token.args.tokenId}`}>
          {this.state.title}
        </Link>
    } else {
      image = <img src='https://bulma.io/images/placeholders/480x480.png' />
      title = 'Unknown'
    }

    return (
      <div className="card">
        <div className="card-image">
          <figure className="image is-square">
            {image}
          </figure>
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
