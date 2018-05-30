import { ADD_TOKEN, UPDATE_TOKEN } from '@/config/constants'

export function addTokenAction(tokenObject) {
  return { type: ADD_TOKEN, token: tokenObject }
}

export function updateTokenAction(tokenObject) {
  return { type: UPDATE_TOKEN, token: tokenObject }
}
