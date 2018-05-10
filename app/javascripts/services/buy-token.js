import nfToken from '@/contracts/nfToken-factory'

export default function (tokenType, title) {
  return new Promise((resolve, reject) => {
    nfToken().then((instance) => {
      instance.buyToken(tokenType, title).then((result) => {
        resolve(result)
      }).catch((error) => {
        console.error(error)
        reject(error)
      })
    }).catch((error) => {
      console.error(error)
      reject(error)
    })
  })
}
