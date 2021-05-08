import { combineReducers } from "redux"
import {gameLikeReducer} from "./gameLikeReducer"
import { trailerLikeReducer } from "./trailerLikeReducer"
import { articleLikeReducer} from "./articleLikeReducer"


const rootReducer = combineReducers({
    articleLikeState: articleLikeReducer,
   trailerLikeState: trailerLikeReducer,
    gameLikeState: gameLikeReducer,
   
})
export default rootReducer
