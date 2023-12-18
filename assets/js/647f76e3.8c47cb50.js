"use strict";(self.webpackChunklogos_blog_template=self.webpackChunklogos_blog_template||[]).push([[294],{92393:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const o={layout:"post",title:"Unbundling the Nimbus consensus client - Part one",description:"Nimbus has released a production-ready version of its validator client, addressing a key demand from node operators and advanced users.",authors:"status",date:"2022-12-30T09:00",published:!0},i="Unbundling the Nimbus consensus client: Part one",s={permalink:"/unbundling-nimbus-client-1",source:"@site/posts/unbundling-nimbus-client-1.md",title:"Unbundling the Nimbus consensus client - Part one",description:"Nimbus has released a production-ready version of its validator client, addressing a key demand from node operators and advanced users.",date:"2022-12-30T09:00:00.000Z",formattedDate:"December 30, 2022",tags:[],readingTime:2.01,hasTruncateMarker:!0,authors:[{name:"Status",key:"status"}],frontMatter:{layout:"post",title:"Unbundling the Nimbus consensus client - Part one",description:"Nimbus has released a production-ready version of its validator client, addressing a key demand from node operators and advanced users.",authors:"status",date:"2022-12-30T09:00",published:!0},prevItem:{title:"Nimbus client 2022 year-end recap",permalink:"/nimbus-2022-recap"},nextItem:{title:"Nimbus - checkpoint sync, era files, Vouch",permalink:"/nimbus-update-march"}},l={authorsImageUrls:[void 0]},d=[],u={toc:d};function c(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"header-image",src:n(48707).Z,width:"2000",height:"1335"})),(0,r.kt)("p",null,"Nimbus has released a production-ready version of its validator client, addressing a key demand from node operators and advanced users. The client is highly performant and requires low resources, allowing it to run on a range of devices \u2014 from embedded systems to enterprise servers."),(0,r.kt)("p",null,"By default, the Nimbus consensus client's design allows validators to be run directly from the beacon node, simplifying validator setup. This makes it an ideal choice for solo-stakers, and select node operators that want to use the Nimbus beacon node. However, it made it difficult for operators to use Nimbus in their existing setups, which often feature one or more client beacon nodes interacting with multiple validator clients."),(0,r.kt)("p",null,"For example, one node operator runs a Teku beacon node with Teku and LH validator clients. Another operator runs a Vouch-based setup with four different client beacon nodes and a Vouch validator client. This also includes node operators in the Rocket Pool network that run several mini-pools. Each operator has fine-tuned their setup for redundancy, performance and resource consistency. It was understandably challenging for these users to directly use the default Nimbus setup of an integrated beacon node and validator client, which would mean a completely different stack to maintain and manage."),(0,r.kt)("p",null,"Release v22.11.0 allows users to run the Nimbus validator client independently with beacon nodes from other clients, giving operators greater flexibility and the ability to introduce Nimbus into their existing setups with minimal change. This configuration is ideal for operators running hundreds to thousands of validators."),(0,r.kt)("p",null,"Additionally, the new release includes improvements and fixes. For example, the beacon node is now compatible with validator clients taking advantage of the /eth/v1/beacon/blinded_blocks endpoint, and enables much faster loading of the validator keystore during startup."),(0,r.kt)("p",null,"Nimbus's privacy characteristics, including its low public profile and support for publishing blocks to separate nodes (such that the validator cannot be matched to its IP address by listening to attestation traffic), make it an attractive choice for advanced users and node operators."),(0,r.kt)("p",null,"The Nimbus team will continue to support and improve the standalone beacon node setup for individual users and hope to see more operators include the Nimbus validator client in their fleet to improve overall client diversity across the Ethereum network."),(0,r.kt)("p",null,"Check our blog and follow our social channels to stay up to date with all the latest Nimbus ecosystem developments:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://our.status.im/tag/nimbus/"},"Blog"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/ethnimbus"},"Twitter"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://discord.com/invite/qnjVyhatUa"},"Discord"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/status-im"},"GitHub")))))}c.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=d(n),m=r,h=p["".concat(l,".").concat(m)]||p[m]||c[m]||o;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},48707:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/header-a5dcc529d042bd0477eb42a7d01adebd.jpeg"}}]);