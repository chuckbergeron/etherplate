import React, {
  Component
} from 'react'
import { Link } from 'react-router-dom'

export default class extends Component {

  render () {
    return (
      <div>
        <section className="hero is-dark is-medium">
          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="title">
                <i className="fas fa-2x fa-pencil"></i>
                <br />
                Dashboard
              </h1>
              <h2 className="subtitle">
              </h2>

              <Link to="/tokens/new" className="button is-pink is-large">
                <span>Buy a Token Now</span>
              </Link>
            </div>
          </div>
        </section>

        <section className="hero is-medium">
          <div className="hero-body">
            <div className="container">
              <div className="content has-text-centered">

                <div className="columns">
                  <div className="column"></div>

                  <div className="column is-two-thirds">
                    <h1 className="title">
                      What is Etherplate?
                    </h1>
                    <h2 className="subtitle">
                      <strong>Etherplate</strong> is a pre-architected dapp. It exists to teach you how to hook up your Ethereum Non-Fungible Tokens (NFTs, ERC721, similar to CryptoKitties) contract (or any other contracts) to a React web3 app. It demos web3 events, and is highly opinionated in that it uses Redux, React, React Router, and Bulma. You can rip out of any these or replace them with your favourites (ie. Skeleton.css instead of Bulma, etc.).
                    </h2>

                    <Link to="/tokens/new" className="button is-primary is-large">
                      <span>Buy a Token Now</span>
                    </Link>
                  </div>

                  <div className="column"></div>
                </div>

              </div>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="container">
            <div className="content has-text-centered">
              <p>
                <strong>Etherplate</strong> is a skeleton / boilerplate Ethereum project by
                <a href="https://chuckbergeron.io">Chuck Bergeron</a> circa 2018.
                <br />Built in Vancouver.
              </p>
            </div>
          </div>
        </footer>

      </div>
    )
  }

}
