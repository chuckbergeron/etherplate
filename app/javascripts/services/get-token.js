import oldNfToken from '@/contracts/old-nftoken-factory'

export default function (tokenId) {
  var contract = oldNfToken()

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
