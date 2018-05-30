import { ADD_TOKEN, UPDATE_TOKEN } from '@/config/constants'

const initialTokenState = {
  tokens: []
}

export function tokens(state = [], action) {
  switch (action.type) {
    case ADD_TOKEN:
      return [
        ...state,
        action.token
      ]

    case UPDATE_TOKEN:
      // A more performant way to do this as the array grows in size is to use a hash/dict:
      // https://redux.js.org/recipes/structuring-reducers
      let newTokens = state.map( (token) => {
        // This isn't the token we care about - keep it as-is
        if (token.transactionHash !== action.token.transactionHash) return token;

        // // This is the one we want - return an updated value
        return {
          ...token,
          ...action.token
        };
      });

      return newTokens
    default:
      return state
  }
}
