import { css, Interpolation, InterpolationFunction } from 'styled-components'
import AttentionSeekers from './AttentionSeekers'

export default {
  AttentionSeekers,
}

export type AnimationDuration = number | undefined
export type AnimationCSS = Interpolation<AnimationDuration>

const animationMap: Record<string, AnimationCSS> = {
  bounce: AttentionSeekers.Bounce,
  flash: AttentionSeekers.Flash,
  headShake: AttentionSeekers.HeadShake,
  heartBeat: AttentionSeekers.HeartBeat,
  jello: AttentionSeekers.Jello,
  pulse: AttentionSeekers.Pulse,
  rubberBand: AttentionSeekers.RubberBand,
  shake: AttentionSeekers.Shake,
  shakeX: AttentionSeekers.ShakeX,
  shakeY: AttentionSeekers.ShakeY,
  swing: AttentionSeekers.Swing,
  tada: AttentionSeekers.Tada,
  wobble: AttentionSeekers.Wobble,
}

interface GetAnimationCSS {
  (animationName?: string, duration?: AnimationDuration): AnimationCSS
}
export const getAnimationCSS: GetAnimationCSS = (
  animationName?: string,
  duration?: AnimationDuration
) => {
  if (animationName) {
    if (typeof animationMap[animationName] === 'function') {
      return (animationMap[animationName] as InterpolationFunction<
        AnimationDuration
      >)(duration)
    }

    return animationMap[animationName]
  }

  return css``
}

interface animationGroup {
  title: string
  animations: string[]
}
export const animationGroups: animationGroup[] = [
  {
    title: 'Attention seekers',
    animations: [
      'bounce',
      'flash',
      'pulse',
      'rubberBand',
      'shakeX',
      'shakeY',
      'headShake',
      'swing',
      'tada',
      'wobble',
      'jello',
      'heartBeat',
    ],
  },
  {
    title: 'Back entrances',
    animations: ['backInDown', 'backInLeft', 'backInRight', 'backInUp'],
  },
  {
    title: 'Back exits',
    animations: ['backOutDown', 'backOutLeft', 'backOutRight', 'backOutUp'],
  },
  {
    title: 'Bouncing entrances',
    animations: [
      'bounceIn',
      'bounceInDown',
      'bounceInLeft',
      'bounceInRight',
      'bounceInUp',
    ],
  },
  {
    title: 'Bouncing exits',
    animations: [
      'bounceOut',
      'bounceOutDown',
      'bounceOutLeft',
      'bounceOutRight',
      'bounceOutUp',
    ],
  },
  {
    title: 'Fading entrances',
    animations: [
      'fadeIn',
      'fadeInDown',
      'fadeInDownBig',
      'fadeInLeft',
      'fadeInLeftBig',
      'fadeInRight',
      'fadeInRightBig',
      'fadeInUp',
      'fadeInUpBig',
      'fadeInTopLeft',
      'fadeInTopRight',
      'fadeInBottomLeft',
      'fadeInBottomRight',
    ],
  },
  {
    title: 'Fading exits',
    animations: [
      'fadeOut',
      'fadeOutDown',
      'fadeOutDownBig',
      'fadeOutLeft',
      'fadeOutLeftBig',
      'fadeOutRight',
      'fadeOutRightBig',
      'fadeOutUp',
      'fadeOutUpBig',
      'fadeOutTopLeft',
      'fadeOutTopRight',
      'fadeOutBottomRight',
      'fadeOutBottomLeft',
    ],
  },
  {
    title: 'Flippers',
    animations: ['flip', 'flipInX', 'flipInY', 'flipOutX', 'flipOutY'],
  },
  {
    title: 'Lightspeed',
    animations: [
      'lightSpeedInRight',
      'lightSpeedInLeft',
      'lightSpeedOutRight',
      'lightSpeedOutLeft',
    ],
  },
  {
    title: 'Rotating entrances',
    animations: [
      'rotateIn',
      'rotateInDownLeft',
      'rotateInDownRight',
      'rotateInUpLeft',
      'rotateInUpRight',
    ],
  },
  {
    title: 'Rotating exits',
    animations: [
      'rotateOut',
      'rotateOutDownLeft',
      'rotateOutDownRight',
      'rotateOutUpLeft',
      'rotateOutUpRight',
    ],
  },
  {
    title: 'Specials',
    animations: ['hinge', 'jackInTheBox', 'rollIn', 'rollOut'],
  },
  {
    title: 'Zooming entrances',
    animations: [
      'zoomIn',
      'zoomInDown',
      'zoomInLeft',
      'zoomInRight',
      'zoomInUp',
    ],
  },
  {
    title: 'Zooming exits',
    animations: [
      'zoomOut',
      'zoomOutDown',
      'zoomOutLeft',
      'zoomOutRight',
      'zoomOutUp',
    ],
  },
  {
    title: 'Sliding entrances',
    animations: ['slideInDown', 'slideInLeft', 'slideInRight', 'slideInUp'],
  },
  {
    title: 'Sliding exits',
    animations: ['slideOutDown', 'slideOutLeft', 'slideOutRight', 'slideOutUp'],
  },
]
