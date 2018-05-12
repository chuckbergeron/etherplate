import Web3 from 'web3'

export default async function () {
  // Checking if Web3 has been injected by the browser (Mist/MetaMask/Trust/etc)
  if (typeof web3 !== 'undefined')
    web3 = new Web3(web3.currentProvider);
  else
    web3 = new Web3(
      new Web3.providers.HttpProvider("http://localhost:8545")
    );

  web3.isInitialized = true

  await web3.eth.getAccounts().then((accounts) => {
    web3.eth.defaultAccount = accounts[0]
  })
}
