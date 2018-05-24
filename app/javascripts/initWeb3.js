import Web3 from 'web3'

export const initWeb3 = function () {
  let web3 = window.web3
  const injected = (typeof web3 !== 'undefined')
  const localProvider = `http://localhost:8545`

  return new Promise((resolve, reject) => {
    if (injected) {
      // console.log(`Injected web3 detected.`)
      web3 = new Web3(web3.currentProvider)

      web3.eth.getAccounts().then((accounts) => {
        web3.eth.defaultAccount = accounts[0]
        resolve(web3)
      }).catch((error) => {
        console.error(error);
        reject();
      });
    }

    // if (injected) {
    //   // console.log(`Injected web3 detected.`)
    //   web3 = new Web3(web3.currentProvider)
    // } else {
    //   // console.log(`No web3 instance injected, using Local web3.`)
    //   const provider = new Web3.providers.HttpProvider(localProvider)
    //   web3 = new Web3(provider)
    // }
  })

}
