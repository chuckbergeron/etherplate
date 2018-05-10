import React, {
  Component
} from 'react'

import './footer.scss'

export default class Footer extends Component {

  render () {
    return (
      <footer className="footer">
        <div className="container">
          <div className="content has-text-centered">
            <p>
              <strong>Etherplate</strong> is a boilerplate Ethereum example DApp by <a href="https://chuckbergeron.io">Chuck Bergeron</a>
              <br />Built on &#128279; in Vancouver.
            </p>
          </div>
        </div>
      </footer>
    )
  }
}
