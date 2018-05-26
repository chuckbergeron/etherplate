import { init } from './init'
import Web3 from 'web3'

window.addEventListener('load', async function() {
  // Stash the wrapped web3 object as a simple global var (this is unfortunate, but ok for now)
  if (typeof window.web3 !== 'undefined') {
    window.web3 = new Web3(window.web3.currentProvider);

    // window.web3 = new Web3(provider);
    window.web3.eth.defaultAccount = window.web3.eth.accounts[0]
  }

  init(document.getElementById('application'))
});
