import React, {
  Component
} from 'react'

import NFToken from '@/contracts/nfToken-factory'
import CustomizeToken from './customize-token'
import TokenList from './token-list'

export default class extends Component {

  render () {
    return (
      <div>
        <CustomizeToken />
      </div>
    )
  }

}
