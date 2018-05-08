import React from 'react'

require('./loading.scss')

export default class Loading extends React.Component {

  render () {
    return (
      <section className="hero is-medium">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className='loading'>
              <div className='loading__double-bounce2' />
              <div className='loading__double-bounce1' />
            </div>
          </div>
        </div>
      </section>
    )
  }

}
