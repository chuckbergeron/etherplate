import NFToken from '@/contracts/nfToken-factory'

export default function (itemType, title) {
  return new Promise((resolve, reject) => {
    NFToken().then((instance) => {
      instance.buyToken(itemType, title).then((result) => {
        resolve(result)
      }).catch((error) => {
        reject(error)
      })
    }).catch((error) => {
      reject(error)
    })
  })
}
