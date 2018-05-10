import React, {
  Component
} from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import { Address } from '@/components/address'

import nfTokenTypeImageUrl from '@/services/nfToken-type-image-url'
import getToken from '@/services/get-token'

require('./style.scss')

export default class Token extends Component {
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

              <table className='table is-striped is-fullwidth'>
                <thead>
                  <tr>
                    <th>
                      TokenID
                    </th>
                    <th>
                      Transaction Hash
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      {this.tokenId()}
                    </td>
                    <td>
                      ${this.state.transactionID}
                      <br />
                      <a href={`https://ropsten.etherscan.io/tx/${this.state.transactionID}`}>View on Ropsten</a>
                    </td>
                  </tr>
                </tbody>
              </table>
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

Token.propTypes = {
  match: PropTypes.object.isRequired
}
