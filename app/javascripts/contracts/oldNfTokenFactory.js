import contract from 'truffle-contract'
import NFTokenABI from '../../../build/contracts/NFToken.json'

const oldNfTokenContract = contract(NFTokenABI)

export default function (web3) {
  console.log('*********************')
  console.log(web3.currentProvider)
  console.log('*********************')

  oldNfTokenContract.setProvider(web3.currentProvider)
  oldNfTokenContract.web3.eth.defaultAccount = web3.eth.accounts[0]

  return oldNfTokenContract.deployed()
}
