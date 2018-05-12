import nfToken from '@/contracts/nftoken-factory'

export default class BoughtTokenSubscriber {
  constructor (onBuyCallback) {
    nfToken().then((instance) => {
      this.boughtTokenEvent = instance.BoughtToken({ buyer: web3.eth.defaultAccount })
      this.boughtTokenEvent.watch((error, result) => {
        console.log('bought token 2')
        if (!error) {
          onBuyCallback(result)
        } else {
          console.error(error)
        }
      })
    })
  }

  stop () {
    if (this.boughtTokenEvent !== undefined)
      this.boughtTokenEvent.stopWatching()
  }
}
