"use strict";(self.webpackChunklogos_blog_template=self.webpackChunklogos_blog_template||[]).push([[918],{81768:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0});const l=a(70655),n=l.__importDefault(a(67294)),o=l.__importDefault(a(86010)),d=a(93945),s=a(13616),r=l.__importDefault(a(16927)),i=l.__importDefault(a(99276));t.default=function(e){let{children:t}=e;const a=function(){const{metadata:e,frontMatter:t,contentTitle:a}=(0,s.useDoc)();return t.hide_title||void 0!==a?null:e.title}();return n.default.createElement("div",{className:(0,o.default)(d.ThemeClassNames.docs.docMarkdown,"markdown")},a&&n.default.createElement("header",null,n.default.createElement(i.default,{as:"h1"},a)),n.default.createElement(r.default,null,t))}},72103:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.useDocTOC=void 0;const l=a(70655),n=a(93945),o=a(13616),d=l.__importDefault(a(78375)),s=l.__importDefault(a(81768)),r=l.__importDefault(a(70331)),i=l.__importDefault(a(4316)),c=l.__importDefault(a(80578)),u=l.__importDefault(a(37721)),m=l.__importDefault(a(74054)),f=l.__importDefault(a(18554)),p=l.__importDefault(a(86010)),v=l.__importDefault(a(67294)),b=a(89164),_=a(11679),E=l.__importDefault(a(22221));function h(){const{frontMatter:e,toc:t}=(0,o.useDoc)(),a=(0,n.useWindowSize)(),l=(0,b.useMedia)("(min-width: 1200px)"),d=e.hide_table_of_contents,s=!d&&t.length>0;return{hidden:d,mobile:s?v.default.createElement("div",{className:E.default.tocMobile},v.default.createElement(u.default,null)):void 0,desktop:s&&(l||"ssr"===a)?v.default.createElement(c.default,null):void 0}}t.useDocTOC=h,t.default=function(e){let{children:t}=e;const a=h();return v.default.createElement("div",{className:(0,p.default)("row",E.default.docItemGrid)},v.default.createElement("div",{className:(0,p.default)(E.default.docItemCol)},v.default.createElement(f.default,null),v.default.createElement("div",{className:E.default.docItemContainer},v.default.createElement("article",null,v.default.createElement(d.default,null),v.default.createElement(m.default,null),v.default.createElement(_.MDXEnhancementContext.Provider,{value:{items:[{component:"heading",position:"after",render:e=>"h1"===e.as&&a.mobile}]}},v.default.createElement(s.default,null,t)),v.default.createElement(r.default,null)),v.default.createElement(i.default,null))),v.default.createElement("div",{className:E.default.gap1}),a.desktop&&v.default.createElement("div",{className:(0,p.default)(E.default.toc)},a.desktop))}},59047:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0});const l=a(70655),n=l.__importDefault(a(67294)),o=a(93945),d=a(13616),s=l.__importDefault(a(80900)),r=l.__importDefault(a(72103));t.default=function(e){const t=`docs-doc-id-${e.content.metadata.unversionedId}`,a=e.content;return n.default.createElement(d.DocProvider,{content:e.content},n.default.createElement(o.HtmlClassNameProvider,{className:t},n.default.createElement(s.default,null),n.default.createElement(r.default,null,n.default.createElement(a,null))))}},74054:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0});const l=a(70655),n=l.__importDefault(a(67294)),o=l.__importDefault(a(86010)),d=l.__importDefault(a(11614)),s=a(93945),r=a(13616),i=l.__importDefault(a(22420)),c=a(31665);t.default=function(e){let{className:t}=e;const a=(0,r.useDocsVersion)();return a.badge?n.default.createElement("span",{className:(0,o.default)(t,s.ThemeClassNames.docs.docVersionBadge,"badge badge--secondary",i.default.badge)},n.default.createElement(c.Typography,{variant:"body3"},n.default.createElement(d.default,{id:"theme.docs.versionBadge.label",values:{versionLabel:a.label}},"Version: {versionLabel}"))):null}},20079:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0});const l=a(70655),n=a(31665),o=l.__importDefault(a(11614)),d=l.__importDefault(a(86010)),s=l.__importDefault(a(67294)),r=l.__importDefault(a(47834));t.default=function(e){let{collapsed:t,...a}=e;return s.default.createElement("button",{type:"button",...a,className:(0,d.default)("clean-btn",r.default.tocCollapsibleButton,!t&&r.default.tocCollapsibleButtonExpanded,a.className)},s.default.createElement("div",null),s.default.createElement(n.Typography,{variant:"body2"},s.default.createElement(o.default,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page")),t?s.default.createElement(n.ChevronDownIcon,null):s.default.createElement(n.ChevronUpIcon,null))}},80466:(e,t,a)=>{const l=a(70655),n=l.__importDefault(a(67294)),o=l.__importDefault(a(86010)),d=a(93945),s=l.__importDefault(a(1014)),r=l.__importDefault(a(20079)),i=l.__importDefault(a(2530));t.Z=function(e){let{toc:t,className:a,minHeadingLevel:l,maxHeadingLevel:c}=e;const{collapsed:u,toggleCollapsed:m}=(0,d.useCollapsible)({initialState:!0});return n.default.createElement("div",{className:(0,o.default)(i.default.tocCollapsible,!u&&i.default.tocCollapsibleExpanded,a)},n.default.createElement(r.default,{collapsed:u,onClick:m}),n.default.createElement(d.Collapsible,{lazy:!0,className:i.default.tocCollapsibleContent,collapsed:u},n.default.createElement(s.default,{toc:t,minHeadingLevel:l,maxHeadingLevel:c})))}},70331:(e,t,a)=>{a.r(t),a.d(t,{default:()=>b});var l=a(67294),n=a(86010),o=a(18015),d=a(2791),s=a(11614);function r(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a}=e;return l.createElement(s.default,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:l.createElement("b",null,l.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function i(e){let{lastUpdatedBy:t}=e;return l.createElement(s.default,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:l.createElement("b",null,t)}}," by {user}")}function c(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a,lastUpdatedBy:n}=e;return l.createElement("span",{className:o.k.common.lastUpdated},l.createElement(s.default,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?l.createElement(r,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:n?l.createElement(i,{lastUpdatedBy:n}):""}},"Last updated{atDate}{byUser}"),!1)}var u=a(45039),m=a(18189);const f="lastUpdated_vwxv";function p(e){return l.createElement("div",{className:(0,n.default)(o.k.docs.docFooterTagsRow,"row margin-bottom--sm")},l.createElement("div",{className:"col"},l.createElement(m.default,e)))}function v(e){let{editUrl:t,lastUpdatedAt:a,lastUpdatedBy:d,formattedLastUpdatedAt:s}=e;return l.createElement("div",{className:(0,n.default)(o.k.docs.docFooterEditMetaRow,"row")},l.createElement("div",{className:"col"},t&&l.createElement(u.default,{editUrl:t})),l.createElement("div",{className:(0,n.default)("col",f)},(a||d)&&l.createElement(c,{lastUpdatedAt:a,formattedLastUpdatedAt:s,lastUpdatedBy:d})))}function b(){const{metadata:e}=(0,d.k)(),{editUrl:t,lastUpdatedAt:a,formattedLastUpdatedAt:s,lastUpdatedBy:r,tags:i}=e,c=i.length>0,u=!!(t||a||r);return c||u?l.createElement("footer",{className:(0,n.default)(o.k.docs.docFooter,"docusaurus-mt-lg")},c&&l.createElement(p,{tags:i}),u&&l.createElement(v,{editUrl:t,lastUpdatedAt:a,lastUpdatedBy:r,formattedLastUpdatedAt:s})):null}},80900:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d});var l=a(67294),n=a(44873),o=a(2791);function d(){const{metadata:e,frontMatter:t,assets:a}=(0,o.k)();return l.createElement(n.d,{title:e.title,description:e.description,keywords:t.keywords,image:a.image??t.image})}},4316:(e,t,a)=>{a.r(t),a.d(t,{default:()=>i});var l=a(67294),n=a(2791),o=a(87462),d=a(11614),s=a(79255);function r(e){const{previous:t,next:a}=e;return l.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,d.translate)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"})},t&&l.createElement(s.Z,(0,o.Z)({},t,{subLabel:l.createElement(d.default,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),a&&l.createElement(s.Z,(0,o.Z)({},a,{subLabel:l.createElement(d.default,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}function i(){const{metadata:e}=(0,n.k)();return l.createElement(r,{previous:e.previous,next:e.next})}},80578:(e,t,a)=>{a.r(t),a.d(t,{default:()=>s});var l=a(67294),n=a(18015),o=a(2791),d=a(95967);function s(){const{toc:e,frontMatter:t}=(0,o.k)();return l.createElement(d.Z,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:n.k.docs.docTocDesktop})}},37721:(e,t,a)=>{a.r(t),a.d(t,{default:()=>i});var l=a(67294),n=a(86010),o=a(18015),d=a(2791),s=a(80466);const r="tocMobile_ITEo";function i(){const{toc:e,frontMatter:t}=(0,d.k)();return l.createElement(s.Z,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,n.default)(o.k.docs.docTocMobile,r)})}},18554:(e,t,a)=>{a.r(t),a.d(t,{default:()=>b});var l=a(67294),n=a(86010),o=a(6832),d=a(88746),s=a(11614),r=a(4452),i=a(18015),c=a(4049),u=a(6141);const m={unreleased:function(e){let{siteTitle:t,versionMetadata:a}=e;return l.createElement(s.default,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:l.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:a}=e;return l.createElement(s.default,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:l.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function f(e){const t=m[e.versionMetadata.banner];return l.createElement(t,e)}function p(e){let{versionLabel:t,to:a,onClick:n}=e;return l.createElement(s.default,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:l.createElement("b",null,l.createElement(d.default,{to:a,onClick:n},l.createElement(s.default,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function v(e){let{className:t,versionMetadata:a}=e;const{siteConfig:{title:d}}=(0,o.default)(),{pluginId:s}=(0,r.useActivePlugin)({failfast:!0}),{savePreferredVersionName:u}=(0,c.J)(s),{latestDocSuggestion:m,latestVersionSuggestion:v}=(0,r.useDocVersionSuggestions)(s),b=m??(_=v).docs.find((e=>e.id===_.mainDocId));var _;return l.createElement("div",{className:(0,n.default)(t,i.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},l.createElement("div",null,l.createElement(f,{siteTitle:d,versionMetadata:a})),l.createElement("div",{className:"margin-top--md"},l.createElement(p,{versionLabel:v.label,to:b.path,onClick:()=>u(v.name)})))}function b(e){let{className:t}=e;const a=(0,u.E)();return a.banner?l.createElement(v,{className:t,versionMetadata:a}):null}},95967:(e,t,a)=>{a.d(t,{Z:()=>r});var l=a(87462),n=a(67294),o=a(86010),d=a(1014);const s="tableOfContents_bqdL";function r(e){let{className:t,...a}=e;return n.createElement("div",{className:(0,o.default)(s,"thin-scrollbar",t)},n.createElement(d.default,(0,l.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},1014:(e,t,a)=>{a.r(t),a.d(t,{default:()=>c});var l=a(87462),n=a(67294),o=a(96793),d=a(94462),s=a(78586);function r(e){let{toc:t,className:a,linkClassName:l,isChild:o}=e;return t.length?n.createElement("ul",{className:o?void 0:a},t.map((e=>n.createElement("li",{key:e.id},n.createElement("a",{href:`#${e.id}`,className:l??void 0,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(r,{isChild:!0,toc:e.children,className:a,linkClassName:l}))))):null}const i=n.memo(r);function c(e){let{toc:t,className:a="table-of-contents table-of-contents__left-border",linkClassName:r="table-of-contents__link",linkActiveClassName:c,minHeadingLevel:u,maxHeadingLevel:m,...f}=e;const p=(0,o.L)(),v=u??p.tableOfContents.minHeadingLevel,b=m??p.tableOfContents.maxHeadingLevel,_=(0,d.b)({toc:t,minHeadingLevel:v,maxHeadingLevel:b}),E=(0,n.useMemo)((()=>{if(r&&c)return{linkClassName:r,linkActiveClassName:c,minHeadingLevel:v,maxHeadingLevel:b}}),[r,c,v,b]);return(0,s.S)(E),n.createElement(i,(0,l.Z)({toc:_,className:a,linkClassName:r},f))}},22221:(e,t,a)=>{a.r(t),a.d(t,{default:()=>l});const l={docItemContainer:"docItemContainer_hrrU",docItemGrid:"docItemGrid_SzoZ",gap1:"gap1_XuuQ",toc:"toc_pP_5",tocMobile:"tocMobile_imaF",docItemCol:"docItemCol_F52z"}},22420:(e,t,a)=>{a.r(t),a.d(t,{default:()=>l});const l={badge:"badge_AsjZ"}},47834:(e,t,a)=>{a.r(t),a.d(t,{default:()=>l});const l={tocCollapsibleButton:"tocCollapsibleButton_dxRj",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_TSyC"}},2530:(e,t,a)=>{a.r(t),a.d(t,{default:()=>l});const l={tocCollapsible:"tocCollapsible_ROek",tocCollapsibleContent:"tocCollapsibleContent_Qsjj",tocCollapsibleExpanded:"tocCollapsibleExpanded_zTjk"}}}]);