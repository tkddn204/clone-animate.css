import CalloutAnimationReducer, { CalloutAnimationState } from './'
import { CalloutAnimationTypes, CalloutAnimationAction } from './actions'
describe('Callout animation initial actions', () => {
  const initialState: CalloutAnimationState = {
    state: 'idle',
    context: undefined,
  }

  test('should handle IDLE', () => {
    const usedAction: CalloutAnimationAction = {
      type: CalloutAnimationTypes.IDLE,
    }
    const actual = CalloutAnimationReducer(initialState, usedAction)
    expect(actual).toEqual(initialState)
  })

  test('should handle PROCESS', () => {
    const usedAction: CalloutAnimationAction = {
      type: CalloutAnimationTypes.PROCESS,
    }

    const expectedState: CalloutAnimationState = {
      state: 'process',
      context: undefined,
    }

    const actual = CalloutAnimationReducer(initialState, usedAction)
    expect(actual).toEqual(expectedState)
  })
})
