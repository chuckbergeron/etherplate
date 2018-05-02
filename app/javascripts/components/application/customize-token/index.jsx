import React, {
  Component
} from 'react'
import reactMixin from 'react-mixin'
import TimerMixin from 'react-timer-mixin'
import FontAwesome from 'react-fontawesome'
import range from 'lodash.range'
import classnames from 'classnames'

import TokenType from '../token-type'

import buyToken from '@/services/buy-token'
import nfTokenTypeImageUrl from '@/services/nfToken-type-image-url'

import BoughtTokenSubscriber from '@/subscribers/bought-token-subscriber'

import style from './style'

class CustomizeToken extends Component {
  constructor (props) {
    super(props)
    this.state = {
      tokenType: 0,
      title: '',
      titleError: '',
      waitingForEthereum: false,
      errorMessage: ''
    }
    this.onCode = this.onCode.bind(this)
    this.boughtTokenSubscriber = new BoughtTokenSubscriber(() => this.setState({waitingForEthereum: false}))
  }

  componentDidMount () {
  }

  componentWillUnmount() {
    this.boughtTokenSubscriber.stop()
  }

  onClickSave () {
    // TODO: Replace these magic numbers with an app-wide config:
    if (this.state.title.length < 8) {
      this.setState({ titleError: 'Please enter at least 8 characters for the title' })
    } else {
      buyToken(this.state.tokenType, this.state.title)
        .then((transaction) => {
          this.setState({ waitingForEthereum: true })
        })
        .catch((error) => {
          this.setState({ errorMessage: error.message })
        })
    }
  }

  onClickTokenType (index) {
    this.setState({ tokenType: index })
  }

  render () {
    if (this.state.titleError) {
      var titleError =
        <p className="help is-danger">{this.state.titleError}</p>
    }

    if (this.state.errorMessage) {
      var errorMessage = <p className='help is-danger'>{this.state.errorMessage}</p>
    }

    return (
      <section className='section'>
        <div className='container'>
          <div className='columns'>
            <div className='column is-one-half-desktop'>

              <div className="etherplate-form">
                <div className="etherplate-form--wrapper">
                  <div className="columns is-mobile">
                    {range(2).map(index => {
                      var selected = this.state.tokenType === index
                      return (
                        <div key={index} className="column rotate-in-center is-one-fifth-mobile is-one-fifth-tablet is-one-fifth-desktop">
                          <TokenType
                            url={nfTokenTypeImageUrl(index, 'small')}
                            onClick={() => this.onClickTokenType(index)}
                            selected={selected} />
                        </div>
                      )
                    })}
                  </div>

                  <div className="field">
                    <label className="label">Title</label>
                    <div className="control">
                      <input
                        placeholder="What this token's for (ie. Vancity Hackathon 2018)"
                        className="input"
                        value={this.state.title}
                        onChange={(e) => this.setState({ title: e.target.value })} />
                    </div>
                    {titleError}
                  </div>

                  <br />
                  <p>
                    <button
                      disabled={this.state.selectedToken === null && !this.state.waitingForEthereum}
                      className={classnames('button is-primary is-medium', { 'is-loading': this.state.waitingForEthereum })}
                      onClick={(e) => this.onClickSave()}>
                      Buy Token
                    </button>
                  </p>
                  {errorMessage}
                </div>
              </div>
            </div>

            <div className='column is-one-third'>
              {tokenType}
            </div>
          </div>
        </div>
      </section>
    )
  }
}

reactMixin(CustomizeToken.prototype, TimerMixin)

export default CustomizeToken
