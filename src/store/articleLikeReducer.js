import {omit} from "lodash"
export const articleLikeReducer = (state = {

}, action) => {
  switch (action.type) {
    case "A_LIKE":
      return {
        ...state,
        [action.id]: true,
      }
      case "A_DISLIKE":
      return omit(state, action.id)
    
        default:
          return state;
  }
}
