import { ADD_TOKEN, UPDATE_TOKEN } from './actions'

const initialState = {
  tokens: []
}

export function tokenReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TOKEN:
      return Object.assign({}, state, {
        tokens: [
          ...state.tokens,
          action.token
        ]
      })
    case UPDATE_TOKEN:
      // A more performant way to do this as the array grows in size is to use a hash/dict:
      // https://redux.js.org/recipes/structuring-reducers
      let newTokens = state.tokens.map( (token) => {
        // This isn't the token we care about - keep it as-is
        if (token.transactionHash !== action.token.transactionHash) return token;

        // // This is the one we want - return an updated value
        return {
          ...token,
          ...action.token
        };
      });

      return Object.assign({}, state, {
        tokens: newTokens
      })
    default:
      return state
  }
}
