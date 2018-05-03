import nfToken from '@/contracts/nfToken-factory'

export default function (tokenType, title) {
  return new Promise((resolve, reject) => {
    nfToken().then((instance) => {
      instance.buyToken(tokenType, title).then((result) => {
        console.log('in buy')
        resolve(result)
      }).catch((error) => {
        console.log('in buy')
        reject(error)
      })
    }).catch((error) => {
        console.log('in buy')
      reject(error)
    })
  })
}
