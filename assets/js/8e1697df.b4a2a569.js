"use strict";(self.webpackChunklogos_blog_template=self.webpackChunklogos_blog_template||[]).push([[586],{56137:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const o={layout:"post",title:"Nimbus + Nethermind - Kintsugi tutorial",description:"Ethereum can support both full nodes and light clients, it contains a peer to peer layer which allows nodes to send messages to each other.",date:"2021-11-23T10:00",authors:"sacha",published:!0},r="Nimbus + Nethermind - Kintsugi tutorial",l={permalink:"/kintsugi-merge",source:"@site/posts/kintsugi-merge.md",title:"Nimbus + Nethermind - Kintsugi tutorial",description:"Ethereum can support both full nodes and light clients, it contains a peer to peer layer which allows nodes to send messages to each other.",date:"2021-11-23T10:00:00.000Z",formattedDate:"November 23, 2021",tags:[],readingTime:5.505,hasTruncateMarker:!0,authors:[{name:"Sacha",key:"sacha"}],frontMatter:{layout:"post",title:"Nimbus + Nethermind - Kintsugi tutorial",description:"Ethereum can support both full nodes and light clients, it contains a peer to peer layer which allows nodes to send messages to each other.",date:"2021-11-23T10:00",authors:"sacha",published:!0},prevItem:{title:"The importance of light nodes in Vitalik's endgame",permalink:"/light-nodes-ethereum-endgame"},nextItem:{title:"Nimbus - Execution Layer",permalink:"/nimbus-execution-layer"}},s={authorsImageUrls:[void 0]},p=[{value:"#Kintsugi spec: quick recap",id:"kintsugi-spec-quick-recap",level:3},{value:"1- Install dotnet",id:"1--install-dotnet",level:3},{value:"2- Build Nethermind",id:"2--build-nethermind",level:3},{value:"3- Run Nethermind",id:"3--run-nethermind",level:3},{value:"4- Checkout the Nimbus Kintsugi branch",id:"4--checkout-the-nimbus-kintsugi-branch",level:3},{value:"5- Launch local testnet",id:"5--launch-local-testnet",level:3},{value:"6- Check Nimbus&#39; output",id:"6--check-nimbus-output",level:3},{value:"7- Check Nethermind&#39;s output",id:"7--check-netherminds-output",level:3},{value:"How do we know that the merge has happened?",id:"how-do-we-know-that-the-merge-has-happened",level:3}],u={toc:p};function c(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"header-image",src:n(24140).Z,width:"694",height:"499"})),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Diagram courtesy of Mikhail Kalinin's ",(0,i.kt)("a",{parentName:"em",href:"https://hackmd.io/@n0ble/consensus_api_design_space"},"Engine API design space")," document. Note that this diagram dates from the Amphora era, and so is not strictly accurate. Nevertheless the general communication flow between consensus and execution for Kintsugi is the same.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Kintsugi, also known as kintsukuroi, is the Japanese art of repairing broken pottery by mending the areas of breakage with lacquer dusted or mixed with powdered gold. ",(0,i.kt)("a",{parentName:"p",href:"https://t.co/M9BiJfLqLb"},"pic.twitter.com/M9BiJfLqLb")),(0,i.kt)("p",{parentName:"blockquote"},"\u2014 Monica Zeng (@monicazng) ",(0,i.kt)("a",{parentName:"p",href:"https://twitter.com/monicazng/status/1332314234265477121?ref_src=twsrc%5Etfw"},"November 27, 2020"))),(0,i.kt)("p",null,"The Merge November sprint \u2013 ",(0,i.kt)("em",{parentName:"p"},"Kintsugi -")," has kicked off.  "),(0,i.kt)("p",null,"Kintsugi ",(0,i.kt)("a",{parentName:"p",href:"http://spec.merge.wiki/"},"specs")," and ",(0,i.kt)("a",{parentName:"p",href:"https://notes.ethereum.org/@djrtwo/kintsugi-milestones"},"milestones")," were released earlier this month. And we, along with the other client teams, have started participating in the weekly rolling merge devnets in preparation for the more open and persistent testnet planned for early December."),(0,i.kt)("h3",{id:"kintsugi-spec-quick-recap"},"#",(0,i.kt)("a",{parentName:"h3",href:"#kintsugi-spec-quick-recap"},"Kintsugi spec: quick recap")),(0,i.kt)("p",null,"Kintsugi incorporates all of the learnings (along with some minor adjustments) from the previous interop, ",(0,i.kt)("a",{parentName:"p",href:"https://blog.ethereum.org/2021/10/15/amphora-merge-milestone/"},"Amphora"),".  "),(0,i.kt)("p",null,"At a high-level, the scope of work on updating consensus layer client software to Kintsugi specification is as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Implement the new version of consensus-spec and pass all consensus-spec tests")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Implement the new version of ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ethereum/execution-apis/blob/89070c4d6f2fbe125a906f0cca1fedda84b8a2a6/src/engine/specification.md"},"Engine API")," method calls")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Implement or update already existing implementation of the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/sigp/lighthouse/issues/2691"},"optimistic sync")))),(0,i.kt)("p",null,"On the execution layer side, it looks like this:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Implement the new version of ",(0,i.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-3675"},"EIP-3675"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Implement ",(0,i.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-4399"},"EIP-4399"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Implement the new version of ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ethereum/execution-apis/blob/89070c4d6f2fbe125a906f0cca1fedda84b8a2a6/src/engine/specification.md"},"Engine API")," server"))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Support Ethereum ecosystem client diversity!  "),(0,i.kt)("p",{parentName:"blockquote"},"Consider running:  "),(0,i.kt)("p",{parentName:"blockquote"},"*"," Nethermind ",(0,i.kt)("a",{parentName:"p",href:"https://t.co/8A3bkliGAy"},"https://t.co/8A3bkliGAy")," or Besu ",(0,i.kt)("a",{parentName:"p",href:"https://t.co/RNPpIXrVX3"},"https://t.co/RNPpIXrVX3")," for an ethereum mainnet node  "),(0,i.kt)("p",{parentName:"blockquote"},"*"," Nimbus ",(0,i.kt)("a",{parentName:"p",href:"https://t.co/8LWdsGEuKi"},"https://t.co/8LWdsGEuKi")," or Teku ",(0,i.kt)("a",{parentName:"p",href:"https://t.co/mXUWTxKlPu"},"https://t.co/mXUWTxKlPu")," if you're on the eth2 Medalla testnet"),(0,i.kt)("p",{parentName:"blockquote"},"\u2014 vitalik.eth (@VitalikButerin) ",(0,i.kt)("a",{parentName:"p",href:"https://twitter.com/VitalikButerin/status/1293317390613110785?ref_src=twsrc%5Etfw"},"August 11, 2020"))),(0,i.kt)("p",null,"In line with our commitment to client diversity, this tutorial will tackle how to run a Nimbus local testnet with Nethermind (if you wish to do the same with Geth, see ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/status-im/nimbus-eth2/blob/unstable/docs/interop_merge.md"},"this document"),")."),(0,i.kt)("p",null,"We assume you have a working and up to date installation of Nimbus - if this is not the case, please start by following the instructions ",(0,i.kt)("a",{parentName:"p",href:"https://nimbus.guide/quick-start.html"},"here"),"."),(0,i.kt)("h3",{id:"1--install-dotnet"},"1- Install dotnet"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://docs.nethermind.io/nethermind/"},"Nethermind")," is a .NET Core-based Ethereum client, so the first step is to download dotnet."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"https://dotnet.microsoft.com/download\n")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Note that you may need to download a specific version of dotnet to be able to build the Nethermind kintsugi branch. In this guide we use version ",(0,i.kt)("inlineCode",{parentName:"em"},"5.0.12"),". By the time you read this guide you may need version ",(0,i.kt)("inlineCode",{parentName:"em"},"6.0"),".")),(0,i.kt)("h3",{id:"2--build-nethermind"},"2- Build Nethermind"),(0,i.kt)("p",null,"From the command line, run the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"git clone https://github.com/NethermindEth/nethermind.git --recursive -b themerge_kintsugi\ncd src/Nethermind\ndotnet build Nethermind.sln -c Release\n# if src/Nethermind/Nethermind.Runner/bin/Release/net5.0/plugins has no Nethermind.Merge.Plugin.dll plugin then you may need to run the build again\ndotnet build Nethermind.sln -c Release\n")),(0,i.kt)("h3",{id:"3--run-nethermind"},"3- Run Nethermind"),(0,i.kt)("p",null,"Once Nethermind has been built, you are ready to run it:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cd Nethermind.Runner\nrm -rf bin/Release/net5.0/nethermind_db\ndotnet run -c Release -- --config themerge_kintsugi_m2 --Merge.TerminalTotalDifficulty 0\n")),(0,i.kt)("h3",{id:"4--checkout-the-nimbus-kintsugi-branch"},"4- Checkout the Nimbus Kintsugi branch"),(0,i.kt)("p",null,"With Nethermind running, open a separate terminal window. Change into the ",(0,i.kt)("inlineCode",{parentName:"p"},"nimbus-eth2")," directory and run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"git checkout kintsugi\ngit pull\nmake update\n")),(0,i.kt)("h3",{id:"5--launch-local-testnet"},"5- Launch local testnet"),(0,i.kt)("p",null,"Still in ",(0,i.kt)("inlineCode",{parentName:"p"},"nimbus-eth2"),", run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"./scripts/launch_local_testnet.sh --preset minimal --nodes 4 --disable-htop --stop-at-epoch 7 -- --verify-finalization --discv5:no\n")),(0,i.kt)("p",null,"This will create a 4-node local testnet with 128 validators that will exist for 7 epochs. Feel free to try out different parameters if you so wish."),(0,i.kt)("h3",{id:"6--check-nimbus-output"},"6- Check Nimbus' output"),(0,i.kt)("p",null,"If all is working correctly, the Nimbus console output should look something like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'nimbus-eth2$ N=0; while ./scripts/launch_local_testnet.sh --preset minimal --nodes 4 --disable-htop --stop-at-epoch 8 -- --verify-finalization --discv5:no; do N=$((N+1)); echo "That was run #${N}"; sleep 67; done\nBuilding: build/nimbus_beacon_node\nBuilding: build/nimbus_signing_process\nBuilding: build/deposit_contract\nBuild completed successfully: build/nimbus_signing_process\nBuild completed successfully: build/deposit_contract\nBuild completed successfully: build/nimbus_beacon_node\nNOT 2021-11-17 15:40:11.894+01:00 Generating deposits                        tid=966934 file=keystore_management.nim:562 totalNewValidators=128 validatorsDir=local_testnet_data/validators secretsDir=local_testnet_data/secrets\nNOT 2021-11-17 15:40:51.434+01:00 Deposit data written                       tid=966934 file=deposit_contract.nim:222 filename=local_testnet_data/deposits.json\nWrote local_testnet_data/genesis.ssz\nWRN 2021-11-17 15:40:51.443+01:00 Using insecure password to lock networking key key_path=local_testnet_data/network_key.json\nINF 2021-11-17 15:40:52.184+01:00 New network key storage was created        topics="networking" key_path=local_testnet_data/network_key.json network_public_key=08021221029b0d9c63dc15335b6f1f73dc359a0bda88a84cc7e0346f12e64084673a35a915\nWrote local_testnet_data/bootstrap_nodes.txt\nWrote local_testnet_data/config.yaml:\nDEPOSIT_NETWORK_ID: 1\nPRESET_BASE: minimal\nMIN_GENESIS_ACTIVE_VALIDATOR_COUNT: 128\nMIN_GENESIS_TIME: 0\nGENESIS_DELAY: 10\nDEPOSIT_CONTRACT_ADDRESS: 0x0000000000000000000000000000000000000000\nETH1_FOLLOW_DISTANCE: 1\nALTAIR_FORK_EPOCH: 1\nMERGE_FORK_EPOCH: 2\nTERMINAL_TOTAL_DIFFICULTY: 0\nThat was run #1\n')),(0,i.kt)("p",null,"If you're using macOS you may also see a bunch of warnings that look like"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"warning: (x86_64)  could not find object file symbol for symbol _br_rsa_pkcs1_sig_unpad.pad1\n")),(0,i.kt)("p",null,"You can safely ignore these."),(0,i.kt)("h3",{id:"7--check-netherminds-output"},"7- Check Nethermind's output"),(0,i.kt)("p",null,"On the Nethermind side, you should pay particular attention to the following JSON RPC calls: ",(0,i.kt)("inlineCode",{parentName:"p"},"engine_forkchoiceUpdatedV1"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"engine_getPayloadV1"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"engine_executePayloadV1")," \u2013 these document the consensus calling the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ethereum/execution-apis/blob/v1.0.0-alpha.4/src/engine/specification.md"},"engine api")," for a valuable payload."),(0,i.kt)("p",null,"To elaborate a little, in a post-merge beacon chain, a consensus layer client needs to call two functions from the execution layer client in order to prepare a block:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"engine_forkchoiceUpdatedV1"),", which returns the ",(0,i.kt)("inlineCode",{parentName:"p"},"status")," (","`","SUCCESS","`"," or ","`","SYNCING","`",") and a ",(0,i.kt)("inlineCode",{parentName:"p"},"payloadId"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"engine_getPayloadV1")," which accepts a ",(0,i.kt)("inlineCode",{parentName:"p"},"payloadId"),"."))),(0,i.kt)("p",null,"The ultimate goal of these two calls is to allow for an execution (eth1) block to be included in a consensus (eth2) block."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"More formally",(0,i.kt)("strong",{parentName:"em"},",")," ",(0,i.kt)("inlineCode",{parentName:"em"},"engine_executePayloadV1")," verifies the payload according to the execution environment rule set (",(0,i.kt)("a",{parentName:"em",href:"https://eips.ethereum.org/EIPS/eip-3675#specification"},"EIP-3675"),") and returns the status of the verification")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"forkchoiceUpdatedV1")," first propagates the change in the fork choice to the execution client (for example, the head of the chain and the finalized block must be updated according to the given data) before initiating the preparation of the payload \xa0if it is needed; this allows the consensus client to be able to give the execution client some time to prepare the payload (i.e., find the best set of transactions it can from the mempool) before the ",(0,i.kt)("inlineCode",{parentName:"p"},"getPayloadV1")," call is made."),(0,i.kt)("p",null,"To borrow an explanation from Danny Ryan, intuitively the call semantics are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},'"update your fork choice" (no payload build requested)')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},'"update your fork choice and start building something valuable on top of it!" (payload build requested)'))),(0,i.kt)("p",null,"The latter only happens when you need to propose a block."),(0,i.kt)("h3",{id:"how-do-we-know-that-the-merge-has-happened"},"How do we know that the merge has happened?"),(0,i.kt)("p",null,"The first ",(0,i.kt)("inlineCode",{parentName:"p"},"engine_executePayloadV1")," method call that communicates a valid payload to the execution client initiates the Merge transition."),(0,i.kt)("p",null,"Then the first ",(0,i.kt)("inlineCode",{parentName:"p"},"[POS_FORKCHOICE_UPDATED](https://eips.ethereum.org/EIPS/eip-3675#specification)")," event (in the form of a ",(0,i.kt)("inlineCode",{parentName:"p"},"engine_forkchoiceUpdatedV1")," method call) that finalises the first communicated payload finishes the transition."),(0,i.kt)("p",null,"After the Merge transition is finalised, the Merge can be considered as having happened."),(0,i.kt)("p",null,"This tutorial is adapted from ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/status-im/nimbus-eth2/blob/unstable/docs/neth-m2-nimbus.md"},"Dustin Brody's original")," (Dustin has been leading the charge on the Merge interop front at Nimbus). If you get stuck anywhere, or have any questions at all please don't hesitate to get in touch with us on our ",(0,i.kt)("a",{parentName:"p",href:"https://discord.gg/9SSF5tAd"},"discord"),". You can keep track of our Kintsugi progress ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/status-im/nimbus-eth2/pull/3093"},"here"),", and Nethermind's progress ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/NethermindEth/nethermind/pull/3597"},"here"),"."))}c.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=p(n),m=i,d=h["".concat(s,".").concat(m)]||h[m]||c[m]||o;return n?a.createElement(d,r(r({ref:t},u),{},{components:n})):a.createElement(d,r({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},24140:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/header-7023c134ddcb4cd0045fb43067dc7930.png"}}]);