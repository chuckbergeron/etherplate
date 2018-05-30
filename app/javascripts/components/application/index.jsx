import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import ReduxToastr, { reducer as toastr } from 'react-redux-toastr'

import { addTokenAction, updateTokenAction } from '@/redux/actions'
import { tokens } from '@/redux/reducers'

import nfToken from '@/contracts/nfTokenFactory'

import web3Wrap from '@/components/web3Wrap'

import Header from './layout/header'
import Footer from './layout/footer'
import Landing from './landing'
import NotFoundPage from './not-found'
import Token from './token'

import CustomizeToken from './customize-token'
import PurchaseHistory from './purchase-history'
import AllTokens from './all-tokens'

// Add more reducers to this object:
const rootReducer = combineReducers({
  tokens: tokens,
  toastr: toastr
})

const store = createStore(
  rootReducer,
  typeof window !== undefined
    && window.__REDUX_DEVTOOLS_EXTENSION__
    && window.__REDUX_DEVTOOLS_EXTENSION__()
)

//
// This component demos replaying the events from the blockchain network
// to pull all data associated with the current wallet address into a
// redux store, as well as subscribing to the event and adding new
// tokens to the store
//
export class Application extends Component {

  constructor (props) {
    super(props)
    this.state = {
      web3: null
    }

    this.web3CustomizeToken = web3Wrap(CustomizeToken)
    this.web3PurchaseHistory = web3Wrap(PurchaseHistory)
    this.web3AllTokens = web3Wrap(AllTokens)
  }

  componentDidMount() {
    if (window.web3 !== undefined)
      this.getTokensAndSubscribeToEvent();
  }

  componentWillUnmount () {
    if (this.boughtTokenEvent)
      this.boughtTokenEvent.stopWatching()
  }

  getTokensAndSubscribeToEvent() {
    nfToken(window.web3).then((instance) => {
      this.boughtTokenEvent = instance.BoughtToken({}, {
        fromBlock: 0, toBlock: 'latest'
      });

      // ALl previous logs and also every time a new token is bought
      this.boughtTokenEvent.watch((error, result) => {
        if (error) {
          console.error(error)
        } else {
          var tokens = store.getState().tokens;

          if (tokens.filter((token) => token.transactionHash === result.transactionHash).length > 0)
            store.dispatch(updateTokenAction(result))
          else
            store.dispatch(addTokenAction(result))
        }
      })
    }).catch((error) => {
      console.error(error)
    })
  }

  render (){
    return (
      <Provider store={store}>
        <>
          <Route path="/:active?" component={Header} />

          <main className="application-content">
            <Switch>
              <Route path='/tokens/all' component={this.web3AllTokens} />
              <Route path='/tokens/purchased' component={this.web3PurchaseHistory} />
              <Route path='/tokens/new' component={this.web3CustomizeToken} />
              <Route path='/tokens/:tokenId' component={Token} />

              <Route exact={true} path='/' component={Landing} />

              <Route component={NotFoundPage} />
            </Switch>
          </main>

          <ReduxToastr
            timeOut={700000}
            newestOnTop={true}
            tapToDismiss={false}
            position="bottom-center"
            transitionIn="bounceIn"
            transitionOut="bounceOut" />

          <Footer />
        </>
      </Provider>
    )
  }
}
