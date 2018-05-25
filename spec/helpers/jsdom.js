import { JSDOM } from 'jsdom';

const dom = new JSDOM('<html><body></body></html>')
global.document = dom.window.document
global.window = dom.window
global.navigator = dom.window.navigator


let provider = new Web3.providers.HttpProvider("http://localhost:8545");
global.window.web3 = new Web3(provider);

(async () => {
  await window.web3.eth.getAccounts().then((accounts) => {
    window.web3.eth.defaultAccount = accounts[0]
  })
})().catch(err => {
    console.error(err);
});
