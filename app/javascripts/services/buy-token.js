import NFToken from '@/contracts/nfToken-factory'

export default function (tokenType, title) {
  return new Promise((resolve, reject) => {
    NFToken().then((instance) => {
      instance.buyToken(tokenType, title).then((result) => {
        resolve(result)
      }).catch((error) => {
        reject(error)
      })
    }).catch((error) => {
      reject(error)
    })
  })
}
