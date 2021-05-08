import {omit} from "lodash"
export const gameLikeReducer = (state = {
 
}, action) => {
  switch (action.type) {
    case "G_LIKE":
      return {
        ...state,
        [action.id]:true,
      }
    case "G_DISLIKE":
      return omit(state, action.id)
      
    default: return state;
  }
}