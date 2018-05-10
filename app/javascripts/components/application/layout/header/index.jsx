import React, {
  Component
} from 'react'
import { Link } from 'react-router-dom'

import './header.scss';

export default class Header extends Component {

  componentDidMount(){
    // Get all "navbar-burger" elements
    var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {

      // Add a click event on each of them
      $navbarBurgers.forEach(function ($el) {
        $el.addEventListener('click', function () {

          // Get the target from the "data-target" attribute
          var target = $el.dataset.target;
          var $target = document.getElementById(target);

          // Toggle the class on both the "navbar-burger" and the "navbar-menu"
          $el.classList.toggle('is-active');
          $target.classList.toggle('is-active');

        });
      });
    }
  }

  render () {
    return (
      <nav id="navbar" className="navbar is-fixed-top is-dark">
        <div id="specialShadow" className="bd-special-shadow">
        </div>

        <div className="container">
          <div className="navbar-brand">
            <div className="navbar-item">
              <Link to="/">
                <img src="/images/logos/etherplate-logo--red--lg.png" />
              </Link>
            </div>

            <a role="button" className="navbar-burger" data-target="navMenu" aria-label="menu" aria-expanded="false">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div className="navbar-menu">
            <div className="navbar-start">
              <Link to='/' className='navbar-item'>
                <span>Home</span>
              </Link>
            </div>
          </div>

          <div className="navbar-menu" id="navMenu">
            <div className="navbar-end">
              <Link to='/tokens/all' className='navbar-item'>
                <span>All Tokens</span>
              </Link>
              <Link to='/tokens/purchased' className='navbar-item'>
                <span>My Purchase History</span>
              </Link>
              <div className="navbar-item">
                <Link to="/tokens/new" className="button is-info">
                  <span>Purchase Token</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

      </nav>
    )
  }
}