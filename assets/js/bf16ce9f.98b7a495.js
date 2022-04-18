"use strict";(self.webpackChunkopenmev_docs=self.webpackChunkopenmev_docs||[]).push([[759],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(t),m=a,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=p;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5886:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=t(3117),a=(t(7294),t(3905));const o={},i="Private Transactions",s={unversionedId:"guides/send-private-tx",id:"guides/send-private-tx",title:"Private Transactions",description:"How to send a single transaction using SecureRPC",source:"@site/docs/guides/send-private-tx.md",sourceDirName:"guides",slug:"/guides/send-private-tx",permalink:"/guides/send-private-tx",editUrl:"https://github.com/openmev/docs/edit/main/docs/guides/send-private-tx.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Private Transactions",permalink:"/guides/mining-pools"},next:{title:"OpenMEV RPC",permalink:"/api"}},l={},c=[{value:"Sending a Private Transaction",id:"sending-a-private-transaction",level:2}],u={toc:c};function d(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"private-transactions"},"Private Transactions"),(0,a.kt)("p",null,"How to send a single transaction using SecureRPC"),(0,a.kt)("p",null,"If you want to send a single transaction privately, without sending it as a bundle, you can use the\n",(0,a.kt)("inlineCode",{parentName:"p"},"eth_sendPrivateTransaction")," method."),(0,a.kt)("p",null,"This method attempts to send your transaction to miners on every block for a maximum of 25 blocks. No need to listen for\nthe next block and re-send yourself."),(0,a.kt)("p",null,"Private transactions can be cancelled with the ",(0,a.kt)("inlineCode",{parentName:"p"},"eth_cancelPrivateTransaction"),' method. Once a transaction is submitted\nfrom the relay to a miner we cannot "recall" it. However, we can cancel submitting transactions for future blocks.'),(0,a.kt)("p",null,"See RPC endpoint for JSON-RPC definitions of the methods."),(0,a.kt)("p",null,"These methods are currently implemented in the ",(0,a.kt)("inlineCode",{parentName:"p"},"libmev")," library."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// ethers.js\nconst signer = Wallet.createRandom();\nconst provider = new providers.JsonRpcProvider('http://localhost:8545');\nconst flashbotsProvider = await FlashbotsBundleProvider.create(provider, signer);\n\nconst transaction = {\n  from: signer.address,\n  to: signer.address,\n  value: '0x42',\n  gasPrice: BigNumber.from(99).mul(1e9),\n  gasLimit: BigNumber.from(21000),\n};\n\nconst res = await flashbotsProvider.sendPrivateTransaction(\n  {\n    transaction,\n    signer,\n  },\n  {\n    maxBlockNumber: (await provider.getBlockNumber()) + 5, // only allow tx to be mined for the next 5 blocks\n  },\n);\n\nconst waitRes = await res.wait();\nif (waitRes === FlashbotsTransactionResolution.TransactionIncluded) {\n  console.log('Private transaction successfully mined.');\n} else if (waitRes === FlashbotsTransactionResolution.TransactionDropped) {\n  console.log('Private transaction was not mined and has been removed from the system.');\n}\n")),(0,a.kt)("h2",{id:"sending-a-private-transaction"},"Sending a Private Transaction"),(0,a.kt)("p",null,"To send a ",(0,a.kt)("em",{parentName:"p"},"single")," transaction without having to send it as a bundle, use the ",(0,a.kt)("inlineCode",{parentName:"p"},"sendPrivateTransaction")," function. This\nmethod allows us to process transactions faster and more efficiently than regular bundles. When you send a transaction\nusing this method, we will try to send it to miners over the next 25 blocks (up to, but not past the target block\nnumber)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const tx = {\n  from: wallet.address,\n  to: wallet.address,\n  value: '0x42',\n  gasPrice: BigNumber.from(99).mul(1e9), // 99 gwei\n  gasLimit: BigNumber.from(21000),\n};\nconst privateTx = {\n  transaction: tx,\n  signer: wallet,\n};\nconst res = await flashbotsProvider.sendPrivateTransaction(privateTx);\n")),(0,a.kt)("p",null,"Optionally, you can set the following parameters to fine-tune your submission:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// highest block number your tx can be included in\nconst maxBlockNumber = (await provider.getBlockNumber()) + 10;\n// timestamp for simulations\nconst minTimestamp = 1645753192;\nconst res = await flashbotsProvider.sendPrivateTransaction(privateTx, { maxBlockNumber, minTimestamp });\n")))}d.isMDXComponent=!0}}]);