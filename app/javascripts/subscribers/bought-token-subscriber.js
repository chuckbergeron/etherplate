import NFToken from '@/contracts/nfToken-factory'

export default class {
  constructor (onBuyCallback) {
    NFToken().then((instance) => {
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
    // Remove this and fix the racist condition ;)
    if (this.boughtTokenEvent !== undefined)
      this.boughtTokenEvent.stopWatching()
  }
}
