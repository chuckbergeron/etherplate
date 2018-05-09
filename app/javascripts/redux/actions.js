export const ADD_TOKEN = 'ADD_TOKEN'

export function addToken(tokenObject) {
  return { type: ADD_TODO, tokenObject }
}
