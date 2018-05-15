import React from 'react'

require('./loading.scss')

export default class Loading extends React.Component {

  render () {
    return (
      <div className='loading'>
        <div className='loading__double-bounce2' />
        <div className='loading__double-bounce1' />
      </div>
    )
  }

}
