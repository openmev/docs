"use strict";(self.webpackChunkopenmev_docs=self.webpackChunkopenmev_docs||[]).push([[38],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>u});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function f(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),o=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=o(e.components);return n.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,s=f(e,["components","mdxType","originalType","parentName"]),p=o(a),u=r,m=p["".concat(d,".").concat(u)]||p[u]||c[u]||l;return a?n.createElement(m,i(i({ref:t},s),{},{components:a})):n.createElement(m,i({ref:t},s))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=p;var f={};for(var d in t)hasOwnProperty.call(t,d)&&(f[d]=t[d]);f.originalType=e,f.mdxType="string"==typeof e?e:r,i[1]=f;for(var o=2;o<l;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},4522:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>f,toc:()=>o});var n=a(3117),r=(a(7294),a(3905));const l={title:"RPC Spec",version:"v0.6.0"},i="Flashbots Compatible RPC Spec",f={unversionedId:"guides/rpc-spec",id:"guides/rpc-spec",title:"RPC Spec",description:"see flashbots documentation",source:"@site/docs/guides/rpc-spec.md",sourceDirName:"guides",slug:"/guides/rpc-spec",permalink:"/guides/rpc-spec",editUrl:"https://github.com/openmev/docs/edit/main/docs/guides/rpc-spec.md",tags:[],version:"current",frontMatter:{title:"RPC Spec",version:"v0.6.0"},sidebar:"tutorialSidebar",previous:{title:"Flashbots Cheatsheet",permalink:"/guides/cheatsheet"},next:{title:"Private Transactions",permalink:"/guides/send-private-tx"}},d={},o=[{value:"eth_sendBundle",id:"eth_sendbundle",level:2},{value:"Description",id:"description",level:3},{value:"Returns",id:"returns",level:3},{value:"Example",id:"example",level:3},{value:"eth_sendMegabundle",id:"eth_sendmegabundle",level:2},{value:"Description",id:"description-1",level:3},{value:"Returns",id:"returns-1",level:3},{value:"Example",id:"example-1",level:3},{value:"eth_sendPrivateRawTransaction",id:"eth_sendprivaterawtransaction",level:2},{value:"Description",id:"description-2",level:3},{value:"Returns",id:"returns-2",level:3},{value:"Example",id:"example-2",level:3},{value:"eth_callBundle",id:"eth_callbundle",level:2},{value:"Description",id:"description-3",level:3},{value:"Returns",id:"returns-3",level:3},{value:"Example",id:"example-3",level:3},{value:"<code>Quantity</code>",id:"quantity",level:3},{value:"<code>Data</code>",id:"data",level:3},{value:"<code>Block Identifier</code>",id:"block-identifier",level:3}],s={toc:o};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"flashbots-compatible-rpc-spec"},"Flashbots Compatible RPC Spec"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/flashbots/flashbots-docs/main/docs/flashbots-auction/miners/mev-geth-spec/v06-rpc.mdx"},"see flashbots documentation"))),(0,r.kt)("h2",{id:"eth_sendbundle"},"eth_sendBundle"),(0,r.kt)("h3",{id:"description"},"Description"),(0,r.kt)("p",null,"Sends a bundle of transactions to the miner. The bundle has to be executed at the beginning of the block (before any other transactions), with bundle transactions executed exactly in the same order as provided in the bundle. During the Flashbots Alpha this is only called by the Flashbots relay."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Comment"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"txs"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Array<Data>")),(0,r.kt)("td",{parentName:"tr",align:null},"Array of signed transactions (",(0,r.kt)("inlineCode",{parentName:"td"},"eth_sendRawTransaction")," style, signed and RLP-encoded)"),(0,r.kt)("td",{parentName:"tr",align:null},"a no-op in the light mode")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"blockNumber"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Quantity")),(0,r.kt)("td",{parentName:"tr",align:null},"Exact block number at which the bundle can be included."),(0,r.kt)("td",{parentName:"tr",align:null},"bundle is evicted after the block")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"minTimestamp"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Quantity")),(0,r.kt)("td",{parentName:"tr",align:null},"Minimum (inclusive) block timestamp at which the bundle can be included. If this value is 0 then any timestamp is acceptable."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"maxTimestamp"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Quantity")),(0,r.kt)("td",{parentName:"tr",align:null},"Maximum (inclusive) block timestamp at which the bundle can be included. If this value is 0 then any timestamp is acceptable."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"revertingTxHashes"),(0,r.kt)("td",{parentName:"tr",align:null},"Array<",(0,r.kt)("inlineCode",{parentName:"td"},"Data"),">"),(0,r.kt)("td",{parentName:"tr",align:null},"Array of tx hashes within the bundle that are allowed to cause the EVM execution to revert without preventing the bundle inclusion in a block."),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"returns"},"Returns"),(0,r.kt)("p",null,"{",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),"} - ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," if bundle has been accepted by the node, otherwise ",(0,r.kt)("inlineCode",{parentName:"p"},"false")),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# Request\ncurl -X POST -H \'Content-Type: application/json\' --data \'{\n    "id": 1337,\n    "jsonrpc": "2.0",\n    "method": "eth_sendBundle",\n    "params": [\n        {\n          "txs" : [\n              "0x02f8b30181b18502cb417800853a352944008307a12094b893a8049f250b57efa8c62d51527a22404d7c9a80b844095ea7b300000000000000000000000093e17e368e82dd24bed931091f831b5bed3f711effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc080a027148354c23bb016147ed68014b2aa13c43a4feef36274be88ef58d25f91e20fa05ccc423d4e9e1de88515adf3245df69db8c05b1ce345a738c75b06c87a96f878",\n              "0x02f8b30181b28502cb417800853a352944008307a12094d5281bb2d1ee94866b03a0fccdd4e900c8cb509180b844095ea7b300000000000000000000000093e17e368e82dd24bed931091f831b5bed3f711effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc001a042f32acc8631c8c1c81d3d77a637cdab162477077d5041285ea7d73313d6b02ca07b18b432f4921795f84916b3c9398e2fd65580e372b9fa7e018e543ffbc00375"\n          ],\n          "blockNumber" : "0xce7b22",\n          "minTimestamp" : 0,\n          "minTimestamp" : 0,\n          "revertingTxHashes": []\n        }\n    ]\n}\' <url>\n\n# Response\n{\n    "id": 1337,\n    "jsonrpc": "2.0",\n    "result": true\n}\n')),(0,r.kt)("h2",{id:"eth_sendmegabundle"},"eth_sendMegabundle"),(0,r.kt)("h3",{id:"description-1"},"Description"),(0,r.kt)("p",null,"Sends a megabundle to the miner. The megabundle has to be executed at the beginning of the block (before any other transactions), with bundle transactions executed exactly in the same order as provided in the bundle. Can only be called by a relay listed in the ",(0,r.kt)("inlineCode",{parentName:"p"},"miner.trustedrelays")," config."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Comment"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"txs"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Array<Data>")),(0,r.kt)("td",{parentName:"tr",align:null},"Array of signed transactions (",(0,r.kt)("inlineCode",{parentName:"td"},"eth_sendRawTransaction")," style, signed and RLP-encoded)"),(0,r.kt)("td",{parentName:"tr",align:null},"a no-op in the light mode")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"blockNumber"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Quantity")),(0,r.kt)("td",{parentName:"tr",align:null},"Exact block number at which the bundle can be included."),(0,r.kt)("td",{parentName:"tr",align:null},"bundle is evicted after the block")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"minTimestamp"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Quantity")),(0,r.kt)("td",{parentName:"tr",align:null},"Minimum (inclusive) block timestamp at which the bundle can be included. If this value is 0 then any timestamp is acceptable."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"maxTimestamp"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Quantity")),(0,r.kt)("td",{parentName:"tr",align:null},"Maximum (inclusive) block timestamp at which the bundle can be included. If this value is 0 then any timestamp is acceptable."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"revertingTxHashes"),(0,r.kt)("td",{parentName:"tr",align:null},"Array<",(0,r.kt)("inlineCode",{parentName:"td"},"Data"),">"),(0,r.kt)("td",{parentName:"tr",align:null},"Array of tx hashes within the bundle that are allowed to cause the EVM execution to revert without preventing the bundle inclusion in a block."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"relaySignature"),(0,r.kt)("td",{parentName:"tr",align:null},"Array<",(0,r.kt)("inlineCode",{parentName:"td"},"Data"),">"),(0,r.kt)("td",{parentName:"tr",align:null},"An secp256k1 signature signed with an address from the ",(0,r.kt)("inlineCode",{parentName:"td"},"miner.trustedrelays"),". Message signed is a Keccak hash of RLP serialized sequence that contains the following items: array of txs (a sequence of byte arrays representing RLP serialized txs); minTimestamp serialized as an int256, like in the devp2p specification; maxTimestamp serialized as an int256, like in the devp2p specification; revertingTxHashes serialized as an array of byte arrays."),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,"{",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),"} - ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," if megabundle has been accepted by the node, otherwise ",(0,r.kt)("inlineCode",{parentName:"p"},"false")),(0,r.kt)("h3",{id:"example-1"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# Request\ncurl -X POST -H \'Content-Type: application/json\' --data \'{\n    "id": 1337,\n    "jsonrpc": "2.0",\n    "method": "eth_sendMegabundle",\n    "params": [\n        {\n          "txs" : [\n              "0x02f8b30181b18502cb417800853a352944008307a12094b893a8049f250b57efa8c62d51527a22404d7c9a80b844095ea7b300000000000000000000000093e17e368e82dd24bed931091f831b5bed3f711effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc080a027148354c23bb016147ed68014b2aa13c43a4feef36274be88ef58d25f91e20fa05ccc423d4e9e1de88515adf3245df69db8c05b1ce345a738c75b06c87a96f878",\n              "0x02f8b30181b28502cb417800853a352944008307a12094d5281bb2d1ee94866b03a0fccdd4e900c8cb509180b844095ea7b300000000000000000000000093e17e368e82dd24bed931091f831b5bed3f711effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc001a042f32acc8631c8c1c81d3d77a637cdab162477077d5041285ea7d73313d6b02ca07b18b432f4921795f84916b3c9398e2fd65580e372b9fa7e018e543ffbc00375"\n          ],\n          "blockNumber" : "0xce7b22",\n          "minTimestamp" : 0,\n          "minTimestamp" : 0,\n          "revertingTxHashes": [],\n          "relaySignature" : "0x2a115a51434b6f326b99bf4eefa1226f9eb88241f140545bf2d63c688eb57e9b07c5c3bb15340ecbdcdffd642c0995024bffa397cd313ec1f29c1c331e71187d1b",\n        }\n    ]\n}\' <url>\n\n# Response\n{\n    "id": 1337,\n    "jsonrpc": "2.0",\n    "result": true\n}\n')),(0,r.kt)("h2",{id:"eth_sendprivaterawtransaction"},"eth_sendPrivateRawTransaction"),(0,r.kt)("h3",{id:"description-2"},"Description"),(0,r.kt)("p",null,"Sends a raw transaction to be included for block construction. Transaction is marked as private which means that it will not be broadcast to any other node for as long as the configured ",(0,r.kt)("inlineCode",{parentName:"p"},"txpool.privatetxlifespan")," in hours. Except for the no broadcast rule the transaction should be treated equally with all the public transaction pool transactions."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"input"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Array<Data>")),(0,r.kt)("td",{parentName:"tr",align:null},"Signed transaction (",(0,r.kt)("inlineCode",{parentName:"td"},"eth_sendRawTransaction")," style, signed and RLP-encoded)")))),(0,r.kt)("h3",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,'"error|value" : ',(0,r.kt)("inlineCode",{parentName:"p"},"Data")," - txhash or error"),(0,r.kt)("h3",{id:"example-2"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# Request\ncurl -X POST -H \'Content-Type: application/json\' --data \'{\n    "id": 1337,\n    "jsonrpc": "2.0",\n    "method": "eth_sendPrivateRawTransaction",\n    "params": [\n        "0x02f8b30181b18502cb417800853a352944008307a12094b893a8049f250b57efa8c62d51527a22404d7c9a80b844095ea7b300000000000000000000000093e17e368e82dd24bed931091f831b5bed3f711effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc080a027148354c23bb016147ed68014b2aa13c43a4feef36274be88ef58d25f91e20fa05ccc423d4e9e1de88515adf3245df69db8c05b1ce345a738c75b06c87a96f878"\n    ]\n}\' <url>\n\n# Response\n{\n    "id": 1337,\n    "jsonrpc": "2.0",\n    "result": "0xdeadbeef883764809a94a5320e4557102f5a3fdd98dabd8cd48773b0eca00666"\n}\n')),(0,r.kt)("h2",{id:"eth_callbundle"},"eth_callBundle"),(0,r.kt)("h3",{id:"description-3"},"Description"),(0,r.kt)("p",null,"Simulate a bundle of transactions at the top of a block."),(0,r.kt)("p",null,"After retrieving the block specified in the ",(0,r.kt)("inlineCode",{parentName:"p"},"blockNrOrHash")," it takes the same ",(0,r.kt)("inlineCode",{parentName:"p"},"blockhash"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"gasLimit"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"difficulty"),", same ",(0,r.kt)("inlineCode",{parentName:"p"},"timestamp")," unless the ",(0,r.kt)("inlineCode",{parentName:"p"},"blockTimestamp")," property is specified, and increases the block number by ",(0,r.kt)("inlineCode",{parentName:"p"},"1"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"eth_callBundle")," will timeout after ",(0,r.kt)("inlineCode",{parentName:"p"},"5")," seconds."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"txs"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Array<Data>")),(0,r.kt)("td",{parentName:"tr",align:null},"Array of signed transactions (",(0,r.kt)("inlineCode",{parentName:"td"},"eth_sendRawTransaction")," style, signed and RLP-encoded)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"blockNumber"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Quantity")),(0,r.kt)("td",{parentName:"tr",align:null},"A hex encoded block number for which this bundle is valid on")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"stateBlockNumber"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Quantity\\|string\\|Block Identifier")),(0,r.kt)("td",{parentName:"tr",align:null},"Either a hex encoded number or a {Block Identifier} for which state to base this simulation on.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"timestamp"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Quantity")),(0,r.kt)("td",{parentName:"tr",align:null},"Block timestamp to be used in replacement of the timestamp taken from the parent block.")))),(0,r.kt)("h3",{id:"returns-3"},"Returns"),(0,r.kt)("p",null,"Map<",(0,r.kt)("inlineCode",{parentName:"p"},"Data"),', "error|value" : ',(0,r.kt)("inlineCode",{parentName:"p"},"Data"),"> - a mapping from transaction hashes to execution results with error or output (value) for each of the transactions"),(0,r.kt)("h3",{id:"example-3"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# Request\ncurl -X POST -H \'Content-Type: application/json\' --data \'{\n    "id": 1337,\n    "jsonrpc": "2.0",\n    "method": "eth_callBundle",\n    "params": [\n        {\n            "txs": [\n                "0x02f8b30181b18502cb417800853a352944008307a12094b893a8049f250b57efa8c62d51527a22404d7c9a80b844095ea7b300000000000000000000000093e17e368e82dd24bed931091f831b5bed3f711effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc080a027148354c23bb016147ed68014b2aa13c43a4feef36274be88ef58d25f91e20fa05ccc423d4e9e1de88515adf3245df69db8c05b1ce345a738c75b06c87a96f878",\n                "0x02f8b30181b28502cb417800853a352944008307a12094d5281bb2d1ee94866b03a0fccdd4e900c8cb509180b844095ea7b300000000000000000000000093e17e368e82dd24bed931091f831b5bed3f711effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc001a042f32acc8631c8c1c81d3d77a637cdab162477077d5041285ea7d73313d6b02ca07b18b432f4921795f84916b3c9398e2fd65580e372b9fa7e018e543ffbc00375"\n            ],\n            "blockNumber": "0xce7b22",\n            "stateBlockNumber": "0xce7b21"\n        }\n    ]\n}\' <url>\n\n# Response\n{\n  "jsonrpc": "2.0",\n  "id": 1337,\n  "result": {\n    "bundleGasPrice": "12000000000",\n    "bundleHash": "0xa1433fce883764809a94a5320e4557102f5a3fdd98dabd8cd48773b0eca00666",\n    "coinbaseDiff": "707448000000000",\n    "ethSentToCoinbase": "0",\n    "gasFees": "707448000000000",\n    "results": [\n      {\n        "coinbaseDiff": "354300000000000",\n        "ethSentToCoinbase": "0",\n        "fromAddress": "0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B",\n        "gasFees": "354300000000000",\n        "gasPrice": "12000000000",\n        "gasUsed": 29525,\n        "toAddress": "0xB893A8049f250b57eFA8C62D51527a22404D7c9A",\n        "txHash": "0x2425790f3031b66981e091cf96e2d29bdd12f47b334557462a0d482b2f057490",\n        "value": "0x0000000000000000000000000000000000000000000000000000000000000001"\n      },\n      {\n        "coinbaseDiff": "353148000000000",\n        "ethSentToCoinbase": "0",\n        "fromAddress": "0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B",\n        "gasFees": "353148000000000",\n        "gasPrice": "12000000000",\n        "gasUsed": 29429,\n        "toAddress": "0xd5281BB2d1eE94866B03A0fcCDd4e900c8Cb5091",\n        "txHash": "0xf130358842db89e12d17fe1b35556adbe66497764921a92fda83571d8a2dcc72",\n        "value": "0x0000000000000000000000000000000000000000000000000000000000000001"\n      }\n    ],\n    "stateBlockNumber": 13531937,\n    "totalGasUsed": 58954\n  }\n}\n')),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Below type description can also be found in ",(0,r.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-1474"},"EIP-1474")),(0,r.kt)("h3",{id:"quantity"},(0,r.kt)("inlineCode",{parentName:"h3"},"Quantity")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("inlineCode",{parentName:"li"},"Quantity")," value ",(0,r.kt)("strong",{parentName:"li"},"MUST")," be hex-encoded."),(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("inlineCode",{parentName:"li"},"Quantity")," value ",(0,r.kt)("strong",{parentName:"li"},"MUST"),' be "0x"-prefixed.'),(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("inlineCode",{parentName:"li"},"Quantity")," value ",(0,r.kt)("strong",{parentName:"li"},"MUST")," be expressed using the fewest possible hex digits per byte."),(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("inlineCode",{parentName:"li"},"Quantity")," value ",(0,r.kt)("strong",{parentName:"li"},"MUST"),' express zero as "0x0".')),(0,r.kt)("h3",{id:"data"},(0,r.kt)("inlineCode",{parentName:"h3"},"Data")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("inlineCode",{parentName:"li"},"Data")," value ",(0,r.kt)("strong",{parentName:"li"},"MUST")," be hex-encoded."),(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("inlineCode",{parentName:"li"},"Data")," value ",(0,r.kt)("strong",{parentName:"li"},"MUST")," be \u201c0x\u201d-prefixed."),(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("inlineCode",{parentName:"li"},"Data")," value ",(0,r.kt)("strong",{parentName:"li"},"MUST")," be expressed using two hex digits per byte.")),(0,r.kt)("h3",{id:"block-identifier"},(0,r.kt)("inlineCode",{parentName:"h3"},"Block Identifier")),(0,r.kt)("p",null,"Since there is no way to clearly distinguish between a ",(0,r.kt)("inlineCode",{parentName:"p"},"Data")," parameter and a ",(0,r.kt)("inlineCode",{parentName:"p"},"Quantity")," parameter, ",(0,r.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-1898"},"EIP-1898")," provides a format to specify a block either using the block hash or block number. The block identifier is a JSON ",(0,r.kt)("inlineCode",{parentName:"p"},"object")," with the following fields:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Position"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0A"),(0,r.kt)("td",{parentName:"tr",align:null},"blockNumber"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Quantity")),(0,r.kt)("td",{parentName:"tr",align:null},"The block in the canonical chain with this number")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0B"),(0,r.kt)("td",{parentName:"tr",align:null},"blockHash"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Data")),(0,r.kt)("td",{parentName:"tr",align:null},"The block uniquely identified by this hash. The blockNumber and blockHash properties are mutually exclusive; exactly one of them must be set.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1B"),(0,r.kt)("td",{parentName:"tr",align:null},"requireCanonical"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},"(optional) Whether or not to throw an error if the block is not in the canonical chain as described below. Only allowed in conjunction with the blockHash tag. Defaults to false.")))),(0,r.kt)("p",null,"If the block is not found, the callee SHOULD raise a JSON-RPC error (the recommended error code is ",(0,r.kt)("inlineCode",{parentName:"p"},"-32001: Resource not found"),". If the tag is ",(0,r.kt)("inlineCode",{parentName:"p"},"blockHash")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"requireCanonical")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", the callee SHOULD additionally raise a JSON-RPC error if the block is not in the canonical chain (the recommended error code is ",(0,r.kt)("inlineCode",{parentName:"p"},"-32000: Invalid input")," and in any case should be different than the error code for the block not found case so that the caller can distinguish the cases). The block-not-found check SHOULD take precedence over the block-is-canonical check, so that if the block is not found the callee raises block-not-found rather than block-not-canonical."))}c.isMDXComponent=!0}}]);