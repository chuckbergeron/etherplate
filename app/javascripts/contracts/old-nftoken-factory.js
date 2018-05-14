import contract from 'truffle-contract'
import NFTokenABI from '../../../build/contracts/NFToken.json'

const oldNfTokenContract = contract(NFTokenABI)

export default async function () {
  oldNfTokenContract.setProvider(web3.currentProvider)
  oldNfTokenContract.web3.eth.defaultAccount = web3.eth.accounts[0]

  return oldNfTokenContract.deployed()
}
