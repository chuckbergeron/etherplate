export const ADD_TOKEN = 'ADD_TOKEN'
export const UPDATE_TOKEN = 'UPDATE_TOKEN'

export function addTokenAction(tokenObject) {
  return { type: ADD_TOKEN, token: tokenObject }
}

export function updateTokenAction(tokenObject) {
  return { type: UPDATE_TOKEN, token: tokenObject }
}
