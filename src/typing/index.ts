export type AnimationGroupList = AnimationGroup[]
export interface AnimationGroup {
  title: string
  animations: string[]
}

export enum AnimationEnum {
  // Attention seekers
  bounce,
  flash,
  pulse,
  rubberBand,
  shakeX,
  shakeY,
  headShake,
  swing,
  tada,
  wobble,
  jello,
  heartBeat,
  // Back entrances
  backInDown,
  backInLeft,
  backInRight,
  backInUp,
  // Back exits
  backOutDown,
  backOutLeft,
  backOutRight,
  backOutUp,
  // Bouncing entrances
  bounceIn,
  bounceInDown,
  bounceInLeft,
  bounceInRight,
  bounceInUp,
  // Boouncing exits
  bounceOut,
  bounceOutDown,
  bounceOutLeft,
  bounceOutRight,
  bounceOutUp,
  // Fading entrances
  fadeIn,
  fadeInDown,
  fadeInDownBig,
  fadeInLeft,
  fadeInLeftBig,
  fadeInRight,
  fadeInRightBig,
  fadeInUp,
  fadeInUpBig,
  fadeInTopLeft,
  fadeInTopRight,
  fadeInBottomLeft,
  fadeInBottomRight,
  // Fading exits
  fadeOut,
  fadeOutDown,
  fadeOutDownBig,
  fadeOutLeft,
  fadeOutLeftBig,
  fadeOutRight,
  fadeOutRightBig,
  fadeOutUp,
  fadeOutUpBig,
  fadeOutTopLeft,
  fadeOutTopRight,
  fadeOutBottomLeft,
  fadeOutBottomRight,
  // Flippers
  flip,
  flipInX,
  flipInY,
  flipOutX,
  flipOutY,
  // Lightspeed
  lighSpeedInRight,
  lighSpeedInLeft,
  lighSpeedOutRight,
  lighSpeedOutLeft,
  // Rotating entrances
  rotateIn,
  rotateInDownLeft,
  rotateInDownRight,
  rotateInUpLeft,
  rotateInUpRight,
  // Rotating exits
  rotateOut,
  rotateOutDownLeft,
  rotateOutDownRight,
  rotateOutUpLeft,
  rotateOutUpRight,
  // Specials
  hinge,
  jackInTheBox,
  rollIn,
  rollOut,
  // Zooming entrances
  zoomIn,
  zoomInDown,
  zoomInLeft,
  zoomInRight,
  zoomInUp,
  // Zooming exits
  zoomOut,
  zoomOutDown,
  zoomOutLeft,
  zoomOutRight,
  zoomOutUp,
  // Sliding entrances
  slideInDown,
  slideInLeft,
  slideInRight,
  slideInUp,
  // Sliding exits
  slideOutDown,
  slideOutLeft,
  slideOutRight,
  slideOutUp,
}
