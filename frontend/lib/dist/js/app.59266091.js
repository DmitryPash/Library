(function(){"use strict";var n={9236:function(n,o,e){var t=e(9242),i=e(3396);const l={class:"wrapper"},r={class:"container"},a=(0,i.Uk)("account"),u=(0,i._)("br",null,null,-1),s=(0,i.Uk)("login"),c=(0,i._)("br",null,null,-1);function d(n,o,e,t,d,_){const O=(0,i.up)("headerVue"),m=(0,i.up)("router-link"),p=(0,i.up)("router-view");return(0,i.wg)(),(0,i.iD)("div",l,[(0,i.Wm)(O),(0,i._)("div",r,[(0,i.Wm)(m,{to:{name:"accountbooks"}},{default:(0,i.w5)((()=>[a])),_:1}),u,(0,i.Wm)(m,{to:{name:"login"}},{default:(0,i.w5)((()=>[s])),_:1}),c,(0,i.Wm)(p)])])}var _=e(7139);const O={class:"header"},m={class:"container"},p={class:"header-wrapper"},f=(0,i._)("div",{class:"header-logo"}," Library Books ",-1),k={class:"header-login"},v=(0,i.Uk)("Log in");function g(n,o,e,t,l,r){const a=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("div",O,[(0,i._)("div",m,[(0,i._)("div",p,[f,(0,i._)("div",k,[(0,i.Wm)(a,{to:"/accountbooks",class:"header-login-link"},{default:(0,i.w5)((()=>[(0,i.Uk)((0,_.zw)(this.USER.email),1)])),_:1}),this.USER.length<1?((0,i.wg)(),(0,i.j4)(a,{key:0,to:"/login",class:"header-login-link"},{default:(0,i.w5)((()=>[v])),_:1})):(0,i.kq)("",!0)])])])])}var b=e(65),S={computed:{...(0,b.Se)(["USER"])}},w=e(89);const h=(0,w.Z)(S,[["render",g]]);var E=h,B={name:"App",components:{headerVue:E}};const D=(0,w.Z)(B,[["render",d]]);var K=D,y=e(2483);const T={class:"container"},U={class:"login"},W={class:"login-wrapper"},N=(0,i._)("div",{class:"login-title"},"login",-1),L={class:"login-form"},R={action:""},A={class:"login-form-field"},x=(0,i._)("label",{for:"name"},"Name",-1),z={class:"login-form-field"},C=(0,i._)("label",{for:"surname"},"Surname",-1),I={class:"login-form-field"},F=(0,i._)("label",{for:"email"},"Email",-1);function j(n,o,e,l,r,a){const u=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("div",T,[(0,i._)("div",U,[(0,i._)("div",W,[N,(0,i._)("div",L,[(0,i._)("form",R,[(0,i._)("div",A,[x,(0,i.wy)((0,i._)("input",{type:"text",id:"name","onUpdate:modelValue":o[0]||(o[0]=n=>r.login.username=n)},null,512),[[t.nr,r.login.username]])]),(0,i._)("div",z,[C,(0,i.wy)((0,i._)("input",{type:"text",id:"surname","onUpdate:modelValue":o[1]||(o[1]=n=>r.login.surname=n)},null,512),[[t.nr,r.login.surname]])]),(0,i._)("div",I,[F,(0,i.wy)((0,i._)("input",{type:"text",id:"email","onUpdate:modelValue":o[2]||(o[2]=n=>r.login.email=n)},null,512),[[t.nr,r.login.email]])])])]),(0,i.Wm)(u,{to:{name:"accountbooks",params:{date:this.login}}},{default:(0,i.w5)((()=>[(0,i._)("div",{class:"login-btn",onClick:o[3]||(o[3]=n=>a.sendDataLogin(r.login))},"Continue")])),_:1},8,["to"])])])])}var V={name:"Login",data(){return{login:{username:null,surname:null,email:null}}},methods:{sendDataLogin(n){this.ADD_NEW_USER(n)},...(0,b.nv)(["ADD_NEW_USER"])},computed:{...(0,b.Se)(["USER"])}};const Z=(0,w.Z)(V,[["render",j]]);var H=Z;const P={class:"wrapper"},M=(0,i._)("div",{class:"books-title"},"Create your book",-1),G=(0,i._)("label",{for:""},"Title",-1),Y={class:"book-container"},q={class:"row"},$={class:"book-img"},J=["src","alt"],Q={class:"book-title"},X={class:"book-title"},nn={class:"flex"},on=["onClick"],en=(0,i._)("br",null,null,-1),tn=(0,i._)("br",null,null,-1),ln=(0,i._)("hr",null,null,-1),rn=(0,i._)("br",null,null,-1),an=(0,i._)("br",null,null,-1);function un(n,o,e,l,r,a){const u=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("div",P,[M,G,(0,i.wy)((0,i._)("input",{type:"text","onUpdate:modelValue":o[0]||(o[0]=o=>n.BOOKS.title=o)},null,512),[[t.nr,n.BOOKS.title]]),(0,i._)("button",{onClick:o[1]||(o[1]=n=>a.addNewBook())},"addNewBook"),(0,i.Uk)(" Count of books "+(0,_.zw)(this.BOOKS.length)+" ",1),(0,i._)("div",Y,[(0,i._)("div",q,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(n.BOOKS,((n,o)=>((0,i.wg)(),(0,i.iD)("div",{class:"wrapper",key:n.id},[(0,i.Wm)(u,{to:{name:"bookitem",params:{id:n.id}}},{default:(0,i.w5)((()=>[(0,i._)("li",null,"Book - "+(0,_.zw)(n.id)+" / "+(0,_.zw)(o),1),(0,i._)("div",$,[(0,i._)("img",{src:n.image_url,alt:n.title},null,8,J)]),(0,i._)("div",Q,(0,_.zw)(n.title),1),(0,i._)("div",X,(0,_.zw)(n.date),1)])),_:2},1032,["to"]),(0,i._)("div",nn,[(0,i._)("button",{onClick:e=>a.RemoveBook(n,o),class:"ui-btn"}," Delete ",8,on)])])))),128))])]),en,tn,ln,rn,an,(0,i._)("ul",null,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(n.DELBOOK,(n=>((0,i.wg)(),(0,i.iD)("li",{key:n.id},(0,_.zw)(n.title)+" "+(0,_.zw)(n.date),1)))),128))])])}var sn={name:"AccaountBooks",components:{},data(){return{bookID:1,userBooks:[],stateOfBook:null,errors:[]}},methods:{printDate:function(){return(new Date).toLocaleTimeString()},addNewBook(){const n={title:this.BOOKS.title,id:this.bookID++,date:this.printDate()};this.ADD_NEW_BOOKS(n)},infoBook(n){this.SHOW_INFO_BOOK(n)},RemoveBook(n){n.date=this.printDate(),this.DELETE_BOOK(n)},...(0,b.nv)(["GET_BOOKS_FROM_API","ADD_NEW_BOOKS","DELETE_BOOK","SHOW_INFO_BOOK"])},computed:{...(0,b.Se)(["BOOKS","DELBOOK"])},mounted(){this.GET_BOOKS_FROM_API()}};const cn=(0,w.Z)(sn,[["render",un]]);var dn=cn;const _n={class:"wrapper"};function On(n,o,e,l,r,a){return(0,i.wg)(),(0,i.iD)("div",_n,[(0,i._)("h1",null,"book - "+(0,_.zw)(n.BOOKS[r.id].title),1),(0,i.wy)((0,i._)("input",{type:"text","onUpdate:modelValue":o[0]||(o[0]=o=>n.BOOKS[r.id].title=o)},null,512),[[t.nr,n.BOOKS[r.id].title]])])}var mn={data(){return{id:this.$route.params.id-1}},computed:{...(0,b.Se)(["BOOKS"])}};const pn=(0,w.Z)(mn,[["render",On]]);var fn=pn,kn=(0,y.p7)({history:(0,y.r5)(),routes:[{path:"/login",component:H,name:"login"},{path:"/accountbooks",component:dn,name:"accountbooks"},{path:"/accountbooks/:id",component:fn,name:"bookitem"}]});e(6265);let vn=new b.ZP.Store({state:{books:[],deleteBook:[],user:[]},mutations:{SET_NEW_USER:(n,o)=>{n.user=o},SET_BOOKS_TO_STATE:(n,o)=>{n.books=o},SET_NEW_BOOKS:(n,o)=>{n.books.push(o)},SET_DEL_BOOKS:(n,o)=>{n.deleteBook.push(o),n.books=n.books.filter((n=>n!=o))},SET_INFO_BOOKS:(n,o)=>{console.log(o)}},actions:{ADD_NEW_USER({commit:n},o){n("SET_NEW_USER",o)},ADD_NEW_BOOKS({commit:n},o){n("SET_NEW_BOOKS",o)},DELETE_BOOK({commit:n},o){n("SET_DEL_BOOKS",o)},SHOW_INFO_BOOK({commit:n},o){n("SET_INFO_BOOKS",o)}},getters:{BOOKS(n){return n.books},USER(n){return n.user},DELBOOK(n){return n.deleteBook}}});var gn=vn;(0,t.ri)(K).use(gn).use(kn).mount("#app")}},o={};function e(t){var i=o[t];if(void 0!==i)return i.exports;var l=o[t]={exports:{}};return n[t](l,l.exports,e),l.exports}e.m=n,function(){var n=[];e.O=function(o,t,i,l){if(!t){var r=1/0;for(c=0;c<n.length;c++){t=n[c][0],i=n[c][1],l=n[c][2];for(var a=!0,u=0;u<t.length;u++)(!1&l||r>=l)&&Object.keys(e.O).every((function(n){return e.O[n](t[u])}))?t.splice(u--,1):(a=!1,l<r&&(r=l));if(a){n.splice(c--,1);var s=i();void 0!==s&&(o=s)}}return o}l=l||0;for(var c=n.length;c>0&&n[c-1][2]>l;c--)n[c]=n[c-1];n[c]=[t,i,l]}}(),function(){e.n=function(n){var o=n&&n.__esModule?function(){return n["default"]}:function(){return n};return e.d(o,{a:o}),o}}(),function(){e.d=function(n,o){for(var t in o)e.o(o,t)&&!e.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:o[t]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){e.o=function(n,o){return Object.prototype.hasOwnProperty.call(n,o)}}(),function(){var n={143:0};e.O.j=function(o){return 0===n[o]};var o=function(o,t){var i,l,r=t[0],a=t[1],u=t[2],s=0;if(r.some((function(o){return 0!==n[o]}))){for(i in a)e.o(a,i)&&(e.m[i]=a[i]);if(u)var c=u(e)}for(o&&o(t);s<r.length;s++)l=r[s],e.o(n,l)&&n[l]&&n[l][0](),n[l]=0;return e.O(c)},t=self["webpackChunklib"]=self["webpackChunklib"]||[];t.forEach(o.bind(null,0)),t.push=o.bind(null,t.push.bind(t))}();var t=e.O(void 0,[998],(function(){return e(9236)}));t=e.O(t)})();
//# sourceMappingURL=app.59266091.js.map