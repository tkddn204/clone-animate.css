(this["webpackJsonpclone-animate.css"]=this["webpackJsonpclone-animate.css"]||[]).push([[0],{21:function(n){n.exports=JSON.parse('{"animationGroups":[{"title":"Attention seekers","animations":["bounce","flash","pulse","rubberBand","shakeX","shakeY","headShake","swing","tada","wobble","jello","heartBeat"]}]}')},37:function(n,t,e){"use strict";e.r(t);var i,r=e(1),a=e(0),o=e(8),c=e.n(o),u=e(3),s=e(2),l=e(5),f=e(15),d=e(4),b=e(19),m=e(7);!function(n){n.IDLE="callout/IDLE_ANIMATION",n.PROCESS="callout/PROCESS_ANIMATION"}(i||(i={}));var j={state:"idle",duration:"1s",context:void 0},O=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i.IDLE:return Object(m.a)(Object(m.a)({},n),{},{state:"idle",context:void 0});case i.PROCESS:return Object(m.a)(Object(m.a)({},n),{},{state:"process",context:t.payload});default:return n}},h=Object(d.combineReducers)({animation:O}),v=Object(d.createStore)(h,Object(b.composeWithDevTools)());function p(){var n=Object(u.a)(["\n    ","\n\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n\n  body {\n    font-family: 'Work Sans', sans-serif;\n    font-size: 16px;\n    line-height: 1.4;\n    color: #333;\n    margin: 0;\n    padding: 0;\n    word-break: keep-all;\n    overflow-x: hidden;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  ul, li, ol {\n    list-style: none;\n  }\n\n  code {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n  }\n"]);return p=function(){return n},n}var x=Object(s.createGlobalStyle)(p(),f.normalize);function g(n){var t=n.children;return Object(r.jsx)(a.StrictMode,{children:Object(r.jsxs)(l.a,{store:v,children:[Object(r.jsx)(x,{}),t]})})}function y(){var n=Object(u.a)(["\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  height: 100vh;\n"]);return y=function(){return n},n}var k=s.default.main(y()),S=e(20);function w(){var n=Object(u.a)(["\n  animation-name: ",";\n  transform-origin: center bottom;\n"]);return w=function(){return n},n}function C(){var n=Object(u.a)(["\n  from,\n  20%,\n  53%,\n  to {\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    transform: translate3d(0, 0, 0);\n  }\n\n  40%,\n  43% {\n    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n    transform: translate3d(0, -30px, 0) scaleY(1.1);\n  }\n\n  70% {\n    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n    transform: translate3d(0, -15px, 0) scaleY(1.05);\n  }\n\n  80% {\n    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    transform: translate3d(0, 0, 0) scaleY(0.95);\n  }\n\n  90% {\n    transform: translate3d(0, -4px, 0) scaleY(1.02);\n  }\n"]);return C=function(){return n},n}var N=Object(s.keyframes)(C()),z=Object(s.css)(w(),N);function A(){var n=Object(u.a)(["\n  animation-name: ",";\n"]);return A=function(){return n},n}function E(){var n=Object(u.a)(["\n  from,\n  50%,\n  to {\n    opacity: 1;\n  }\n\n  25%,\n  75% {\n    opacity: 0;\n  }\n"]);return E=function(){return n},n}var I=Object(s.keyframes)(E()),T=Object(s.css)(A(),I);function D(){var n=Object(u.a)([""]);return D=function(){return n},n}function R(){var n=Object(u.a)(["\n  font-size: 1.5rem;\n  color: #e69138;\n  margin: 0\n"]);return R=function(){return n},n}function F(){var n=Object(u.a)(["\n  font-size: 4.2rem;\n  color: #351c75;\n  margin: 0;\n\n  animation-duration: ",";\n  animation-fill-mode: both;\n  ","\n"]);return F=function(){return n},n}function L(){var n=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n"]);return L=function(){return n},n}var M=s.default.section(L()),P=s.default.h1(F(),(function(n){return n.animationDuration||"1s"}),(function(n){return n.animation})),G=s.default.h2(R()),Y=function(n){return"bounce"===n?z:"flash"===n?T:Object(s.css)(D())},B={onAnimationFinish:function(){return{type:i.IDLE}}},J=Object(l.b)((function(n){return{animation:n.animation}}),B)((function(n){var t=n.className,e=n.animation,i=n.title,o=n.subTitle,c=n.onAnimationFinish;return Object(a.useEffect)((function(){var n=setTimeout((function(){"process"===(null===e||void 0===e?void 0:e.state)&&c&&c()}),Object(S.a)((null===e||void 0===e?void 0:e.duration)||"1000"));return function(){clearTimeout(n)}}),[e]),Object(r.jsxs)(M,{children:[Object(r.jsx)(P,{className:t,animationDuration:null===e||void 0===e?void 0:e.duration,animation:Y(null===e||void 0===e?void 0:e.context),children:i}),Object(r.jsx)(G,{children:o})]})}));function _(){var n=Object(u.a)([""]);return _=function(){return n},n}function W(){var n=Object(u.a)([""]);return W=function(){return n},n}function X(){var n=Object(u.a)(["\n  text-align: center;\n  font-size: 0.8rem;\n"]);return X=function(){return n},n}var q=s.default.section(X()),H=s.default.p(W()),K=s.default.a(_()),Q=function(n){var t=n.className;return Object(r.jsx)(q,{className:t,children:Object(r.jsxs)(H,{children:["Made by ",Object(r.jsx)(K,{href:"https://github.com/tkddn204",target:"_blank",children:"Rightpair"})," and Referenced by ",Object(r.jsx)(K,{href:"https://animate.style/",target:"_blank",children:"Animate.css"})]})})};function U(){var n=Object(u.a)(["\n  font-size: 1.1rem;\n  display: block;\n  cursor: pointer;\n"]);return U=function(){return n},n}function V(){var n=Object(u.a)(["\n  margin: 0;\n  margin-block: 0;\n  padding-inline-start: 0;\n"]);return V=function(){return n},n}function Z(){var n=Object(u.a)(["\n  font-size: 1.2rem;\n  margin-bottom: 0.1em;\n"]);return Z=function(){return n},n}function $(){var n=Object(u.a)(["\n  width: 100%;\n  padding: 1rem;\n"]);return $=function(){return n},n}var nn=s.default.section($()),tn=s.default.h3(Z()),en=s.default.ul(V()),rn=s.default.li(U()),an={onClickAnimation:function(n){return function(n){return{type:i.PROCESS,payload:n}}(n)}},on=Object(l.b)(null,an)((function(n){var t=n.className,e=n.title,i=n.animations,a=n.onClickAnimation;return Object(r.jsxs)(nn,{className:t,children:[Object(r.jsx)(tn,{children:e}),Object(r.jsx)(en,{children:i.map((function(n){return Object(r.jsx)(rn,{onClick:null===a||void 0===a?void 0:a.bind(null,n),children:n},n)}))})]})}));function cn(){var n=Object(u.a)(["\n  width: 100%;\n  padding: 2rem;\n"]);return cn=function(){return n},n}var un=s.default.section(cn()),sn=function(n){var t=n.className,e=n.animationGroups;return Object(r.jsx)(un,{className:t,children:e.map((function(n){return Object(r.jsx)(on,{title:n.title,animations:n.animations},n.title)}))})},ln=e(21);function fn(){var n=Object(u.a)(["\n  position: absolute;\n  bottom: 1rem;\n"]);return fn=function(){return n},n}function dn(){var n=Object(u.a)(["\n  background: #f7d7b5;\n  width: 25%;\n"]);return dn=function(){return n},n}function bn(){var n=Object(u.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #fce5cd;\n  width: 75%;\n"]);return bn=function(){return n},n}var mn=s.default.article(bn()),jn=s.default.aside(dn()),On=Object(s.default)(Q)(fn()),hn=function(){return Object(r.jsx)(g,{children:Object(r.jsxs)(k,{children:[Object(r.jsxs)(mn,{children:[Object(r.jsx)(J,{title:"Clone-Animate.css",subTitle:"Just-clone-water CSS animations"}),Object(r.jsx)(On,{})]}),Object(r.jsx)(jn,{children:Object(r.jsx)(sn,{animationGroups:ln.animationGroups})})]})})},vn=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,38)).then((function(t){var e=t.getCLS,i=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;e(n),i(n),r(n),a(n),o(n)}))};c.a.render(Object(r.jsx)(hn,{}),document.getElementById("root")),vn()}},[[37,1,2]]]);
//# sourceMappingURL=main.76aa2055.chunk.js.map