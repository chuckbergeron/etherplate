import React, {
  Component
} from 'react'
import { Link } from 'react-router-dom'

import { Address } from '@/components/address'

import nfTokenTypeImageUrl from '@/services/nfToken-type-image-url'
import getToken from '@/services/get-token'

require('./style.scss')

export default class extends Component {
  constructor (props) {
    super(props)
    this.state = {
      type: null,
      animateToken: false,
      animateSheen: false
    }
  }

  tokenId () {
    return this.props.match.params.tokenId
  }

  componentDidMount () {
    var tokenId = this.tokenId()

    getToken(tokenId).then((values) => {
      this.setState({
        type: values[0],
        title: values[1]
      })
    })

    this.setState({
      animateToken: true,
      animateSheen: true
    })
  }

  render () {
    var content
    if (this.state.type !== null) {
      content = (
        <div>
          <div className="token columns is-centered">
            <div className='column is-three-quarters-tablet is-three-quarters-desktop is-one-half-widescreen is-one-half-fullhd has-text-centered'>

              <a className="token__share-link" href="#"><i className="fas fa-lg fa-share-alt"></i></a>

              <div className="token__shiny">
                <div
                  className={this.state.animateSheen ? 'token__show-off is-animating' : 'token__show-off' } />

                <figure
                  className={this.state.animateToken ? 'token__image is-animating' : 'token__image' }>
                  <img src={nfTokenTypeImageUrl(this.state.type)} />
                </figure>
              </div>


              <p className="token__title title has-text-grey">
                {this.state.title}
              </p>
            </div>
          </div>
        </div>
      )
    }

    return (
      <section className='section'>
        <div className='container'>
          {content}
        </div>
      </section>
    )
  }
}
