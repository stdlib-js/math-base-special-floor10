"use strict";var t=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var a=t(function(X,u){
var v=require('@stdlib/math-base-assert-is-nan/dist'),n=require('@stdlib/math-base-assert-is-infinite/dist'),o=require('@stdlib/math-base-special-pow/dist'),s=require('@stdlib/math-base-special-floor/dist'),f=require('@stdlib/math-base-special-ceil/dist'),q=require('@stdlib/math-base-special-log10/dist'),l=require('@stdlib/constants-float64-max-base10-exponent/dist'),c=require('@stdlib/constants-float64-min-base10-exponent-subnormal/dist'),p=require('@stdlib/constants-float64-ninf/dist');function N(e){var r,i;return v(e)||n(e)||e===0?e:(e<0?(e=-e,r=-1):r=1,i=q(e),r===1?i=s(i):i=f(i),i<=c?r*0:i>l?p:r*o(10,i))}u.exports=N
});var I=a();module.exports=I;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
