import { JSDOM } from 'jsdom';

const dom = new JSDOM('<html><body></body></html>')
global.document = dom.window.document
global.window = dom.window
global.navigator = dom.window.navigator


let provider = new Web3.providers.HttpProvider("http://localhost:8545");
window.web3 = new Web3(provider);
console.log(window.web3.currentProvider);

(async () => {
  let eth = window.web3.eth

  await eth.getAccounts().then((accounts) => {
    eth.defaultAccount = accounts[0]
  })
})().catch(err => {
    console.error(err);
});
