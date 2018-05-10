import React, {
  Component
} from 'react'
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import { ADD_TOKEN, addToken } from '@/redux/actions'
import { boughtTokenReducer } from '@/redux/reducers'

import nfToken from '@/contracts/nfToken-factory'

import web3Wrap from '@/components/web3Wrap'

import Header from './layout/header'
import Footer from './layout/footer'
import Landing from './landing'
import NotFoundPage from './not-found'
import Token from './token'

import CustomizeToken from './customize-token'
import PurchaseHistory from './purchase-history'
import ReceivedTokens from './received-tokens'

const web3CustomizeToken = web3Wrap(CustomizeToken)
const web3PurchaseHistory = web3Wrap(PurchaseHistory)
const web3ReceivedTokens = web3Wrap(ReceivedTokens)

let store = createStore(boughtTokenReducer)

//
// This component demos replaying the events from the blockchain network
// to pull all data associated with the current wallet address into a
// redux store, as well as subscribing to the event and adding new
// tokens to the store
//
export class Application extends Component {

  componentDidMount() {
    // Checking if Web3 has been injected by the browser (Mist/MetaMask/Trust/etc)
    if ((typeof web3 !== 'undefined') && web3.eth.accounts.length)
      this.getTokensAndSubscribeToEvent();
  }

  componentWillUnmount () {
    if (this.boughtToken)
      this.boughtToken.stopWatching()
  }

  getTokensAndSubscribeToEvent() {
    nfToken().then((instance) => {
      // filter: { buyer: web3.eth.accounts[0] },
      this.boughtToken = instance.BoughtToken({
        fromBlock: 0
      })

      this.subscribeToBoughtTokenEvent()
    }).catch((error) => {
      console.error(error)
    })
  }

  subscribeToBoughtTokenEvent() {
    this.boughtToken.watch((error, result) => {
      if (error) {
        console.error(error)
      }
      else {
        store.dispatch(addToken(result))
        console.log(store.getState())
      }
    })
  }

  render (){
    return (
      <Provider store={store}>
        <div>
          <Header />

          <Switch>
            <Route path='/tokens/received' component={web3ReceivedTokens} />
            <Route path='/tokens/purchased' component={web3PurchaseHistory} />
            <Route path='/tokens/new' component={web3CustomizeToken} />
            <Route path='/tokens/:tokenId' component={Token} />

            <Route exact={true} path='/' component={Landing} />

            <Route component={NotFoundPage} />
          </Switch>

          <Footer />
        </div>
      </Provider>
    )
  }
}
