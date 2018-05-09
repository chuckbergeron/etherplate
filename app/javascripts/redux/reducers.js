import { ADD_TOKEN } from './actions'

export function boughtTokenReducer(state = {}, action) {
  switch (action.type) {
    case ADD_TOKEN:
      // return { ...state, newToken }
      return Object.assign({}, state, action.token)
    default:
      return state
  }
}
