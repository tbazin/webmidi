"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7404],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),f=r,m=p["".concat(s,".").concat(f)]||p[f]||u[f]||i;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3496:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return c},default:function(){return p}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={sidebar_position:1},s="Middle C & Octave Offset",d={unversionedId:"going-further/middle-c",id:"going-further/middle-c",title:"Middle C & Octave Offset",description:"Default Value for Middle C",source:"@site/docs/going-further/middle-c.md",sourceDirName:"going-further",slug:"/going-further/middle-c",permalink:"/docs/going-further/middle-c",editUrl:"https://github.com/djipco/webmidi/edit/master/website/docs/going-further/middle-c.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Basics",permalink:"/docs/getting-started/basics"},next:{title:"Performance",permalink:"/docs/going-further/performance"}},c=[{value:"Default Value for Middle C",id:"default-value-for-middle-c",children:[],level:2},{value:"Offsetting Middle C",id:"offsetting-middle-c",children:[{value:"Inbound Note Example",id:"inbound-note-example",children:[],level:3},{value:"Outbound Note Example",id:"outbound-note-example",children:[],level:3}],level:2},{value:"Offsetting Granularity",id:"offsetting-granularity",children:[],level:2}],u={toc:c};function p(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"middle-c--octave-offset"},"Middle C & Octave Offset"),(0,i.kt)("h2",{id:"default-value-for-middle-c"},"Default Value for Middle C"),(0,i.kt)("p",null,"The general MIDI 1.0 specification does not explicitly define a pitch for middle C but it does\nconsider middle C to be note number 60. The ",(0,i.kt)("strong",{parentName:"p"},"MIDI Tuning Standard")," states that note number 69\nshould be tuned at 440Hz by default, which would make middle C (60) to be C4. However, different\nmanufacturers have assigned middle C to various octaves/pitches (usually C3, C4 or C5)."),(0,i.kt)("p",null,"In accordance with the ",(0,i.kt)("strong",{parentName:"p"},"MIDI Tuning Standard")," and the\n",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Scientific_pitch_notation"},(0,i.kt)("strong",{parentName:"a"},"scientific pitch notation")),", WEBMIDI.js\nconsiders middle C (261.626 Hz) to be C4 by default."),(0,i.kt)("h2",{id:"offsetting-middle-c"},"Offsetting Middle C"),(0,i.kt)("p",null,"You can offset the reported note name and octave by using the ",(0,i.kt)("inlineCode",{parentName:"p"},"octaveOffset")," property of various\nobjects. This will make it easier to interface with devices that do not place middle C at C4."),(0,i.kt)("h3",{id:"inbound-note-example"},"Inbound Note Example"),(0,i.kt)("p",null,"If your external MIDI keyboard sends C3 and WEBMIDI.js reports it as C4, it is because your keyboard\nplaces middle C one octave lower than WEBMIDI.js does. To account for that, simply set\n",(0,i.kt)("a",{parentName:"p",href:"/api/classes/WebMidi#octaveOffset"},(0,i.kt)("inlineCode",{parentName:"a"},"WebMidi.octaveOffset"))," to ",(0,i.kt)("inlineCode",{parentName:"p"},"-1"),". This way, when your keyboard\nsends C3, WEBMIDI.js will also report it as C3."),(0,i.kt)("p",null,"In both cases the actual note number (60) remains the same. It is just being reported differently."),(0,i.kt)("h3",{id:"outbound-note-example"},"Outbound Note Example"),(0,i.kt)("p",null,"If you are sending F#4 to an external device and that device thinks it's receiving F#5, it means\nthat the external device places middle C one octave higher. In this case, set\n",(0,i.kt)("a",{parentName:"p",href:"/api/classes/WebMidi#octaveOffset"},(0,i.kt)("inlineCode",{parentName:"a"},"WebMidi.octaveOffset"))," to ",(0,i.kt)("inlineCode",{parentName:"p"},"1")," to account for the difference."),(0,i.kt)("h2",{id:"offsetting-granularity"},"Offsetting Granularity"),(0,i.kt)("p",null,"For most scenarios, setting the global ",(0,i.kt)("a",{parentName:"p",href:"/api/classes/WebMidi#octaveOffset"},(0,i.kt)("inlineCode",{parentName:"a"},"WebMidi.octaveOffset")),"\nis enough. However, the ",(0,i.kt)("inlineCode",{parentName:"p"},"octaveOffset")," property is available for several objects to allow for better\ngranularity:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/api/classes/Input"},"Input")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/api/classes/InputChannel"},"InputChannel")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/api/classes/Output"},"Output")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/api/classes/OutputChannel"},"OutputChannel")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/api/classes/Note"},"Note")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/api/classes/WebMidi"},"WebMidi"))),(0,i.kt)("p",null,"If you define ",(0,i.kt)("inlineCode",{parentName:"p"},"octaveOffset")," on several objects, their value will be added. For example, if you\nset ",(0,i.kt)("a",{parentName:"p",href:"/api/classes/WebMidi#octaveOffset"},(0,i.kt)("inlineCode",{parentName:"a"},"WebMidi.octaveOffset"))," to ",(0,i.kt)("inlineCode",{parentName:"p"},"-1")," and set ",(0,i.kt)("inlineCode",{parentName:"p"},"octaveOffset")," on a\nspecific channel to ",(0,i.kt)("inlineCode",{parentName:"p"},"1"),", the resulting offset on that channel will be ",(0,i.kt)("inlineCode",{parentName:"p"},"0")," (-1 + 1) while the offset\non other channels will be ",(0,i.kt)("inlineCode",{parentName:"p"},"1"),"."))}p.isMDXComponent=!0}}]);