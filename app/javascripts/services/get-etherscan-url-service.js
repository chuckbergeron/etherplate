  // Relies on MetaMask (or 0.2.X equivalent) web3 already being injected into `window`

  const GetEtherscanUrlService = function() {
    let networkId = web3.version.network
    let etherscanUrl = '';

    switch (networkId) {
      case '1':
        etherscanUrl = "https://etherscan.io";
        break
      case '2':
        etherscanUrl = "";
        break
      case '3':
        etherscanUrl = "https://ropsten.etherscan.io";
        break
      case '4':
        etherscanUrl = "https://rinkeby.etherscan.io";
        break
      case '42':
        etherscanUrl = "https://kovan.etherscan.io";
        break
      default:
        etherscanUrl = "";
    }

    return etherscanUrl;
  }

  export default GetEtherscanUrlService;

