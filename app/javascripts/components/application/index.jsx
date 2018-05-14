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

import web3Initializer from '@/web3Initializer'

import { addToken } from '@/redux/actions'
import { boughtTokenReducer } from '@/redux/reducers'

import nfToken from '@/contracts/nftoken-factory'

import web3Wrap from '@/components/web3Wrap'

import Header from './layout/header'
import Footer from './layout/footer'
import Landing from './landing'
import NotFoundPage from './not-found'
import Token from './token'

import CustomizeToken from './customize-token'
import PurchaseHistory from './purchase-history'
import AllTokens from './all-tokens'

const web3CustomizeToken = web3Wrap(CustomizeToken)
const web3PurchaseHistory = web3Wrap(PurchaseHistory)
const web3AllTokens = web3Wrap(AllTokens)

let store = createStore(boughtTokenReducer)

web3Initializer()

//
// This component demos replaying the events from the blockchain network
// to pull all data associated with the current wallet address into a
// redux store, as well as subscribing to the event and adding new
// tokens to the store
//
export class Application extends Component {

  componentDidMount() {
    if (typeof web3 !== 'undefined')
      this.getTokensAndSubscribeToEvent();
  }

  componentWillUnmount () {
    // web3 betas stopWatching() is currently returning
    // Uncaught Error: Invalid JSON RPC response: undefined
    // when run against my current ganache-cli in development
    // So we're not unsubscribing from this event listener properly at the moment

    // if (this.boughtTokenEvent)
      // this.boughtTokenEvent.stopWatching()
  }

  getTokensAndSubscribeToEvent() {
    nfToken().then((instance) => {
      this.boughtTokenEvent = instance.events.BoughtToken({
        fromBlock: 0,
        toBlock: 'latest'
      })
      .on('data', (event) => {
        // All previous logs and also every time a new token is bought
        console.log('bought token !')
        console.log(event)
        store.dispatch(addToken(event))
      })
      .on('changed', (event) => {
        console.log(event)
        console.log('event changed?')
          // remove event from local database
      })
      .on('error', console.error);
    }).catch((error) => {
      console.error(error)
    })
  }

  render (){
    return (
      <Provider store={store}>
        <div>
          <Header />

          <Switch>
            <Route path='/tokens/all' component={web3AllTokens} />
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
