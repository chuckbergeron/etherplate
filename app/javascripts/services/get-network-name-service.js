// Relies on MetaMask (or 0.2.X equivalent) web3 already being injected into `window`

const GetNetworkNameService = function() {
  let networkId = web3.version.network
  let networkName = '';

  switch (networkId) {
    case '1':
      networkName = "Ethereum Main";
      break
    case '2':
      networkName = "Morden Testnet";
      break
    case '3':
      networkName = "Ropsten Testnet";
      break
    case '4':
      networkName = "Rinkeby Testnet";
      break
    case '42':
      networkName = "Kovan Testnet";
      break
    default:
      networkName = "localhost";
  }

  return networkName;
}

export default GetNetworkNameService;
