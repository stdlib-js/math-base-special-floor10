// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=function(r){return r!=r},n=Number.POSITIVE_INFINITY,t=Number.NEGATIVE_INFINITY,e=n,u=t;var i=function(r){return r===e||r===u},o=Math.floor,f=o;var a=function(r){return f(r)===r},c=a;var v=function(r){return c(r/2)};var y=function(r){return v(r>0?r-1:r+1)},l=Math.sqrt;var p=function(r){return Math.abs(r)};var A=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var w=function(){return A&&"symbol"==typeof Symbol.toStringTag},b=Object.prototype.toString,U=b;var m=function(r){return U.call(r)},h=Object.prototype.hasOwnProperty;var I=function(r,n){return null!=r&&h.call(r,n)},N="function"==typeof Symbol?Symbol.toStringTag:"",s=I,d=N,F=b;var S=m,H=function(r){var n,t,e;if(null==r)return F.call(r);t=r[d],n=s(r,d);try{r[d]=void 0}catch(n){return F.call(r)}return e=F.call(r),n?r[d]=t:delete r[d],e},O=w()?H:S,g=O,E="function"==typeof Uint32Array;var j="function"==typeof Uint32Array?Uint32Array:null,T=function(r){return E&&r instanceof Uint32Array||"[object Uint32Array]"===g(r)},G=j;var L=function(){var r,n;if("function"!=typeof G)return!1;try{n=new G(n=[1,3.14,-3.14,4294967296,4294967297]),r=T(n)&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var M="function"==typeof Uint32Array?Uint32Array:void 0,W=function(){throw new Error("not implemented")},x=L()?M:W,P=O,V="function"==typeof Float64Array;var Y="function"==typeof Float64Array?Float64Array:null,_=function(r){return V&&r instanceof Float64Array||"[object Float64Array]"===P(r)},q=Y;var k=function(){var r,n;if("function"!=typeof q)return!1;try{n=new q([1,3.14,-3.14,NaN]),r=_(n)&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r};var z="function"==typeof Float64Array?Float64Array:void 0,B=function(){throw new Error("not implemented")},C=k()?z:B,D=O,J="function"==typeof Uint8Array;var K="function"==typeof Uint8Array?Uint8Array:null,Q=function(r){return J&&r instanceof Uint8Array||"[object Uint8Array]"===D(r)},R=K;var X=function(){var r,n;if("function"!=typeof R)return!1;try{n=new R(n=[1,3.14,-3.14,256,257]),r=Q(n)&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var Z="function"==typeof Uint8Array?Uint8Array:void 0,$=function(){throw new Error("not implemented")},rr=X()?Z:$,nr=O,tr="function"==typeof Uint16Array;var er="function"==typeof Uint16Array?Uint16Array:null,ur=function(r){return tr&&r instanceof Uint16Array||"[object Uint16Array]"===nr(r)},ir=er;var or=function(){var r,n;if("function"!=typeof ir)return!1;try{n=new ir(n=[1,3.14,-3.14,65536,65537]),r=ur(n)&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var fr,ar="function"==typeof Uint16Array?Uint16Array:void 0,cr=function(){throw new Error("not implemented")},vr={uint16:or()?ar:cr,uint8:rr};(fr=new vr.uint16(1))[0]=4660;var yr,lr,pr=52===new vr.uint8(fr.buffer)[0];!0===pr?(yr=1,lr=0):(yr=0,lr=1);var Ar=x,wr={HIGH:yr,LOW:lr},br=new C(1),Ur=new Ar(br.buffer),mr=wr.HIGH,hr=wr.LOW;var Ir=function(r,n){return br[0]=n,r[0]=Ur[mr],r[1]=Ur[hr],r};var Nr=function(r,n){return 1===arguments.length?Ir([0,0],r):Ir(r,n)},sr=x,dr=!0===pr?0:1,Fr=new C(1),Sr=new sr(Fr.buffer);var Hr=function(r,n){return Fr[0]=r,Sr[dr]=n>>>0,Fr[0]},Or=Hr;var gr=function(r){return 0|r},Er=x,jr=!0===pr?1:0,Tr=new C(1),Gr=new Er(Tr.buffer);var Lr,Mr,Wr=function(r){return Tr[0]=r,Gr[jr]};!0===pr?(Lr=1,Mr=0):(Lr=0,Mr=1);var xr=x,Pr={HIGH:Lr,LOW:Mr},Vr=new C(1),Yr=new xr(Vr.buffer),_r=Pr.HIGH,qr=Pr.LOW;var kr=function(r,n){return Yr[_r]=r,Yr[qr]=n,Vr[0]},zr=kr,Br=Nr,Cr=Wr,Dr=zr,Jr=[0,0];var Kr=function(r,n){var t,e;return Br(Jr,r),t=Jr[0],t&=2147483647,e=Cr(n),Dr(t|=e&=2147483648,Jr[1])},Qr=y,Rr=Kr,Xr=t,Zr=n;var $r=function(r,n){return n===Xr?Zr:n===Zr?0:n>0?Qr(n)?r:0:Qr(n)?Rr(Zr,r):Zr},rn=Wr;var nn=function(r,n){return(2147483647&rn(r))<=1072693247?n<0?1/0:0:n>0?1/0:0},tn=p,en=n;var un=function(r,n){return-1===r?(r-r)/(r-r):1===r?1:tn(r)<1==(n===en)?0:en},on=x,fn=!0===pr?1:0,an=new C(1),cn=new on(an.buffer);var vn=function(r,n){return an[0]=r,cn[fn]=n>>>0,an[0]},yn=vn;var ln=Wr,pn=Or,An=yn,wn=function(r){return 0===r?.5999999999999946:.5999999999999946+r*(.4285714285785502+r*(.33333332981837743+r*(.272728123808534+r*(.23066074577556175+.20697501780033842*r))))},bn=[1,1.5],Un=[0,.5849624872207642],mn=[0,1.350039202129749e-8];var hn=Or,In=function(r){return 0===r?.5:.5+r*(.25*r-.3333333333333333)};var Nn=i,sn=r,dn=p;var Fn=function(r,n){return sn(n)||Nn(n)?(r[0]=n,r[1]=0,r):0!==n&&dn(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)};var Sn=Wr;var Hn=function(r){var n=Sn(r);return(n=(2146435072&n)>>>20)-1023|0},On=n,gn=t,En=r,jn=i,Tn=Kr,Gn=function(r,n){return 1===arguments.length?Fn([0,0],r):Fn(r,n)},Ln=Hn,Mn=Nr,Wn=zr,xn=[0,0],Pn=[0,0];var Vn=function(r,n){var t,e;return 0===n||0===r||En(r)||jn(r)?r:(Gn(xn,r),n+=xn[1],(n+=Ln(r=xn[0]))<-1074?Tn(0,r):n>1023?r<0?gn:On:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,Mn(Pn,r),t=Pn[0],t&=2148532223,e*Wn(t|=n+1023<<20,Pn[1])))};var Yn=Wr,_n=yn,qn=Or,kn=gr,zn=Vn,Bn=function(r){return 0===r?.16666666666666602:.16666666666666602+r*(r*(6613756321437934e-20+r*(4.1381367970572385e-8*r-16533902205465252e-22))-.0027777777777015593)};var Cn=r,Dn=y,Jn=i,Kn=a,Qn=l,Rn=p,Xn=Nr,Zn=Or,$n=gr,rt=t,nt=n,tt=$r,et=nn,ut=un,it=function(r,n,t){var e,u,i,o,f,a,c,v,y,l,p,A,w,b,U,m,h,I,N,s;return I=0,t<1048576&&(I-=53,t=ln(n*=9007199254740992)),I+=(t>>20)-1023|0,t=1072693248|(N=1048575&t|0),N<=235662?s=0:N<767610?s=1:(s=0,I+=1,t-=1048576),e=524288+(t>>1|536870912),f=(h=1/((n=An(n,t))+(c=bn[s])))*((m=n-c)-(o=pn(u=m*h,0))*(a=An(0,e+=s<<18))-o*(n-(a-c))),U=(i=u*u)*i*wn(i),a=pn(a=3+(i=o*o)+(U+=f*(o+u)),0),w=(p=-7.028461650952758e-9*(y=pn(y=(m=o*a)+(h=f*a+(U-(a-3-i))*u),0))+.9617966939259756*(h-(y-m))+mn[s])-((A=pn(A=(l=.9617967009544373*y)+p+(v=Un[s])+(b=I),0))-b-v-l),r[0]=A,r[1]=w,r},ot=function(r,n){var t,e,u,i,o;return t=(o=1.9259629911266175e-8*(u=n-1)-1.4426950408889634*(u*u*In(u)))-((e=hn(e=(i=1.4426950216293335*u)+o,0))-i),r[0]=e,r[1]=t,r},ft=function(r,n,t){var e,u,i,o,f,a,c,v,y,l;return l=((y=2147483647&r|0)>>20)-1023|0,v=0,y>1071644672&&(e=((v=r+(1048576>>l+1)>>>0)&~(1048575>>(l=((2147483647&v)>>20)-1023|0)))>>>0,v=(1048575&v|1048576)>>20-l>>>0,r<0&&(v=-v),n-=i=_n(0,e)),a=(f=.6931471805599453*(t-((i=qn(i=t+n,0))-n))+-1.904654299957768e-9*i)-((c=(o=.6931471824645996*i)+f)-o),u=c-(i=c*c)*Bn(i),r=Yn(c=1-(c*u/(u-2)-(a+c*a)-c)),r=kn(r),c=(r+=v<<20>>>0)>>20<=0?zn(c,v):_n(c,r)},at=1e300,ct=1e-300,vt=[0,0],yt=[0,0];var lt=function r(n,t){var e,u,i,o,f,a,c,v,y,l,p,A,w,b;if(Cn(n)||Cn(t))return NaN;if(Xn(vt,t),f=vt[0],0===vt[1]){if(0===t)return 1;if(1===t)return n;if(-1===t)return 1/n;if(.5===t)return Qn(n);if(-.5===t)return 1/Qn(n);if(2===t)return n*n;if(3===t)return n*n*n;if(4===t)return(n*=n)*n;if(Jn(t))return ut(n,t)}if(Xn(vt,n),o=vt[0],0===vt[1]){if(0===o)return tt(n,t);if(1===n)return 1;if(-1===n&&Dn(t))return-1;if(Jn(n))return n===rt?r(-0,-t):t<0?0:nt}if(n<0&&!1===Kn(t))return(n-n)/(n-n);if(i=Rn(n),e=2147483647&o|0,u=2147483647&f|0,c=f>>>31|0,a=(a=o>>>31|0)&&Dn(t)?-1:1,u>1105199104){if(u>1139802112)return et(n,t);if(e<1072693247)return 1===c?a*at*at:a*ct*ct;if(e>1072693248)return 0===c?a*at*at:a*ct*ct;p=ot(yt,i)}else p=it(yt,i,e);if(l=(t-(v=Zn(t,0)))*p[0]+t*p[1],y=v*p[0],Xn(vt,A=l+y),w=$n(vt[0]),b=$n(vt[1]),w>=1083179008){if(0!=(w-1083179008|b))return a*at*at;if(l+8008566259537294e-32>A-y)return a*at*at}else if((2147483647&w)>=1083231232){if(0!=(w-3230714880|b))return a*ct*ct;if(l<=A-y)return a*ct*ct}return a*(A=ft(w,y,l))},pt=lt,At=Math.ceil;var wt=Wr,bt=function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)},Ut=function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))};var mt=Wr,ht=yn,It=Or,Nt=r,st=t,dt=function(r){var n,t,e,u,i,o,f,a,c,v;return u=r-1,(1048575&2+(e=wt(r)))<3?0===u?0:u*u*(.3333333333333333*u-.5):(c=(e&=1048575)-398458|0,v=440401-e|0,t=(a=(o=(i=u/(2+u))*i)*o)*bt(a),f=o*Ut(a)+t,(c|=v)>0?i*((n=.5*u*u)+f)-n:i*(f-u))};var Ft=function(r){var n,t,e,u,i,o,f;return Nt(r)||r<0?NaN:0===r?st:(i=0,(t=mt(r))<1048576&&(i-=54,t=mt(r*=0x40000000000000)),t>=2146435072?r+r:(i+=(t>>20)-1023|0,r=ht(r,(t&=1048575)|1072693248^(u=t+614244&1048576|0)),o=i+=u>>20|0,e=dt(r),f=3694239077158931e-28*o+25082946711645275e-27*((r-=1)+e),(f+=.4342944818781689*(r-(n=It(r,0))+e)+.4342944818781689*n)+.30102999566361177*o))};function St(n){var e,u;return r(n)||i(n)||0===n?n:(n<0?(n=-n,e=-1):e=1,u=Ft(n),(u=1===e?o(u):At(u))<=-324?0*e:u>308?t:e*pt(10,u))}export{St as default};
//# sourceMappingURL=mod.js.map
