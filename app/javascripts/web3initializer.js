import Web3 from 'web3'

const providerUrl = () => {
  let url = ''

  web3.version.getNetwork((error, netId) => {
    console.error(error)

    switch (netId) {
      case "1":
        console.log('Mainnet, currently not implemented')
        break
      case "3":
        url = process.env.ROPSTEN_PROVIDER_URL
        console.log('This is the Ropsten test network.')
        break
      case "1234":
        console.log('This is the localhost private network.')
        url = 'http://localhost:8545'
        console.log(url)
        break
      default:
        console.error('This is an unknown network.')
    }
  })

  return url
}

export default async function () {
  // Checking if Web3 has been injected by the browser (Mist/MetaMask/Trust/etc)
  if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
  } else {
    // this path is still foggy as all hell to me:
    web3 = new Web3(
      new Web3.providers.HttpProvider(providerUrl())
    );
  }

  web3.isInitialized = true

  await web3.eth.getAccounts().then((accounts) => {
    web3.eth.defaultAccount = accounts[0]
  })
}
