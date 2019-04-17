(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{47:function(e,t,a){e.exports=a(93)},52:function(e,t,a){},66:function(e,t,a){},93:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),s=a(20),o=a.n(s),i=a(29),c=(a(52),a(1)),r=a(2),u=a(4),d=a(3),m=a(5),h=a(19),b=a(41),f=(a(24),a(25),a(26),a(6)),v=a(15),p=a(42),E=a(16),g=a(13),j=a(43),O=(a(66),function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(d.a)(t).call(this))).state={activeIndex:0,date1:"",date2:"",date3:"",city1:"",city2:"",city3:""},e.onCity1Change=e.onCity1Change.bind(Object(f.a)(Object(f.a)(e))),e.onCity2Change=e.onCity2Change.bind(Object(f.a)(Object(f.a)(e))),e.onCity3Change=e.onCity3Change.bind(Object(f.a)(Object(f.a)(e))),e}return Object(m.a)(t,e),Object(r.a)(t,[{key:"onCity1Change",value:function(e){this.setState({city1:e.value})}},{key:"onCity2Change",value:function(e){this.setState({city2:e.value})}},{key:"onCity3Change",value:function(e){this.setState({city3:e.value})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("div",{className:"content-section implementation"},l.a.createElement("br",null),l.a.createElement(v.TabView,{style:{width:"700px"},activeIndex:this.state.activeIndex,onTabChange:function(t){return e.setState({activeIndex:t.index})}},l.a.createElement(v.TabPanel,{header:"Healing Plan",className:"MedicalAssistant"},l.a.createElement("label",null,"Enter Plan Name:"),l.a.createElement(E.InputText,{value:this.state.value,onChange:function(t){return e.setState({value:t.target.value})}}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("label",null,"Select Medicine/Measurements/Events:"),l.a.createElement("br",null),l.a.createElement(p.Dropdown,{value:this.state.city1,options:[{name:"Crosin"},{name:"Blood Sugar"},{name:"Blood Pressure"},{name:"vitamin D"},{name:"Eye Checkup"}],onChange:this.onCity1Change,optionLabel:"name"}),l.a.createElement("br",null),"  ",l.a.createElement("br",null),l.a.createElement("label",null,"Select Date Time:"),l.a.createElement("br",null),l.a.createElement(j.Calendar,{showTime:!0,hourFormat:"12",value:this.state.date1,onChange:function(t){return e.setState({date1:t.value})}}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{className:"content-section implementation button-demo"},l.a.createElement(g.Button,{label:"Submit",className:"p-button-rounded",onClick:this.handleClick}))))))}}]),t}(n.Component)),w=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("p",null,"MyPlanList"))}}]),t}(n.Component),C=a(46),y=a(18),k=a(23),S=a.n(k),D=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(d.a)(t).call(this))).getDataFromDb=function(){fetch("http://localhost:3001/getData").then(function(e){return e.json()}).then(function(t){return e.setState({data:t.data},function(){return console.log(e.state.data)})})},e.putDataToDB=function(e,t){console.log("inside putdatatobe"),S.a.post("http://localhost:3001/putData",{postemail:e,postpassword:t})},e.verifyUser=function(t,a){console.log("in verify user");var n=e.state.data,l=e.state.insertData;if(null===n||void 0===n)l=!1;else{console.log("Inside verifyuser --email>"+t);var s=n.find(function(e){return e.email===t}),o=n.find(function(e){return e.password===a});console.log("Inside verifyuser --\x3e"+s),void 0===s||void 0===o?(l=!0,console.log("userfound"+l)):(l=!1,console.log("usernotfound"+l))}return l},e.state={email:"",password:"",password2:"",data:[],intervalIsSet:!1,idToDelete:null,idToUpdate:null,objectToUpdate:null},e.handleClick=e.handleClick.bind(Object(f.a)(Object(f.a)(e))),e}return Object(m.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){console.log("Registration component did mount"),this.getDataFromDb()}},{key:"handleClick",value:function(){var e=this,t=this.state.email,a=this.state.password,n=this.state.password2;if(""!==t&&""!==a)if(a!==n)this.setState({status:"The two passwords do not match"});else if(console.log("inside if"+t),!0===this.verifyUser(t,a)){console.log("inside if and verify user"+t),this.putDataToDB(t,a),this.setState({status:"User added successfully"}),console.log(this.state.data);var l=[{id:1,email:t,password:a}];this.setState({data:[].concat(Object(C.a)(this.state.data),l)},function(){return console.log(e.state.data)})}else this.setState({status:"User already exists"});else this.setState({status:"Enter email and password"})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("div",{className:"content-section implementation"},l.a.createElement("h3",{className:"first"},"Enter email address"),l.a.createElement(E.InputText,{value:this.state.email,onChange:function(t){return e.setState({email:t.target.value})}}),l.a.createElement("h3",{className:"first"},"Enter Password"),l.a.createElement(y.Password,{value:this.state.password,onChange:function(t){return e.setState({password:t.target.value})}}),l.a.createElement("h3",{className:"first"},"Re-enter Password"),l.a.createElement(y.Password,{feedback:!1,value:this.state.password2,onChange:function(t){return e.setState({password2:t.target.value})}})),l.a.createElement("br",null),l.a.createElement("div",{className:"content-section implementation button-demo"},l.a.createElement(g.Button,{label:"Submit",className:"p-button-rounded",onClick:this.handleClick})),l.a.createElement("br",null),l.a.createElement("div",null,"Info: ",this.state.status))}}]),t}(n.Component),N=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(d.a)(t).call(this))).getDataFromDb=function(){fetch("http://localhost:3001/getData").then(function(e){return e.json()}).then(function(t){return e.setState({data:t.data},function(){return console.log(e.state.data)})})},e.state={value:null,success:null,email:"",password:"",data:null,status:""},e.handleClick=e.handleClick.bind(Object(f.a)(Object(f.a)(e))),e}return Object(m.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.getDataFromDb()}},{key:"handleClick",value:function(){var e=this;console.log("in handleclick");var t=this.state.data,a=this.state.success;if(null!==t){var n=t.find(function(t){return t.email===e.state.email}),l=t.find(function(t){return t.password===e.state.password});a=void 0!==n&&void 0!==l}!0===a?this.setState({status:"Login Successful"},function(){return console.log(e.state.status)}):!1===a?this.setState({status:"User does not exist"},function(){return console.log(e.state.status)}):this.setState({status:""},function(){return console.log(e.state.status)})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("div",{className:"content-section implementation"},l.a.createElement("h3",{className:"first"},"Enter email address"),l.a.createElement(E.InputText,{value:this.state.email,onChange:function(t){return e.setState({email:t.target.value})}}),l.a.createElement("h3",{className:"first"},"Enter Password"),l.a.createElement(y.Password,{feedback:!1,value:this.state.password,onChange:function(t){return e.setState({password:t.target.value})}})),l.a.createElement("br",null),l.a.createElement("div",{className:"content-section implementation button-demo"},l.a.createElement(g.Button,{label:"Login",className:"p-button-rounded",onClick:this.handleClick})),l.a.createElement("br",null),l.a.createElement("div",null,"Info: ",this.state.status))}}]),t}(n.Component),x=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){console.log("Guest component did mount")}},{key:"render",value:function(){return l.a.createElement("div",{className:"content-section implementation button-demo"},l.a.createElement(g.Button,{label:"Enter as Guest",className:"p-button-rounded"}))}}]),t}(n.Component),T=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(d.a)(t).call(this))).getDataFromDb=function(){fetch("http://localhost:3001/getData").then(function(e){return e.json()}).then(function(t){return e.setState({data:t.data},function(){return console.log(e.state.data)})})},e.deleteFromDB=function(e,t){console.log("inside deleteFromDB"),console.log(e),S.a.delete("http://localhost:3001/deleteData",{data:{email:e,password:t}})},e.state={value:null,success:null,email:"",password:"",data:null,status:""},e.handleClick=e.handleClick.bind(Object(f.a)(Object(f.a)(e))),e}return Object(m.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.getDataFromDb()}},{key:"handleClick",value:function(){var e=this;console.log("in handleclick");var t=this.state.data,a=this.state.success;if(null!==t){var n=t.find(function(t){return t.email===e.state.email}),l=t.find(function(t){return t.password===e.state.password});a=void 0!==n&&void 0!==l}if(!0===a){this.deleteFromDB(this.state.email,this.state.password),this.setState({status:"Successfully Unregistered"},function(){return console.log(e.state.status)});var s=this.state.email;console.log("findindex of "+s);var o=t.map(function(e){return e.email}).indexOf(s);console.log(o),-1!==o&&(t.splice(o,1),this.setState({data:t},function(){return console.log(e.state.data)}))}else!1===a?this.setState({status:"User does not exist"},function(){return console.log(e.state.status)}):this.setState({status:""},function(){return console.log(e.state.status)})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("div",{className:"content-section implementation"},l.a.createElement("h3",{className:"first"},"Enter email address"),l.a.createElement(E.InputText,{value:this.state.email,onChange:function(t){return e.setState({email:t.target.value})}}),l.a.createElement("h3",{className:"first"},"Enter Password"),l.a.createElement(y.Password,{feedback:!1,value:this.state.password,onChange:function(t){return e.setState({password:t.target.value})}})),l.a.createElement("br",null),l.a.createElement("div",{className:"content-section implementation button-demo"},l.a.createElement(g.Button,{label:"Submit",className:"p-button-rounded",onClick:this.handleClick})),l.a.createElement("br",null),l.a.createElement("div",null,"Info: ",this.state.status))}}]),t}(n.Component),I=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(d.a)(t).call(this))).state={activeIndex:0},e}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("div",{className:"content-section implementation"},l.a.createElement("br",null),l.a.createElement(v.TabView,{style:{width:"700px"},activeIndex:this.state.activeIndex,onTabChange:function(t){return e.setState({activeIndex:t.index})}},l.a.createElement(v.TabPanel,{header:"Register"},l.a.createElement(D,null)),l.a.createElement(v.TabPanel,{header:"Login"},l.a.createElement(N,null)),l.a.createElement(v.TabPanel,{header:"Guest"},l.a.createElement(x,null)),l.a.createElement(v.TabPanel,{header:"Unregister"},l.a.createElement(T,null)))))}}]),t}(n.Component),P=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("p",null,"Medicine"))}}]),t}(n.Component),M=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("p",null,"Measurement"))}}]),t}(n.Component),B=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("p",null,"Event"))}}]),t}(n.Component),F=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(d.a)(t).call(this))).state={items:[{label:"Healing Plan",command:function(){window.location="/healingplan"}},{label:"My plan list",command:function(){window.location="/myplanlist"}},{label:"Add new",items:[{label:"Medicine",command:function(){window.location="/addnew/medicine"}},{label:"Measurement",command:function(){window.location="/addnew/measurement"}},{label:"Event",command:function(){window.location="/addnew/event"}}]},{label:"Admin",command:function(){window.location="/"}},{separator:!0}]},e}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"content-section introduction"},l.a.createElement("div",{className:"feature-intro"},l.a.createElement("h3",null,"Medical Assistant"))),l.a.createElement("div",{className:"content-section implementation"},l.a.createElement(b.Menubar,{model:this.state.items})),l.a.createElement("div",null,l.a.createElement(h.a,{path:"/healingplan",component:O}),l.a.createElement(h.a,{path:"/myplanlist",component:w}),l.a.createElement(h.a,{exact:!0,path:"/",component:I}),l.a.createElement(h.a,{path:"/addnew/medicine",component:P}),l.a.createElement(h.a,{path:"/addnew/measurement",component:M}),l.a.createElement(h.a,{path:"/addnew/event",component:B})))}}]),t}(n.Component),U=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(F,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(i.a,null,l.a.createElement(U,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[47,1,2]]]);
//# sourceMappingURL=main.7178500e.chunk.js.map