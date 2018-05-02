import React, {
  Component
} from 'react'

import NFToken from '@/contracts/nfToken-factory'
import TokenList from './item-list'

export default class extends Component {

  constructor (props) {
    super(props)
    this.state = {
      items: []
    }
  }

  componentDidMount () {
    NFToken().then((instance) => {
      this.boughtToken = instance.BoughtToken({
          recipient: web3.eth.accounts[0]
        }, {
          fromBlock: 0, toBlock: 'latest'
        }
      )

      this.boughtToken.watch((error, result) => {
        if (error)
          console.error(error)
        else
        this.setState({
          items: this.state.items.concat([result.args.itemId])
        })
      })
    }).catch((error) => {
      console.error(error)
    })
  }

  componentWillUnmount () {
    if (this.boughtToken) this.boughtToken.stopWatching()
  }

  render () {
    return (
      <div>
        <TokenList items={this.state.items} />
      </div>
    )
  }
}
