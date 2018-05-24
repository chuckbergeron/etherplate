import oldNfToken from '@/contracts/oldNfTokenFactory'

export default function (tokenId, web3) {
  var contract = oldNfToken(web3)

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
