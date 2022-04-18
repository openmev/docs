"use strict";(self.webpackChunkopenmev_docs=self.webpackChunkopenmev_docs||[]).push([[975],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||s;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<s;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5748:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var a=n(3117),r=(n(7294),n(3905));const s={sidebar_position:5},i="Transaction Status API",o={unversionedId:"transaction-status",id:"transaction-status",title:"Transaction Status API",description:"API Endpoint for Querying your Transaction Status",source:"@site/docs/transaction-status.md",sourceDirName:".",slug:"/transaction-status",permalink:"/transaction-status",editUrl:"https://github.com/openmev/docs/edit/main/docs/transaction-status.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"OpenMEV RPC",permalink:"/api"},next:{title:"References",permalink:"/references"}},l={},c=[{value:"Potential statuses",id:"potential-statuses",level:2},{value:"Privacy",id:"privacy",level:2},{value:"Response Message",id:"response-message",level:2},{value:"Typescript Library",id:"typescript-library",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"transaction-status-api"},"Transaction Status API"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"API Endpoint for Querying your Transaction Status")),(0,r.kt)("p",null,"Transactions that you submit to OpenMEV won't be observable in the public mempool."),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"This documentation refers to the latest version of OpenMEV (",(0,r.kt)("a",{parentName:"h5",href:"#"},"v2.0.0-draft"),"), which is still being drafted")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"})),(0,r.kt)("h2",{id:"potential-statuses"},"Potential statuses"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"PENDING")," - The transaction was received and is currently being submitted to miners"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"INCLUDED")," - The transaction was included on-chain"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"FAILED")," - The transaction was submitted for 25 blocks and failed to be included on-chain"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"CANCELLED")," - The transaction was cancelled by the user and not included on-chain"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"UNKNOWN")," - The transaction was not received")),(0,r.kt)("h2",{id:"privacy"},"Privacy"),(0,r.kt)("p",null,"In order to receive a response from the status API you must provide a valid transaction hash to look up."),(0,r.kt)("h2",{id:"response-message"},"Response Message"),(0,r.kt)("p",null,"OpenMEV Status API is flashbots compatible, meaning it covers at least version 0.6+ of Flashbots API."),(0,r.kt)("p",null,"To check the status of your transactions query the OpenMEV API Endpoint. Response messages are formatted as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status": "PENDING",\n  "hash": "YOUR_TX_HASH",\n  "maxBlockNumber": "latest",\n  "transaction": {\n    "from": "<SENDER>",\n    "to": "<RECEIVER>",\n    "gasLimit": "23000",\n    "maxFeePerGas": "300",\n    "maxPriorityFeePerGas": "10",\n    "nonce": "42",\n    "value": "1333333333337"\n  }\n}\n')),(0,r.kt)("h2",{id:"typescript-library"},"Typescript Library"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// @see {@link https://github.com/manifoldfinance/libsushi/blob/master/src/SushiGuard/index.ts}\n/**\n * @package OpenMevTxState\n * @version 2022.04\n * @see {@link docs.openmev.org}\n * @notice This is a flashbots-api compatible interface ( ~v0.6 )\n *\n * - UNCHECKED -> Tx status has not been checked and there's no information about it.\n * - PROCESSING -> Tx checks are in place until a resolution happens: OK, INDETERMINATE, ERROR.\n * - OK -> Relay received the Tx && all downstream miners accepted without complains && tx mined successfully\n * - INDETERMINATE -> Relay received correctly the Tx && at least one miner accepted the TX && TX potentially mineable\n * - ERROR -> Relay hasn't received the TX || none of the miners accepted the Tx || Tx was not mined successfully\n *\n */\n\nexport enum PrivateTxState {\n  UNCHECKED = 'UNCHECKED',\n  PROCESSING = 'PROCESSING',\n  OK = 'OK',\n  INDETERMINATE = 'INDETERMINATE',\n  ERROR = 'ERROR',\n}\n\nexport type RelayResponses = Record<string, RelayResponse>;\n\nexport interface RelayResponse {\n  response: JsonRpcResponse<any>;\n  error?: string;\n}\n\nexport interface PrivateTxStatus {\n  transactionHash: string;\n  receivedAt: string;\n  relayedAt?: string;\n  minedAt?: string;\n  relayFailure?: boolean;\n  relayResponses?: RelayResponses;\n}\n")))}u.isMDXComponent=!0}}]);