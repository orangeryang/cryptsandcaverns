(function(){"use strict";var e={3465:function(e,t,n){var r=n(9242),o=n(1419),a=(n(3942),n(4415),n(3396)),i=n(7139);const c={id:"app"},s={class:"card-header"},u=(0,a._)("span",{style:{"font-size":"30px"}},"C&C Exsample",-1),l={style:{color:"white","font-size":"24px","font-family":"VT323"}},d={class:"container",style:{"background-color":"white"}},p={style:{color:"black"}},m={class:"container",style:{"background-color":"red","margin-top":"10px"}},g=["innerHTML"],f={style:{"margin-top":"10px"}};function y(e,t,n,r,o,y){const _=(0,a.up)("el-button"),h=(0,a.up)("el-card"),v=(0,a.Q2)("loading");return(0,a.wg)(),(0,a.iD)("div",c,[(0,a.Wm)(h,{class:"box-card",style:{width:"400px","margin-left":"auto","margin-right":"auto","margin-top":"50px"}},{header:(0,a.w5)((()=>[(0,a._)("div",s,[u,(0,a.Wm)(_,{class:"button",plain:"",type:"primary",onClick:y.connect},{default:(0,a.w5)((()=>[(0,a.Uk)((0,i.zw)(null==o.wallet_address?"Connect Wallet":o.wallet_address.toString().substr(0,10)+"..."+o.wallet_address.toString().substr(o.wallet_address.length-4,4)),1)])),_:1},8,["onClick"])])])),default:(0,a.w5)((()=>[(0,a._)("div",l,(0,i.zw)(o.name),1),(0,a.wy)(((0,a.wg)(),(0,a.iD)("div",d,[(0,a._)("pre",p,(0,i.zw)(o.dungeon_string),1)])),[[v,o.loading]]),(0,a.wy)(((0,a.wg)(),(0,a.iD)("div",m,[(0,a._)("div",{innerHTML:o.svg},null,8,g)])),[[v,o.loading]]),(0,a._)("div",f,[(0,a.Wm)(_,{type:"danger",plain:"",onClick:y.mint},{default:(0,a.w5)((()=>[(0,a.Uk)("MINT")])),_:1},8,["onClick"])])])),_:1})])}n(7658);var _=n(7178),h=n(6182),v=n(7210);const b=[{name:"mint",type:"function",inputs:[],outputs:[{type:"core::integer::u128"}],state_mutability:"external"},{name:"core::integer::u256",type:"struct",members:[{name:"low",type:"core::integer::u128"},{name:"high",type:"core::integer::u128"}]},{name:"get_seeds",type:"function",inputs:[{name:"token_id",type:"core::integer::u128"}],outputs:[{type:"core::integer::u256"}],state_mutability:"view"},{name:"core::array::Span::<core::felt252>",type:"struct",members:[{name:"snapshot",type:"@core::array::Array::<core::felt252>"}]},{name:"token_URI_not_work_yet",type:"function",inputs:[{name:"token_id",type:"core::integer::u128"}],outputs:[{type:"core::array::Span::<core::felt252>"}],state_mutability:"view"},{name:"get_svg",type:"function",inputs:[{name:"token_id",type:"core::integer::u128"}],outputs:[{type:"core::array::Array::<core::felt252>"}],state_mutability:"view"},{name:"cc_map::utils::pack::Pack",type:"struct",members:[{name:"first",type:"core::felt252"},{name:"second",type:"core::felt252"},{name:"third",type:"core::felt252"}]},{name:"core::array::Span::<core::integer::u8>",type:"struct",members:[{name:"snapshot",type:"@core::array::Array::<core::integer::u8>"}]},{name:"cc_map::Dungeons::EntityData",type:"struct",members:[{name:"x",type:"core::array::Span::<core::integer::u8>"},{name:"y",type:"core::array::Span::<core::integer::u8>"},{name:"entity_data",type:"core::array::Span::<core::integer::u8>"}]},{name:"cc_map::Dungeons::DungeonSerde",type:"struct",members:[{name:"size",type:"core::integer::u8"},{name:"environment",type:"core::integer::u8"},{name:"structure",type:"core::integer::u8"},{name:"legendary",type:"core::integer::u8"},{name:"layout",type:"cc_map::utils::pack::Pack"},{name:"entities",type:"cc_map::Dungeons::EntityData"},{name:"affinity",type:"core::felt252"},{name:"dungeon_name",type:"core::array::Span::<core::felt252>"}]},{name:"generate_dungeon",type:"function",inputs:[{name:"token_id",type:"core::integer::u128"}],outputs:[{type:"cc_map::Dungeons::DungeonSerde"}],state_mutability:"view"},{name:"constructor",type:"constructor",inputs:[]},{kind:"struct",name:"cc_map::Dungeons::Minted",type:"event",members:[{kind:"key",name:"account",type:"core::starknet::contract_address::ContractAddress"},{kind:"data",name:"token_id",type:"core::integer::u128"}]},{kind:"struct",name:"cc_map::Dungeons::Claimed",type:"event",members:[{kind:"key",name:"account",type:"core::starknet::contract_address::ContractAddress"},{kind:"data",name:"token_id",type:"core::integer::u128"}]},{kind:"enum",name:"cc_map::Dungeons::Event",type:"event",variants:[{kind:"nested",name:"Minted",type:"cc_map::Dungeons::Minted"},{kind:"nested",name:"Claimed",type:"cc_map::Dungeons::Claimed"}]}],w="0x0019965eaf48c49d298a9a60423a6322c0b17443325a59832d65f0ac716364d2";var k={name:"App",components:{},mounted(){const e=new h.zt({sequencer:{network:h._G.NetworkName.SN_GOERLI}});console.log("provider",e),this.contract=new h.CH(b,w,e),this.init(),this.load_image()},data(){return{contract:null,name:"loading...",dungeon_string:"",svg:null,loading:!0,wallet_address:null,account:null,provider:null}},methods:{async init(){const e=1;this.loading=!0;const t=await this.contract.generate_dungeon(e);console.log("dungeon_data",t);const n=t.dungeon_name,r=t.layout,o=Number(t.size),a=t.entities;this.name=this.decode_string(n),console.log("name:",this.name),console.log("layout:",r),console.log("size:",o),console.log("entities:",a);let i=BigInt(r.first).toString(2).padStart(248,"0"),c=BigInt(r.second).toString(2),s=BigInt(r.third).toString(2),u=i+c+s,l=[],d=0;for(let p=0;p<o;p++){let e=[];for(let t=0;t<o;t++){const t=1==u[d]?" ":"X";e.push(t),d++}l.push(e)}console.log(l),this.dungeon_string=this.dungeon_toString(l),console.log(this.dungeon_string),this.loading=!1},async load_image(){const e=await this.contract.get_svg(1),t=this.decode_string(e);console.log("svg_str",t),this.svg=t},dungeon_toString(e){let t="";for(let n=0;n<e.length;n++){for(let r=0;r<e.length;r++){const o=e[n][r];t+=`${o} `}t+="\n"}return t},decode_string(e){let t="";for(let n=0;n<e.length;n++){let r=h.lC.decodeShortString(e[n]);t+=r}return t},async mint(){if(""==this.wallet_address)return;const e=new h.CH(b,w,this.account),t=await e.mint();console.log(t),(0,_.z8)({message:"Congrats, mint is a success.",type:"success"})},async connect(){const e=await(0,v.$j)();console.log(e.account),this.wallet_address=e.account.address,console.log(this.wallet_address),this.provider=e.provider,this.account=e.account}}},S=n(89);const C=(0,S.Z)(k,[["render",y]]);var x=C;const D=(0,r.ri)(x);D.use(o.Z),D.mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r].call(a.exports,a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,a){if(!r){var i=1/0;for(l=0;l<e.length;l++){r=e[l][0],o=e[l][1],a=e[l][2];for(var c=!0,s=0;s<r.length;s++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](r[s])}))?r.splice(s--,1):(c=!1,a<i&&(i=a));if(c){e.splice(l--,1);var u=o();void 0!==u&&(t=u)}}return t}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[r,o,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{745:"dd5a79ed",844:"2f5dca79"}[e]+".js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="cc_interface:";n.l=function(r,o,a,i){if(e[r])e[r].push(o);else{var c,s;if(void 0!==a)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var d=u[l];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+a){c=d;break}}c||(s=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,n.nc&&c.setAttribute("nonce",n.nc),c.setAttribute("data-webpack",t+a),c.src=r),e[r]=[o];var p=function(t,n){c.onerror=c.onload=null,clearTimeout(m);var o=e[r];if(delete e[r],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((function(e){return e(n)})),t)return t(n)},m=setTimeout(p.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=p.bind(null,c.onerror),c.onload=p.bind(null,c.onload),s&&document.head.appendChild(c)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e={143:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=a);var i=n.p+n.u(t),c=new Error,s=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;c.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",c.name="ChunkLoadError",c.type=a,c.request=i,o[1](c)}};n.l(i,s,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,a,i=r[0],c=r[1],s=r[2],u=0;if(i.some((function(t){return 0!==e[t]}))){for(o in c)n.o(c,o)&&(n.m[o]=c[o]);if(s)var l=s(n)}for(t&&t(r);u<i.length;u++)a=i[u],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(l)},r=self["webpackChunkcc_interface"]=self["webpackChunkcc_interface"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(3465)}));r=n.O(r)})();
//# sourceMappingURL=app.31b2d505.js.map