import { Action, ActionCreator } from 'redux'

export enum CalloutAnimationTypes {
  IDLE = 'callout/IDLE_ANIMATION',
  PROCESS = 'callout/PROCESS_ANIMATION',
}

interface PayloadAction<P> extends Action {
  payload?: P
}

interface IdleAnimation extends Action<CalloutAnimationTypes> {
  type: CalloutAnimationTypes.IDLE
}

interface ProcessAnimation extends PayloadAction<string> {
  type: CalloutAnimationTypes.PROCESS
  payload?: string
}

export const idleAnimationAction: ActionCreator<IdleAnimation> = () => ({
  type: CalloutAnimationTypes.IDLE,
})

export const processAnimationAction: ActionCreator<ProcessAnimation> = (
  animation: string
) => ({
  type: CalloutAnimationTypes.PROCESS,
  payload: animation,
})

export type CalloutAnimationAction = IdleAnimation | ProcessAnimation
