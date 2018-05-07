import React, {
  Component
} from 'react'
import {
  Route,
  Redirect,
  Switch
} from 'react-router-dom'

import web3Wrap from '@/components/web3Wrap'

import SiteHeader from './layout/site-header'

import Landing from './landing'

// Routes Components
import CustomizeToken from './customize-token'
const web3CustomizeToken = web3Wrap(CustomizeToken)

import PurchaseHistory from './purchase-history'
const web3PurchaseHistory = web3Wrap(PurchaseHistory)

import ReceivedTokens from './received-tokens'
const web3ReceivedTokens = web3Wrap(ReceivedTokens)

import Token from './token'

export class Application extends Component {

  render (){
    return (
      <div>
        <SiteHeader />

        <Switch>
          <Route path='/tokens/received' component={web3ReceivedTokens} />
          <Route path='/tokens/purchased' component={web3PurchaseHistory} />
          <Route path='/tokens/new' component={web3CustomizeToken} />
          <Route path='/tokens/:tokenId' component={Token} />

          <Route exact={true} path='/' component={Landing} />
        </Switch>
      </div>
    )
  }
}
