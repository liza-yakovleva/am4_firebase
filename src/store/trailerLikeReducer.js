
import {omit} from "lodash"
export const trailerLikeReducer = (state = {
}, action) => {
  switch (action.type) {
    case "TR_LIKE":
      return {
        ...state,
        [action.id]:true,
      }
    case "TR_DISLIKE":
      return omit(state, action.id)
    default: return state;
  }
}