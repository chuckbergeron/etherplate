import TruffleContract from 'truffle-contract'
import NFTokenABI from '../../../build/contracts/NFToken.json'

const nfTokenContract = TruffleContract(NFTokenABI)

export default function (web3) {
  nfTokenContract.setProvider(web3.currentProvider)
  nfTokenContract.web3.eth.defaultAccount = web3.eth.accounts[0]

  return nfTokenContract.deployed()
}
