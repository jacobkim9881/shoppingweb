(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{20:function(e){e.exports=JSON.parse('[{"id":1,"title":"Male full suit","price":"300","photo":"http://okun.co.kr/shopimages/hehekuk/0550010003122.jpg?1412243459"},{"id":2,"title":"Male Jacket","price":"100","photo":"https://gababa.co.kr/web/product/big/201811/2ffc33331dd50f84519bb314262b07a5.jpg"},{"id":3,"title":"Male pants","price":"50","photo":"https://gababa.co.kr/web/product/big/20200305/78b1cadb22152eac1a727a25383c904a.jpg"}]')},47:function(e,t,n){e.exports=n(74)},52:function(e,t,n){},74:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(36),i=n.n(l),c=(n(52),n(1)),u=n(4),o=n(5),s=n(6),m=n(7),p=n(11),h=n(2),d=n(16);function f(){var e=Object(c.a)(["\nposition: relative;\ntop: 100px;\nmargin: 0 auto;\nbackground-color: hsla(0, 100%, 0%, 0.5);\nwidth: 100%;\n"]);return f=function(){return e},e}function v(){return r.a.createElement(b,null,"Hello, this is home!")}var b=h.a.div(f()),E=n(8),g=function(e){Object(m.a)(n,e);var t=Object(s.a)(n);function n(){var e;return Object(u.a)(this,n),(e=t.call(this)).onSignIn=e.onSignIn.bind(Object(E.a)(e)),e}return Object(o.a)(n,[{key:"onSignIn",value:function(e){var t=e.getBasicProfile();console.log("ID: "+t.getId()),console.log("Full Name: "+t.getName()),console.log("Given Name: "+t.getGivenName()),console.log("Family Name: "+t.getFamilyName()),console.log("Image URL: "+t.getImageUrl()),console.log("Email: "+t.getEmail());var n=e.getAuthResponse().id_token;console.log("ID Token: "+n)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{class:"g-signin2","data-onsuccess":this.onSignIn,"data-theme":"dark"},"ddd"))}}]),n}(a.Component);function O(){var e=Object(c.a)(["    \n    display: inline-block;\n    height : 100%;     \n"]);return O=function(){return e},e}function j(e){var t=e.src;return r.a.createElement(y,{src:t})}var y=h.a.img(O()),k=n(9),w=n.n(k);function x(){var e=Object(c.a)(["\nbox-sizing: border-box;\ndisplay: inline-block;\nwidth: 30px;\n"]);return x=function(){return e},e}function C(){var e=Object(c.a)(["\n    cursor: pointer;\n"]);return C=function(){return e},e}var D=function(e){Object(m.a)(n,e);var t=Object(s.a)(n);function n(){var e;return Object(u.a)(this,n),(e=t.call(this)).state={reviews:[],pagen:1},e.pager=e.pager.bind(Object(E.a)(e)),e.moveP=e.moveP.bind(Object(E.a)(e)),e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;w.a.get("https://jsonplaceholder.typicode.com/comments").then((function(t){e.setState({reviews:t.data})}))}},{key:"pager",value:function(e){this.setState({pagen:e/10})}},{key:"moveP",value:function(e){"<"===e&&this.state.pagen>=1?this.setState({pagen:this.state.pagen-1}):"<"===e&&this.state.pagen<=this.state.reviews.length-1&&this.setState({pagen:this.state.pagen+1})}},{key:"render",value:function(){var e=this,t=this.state.pagen,n=10*(t-1)+1,a=10*t;return r.a.createElement("div",null,r.a.createElement(S,null,r.a.createElement("center",null,r.a.createElement("span",{onClick:function(){return e.moveP("<")}},"<"),this.state.reviews.map((function(n){return t<=5&&n.id%10===0&&n.id/10>=1&&n.id/10<=10||n.id%10===0&&n.id/10>=t-5&&n.id/10<=t+5?r.a.createElement(I,{onClick:function(){return e.pager(n.id)}}," ",n.id/10," "):""})),r.a.createElement("span",{onClick:function(){return e.moveP(">")}},">"))),this.state.reviews.map((function(e){return r.a.createElement("p",null,e.id>=n&&e.id<=a?r.a.createElement("div",null,r.a.createElement("p",null,"ID : ",e.name),r.a.createElement("p",null,"Review : ",e.body," ")):"")})))}}]),n}(a.Component),S=h.a.div(C()),I=h.a.span(x()),P=n(20);function L(){var e=Object(c.a)(["\n    font-size: 1.5rem;\n"]);return L=function(){return e},e}function G(){var e=Object(c.a)(["\n    height: 10rem;\n    width: 10rem;\n    position: absolute;\n    display: inline-block;\n    margin-left: 10rem;\n"]);return G=function(){return e},e}function N(e){var t=e.name,n=e.price;return r.a.createElement(M,null,r.a.createElement(U,null,t),r.a.createElement("br",null),r.a.createElement(U,null,"Price: ",n),r.a.createElement("br",null),r.a.createElement("button",null,"Buy"))}var M=h.a.div(G()),U=h.a.p(L());function T(){var e=Object(d.f)().id-1;return r.a.createElement("div",null,r.a.createElement(j,{src:P[e].photo}),r.a.createElement(N,{name:P[e].title,price:P[e].price}),r.a.createElement("br",null),r.a.createElement(D,null))}function z(e){var t=e.name,n=e.email;return r.a.createElement("div",null,"Welcome, ",t,". Your email is ",n,".",r.a.createElement(p.b,{to:"/"},r.a.createElement("button",{type:"button"},"Back to home")))}function B(){var e=Object(c.a)(["\ntext-align: left;\n"]);return B=function(){return e},e}function q(){var e=Object(c.a)(["\nwidth: 20rem;\nheight: 15rem;\n"]);return q=function(){return e},e}var J=function(e){Object(m.a)(n,e);var t=Object(s.a)(n);function n(){var e;return Object(u.a)(this,n),(e=t.call(this)).state={username:null,email:null},e.handleCreate=e.handleCreate.bind(Object(E.a)(e)),e.deleteState=e.deleteState.bind(Object(E.a)(e)),e}return Object(o.a)(n,[{key:"handleCreate",value:function(e){var t=this;e.preventDefault(),w.a.post("http://localhost:3001/api",{username:this.username.value,password:this.password.value,email:this.email.value}).then((function(){return t.setState({username:t.username.value,email:t.email.value})}))}},{key:"deleteState",value:function(){this.setState({username:null,email:null})}},{key:"render",value:function(){var e=this;return r.a.createElement(R,{onSubmit:this.handleCreate},r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),null==this.state.username?r.a.createElement("table",null,r.a.createElement("tr",null,r.a.createElement(A,null,"ID : "),"  ",r.a.createElement("th",null,r.a.createElement("input",{type:"text",ref:function(t){e.username=t},name:"username"}))),r.a.createElement("tr",null,r.a.createElement(A,null,"Password : "),"    ",r.a.createElement("th",null,r.a.createElement("input",{type:"password",ref:function(t){e.password=t},name:"password"}))),r.a.createElement("tr",null,r.a.createElement(A,null,"Email : "),"   ",r.a.createElement("th",null,r.a.createElement("input",{type:"text",ref:function(t){e.email=t},name:"email"}))),r.a.createElement("tr",null,r.a.createElement("th",null),r.a.createElement("th",null,r.a.createElement("input",{type:"submit"})))):r.a.createElement(z,{onClick:this.deleteState,name:this.state.username,email:this.state.email}))}}]),n}(a.Component),R=h.a.form(q()),A=h.a.th(B());function F(){var e=Object(c.a)(["\n    text-decoration: none;\n"]);return F=function(){return e},e}function H(){var e=Object(c.a)(["\n    margin : 0;\n"]);return H=function(){return e},e}function V(){var e=Object(c.a)(["\n    display: inline-block;\n    padding 30px;    \n    height : 200px;\n    width : 150px;\n    text-decoration : none;\n    & : visited {\n        color : black;\n    };\n    & : link {\n        color : black;\n    };\n    & : hover {\n        color : red;\n    };\n"]);return V=function(){return e},e}var W=function(e){Object(m.a)(n,e);var t=Object(s.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return r.a.createElement(Y,null,r.a.createElement(_,{to:this.props.to},r.a.createElement(j,{src:this.props.src}),r.a.createElement("br",null),r.a.createElement($,null,this.props.title),r.a.createElement("br",null),r.a.createElement($,null,this.props.price," EUR")))}}]),n}(a.Component),Y=h.a.div(V()),$=h.a.p(H()),_=Object(h.a)(p.b)(F()),K=function(e){Object(m.a)(n,e);var t=Object(s.a)(n);function n(){var e;return Object(u.a)(this,n),(e=t.call(this)).state={items:[]},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;w.a.get("http://localhost:3001/api/item").then((function(t){e.setState({items:t.data})}))}},{key:"render",value:function(){return this.state.items.map((function(e){return r.a.createElement(W,{key:e.id,to:"/dress/showitem/"+e.id,src:e.photo,title:e.title,price:e.price})}))}}]),n}(a.Component);function Q(){var e=Object(c.a)(["\n    margin-top: 7rem;\n"]);return Q=function(){return e},e}function X(){var e=Object(d.g)().path;return r.a.createElement(Z,null,r.a.createElement(d.c,null,r.a.createElement(d.a,{exact:!0,path:e,children:r.a.createElement(K,null)}),r.a.createElement(d.a,{path:"".concat(e,"/showitem/:id"),children:r.a.createElement(T,null)})))}var Z=h.a.div(Q());function ee(e){return e.match(/\d*$/)[0]}var te=n(41),ne={username:"",id:0,loggedin:!1};var ae=Object(te.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGGEDIN":return Object.assign({},e,{loggedin:!0,id:t.id,username:t.username});case"LOGGEDOUT":return Object.assign({},e,{loggedin:!1,id:0,username:""});default:return e}}));ae.subscribe((function(){return console.log(ae.getState())}));var re=ae;function le(){var e=Object(c.a)(["\ntext-align: left;\n"]);return le=function(){return e},e}var ie=function(e){Object(m.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={},a.handleEdit=a.handleEdit.bind(Object(E.a)(a)),a.handleDelete=a.handleDelete.bind(Object(E.a)(a)),a}return Object(o.a)(n,[{key:"handleEdit",value:function(e){var t=ee(window.location.pathname);e.preventDefault(),w.a.put("http://localhost:3001/api/edit/"+t,{password:this.pwd.value,email:this.email.value})}},{key:"handleDelete",value:function(){var e=ee(window.location.pathname);!0===window.confirm("Are you sure to delete your account?")&&w.a.delete("http://localhost:3001/api/delete/"+e).then((function(e){200!==e.status?console.log(e):(alert("Your account is deleted!"),re.dispatch({type:"LOGGEDOUT"}),window.history.back())}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("form",{onSubmit:this.handleEdit},r.a.createElement("table",null,r.a.createElement("tr",null,r.a.createElement(ce,null,"change password: "),r.a.createElement("th",null,r.a.createElement("input",{type:"text",ref:function(t){e.pwd=t},name:"password"}))),r.a.createElement("tr",null,r.a.createElement(ce,null,"change email: "),r.a.createElement("th",null,r.a.createElement("input",{type:"text",ref:function(t){e.email=t},name:"email"}))),r.a.createElement("tr",null,r.a.createElement("p",{onClick:this.handleDelete},"Delete account")),r.a.createElement("tr",null,r.a.createElement("input",{type:"submit"})))))}}]),n}(a.Component),ce=h.a.th(le()),ue=function(e){Object(m.a)(n,e);var t=Object(s.a)(n);function n(){var e;return Object(u.a)(this,n),(e=t.call(this)).handleCreate=e.handleCreate.bind(Object(E.a)(e)),e}return Object(o.a)(n,[{key:"handleCreate",value:function(e){e.preventDefault(),w.a.post("http://localhost:3001/api/item",{title:this.title.value,price:this.price.value,photo:this.photo.value}).then((function(){return window.location.reload()}))}},{key:"render",value:function(){var e=this;return r.a.createElement("form",{onSubmit:this.handleCreate},r.a.createElement("h3",null,"Create Items"),"Item name: ",r.a.createElement("input",{type:"text",name:"title",ref:function(t){e.title=t}}),"| Price: ",r.a.createElement("input",{type:"text",name:"price",ref:function(t){e.price=t}})," | Photo url: ",r.a.createElement("input",{type:"text",name:"photo",ref:function(t){e.photo=t}}),r.a.createElement("input",{type:"submit"}))}}]),n}(a.Component);function oe(){var e=Object(c.a)(["\ndisplay: none;\n"]);return oe=function(){return e},e}function se(){var e=Object(c.a)(["\ncolor: red;\ncursor: pointer;\n"]);return se=function(){return e},e}function me(){var e=Object(c.a)(["\ndisplay: inline-block;\n"]);return me=function(){return e},e}var pe=function(e){Object(m.a)(n,e);var t=Object(s.a)(n);function n(){var e;return Object(u.a)(this,n),(e=t.call(this)).state={items:[]},e.reqPutItem=e.reqPutItem.bind(Object(E.a)(e)),e}return Object(o.a)(n,[{key:"handleDelete",value:function(e){e.preventDefault();var t=e.target.children[0].innerText;w.a.delete("http://localhost:3001/api/item/delete/".concat(t)).then((function(){return window.location.reload()}))}},{key:"reqPutItem",value:function(e){e.preventDefault();var t=e.target.children.id.innerText;w.a.put("http://localhost:3001/api/item/".concat(t),{title:this.title.value,price:parseInt(this.price.value,10),photo:this.photo.value})}},{key:"componentDidMount",value:function(){var e=this;w.a.get("http://localhost:3001/api/item").then((function(t){e.setState({items:t.data})}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("ul",null,this.state.items.map((function(t){return r.a.createElement("li",{key:t.id},r.a.createElement("form",{onSubmit:e.reqPutItem},"ID: ",r.a.createElement("span",{name:"id"},t.id)," | Item name: ",r.a.createElement("input",{type:"text",name:"title",defaultValue:t.title,ref:function(t){e.title=t}}),"| Price: ",r.a.createElement("input",{type:"text",name:"price",defaultValue:t.price,ref:function(t){e.price=t}})," | Photo url: ",r.a.createElement("input",{type:"text",name:"photo",defaultValue:t.photo,ref:function(t){e.photo=t}}),r.a.createElement("input",{type:"submit"}),r.a.createElement(de,{onClick:e.handleDelete},r.a.createElement(fe,null,t.id),"Delete")))}))),r.a.createElement(ue,null),r.a.createElement(he,null))}}]),n}(a.Component),he=Object(h.a)(K)(me()),de=h.a.span(se()),fe=h.a.span(oe()),ve=n(46);function be(){var e=Object(c.a)(["\nheight: 2.4rem;\nwidth: 9.3rem;\nmargin: 0;\n"]);return be=function(){return e},e}function Ee(){var e=Object(c.a)(["\nfont-size: 25px;\ntext-decoration: none;\n&:visited {\n  color: hsl(0, 100%, 100%);;\n}\n&:hover {\n  color: red;\n}\n"]);return Ee=function(){return e},e}function ge(){var e=Object(c.a)(["\nwidth: 10rem;\nheight: 3rem;\nbackground-color: hsla(0, 100%, 0%, 0.8);\nborder-color: hsla(0, 100%, 0%, 0.8);\n"]);return ge=function(){return e},e}var Oe=function(e){Object(m.a)(n,e);var t=Object(s.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this,t=this.props.link.slice(0,1),n=this.props.link.slice(1),a=t.toUpperCase()+n;return r.a.createElement(je,null,r.a.createElement(ye,{to:""===e.props.link?"/":"/"+e.props.link},r.a.createElement(ke,null,""===this.props.link?"Home":a)))}}]),n}(a.Component),je=h.a.button(ge()),ye=Object(h.a)(p.b)(Ee()),ke=h.a.p(be());function we(){var e=Object(c.a)(["\nmargin: 0 auto;\nwidth: 70%;\n"]);return we=function(){return e},e}function xe(){var e=Object(c.a)(["  \n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n"]);return xe=function(){return e},e}function Ce(){var e=Object(c.a)(["\n  height: 3rem;\n  top: 2rem; \n  display: block;\n  z-index: 1;\n  position: fixed; \n"]);return Ce=function(){return e},e}var De=["","dress","test"],Se=function(e){Object(m.a)(n,e);var t=Object(s.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return r.a.createElement(Le,null,r.a.createElement(Ie,null,r.a.createElement(ve.a,null,r.a.createElement(Pe,null,De.map((function(e){return r.a.createElement(Oe,{link:e})}))))),r.a.createElement(d.c,null,r.a.createElement(d.a,{path:"/admin",children:r.a.createElement(pe,null)}),r.a.createElement(d.a,{path:"/edit/:id",children:r.a.createElement(ie,null)}),r.a.createElement(d.a,{path:"/join",children:r.a.createElement(J,null)}),r.a.createElement(d.a,{path:"/dress"},r.a.createElement(X,null)),r.a.createElement(d.a,{path:"/test"},r.a.createElement(g,null)),r.a.createElement(d.a,{path:"/item"},r.a.createElement(T,null)),r.a.createElement(d.a,{path:"/"},r.a.createElement(v,null))))}}]),n}(a.Component),Ie=h.a.nav(Ce()),Pe=h.a.ul(xe()),Le=h.a.div(we());function Ge(){var e=Object(c.a)(["\nmargin: 0 auto;\nwidth: 70%;\n"]);return Ge=function(){return e},e}function Ne(){var e=Object(c.a)(["\n    cursor: pointer;\n    ","\n"]);return Ne=function(){return e},e}function Me(){var e=Object(c.a)(["\nfont-size: 10px;\n&:visited {\n    ","\n}\n&:hover {\n    ","\n}\n&: link {\n    ","\n}\n"]);return Me=function(){return e},e}var Ue=function(e){Object(m.a)(n,e);var t=Object(s.a)(n);function n(){var e;return Object(u.a)(this,n),(e=t.call(this)).state={user:""},e.handleLogin=e.handleLogin.bind(Object(E.a)(e)),e.handleLogout=e.handleLogout.bind(Object(E.a)(e)),e}return Object(o.a)(n,[{key:"handleLogin",value:function(e){var t=this;e.preventDefault(),w.a.post("http://localhost:3001/api/auth",{username:this.name.value,password:this.password.value}).then((function(e){t.setState({user:e.data}),re.dispatch({type:"LOGGEDIN",id:e.data.id,username:e.data.username})}))}},{key:"handleLogout",value:function(){this.setState({user:""}),re.dispatch({type:"LOGGEDOUT"})}},{key:"render",value:function(){var e=this;return r.a.createElement(d.c,null,r.a.createElement(d.a,{to:"/"},r.a.createElement(qe,null,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),""===this.state.user?r.a.createElement("form",{onSubmit:this.handleLogin},r.a.createElement("input",{type:"text",ref:function(t){e.name=t},name:"name",value:"test"}),r.a.createElement("input",{type:"password",ref:function(t){e.password=t},name:"password",value:"test"}),r.a.createElement("input",{type:"submit"}),r.a.createElement(ze,{to:"/join"},"make your account here ")):r.a.createElement("div",null,"Hello, ",this.state.user.username,r.a.createElement(Be,{onClick:this.handleLogout}," Log out "),r.a.createElement(ze,{to:"/edit/".concat(this.state.user.id)},"Edit your account")),r.a.createElement(ze,{to:"/admin"},"Add items to sell"))))}}]),n}(a.Component),Te="color: hsl(200, 100%, 70%);",ze=Object(h.a)(p.b)(Me(),Te,Te,Te),Be=h.a.span(Ne(),Te),qe=h.a.div(Ge());function Je(){var e=Object(c.a)(["\n"]);return Je=function(){return e},e}var Re=function(e){Object(m.a)(n,e);var t=Object(s.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement(Ae,null,r.a.createElement(Ue,null),r.a.createElement(Se,null)))}}]),n}(a.Component),Ae=h.a.div(Je());Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Re,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[47,1,2]]]);
//# sourceMappingURL=main.4d5835aa.chunk.js.map