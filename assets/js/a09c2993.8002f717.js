"use strict";(self.webpackChunkopenmev_docs=self.webpackChunkopenmev_docs||[]).push([[128],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,h=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8495:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(3117),a=(n(7294),n(3905));const o={title:"What is OpenMEV?",sidebar_position:1,slug:"/"},i="OpenMEV",l={unversionedId:"introduction",id:"introduction",title:"What is OpenMEV?",description:"documentation and reference material for OpenMEV",source:"@site/docs/introduction.md",sourceDirName:".",slug:"/",permalink:"/",editUrl:"https://github.com/openmev/docs/edit/main/docs/introduction.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"What is OpenMEV?",sidebar_position:1,slug:"/"},sidebar:"tutorialSidebar",next:{title:"Introduction",permalink:"/technical-reference/intro"}},s={},c=[{value:"What is OpenMEV?",id:"what-is-openmev",level:3},{value:"What is <code>credible neutrality</code>?",id:"what-is-credible-neutrality",level:3}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"openmev"},"OpenMEV"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"documentation and reference material for OpenMEV")),(0,a.kt)("h3",{id:"what-is-openmev"},"What is OpenMEV?"),(0,a.kt)("p",null,"OpenMEV aims to provide a credible neutral platform for facilitating both aggregation and direct communication channels between block validators, block producers and block synchronizers for the Ethereum and EVM-based networks."),(0,a.kt)("p",null,"Example use cases include:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"users that would like to communicate their preferred transaction order within a block."),(0,a.kt)("li",{parentName:"ul"},"Account abstraction via private mempool")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"OpenMEV is built on top of SecureRPC. SecureRPC provides users with an accessible, convenient and secure infrastructure for transaction routing and execution.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"More accessible: allow ordinary users to easily discover the trading risk and value on the blockchain network."),(0,a.kt)("li",{parentName:"ul"},"More convenient: enable the arbitrage traders more opportunities to increase profits at a low cost."),(0,a.kt)("li",{parentName:"ul"},"More secure: make transactions on the blockchain network more secure and private.")),(0,a.kt)("h3",{id:"what-is-credible-neutrality"},"What is ",(0,a.kt)("inlineCode",{parentName:"h3"},"credible neutrality"),"?"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},'"...that it is not just neutrality that is required here, it is credible neutrality. That is, it is not just enough for a mechanism to not be designed to favor specific people or outcomes over others; it\'s also crucially important for a mechanism to be able to convince a large and diverse group of people that the mechanism at least makes that basic effort to be fair."'),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"Vitalik Buterin, ",(0,a.kt)("a",{parentName:"li",href:"https://nakamoto.com/credible-neutrality/"},"credible neutrality as a guiding principle")))),(0,a.kt)("p",null,"This ethos is at the heart of OpenMEV. Part of establishing credible neutrality is having a clear and comprehensive rule book that regulates off-chain behavior and activities. Our assumption concerning governance is that methods and processes that work in legacy markets may not be applicable in adversarial environments such as permissionless blockchains. With that understanding it is important not to rely solely on such systems and mechanics long term."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Discuss this and more on our ",(0,a.kt)("a",{parentName:"p",href:"https://forums.manifoldfinance.com"},"discourse forums"))),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),(0,a.kt)("a",{parentName:"h5",href:"https://medium.com/-research/we-live-in-a-mempool-backrunning-the-mev-crisis-a4ea0b493b05"},"MEV or Maximal Extractable Value")," is the value of the ability to order transactions within a block or blocks.")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("ul",{parentName:"div"},(0,a.kt)("li",{parentName:"ul"},"Tom Schmidt, Dragonfly Capital :::")),(0,a.kt)("h2",{parentName:"div",id:"getting-started"},"Getting started"),(0,a.kt)("p",{parentName:"div"},"OpenMEV consists of several components. If you want to learn more about the way it works, go to our ",(0,a.kt)("a",{parentName:"p",href:"/technical-reference/intro"},"technical overview"),". If you have an application or a service that needs a system to prevent MEV attacks, you can read our guides on how to integrate our SDK."))))}p.isMDXComponent=!0}}]);