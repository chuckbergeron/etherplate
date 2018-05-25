import nfToken from '@/contracts/nfTokenFactory'

export default function (tokenId, web3) {
  var contract = nfToken(web3)

  var tokenType = new Promise((resolve, reject) => {
    contract.then((instance) => {
      instance.getTokenType(tokenId).then((response) => {
        resolve(parseInt(response.toString()))
      }).catch((error) => reject)
    })
  })

  var tokenTitle = new Promise((resolve, reject) => {
    contract.then((instance) => {
      instance.getTokenTitle(tokenId).then((response) => {
        resolve(response.toString())
      }).catch((error) => reject)
    })
  })

  return Promise.all([
    tokenType,
    tokenTitle
  ])
}
