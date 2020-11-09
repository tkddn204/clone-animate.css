import { Reducer } from "redux";
import { CalloutAnimationAction, CalloutAnimationTypes } from "../calloutAnimation/actions";

type AnimationState = 'idle' | 'process';

export interface CalloutAnimationState {
  state: AnimationState;
  duration: string;
  context?: string;
}

const initialState: CalloutAnimationState = {
  state: 'idle',
  duration: '1s',
  context: undefined
};

const CalloutAnimationReducer: Reducer<CalloutAnimationState, CalloutAnimationAction> = (prevState = initialState, action) => {
  switch (action.type) {
    case CalloutAnimationTypes.IDLE:
      return { ...prevState, state: 'idle', context: undefined } as CalloutAnimationState;
    case CalloutAnimationTypes.PROCESS:
      return { ...prevState, state: 'process', context: action.payload } as CalloutAnimationState;
    default:
      return prevState as CalloutAnimationState;
  }
};

export default CalloutAnimationReducer;
