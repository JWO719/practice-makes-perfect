(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{785:function(e,t,n){"use strict";n.r(t);n(3),n(4),n(2),n(5),n(10);var r=n(1),o=n(0),i=n.n(o),a=n(788),c=(n(38),n(56),n(14),n(19),n(15),n(7),n(47),n(17),n(52)),u=n(6),s=n(790),l=n(791),f=n.n(l),d=n(54),p=n.n(d),b=(n(81),n(43)),h=n(89),y=n(168),v=39,m=37,O=38,g=40,j=32,w=80,T=79,x=71,A=27,S=33,C=34,_=function(e){return function(t){return t.mode===e?{mode:h.a.normal}:{mode:e}}},E=["input","select","textarea","a","button"],k=function(){var e=Object(b.a)();Object(o.useEffect)((function(){var t=function(t){var n=t.metaKey,r=t.ctrlKey,o=t.shiftKey,i=t.altKey;if(!n&&!r){var a=document.activeElement.tagName.toLowerCase();if(!E.includes(a))if(o)switch(t.keyCode){case j:Object(y.b)(e);break;case w:e.setState(_(h.a.print)),Object(c.navigate)(e.slug+"/print")}else if(i)switch(t.keyCode){case w:e.setState(_(h.a.presenter));break;case T:e.setState(_(h.a.overview));break;case x:e.setState(_(h.a.grid))}else switch(t.keyCode){case v:case g:case C:case j:Object(y.a)(e);break;case m:case O:case S:Object(y.b)(e);break;case A:e.setState({mode:h.a.normal})}}};return window.addEventListener("keydown",t),function(){window.removeEventListener("keydown",t)}}),[e])},P="mdx-deck-slide",L="mdx-deck-step",I=function(){var e=Object(b.a)(),t=Object(o.useState)(!1),n=t[0],r=t[1],i=function(){return r(!0)},a=function(){return r(!1)},u=function(t){var n=parseInt(t.newValue,10);if(!isNaN(n))switch(t.key){case P:Object(c.navigate)([e.slug,n].join("/"));break;case L:e.setState({step:n})}};Object(o.useEffect)((function(){r(document.hasFocus())}),[]),Object(o.useEffect)((function(){return n||window.addEventListener("storage",u),window.addEventListener("focus",i),window.addEventListener("blur",a),function(){n||window.removeEventListener("storage",u),window.removeEventListener("focus",i),window.removeEventListener("blur",a)}}),[n]),Object(o.useEffect)((function(){n&&(localStorage.setItem(P,e.index),localStorage.setItem(L,e.step))}),[n,e.index,e.step])},R=n(91);function N(){return(N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var D=function(e){return i.a.createElement(o.Fragment,null,e.children)},M=function(e){var t=Object(o.useState)("100vh"),n=t[0],r=t[1],i=Object(b.a)(),a=i.mode,c=i.theme;Object(o.useEffect)((function(){r(window.innerHeight);var e=function(e){r(window.innerHeight)},t=function(e){a===h.a.normal&&e.preventDefault()};return window.addEventListener("resize",e),document.body.addEventListener("touchstart",t),function(){window.removeEventListener("resize",e),document.body.removeEventListener("touchstart",t)}}),[a]);var s=c.Provider,l=void 0===s?D:s;return Object(u.d)(l,null,Object(u.d)("div",N({},e,{sx:{width:"100vw",height:a!==h.a.print?n:"100vh",variant:"styles.root","*":{boxSizing:"border-box"}}})))},F=n(107),H=n(106),z=n(174),q=n(175),Y=function(e){var t=Object(b.a)(),n=t.index,r=t.length;return Object(u.d)(i.a.Fragment,null,Object(u.d)("div",null,n," / ",r-1),Object(u.d)("div",{sx:{mx:4}},Object(u.d)("a",{href:c.globalHistory.location.href,rel:"noopener noreferrer",target:"_blank",sx:{color:"inherit",textDecoration:"none"}},"Open in New Window ↗︎")),Object(u.d)("div",{sx:{mx:"auto"}}),Object(u.d)("div",{sx:{display:"flex",alignItems:"center",mx:4}},Object(u.d)(q.a,null)),Object(u.d)("div",null,Object(u.d)(z.a,null)))},K=function(e){var t=e.slides,n=e.children,r=Object(b.a)(),o=t[r.index+1],a=!!r.notes&&i.a.Children.toArray(r.notes);return Object(u.d)("div",{sx:{display:"flex",flexDirection:"column",justifyContent:"space-between",height:"100vh",fontFamily:"ui",color:"white",bg:"black"}},Object(u.d)("div",{sx:{display:"flex",flex:"1 1 auto",height:"60vh"}},Object(u.d)("div",{sx:{width:"75%",p:3}},Object(u.d)(H.a,{zoom:.75},n)),Object(u.d)("div",{sx:{width:"25%",p:3}},Object(u.d)(H.a,{ratio:4/3,zoom:.25},Object(u.d)(F.a,{slide:o,preview:!0})),a&&Object(u.d)("div",{sx:{my:3}},a))),Object(u.d)("div",{sx:{height:96,p:3,display:"flex",alignItems:"center",fontSize:1,fontWeight:"bold",fontVariantNumeric:"tabular-nums"}},Object(u.d)(Y,null)))};function B(){return(B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var $=function(){},W=function(e){var t=e.slides,n=void 0===t?[]:t,r=e.ratio,a=void 0===r?16/9:r,c=e.zoom,s=void 0===c?.25:c,l=e.onClick,f=void 0===l?$:l,d=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["slides","ratio","zoom","onClick"]),p=Object(b.a)().index,h=Object(o.useRef)(null);return Object(o.useEffect)((function(){var e=h.current;e&&"function"==typeof e.scrollIntoViewIfNeeded&&e.scrollIntoViewIfNeeded()})),Object(u.d)(i.a.Fragment,null,n.map((function(e,t){return Object(u.d)("div",B({},d,{key:t,role:"link",ref:t===p?h:null,onClick:function(e){f(t)},style:p===t?{position:"relative",zIndex:1}:null,sx:{m:2,cursor:"pointer",outline:p===t?"4px solid cyan":null}}),Object(u.d)(H.a,{zoom:s,ratio:a},Object(u.d)(F.a,{slide:e,preview:!0})))})))},V=function(e){var t=e.slides,n=e.children,r=Object(b.a)(),o=r.slug,i=r.index,a=r.length;return Object(u.d)("div",{sx:{display:"flex",height:"100vh",fontFamily:"ui",color:"white",bg:"black"}},Object(u.d)("div",{sx:{width:100/6+"%",minWidth:0,flex:"none",height:"100vh",overflowY:"auto",WebkitOverflowScrolling:"touch",p:2}},Object(u.d)(W,{slides:t,zoom:1/6,onClick:function(e){Object(c.navigate)([o,e].join("/"))}})),Object(u.d)("div",{sx:{width:500/6+"%",py:3,pr:3,display:"flex",flexDirection:"column",height:"100vh"}},Object(u.d)("div",{sx:{flex:"1 1 auto"}},Object(u.d)(H.a,{zoom:5/6},n)),Object(u.d)("div",{sx:{py:3}},i," / ",a-1)))},X=function(e){var t=e.slides,n=Object(b.a)(),r=n.slug,o=n.setState;return Object(u.d)("div",{sx:{minHeight:"100vh",color:"white",bg:"black"}},Object(u.d)("div",{sx:{display:"flex",flexWrap:"wrap"}},Object(u.d)(W,{slides:t,onClick:function(e){Object(c.navigate)([r,e].join("/")),o({mode:h.a.normal})},sx:{width:"25%",m:0}})))};function U(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function J(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}function G(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Q(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?G(n,!0).forEach((function(t){Z(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):G(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Z(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var ee=function(){return k(),!1},te=function(){return I(),!1},ne=function(e){var t=e.slides,n=Q({},Object(b.a)(),{mode:h.a.print});return Object(r.d)(R.a.Provider,{value:n},t.map((function(e,t){return Object(r.d)(F.a,{key:t,slide:e,preview:!0})})))},re=function(e){var t=e.theme;return!!t.googleFont&&Object(r.d)(s.Helmet,null,Object(r.d)("link",{rel:"stylesheet",href:t.googleFont}))},oe=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.reduce((function(e,t){return"function"==typeof t?t(e):p()(e,t)}),{})},ie=function(e){var t=e.children;return Object(r.d)(i.a.Fragment,{children:t})},ae=function(e){var t,n,o=e.slides,a=void 0===o?[]:o,l=e.pageContext,d=l.title,p=l.slug,y=e.theme,v=void 0===y?{}:y,m=e.themes,O=void 0===m?[]:m,g=(J(e,["slides","pageContext","theme","themes"]),Object(b.a)()),j=(t=c.globalHistory.location.pathname.split("/"),n=Number(t[t.length-1]),isNaN(n)?0:n),w=a.head.children,T=oe.apply(void 0,[v].concat(U(O))),x=T.components,A=J(T,["components"]),S=Q({},g,{slug:p,length:a.length,index:j,steps:f()(g,"metadata."+j+".steps"),notes:f()(g,"metadata."+j+".notes"),theme:A}),C=ie;switch(S.mode){case h.a.presenter:C=K;break;case h.a.overview:C=V;break;case h.a.grid:C=X}return Object(r.d)(i.a.Fragment,null,Object(r.d)(s.Helmet,null,Object(r.d)("title",null,d),w),Object(r.d)(re,{theme:A}),Object(r.d)(R.a.Provider,{value:S},Object(r.d)(u.b,{components:x,theme:A},Object(r.d)(r.a,{styles:{body:{margin:0,overflow:S.mode===h.a.normal?"hidden":null}}}),Object(r.d)(ee,null),Object(r.d)(te,null),Object(r.d)(M,null,Object(r.d)(C,{slides:a},Object(r.d)(c.Router,{basepath:p,style:{height:"100%"}},Object(r.d)(F.a,{index:0,path:"/",slide:a[0]}),a.map((function(e,t){return Object(r.d)(F.a,{key:t,index:t,path:t+"/*",slide:e})})),Object(r.d)(ne,{path:"/print",slides:a})))))))},ce=n(213);function ue(){return(ue=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"pageQuery",(function(){return se}));var se="2133597988",le={wrapper:function(e){var t=Object(ce.a)(e);return Object(r.d)(ae,ue({},e,{slides:t}))}};t.default=function(e){var t=e.data.deck,n=(t.id,t.body),o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["data"]);return Object(r.d)((function(e){return Object(r.d)(a.MDXRenderer,ue({},e,{children:n}))}),ue({},o,{components:le}))}},788:function(e,t,n){var r=n(789);e.exports={MDXRenderer:r}},789:function(e,t,n){function r(e,t,n){return(r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var i=new(Function.bind.apply(e,r));return n&&o(i,n.prototype),i}).apply(null,arguments)}function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(n,!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n(15),n(4),n(5),n(38),n(56),n(19),n(7),n(3),n(105),n(14),n(2),n(264),n(264),n(105),n(38),n(56),n(14),n(19),n(15),n(7),n(3),n(4),n(2),n(5);var s=n(0),l=n(102),f=l.useMDXComponents,d=l.mdx,p=n(196).useMDXScope;e.exports=function(e){var t=e.scope,n=e.components,o=e.children,a=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["scope","components","children"]),u=f(n),l=p(t),b=s.useMemo((function(){if(!o)return null;var e=c({React:s,mdx:d},l),t=Object.keys(e),n=t.map((function(t){return e[t]}));return r(Function,["_fn"].concat(i(t),[""+o])).apply(void 0,[{}].concat(i(n)))}),[o,t]);return s.createElement(b,c({components:u},a))}},790:function(e,t,n){"use strict";(function(e){function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}n(17),n(9),n(105),n(10),n(19),n(7),n(3),n(4),n(2),n(5),Object.defineProperty(t,"__esModule",{value:!0});var o,i,a,c,u=r(n(30)),s=r(n(265)),l=r(n(266)),f=r(n(0)),d=r(n(135)),p="bodyAttributes",b="htmlAttributes",h="titleAttributes",y={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},v=(Object.keys(y).map((function(e){return y[e]})),"charset"),m="cssText",O="href",g="http-equiv",j="innerHTML",w="itemprop",T="name",x="property",A="rel",S="src",C={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},_="defaultTitle",E="defer",k="encodeSpecialCharacters",P="onChangeClientState",L="titleTemplate",I=Object.keys(C).reduce((function(e,t){return e[C[t]]=t,e}),{}),R=[y.NOSCRIPT,y.SCRIPT,y.STYLE],N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},D=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},M=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},H=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},z=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},q=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},Y=function(e){var t=V(e,y.TITLE),n=V(e,L);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=V(e,_);return t||r||void 0},K=function(e){return V(e,P)||function(){}},B=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return F({},e,t)}),{})},$=function(e,t){return t.filter((function(e){return void 0!==e[y.BASE]})).map((function(e){return e[y.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},W=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&Q("Helmet: "+e+' should be of type "Array". Instead found type "'+N(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var c=i[a],u=c.toLowerCase();-1===t.indexOf(u)||n===A&&"canonical"===e[n].toLowerCase()||u===A&&"stylesheet"===e[u].toLowerCase()||(n=u),-1===t.indexOf(c)||c!==j&&c!==m&&c!==w||(n=c)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][s]&&(o[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var c=i[a],u=d({},r[c],o[c]);r[c]=u}return e}),[]).reverse()},V=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},X=(o=Date.now(),function(e){var t=Date.now();t-o>16?(o=t,e(t)):setTimeout((function(){X(e)}),0)}),U=function(e){return clearTimeout(e)},J="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||X:e.requestAnimationFrame||X,G="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||U:e.cancelAnimationFrame||U,Q=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},Z=null,ee=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,s=e.scriptTags,l=e.styleTags,f=e.title,d=e.titleAttributes;re(y.BODY,r),re(y.HTML,o),ne(f,d);var p={baseTag:oe(y.BASE,n),linkTags:oe(y.LINK,i),metaTags:oe(y.META,a),noscriptTags:oe(y.NOSCRIPT,c),scriptTags:oe(y.SCRIPT,s),styleTags:oe(y.STYLE,l)},b={},h={};Object.keys(p).forEach((function(e){var t=p[e],n=t.newTags,r=t.oldTags;n.length&&(b[e]=n),r.length&&(h[e]=p[e].oldTags)})),t&&t(),u(e,b,h)},te=function(e){return Array.isArray(e)?e.join(""):e},ne=function(e,t){void 0!==e&&document.title!==e&&(document.title=te(e)),re(y.TITLE,t)},re=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute("data-react-helmet"),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),c=0;c<a.length;c++){var u=a[c],s=t[u]||"";n.getAttribute(u)!==s&&n.setAttribute(u,s),-1===o.indexOf(u)&&o.push(u);var l=i.indexOf(u);-1!==l&&i.splice(l,1)}for(var f=i.length-1;f>=0;f--)n.removeAttribute(i[f]);o.length===i.length?n.removeAttribute("data-react-helmet"):n.getAttribute("data-react-helmet")!==a.join(",")&&n.setAttribute("data-react-helmet",a.join(","))}},oe=function(e,t){var n=document.head||document.querySelector(y.HEAD),r=n.querySelectorAll(e+"[data-react-helmet]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===j)n.innerHTML=t.innerHTML;else if(r===m)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute("data-react-helmet","true"),o.some((function(e,t){return a=t,n.isEqualNode(e)}))?o.splice(a,1):i.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:i}},ie=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},ae=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[C[n]||n]=e[n],t}),t)},ce=function(e,t,n){switch(e){case y.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})["data-react-helmet"]=!0,o=ae(n,r),[f.createElement(y.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=ie(n),i=te(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+q(i,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+q(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case p:case b:return{toComponent:function(){return ae(t)},toString:function(){return ie(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})["data-react-helmet"]=!0,r);return Object.keys(t).forEach((function(e){var n=C[e]||e;if(n===j||n===m){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),f.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===j||e===m)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+q(r[t],n)+'"';return e?e+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===R.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},ue=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.scriptTags,s=e.styleTags,l=e.title,f=void 0===l?"":l,d=e.titleAttributes;return{base:ce(y.BASE,t,r),bodyAttributes:ce(p,n,r),htmlAttributes:ce(b,o,r),link:ce(y.LINK,i,r),meta:ce(y.META,a,r),noscript:ce(y.NOSCRIPT,c,r),script:ce(y.SCRIPT,u,r),style:ce(y.STYLE,s,r),title:ce(y.TITLE,{title:f,titleAttributes:d},r)}},se=s((function(e){return{baseTag:$([O],e),bodyAttributes:B(p,e),defer:V(e,E),encode:V(e,k),htmlAttributes:B(b,e),linkTags:W(y.LINK,[A,O],e),metaTags:W(y.META,[T,v,g,x,w],e),noscriptTags:W(y.NOSCRIPT,[j],e),onChangeClientState:K(e),scriptTags:W(y.SCRIPT,[S,j],e),styleTags:W(y.STYLE,[m],e),title:Y(e),titleAttributes:B(h,e)}}),(function(e){Z&&G(Z),e.defer?Z=J((function(){ee(e,(function(){Z=null}))})):(ee(e),Z=null)}),ue)((function(){return null})),le=(i=se,c=a=function(e){function t(){return D(this,t),z(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!l(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case y.SCRIPT:case y.NOSCRIPT:return{innerHTML:t};case y.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return F({},r,((t={})[n.type]=[].concat(r[n.type]||[],[F({},o,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(r.type){case y.TITLE:return F({},o,((t={})[r.type]=a,t.titleAttributes=F({},i),t));case y.BODY:return F({},o,{bodyAttributes:F({},i)});case y.HTML:return F({},o,{htmlAttributes:F({},i)})}return F({},o,((n={})[r.type]=F({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=F({},t);return Object.keys(e).forEach((function(t){var r;n=F({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return f.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[I[n]||n]=e[n],t}),t)}(H(o,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case y.LINK:case y.META:case y.NOSCRIPT:case y.SCRIPT:case y.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:a,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=H(e,["children"]),r=F({},n);return t&&(r=this.mapChildrenToProps(t,r)),f.createElement(i,r)},M(t,null,[{key:"canUseDOM",set:function(e){i.canUseDOM=e}}]),t}(f.Component),a.propTypes={base:u.object,bodyAttributes:u.object,children:u.oneOfType([u.arrayOf(u.node),u.node]),defaultTitle:u.string,defer:u.bool,encodeSpecialCharacters:u.bool,htmlAttributes:u.object,link:u.arrayOf(u.object),meta:u.arrayOf(u.object),noscript:u.arrayOf(u.object),onChangeClientState:u.func,script:u.arrayOf(u.object),style:u.arrayOf(u.object),title:u.string,titleAttributes:u.object,titleTemplate:u.string},a.defaultProps={defer:!0,encodeSpecialCharacters:!0},a.peek=i.peek,a.rewind=function(){var e=i.rewind();return e||(e=ue({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},c);le.renderStatic=le.rewind,t.Helmet=le}).call(this,n(63))},791:function(e,t,n){(function(t){n(20),n(13),n(9),n(8),n(3),n(4),n(14),n(16),n(2);var r="Expected a function",o="__lodash_hash_undefined__",i=1/0,a="[object Function]",c="[object GeneratorFunction]",u="[object Symbol]",s=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,l=/^\w*$/,f=/^\./,d=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,p=/\\(\\)?/g,b=/^\[object .+?Constructor\]$/,h="object"==typeof t&&t&&t.Object===Object&&t,y="object"==typeof self&&self&&self.Object===Object&&self,v=h||y||Function("return this")();var m,O=Array.prototype,g=Function.prototype,j=Object.prototype,w=v["__core-js_shared__"],T=(m=/[^.]+$/.exec(w&&w.keys&&w.keys.IE_PROTO||""))?"Symbol(src)_1."+m:"",x=g.toString,A=j.hasOwnProperty,S=j.toString,C=RegExp("^"+x.call(A).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),_=v.Symbol,E=O.splice,k=q(v,"Map"),P=q(Object,"create"),L=_?_.prototype:void 0,I=L?L.toString:void 0;function R(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function N(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function D(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function M(e,t){for(var n,r,o=e.length;o--;)if((n=e[o][0])===(r=t)||n!=n&&r!=r)return o;return-1}function F(e,t){for(var n,r=0,o=(t=function(e,t){if($(e))return!1;var n=typeof e;if("number"==n||"symbol"==n||"boolean"==n||null==e||V(e))return!0;return l.test(e)||!s.test(e)||null!=t&&e in Object(t)}(t,e)?[t]:$(n=t)?n:Y(n)).length;null!=e&&r<o;)e=e[K(t[r++])];return r&&r==o?e:void 0}function H(e){return!(!W(e)||(t=e,T&&T in t))&&(function(e){var t=W(e)?S.call(e):"";return t==a||t==c}(e)||function(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(n){}return t}(e)?C:b).test(function(e){if(null!=e){try{return x.call(e)}catch(t){}try{return e+""}catch(t){}}return""}(e));var t}function z(e,t){var n,r,o=e.__data__;return("string"==(r=typeof(n=t))||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==n:null===n)?o["string"==typeof t?"string":"hash"]:o.map}function q(e,t){var n=function(e,t){return null==e?void 0:e[t]}(e,t);return H(n)?n:void 0}R.prototype.clear=function(){this.__data__=P?P(null):{}},R.prototype.delete=function(e){return this.has(e)&&delete this.__data__[e]},R.prototype.get=function(e){var t=this.__data__;if(P){var n=t[e];return n===o?void 0:n}return A.call(t,e)?t[e]:void 0},R.prototype.has=function(e){var t=this.__data__;return P?void 0!==t[e]:A.call(t,e)},R.prototype.set=function(e,t){return this.__data__[e]=P&&void 0===t?o:t,this},N.prototype.clear=function(){this.__data__=[]},N.prototype.delete=function(e){var t=this.__data__,n=M(t,e);return!(n<0)&&(n==t.length-1?t.pop():E.call(t,n,1),!0)},N.prototype.get=function(e){var t=this.__data__,n=M(t,e);return n<0?void 0:t[n][1]},N.prototype.has=function(e){return M(this.__data__,e)>-1},N.prototype.set=function(e,t){var n=this.__data__,r=M(n,e);return r<0?n.push([e,t]):n[r][1]=t,this},D.prototype.clear=function(){this.__data__={hash:new R,map:new(k||N),string:new R}},D.prototype.delete=function(e){return z(this,e).delete(e)},D.prototype.get=function(e){return z(this,e).get(e)},D.prototype.has=function(e){return z(this,e).has(e)},D.prototype.set=function(e,t){return z(this,e).set(e,t),this};var Y=B((function(e){var t;e=null==(t=e)?"":function(e){if("string"==typeof e)return e;if(V(e))return I?I.call(e):"";var t=e+"";return"0"==t&&1/e==-i?"-0":t}(t);var n=[];return f.test(e)&&n.push(""),e.replace(d,(function(e,t,r,o){n.push(r?o.replace(p,"$1"):t||e)})),n}));function K(e){if("string"==typeof e||V(e))return e;var t=e+"";return"0"==t&&1/e==-i?"-0":t}function B(e,t){if("function"!=typeof e||t&&"function"!=typeof t)throw new TypeError(r);var n=function n(){var r=arguments,o=t?t.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var a=e.apply(this,r);return n.cache=i.set(o,a),a};return n.cache=new(B.Cache||D),n}B.Cache=D;var $=Array.isArray;function W(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function V(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&S.call(e)==u}e.exports=function(e,t,n){var r=null==e?void 0:F(e,t);return void 0===r?n:r}}).call(this,n(63))}}]);
//# sourceMappingURL=component---gatsby-theme-mdx-deck-src-templates-deck-js-fdcaa25e7f0863f41ae6.js.map