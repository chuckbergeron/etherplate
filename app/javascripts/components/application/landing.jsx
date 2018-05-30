import React, {
  Component
} from 'react'
import { Link } from 'react-router-dom'

import Hero from '@/components/hero'

export default class Landing extends Component {

  render () {
    return (
      <Hero>
        <div className="columns">
          <div className="column"></div>

          <div className="column is-two-thirds">
            <p className="title">
              What is Etherplate?
            </p>
            <p>
              <strong>Etherplate</strong> is a pre-architected DApp. It shows how you could hook up Ethereum Non-Fungible Tokens (<a href="http://erc721.org/" title="ERC721 Standard Info Page">ERC721</a>, similar to CryptoKitties) contract (or any other contracts) to a React web3 app. It demos web3 events, and is highly opinionated in that it uses Redux, React, React Router, and Bulma. You can rip out of any these or replace them with your favourites (ie. Skeleton.css instead of Bulma, etc.).
            </p>

            <br />
            <Link to="/tokens/new" className="button is-info is-large">
              <span>Buy a Token Now</span>
            </Link>
            <br />
            <small className="is-size-7">(Only for testing, does not require actual Ether)</small>
          </div>

          <div className="column"></div>
        </div>
      </Hero>
    )
  }

}
