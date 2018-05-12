import contract from 'truffle-contract'
import NFTokenABI from '../../../build/contracts/NFToken.json'

const nfToken = contract(NFTokenABI)

export default async function () {
  nfToken.setProvider(web3.currentProvider)
  nfToken.web3.eth.defaultAccount = web3.eth.defaultAccount

  return nfToken.deployed()
}

