import React, {
  Component
} from 'react'
import { connect } from 'react-redux'

import TokenList from './token-list'

const mapStateToProps = state => {
  return {
    tokens: state.tokens
  }
}

const AllTokens = connect(mapStateToProps)(TokenList)

export default AllTokens
