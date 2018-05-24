export const ADD_TOKEN = 'ADD_TOKEN'
export const UPDATE_TOKEN = 'UPDATE_TOKEN'

export const ADD_WEB3 = 'ADD_WEB3'

export function addTokenAction(tokenObject) {
  return { type: ADD_TOKEN, token: tokenObject }
}

export function updateTokenAction(tokenObject) {
  return { type: UPDATE_TOKEN, token: tokenObject }
}

export function addWeb3Action(web3Object) {
  return { type: ADD_WEB3, web3: web3Object }
}
