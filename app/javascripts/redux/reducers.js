import { ADD_TOKEN } from './actions'

const initialState = {
  tokens: []
}

export function boughtTokenReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TOKEN:
      return Object.assign({}, state, {
        tokens: [
          ...state.tokens,
          action.token
        ]
      })
    default:
      return state
  }
}
