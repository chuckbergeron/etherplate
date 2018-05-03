import React, {
  Component
} from 'react'
import { Link } from 'react-router-dom'

export default class extends Component {

  render () {
    return (
      <div>
        <section className="hero is-medium">
          <div className="hero-body">
            <div className="container has-text-centered">
              <div className="columns">
                <div className="column"></div>

                <div className="column is-two-thirds">
                  <p className="title">
                    What is Etherplate?
                  </p>
                  <p className="subtitle">
                    <strong>Etherplate</strong> is a pre-architected dapp. It exists to teach you how to hook up your Ethereum Non-Fungible Tokens (NFTs, ERC721, similar to CryptoKitties) contract (or any other contracts) to a React web3 app. It demos web3 events, and is highly opinionated in that it uses Redux, React, React Router, and Bulma. You can rip out of any these or replace them with your favourites (ie. Skeleton.css instead of Bulma, etc.).
                  </p>

                  <Link to="/tokens/new" className="button is-info is-large">
                    <span>Buy a Token Now</span>
                  </Link>
                  <br />
                  <small>(Only for testing, does not require actual Ether)</small>
                </div>

                <div className="column"></div>
              </div>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="container">
            <div className="content has-text-centered">
              <p>
                <strong>Etherplate</strong> is a boilerplate Ethereum example dapp by <a href="https://chuckbergeron.io">Chuck Bergeron</a>
                <br />Built on &#128279; in Vancouver.
              </p>
            </div>
          </div>
        </footer>

      </div>
    )
  }

}
