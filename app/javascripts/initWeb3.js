import Web3 from 'web3'

export const initWeb3 = function () {
  return new Promise((resolve, reject) => {
    web3 = new Web3(web3.currentProvider);

    web3.eth.getAccounts().then((accounts) => {
      web3.eth.defaultAccount = accounts[0]
      resolve();
    }).catch((error) => {
      console.error(error);
      reject();
    });
  })
}
