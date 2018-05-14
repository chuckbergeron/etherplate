import contract from 'truffle-contract'
import NFTokenABI from '../../../build/contracts/NFToken.json'

const nfToken = contract(NFTokenABI)

export default async function () {
  var contractInstance

  nfToken.setProvider(web3.currentProvider)
  nfToken.web3.eth.defaultAccount = web3.eth.defaultAccount

  await nfToken.deployed().then((instance) => { contractInstance = instance })

  return new web3.eth.Contract(contractInstance.abi, contractInstance.address, {
    from: web3.eth.defaultAccount
  })
}

