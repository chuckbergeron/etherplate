import React, {
  Component
} from 'react'

import NFToken from '@/contracts/nfToken-factory'
import TokenListToken from './item-list-item'

export default class extends Component {
  render () {
    var content
    if (this.props.items.length) {
      content =
        <section className='section'>
          <div className='container'>
            <div className="columns is-multiline">
                {
                  this.props.items.map(
                    item => {
                      return (
                        <div key={item} className="column is-one-quarter-desktop">
                          <TokenListToken itemId={item} />
                        </div>
                      )
                    }
                  )
                }
            </div>
          </div>
        </section>
    } else {
      content =
        <section className='hero is-medium'>
          <div className='hero-body'>
            <div className='container'>
              <h1 className='title has-text-grey-light has-text-centered'>
                You haven't received any items yet.
              </h1>
            </div>
          </div>
        </section>
    }

    return content;
  }
}
