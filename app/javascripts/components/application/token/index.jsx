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
      type: null
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
  }

  render () {
    var content
    if (this.state.type !== null) {
      content = (
        <div>
          <div className="token columns is-centered">
            <div className='column is-three-quarters-tablet is-three-quarters-desktop is-one-half-widescreen is-one-half-fullhd has-text-centered'>

              <figure
                className="token__image">
                <img src={nfTokenTypeImageUrl(this.state.type)} />
              </figure>

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
