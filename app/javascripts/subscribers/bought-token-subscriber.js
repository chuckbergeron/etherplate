import nfToken from '@/contracts/nftoken-factory'

export default class BoughtTokenSubscriber {
  constructor (onBuyCallback) {
    nfToken().then((instance) => {
      this.boughtTokenEvent = instance.BoughtToken({ buyer: web3.eth.accounts[0] })
      this.boughtTokenEvent.watch((error, result) => {
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
