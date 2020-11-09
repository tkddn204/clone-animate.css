import { combineReducers } from "redux";
import animationReducer, { CalloutAnimationState } from "./calloutAnimation";

export interface RootState {
  readonly animation: CalloutAnimationState
}

const rootReducer = combineReducers<RootState>({
  animation: animationReducer
})

export default rootReducer;