import { init } from './init'
import Web3 from 'web3'

window.addEventListener('load', async function() {
  // Stash the wrapped web3 object as a simple global var (this is unfortunate, but ok for now)
  if (typeof window.web3 !== 'undefined') {
    window.web3 = new Web3(window.web3.currentProvider);

    await window.web3.eth.getAccounts().then((accounts) => {
      window.web3.eth.defaultAccount = accounts[0]
    }).catch((error) => {
      console.error(error);
    });
  }

  init(document.getElementById('application'))
});
