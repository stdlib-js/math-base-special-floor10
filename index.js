// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";function r(r){return r!=r}var e=Number.POSITIVE_INFINITY,n=Number.NEGATIVE_INFINITY;function t(r){return r===e||r===n}var i=Math.floor;function a(r){return i(r)===r}function o(r){return a(r/2)}function u(r){return o(r>0?r-1:r+1)}var f=Math.sqrt;function c(r){return Math.abs(r)}var s="function"==typeof Object.defineProperty?Object.defineProperty:null,l=Object.defineProperty;function p(r){return"number"==typeof r}function g(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function y(r,e,n){var t=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(t=!0,r=r.substr(1)),r=n?r+g(i):g(i)+r,t&&(r="-"+r)),r}var d=String.prototype.toLowerCase,h=String.prototype.toUpperCase;function v(r){var e,n,t;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,t=parseInt(n,10),!isFinite(t)){if(!p(n))throw new Error("invalid integer. Value: "+n);t=0}return t<0&&("u"===r.specifier||10!==e)&&(t=4294967295+t+1),t<0?(n=(-t).toString(e),r.precision&&(n=y(n,r.precision,r.padRight)),n="-"+n):(n=t.toString(e),t||r.precision?r.precision&&(n=y(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===h.call(r.specifier)?h.call(n):d.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var w=Math.abs,b=String.prototype.toLowerCase,m=String.prototype.toUpperCase,A=String.prototype.replace,_=/e\+(\d)$/,E=/e-(\d)$/,U=/^(\d+)$/,S=/^(\d+)e/,I=/\.0$/,x=/\.0*e/,k=/(\..*[^0])0*e/;function F(r){var e,n,t=parseFloat(r.arg);if(!isFinite(t)){if(!p(r.arg))throw new Error("invalid floating-point number. Value: "+n);t=r.arg}switch(r.specifier){case"e":case"E":n=t.toExponential(r.precision);break;case"f":case"F":n=t.toFixed(r.precision);break;case"g":case"G":w(t)<1e-4?((e=r.precision)>0&&(e-=1),n=t.toExponential(e)):n=t.toPrecision(r.precision),r.alternate||(n=A.call(n,k,"$1e"),n=A.call(n,x,"e"),n=A.call(n,I,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=A.call(n,_,"e+0$1"),n=A.call(n,E,"e-0$1"),r.alternate&&(n=A.call(n,U,"$1."),n=A.call(n,S,"$1.e")),t>=0&&r.sign&&(n=r.sign+n),n=r.specifier===m.call(r.specifier)?m.call(n):b.call(n)}function j(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}var T=String.fromCharCode,N=Array.isArray;function O(r){return r!=r}function V(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function $(r){var e,n,t,i,a,o,u,f,c,s,l,p,g;if(!N(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",u=1,f=0;f<r.length;f++)if("string"==typeof(t=r[f]))o+=t;else{if(e=void 0!==t.precision,!(t=V(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+t+"`.");for(t.mapping&&(u=t.mapping),n=t.flags,c=0;c<n.length;c++)switch(i=n.charAt(c)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===t.width){if(t.width=parseInt(arguments[u],10),u+=1,O(t.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[u],10),u+=1,O(t.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[u],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=v(t);break;case"s":t.maxWidth=e?t.precision:-1,t.arg=String(t.arg);break;case"c":if(!O(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=O(a)?String(t.arg):T(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=F(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=y(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=(s=t.arg,l=t.width,p=t.padRight,g=void 0,(g=l-s.length)<0?s:s=p?s+j(g):j(g)+s)),o+=t.arg||"",u+=1}return o}var G=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function H(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function W(r){var e,n,t,i;for(n=[],i=0,t=G.exec(r);t;)(e=r.slice(i,G.lastIndex-t[0].length)).length&&n.push(e),n.push(H(t)),i=G.lastIndex,t=G.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function C(r){var e,n;if("string"!=typeof r)throw new TypeError(C("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[W(r)],n=1;n<arguments.length;n++)e.push(arguments[n]);return $.apply(null,e)}var L=Object.prototype,P=L.toString,R=L.__defineGetter__,M=L.__defineSetter__,Z=L.__lookupGetter__,X=L.__lookupSetter__,Y=function(){try{return s({},"x",{}),!0}catch(r){return!1}}()?l:function(r,e,n){var t,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===P.call(r))throw new TypeError(C("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===P.call(n))throw new TypeError(C("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(Z.call(r,e)||X.call(r,e)?(t=r.__proto__,r.__proto__=L,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),a="get"in n,o="set"in n,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&R&&R.call(r,e,n.get),o&&M&&M.call(r,e,n.set),r};function q(r,e,n){Y(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}var z,B="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),D=Object.prototype.toString,J=Object.prototype.hasOwnProperty,K="function"==typeof Symbol?Symbol:void 0,Q="function"==typeof K?K.toStringTag:"",rr=B&&"symbol"==typeof Symbol.toStringTag?function(r){var e,n,t,i,a;if(null==r)return D.call(r);n=r[Q],a=Q,e=null!=(i=r)&&J.call(i,a);try{r[Q]=void 0}catch(e){return D.call(r)}return t=D.call(r),e?r[Q]=n:delete r[Q],t}:function(r){return D.call(r)},er="function"==typeof Uint32Array,nr="function"==typeof Uint32Array?Uint32Array:null,tr="function"==typeof Uint32Array?Uint32Array:void 0;z=function(){var r,e,n;if("function"!=typeof nr)return!1;try{e=new nr(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(er&&n instanceof Uint32Array||"[object Uint32Array]"===rr(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?tr:function(){throw new Error("not implemented")};var ir,ar=z,or="function"==typeof Float64Array,ur="function"==typeof Float64Array?Float64Array:null,fr="function"==typeof Float64Array?Float64Array:void 0;ir=function(){var r,e,n;if("function"!=typeof ur)return!1;try{e=new ur([1,3.14,-3.14,NaN]),n=e,r=(or&&n instanceof Float64Array||"[object Float64Array]"===rr(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?fr:function(){throw new Error("not implemented")};var cr,sr=ir,lr="function"==typeof Uint8Array,pr="function"==typeof Uint8Array?Uint8Array:null,gr="function"==typeof Uint8Array?Uint8Array:void 0;cr=function(){var r,e,n;if("function"!=typeof pr)return!1;try{e=new pr(e=[1,3.14,-3.14,256,257]),n=e,r=(lr&&n instanceof Uint8Array||"[object Uint8Array]"===rr(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?gr:function(){throw new Error("not implemented")};var yr,dr=cr,hr="function"==typeof Uint16Array,vr="function"==typeof Uint16Array?Uint16Array:null,wr="function"==typeof Uint16Array?Uint16Array:void 0;yr=function(){var r,e,n;if("function"!=typeof vr)return!1;try{e=new vr(e=[1,3.14,-3.14,65536,65537]),n=e,r=(hr&&n instanceof Uint16Array||"[object Uint16Array]"===rr(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?wr:function(){throw new Error("not implemented")};var br,mr={uint16:yr,uint8:dr};(br=new mr.uint16(1))[0]=4660;var Ar,_r,Er=52===new mr.uint8(br.buffer)[0];!0===Er?(Ar=1,_r=0):(Ar=0,_r=1);var Ur={HIGH:Ar,LOW:_r},Sr=new sr(1),Ir=new ar(Sr.buffer),xr=Ur.HIGH,kr=Ur.LOW;function Fr(r,e,n,t){return Sr[0]=r,e[t]=Ir[xr],e[t+n]=Ir[kr],e}function jr(r){return Fr(r,[0,0],1,0)}q(jr,"assign",Fr);var Tr=!0===Er?0:1,Nr=new sr(1),Or=new ar(Nr.buffer);function Vr(r,e){return Nr[0]=r,Or[Tr]=e>>>0,Nr[0]}function $r(r){return 0|r}var Gr,Hr,Wr=2147483647,Cr=2147483648,Lr=!0===Er?1:0,Pr=new sr(1),Rr=new ar(Pr.buffer);function Mr(r){return Pr[0]=r,Rr[Lr]}!0===Er?(Gr=1,Hr=0):(Gr=0,Hr=1);var Zr={HIGH:Gr,LOW:Hr},Xr=new sr(1),Yr=new ar(Xr.buffer),qr=Zr.HIGH,zr=Zr.LOW;function Br(r,e){return Yr[qr]=r,Yr[zr]=e,Xr[0]}var Dr=[0,0];function Jr(r,e){var n,t;return jr.assign(r,Dr,1,0),n=Dr[0],n&=Wr,t=Mr(e),Br(n|=t&=Cr,Dr[1])}var Kr=1072693247,Qr=1e300,re=1e-300,ee=!0===Er?1:0,ne=new sr(1),te=new ar(ne.buffer);function ie(r,e){return ne[0]=r,te[ee]=e>>>0,ne[0]}var ae=1023,oe=1048575,ue=1048576,fe=1072693248,ce=536870912,se=524288,le=20,pe=9007199254740992,ge=.9617966939259756,ye=.9617967009544373,de=-7.028461650952758e-9,he=[1,1.5],ve=[0,.5849624872207642],we=[0,1.350039202129749e-8],be=1.4426950408889634,me=1.4426950216293335,Ae=1.9259629911266175e-8,_e=1023,Ee=-1023,Ue=-1074,Se=22250738585072014e-324,Ie=4503599627370496;function xe(e,n,i,a){return r(e)||t(e)?(n[a]=e,n[a+i]=0,n):0!==e&&c(e)<Se?(n[a]=e*Ie,n[a+i]=-52,n):(n[a]=e,n[a+i]=0,n)}q((function(r){return xe(r,[0,0],1,0)}),"assign",xe);var ke=2146435072,Fe=2220446049250313e-31,je=2148532223,Te=[0,0],Ne=[0,0];function Oe(i,a){var o,u;return 0===a||0===i||r(i)||t(i)?i:(xe(i,Te,1,0),i=Te[0],a+=Te[1],a+=function(r){var e=Mr(r);return(e=(e&ke)>>>20)-ae|0}(i),a<Ue?Jr(0,i):a>_e?i<0?n:e:(a<=Ee?(a+=52,u=Fe):u=1,jr.assign(i,Ne,1,0),o=Ne[0],o&=je,u*Br(o|=a+ae<<20,Ne[1])))}var Ve=.6931471805599453,$e=1048575,Ge=1048576,He=1071644672,We=20,Ce=.6931471824645996,Le=-1.904654299957768e-9,Pe=1072693247,Re=1105199104,Me=1139802112,Ze=1083179008,Xe=1072693248,Ye=1083231232,qe=3230714880,ze=31,Be=1e300,De=1e-300,Je=8008566259537294e-32,Ke=[0,0],Qe=[0,0];function rn(i,o){var s,l,p,g,y,d,h,v,w,b,m,A,_,E;if(r(i)||r(o))return NaN;if(jr.assign(o,Ke,1,0),y=Ke[0],0===Ke[1]){if(0===o)return 1;if(1===o)return i;if(-1===o)return 1/i;if(.5===o)return f(i);if(-.5===o)return 1/f(i);if(2===o)return i*i;if(3===o)return i*i*i;if(4===o)return(i*=i)*i;if(t(o))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:c(r)<1==(n===e)?0:e}(i,o)}if(jr.assign(i,Ke,1,0),g=Ke[0],0===Ke[1]){if(0===g)return function(r,t){return t===n?e:t===e?0:t>0?u(t)?r:0:u(t)?Jr(e,r):e}(i,o);if(1===i)return 1;if(-1===i&&u(o))return-1;if(t(i))return i===n?rn(-0,-o):o<0?0:e}if(i<0&&!1===a(o))return(i-i)/(i-i);if(p=c(i),s=g&Wr|0,l=y&Wr|0,h=y>>>ze|0,d=(d=g>>>ze|0)&&u(o)?-1:1,l>Re){if(l>Me)return function(r,e){return(Mr(r)&Wr)<=Kr?e<0?Qr*Qr:re*re:e>0?Qr*Qr:re*re}(i,o);if(s<Pe)return 1===h?d*Be*Be:d*De*De;if(s>Xe)return 0===h?d*Be*Be:d*De*De;m=function(r,e){var n,t,i,a,o,u,f;return a=(i=e-1)*i*(0===(f=i)?.5:.5+f*(.25*f-.3333333333333333)),n=(u=i*Ae-a*be)-((t=Vr(t=(o=me*i)+u,0))-o),r[0]=t,r[1]=n,r}(Qe,p)}else m=function(r,e,n){var t,i,a,o,u,f,c,s,l,p,g,y,d,h,v,w,b,m,A,_,E;return m=0,n<ue&&(m-=53,n=Mr(e*=pe)),m+=(n>>le)-ae|0,n=(A=n&oe|0)|fe|0,A<=235662?_=0:A<767610?_=1:(_=0,m+=1,n-=ue),o=Vr(i=(w=(e=ie(e,n))-(c=he[_]))*(b=1/(e+c)),0),t=(n>>1|ce)+se,f=ie(0,t+=_<<18),v=(a=i*i)*a*(0===(E=a)?.5999999999999946:.5999999999999946+E*(.4285714285785502+E*(.33333332981837743+E*(.272728123808534+E*(.23066074577556175+.20697501780033842*E))))),f=Vr(f=3+(a=o*o)+(v+=(u=b*(w-o*f-o*(e-(f-c))))*(o+i)),0),l=Vr(l=(w=o*f)+(b=u*f+(v-(f-3-a))*i),0),p=ye*l,d=(g=de*l+(b-(l-w))*ge+we[_])-((y=Vr(y=p+g+(s=ve[_])+(h=m),0))-h-s-p),r[0]=y,r[1]=d,r}(Qe,p,s);if(A=(b=(o-(v=Vr(o,0)))*m[0]+o*m[1])+(w=v*m[0]),jr.assign(A,Ke,1,0),_=$r(Ke[0]),E=$r(Ke[1]),_>=Ze){if(0!=(_-Ze|E))return d*Be*Be;if(b+Je>A-w)return d*Be*Be}else if((_&Wr)>=Ye){if(0!=(_-qe|E))return d*De*De;if(b<=A-w)return d*De*De}return A=function(r,e,n){var t,i,a,o,u,f,c,s,l,p;return l=((s=r&Wr|0)>>We)-ae|0,c=0,s>He&&(i=ie(0,((c=r+(Ge>>l+1)>>>0)&~($e>>(l=((c&Wr)>>We)-ae|0)))>>>0),c=(c&$e|Ge)>>We-l>>>0,r<0&&(c=-c),e-=i),r=$r(r=Mr(f=1-((f=(a=(i=Vr(i=n+e,0))*Ce)+(o=(n-(i-e))*Ve+i*Le))*(t=f-(i=f*f)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(t-2)-((u=o-(f-a))+f*u)-f))),(r+=c<<We>>>0)>>We<=0?Oe(f,c):ie(f,r)}(_,w,b),d*A}var en=Math.ceil,nn=0x40000000000000,tn=.4342944818781689,an=25082946711645275e-27,on=.30102999566361177,un=3694239077158931e-28,fn=2146435072,cn=1048576,sn=1072693248,ln=[0,0];return function(e){var a,o;return r(e)||t(e)||0===e?e:(e<0?(e=-e,a=-1):a=1,o=function(e){var t,i,a,o,u,f,c,s,l,p,g,y,d,h;if(r(e)||e<0)return NaN;if(jr.assign(e,ln,1,0),f=ln[0],c=ln[1],h=0,f<cn){if(0==(f&Wr|c))return n;h-=54,f=Mr(e*=nn)}return f>=fn?e+e:f===sn&&0===c?0:(h+=(f>>20)-ae|0,y=h+=(d=614244+(f&=$e)&cn|0)>>20|0,a=.5*(l=(e=ie(e,f|d^sn))-1)*l,p=function(r){var e,n,t,i,a,o;return e=(a=(i=(t=r/(2+r))*t)*i)*(0===(o=a)?.3999999999940942:.3999999999940942+o*(.22222198432149784+.15313837699209373*o)),n=i*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(a),t*(.5*r*r+(n+e))}(l),o=Vr(o=l-a,0),i=y*un+((u=l-o-a+p)+o)*an+u*tn,(i+=(s=y*on)-(g=s+(t=o*tn))+t)+(t=g))}(e),(o=1===a?i(o):en(o))<=-324?0*a:o>308?n:a*rn(10,o))}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).floor10=e();
//# sourceMappingURL=index.js.map
