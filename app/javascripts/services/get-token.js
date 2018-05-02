import NFToken from '@/contracts/nfToken-factory'

export default function (itemId) {
  var contract = NFToken()

  var itemType = new Promise((resolve, reject) => {
    contract.then((instance) => {
      instance.getTokenType(itemId).then((response) => {
        resolve(parseInt(response.toString()))
      }).catch((error) => reject)
    })
  })

  var itemTitle = new Promise((resolve, reject) => {
    contract.then((instance) => {
      instance.getTokenTitle(itemId).then((response) => {
        resolve(response.toString())
      }).catch((error) => reject)
    })
  })

  return Promise.all([
    itemType,
    itemTitle
  ])
}
