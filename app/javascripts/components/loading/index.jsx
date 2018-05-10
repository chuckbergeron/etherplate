import React from 'react'

import Hero from '@/components/hero'

require('./loading.scss')

export default class Loading extends React.Component {

  render () {
    return (
      <Hero>
        <div className='loading'>
          <div className='loading__double-bounce2' />
          <div className='loading__double-bounce1' />
        </div>
      </Hero>
    )
  }

}
