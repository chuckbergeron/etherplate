import { JSDOM } from 'jsdom';

const dom = new JSDOM('<html><body></body></html>')
global.document = dom.window.document
global.window = dom.window
global.navigator = dom.window.navigator

// Inject the Web3 instance with a localhost provider for integration specs
let provider = new Web3.providers.HttpProvider("http://localhost:8545");
global.window.web3 = new Web3(provider);
global.window.web3.eth.defaultAccount = global.window.web3.eth.accounts[0]
