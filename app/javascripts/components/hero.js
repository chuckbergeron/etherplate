import React, {
  Component
} from 'react'

export default class Hero extends Component {
  render () {
    return (
      <section className='hero'>
        <div className='hero-body'>
          <div className='container has-text-centered'>
            {this.props.children}
          </div>
        </div>
      </section>
    )
  }
}
