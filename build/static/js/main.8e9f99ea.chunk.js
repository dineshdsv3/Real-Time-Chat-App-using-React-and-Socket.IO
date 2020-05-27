(this.webpackJsonpchatapp=this.webpackJsonpchatapp||[]).push([[0],{2:function(e,t){e.exports={COMMUNITY_CHAT:"COMMUNITY_CHAT",USER_CONNECTED:"USER_CONNECTED",MESSAGE_RECEIVED:"MESSAGE_RECEIVED",MESSAGE_SENT:"MESSAGE_SENT",USER_DISCONNECTED:"USER_DISCONNECTED",TYPING:"TYPING",VERIFY_USER:"VERIFY_USER",LOGOUT:"LOGOUT",PRIVATE_MESSAGE:"PRIVATE_MESSAGE"}},40:function(e,t,a){var n=a(81).v4,s=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return e.filter((function(e){return e!==t})).join(" & ")||"Empty Chat"},r=function(e){return"".concat(e.getHours(),":").concat(("0"+e.getMinutes()).slice(-2))};e.exports={createUser:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.name,a=void 0===t?"":t,s=e.socketId,r=void 0===s?null:s;return{id:n(),name:a,socketId:r}},createChat:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.messages,a=void 0===t?[]:t,r=e.name,c=void 0===r?"Community":r,i=e.users,o=void 0===i?[]:i,l=e.isCommunity,u=void 0!==l&&l;return{id:n(),name:u?c:s(o),messages:a,users:o,typingUsers:[],isCommunity:u}},createMessage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.message,a=void 0===t?"":t,s=e.sender,c=void 0===s?"":s;return{id:n(),time:r(new Date(Date.now())),message:a,sender:c}},createChatNameFromUsers:s}},42:function(e,t,a){e.exports=a(80)},75:function(e,t){},79:function(e,t,a){},80:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),r=a(38),c=a.n(r),i=a(3),o=a(4),l=a(6),u=a(5),m=a(39),d=a.n(m),p=a(2),v=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={nickname:"",error:""},e.setUser=function(t){var a=t.user,n=t.isUser;console.log(a,n),n?e.setError("UserName already taken"):(e.setState({error:null}),e.props.setUser(a))},e.setError=function(t){e.setState({error:t})},e.handleChange=function(t){t.preventDefault(),e.setState({nickname:t.target.value})},e.handleSubmit=function(t){t.preventDefault();var a=e.props.socket,n=e.state.nickname;a.emit(p.VERIFY_USER,n,e.setUser)},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.nickname,n=t.error;return s.a.createElement("div",{className:"login"},s.a.createElement("form",{onSubmit:this.handleSubmit,className:"login-form"},s.a.createElement("label",{htmlFor:"nickname"},s.a.createElement("h2",null,"Got a Nickname?")),s.a.createElement("input",{ref:function(t){return e.textInput=t},type:"text",id:"nickname",value:a,placeholder:"Nickname",onChange:this.handleChange}),s.a.createElement("div",{className:"error"},n||null)))}}]),a}(s.a.Component),h=a(41),E=a(10),f=a(11),g=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props,t=e.active,a=e.lastMessage,n=e.name,r=e.onClick;return s.a.createElement("div",{className:"user ".concat(t?"active":""),onClick:r},s.a.createElement("div",{className:"user-photo"},n[0].toUpperCase()),s.a.createElement("div",{className:"user-info"},s.a.createElement("div",{className:"name"},n),s.a.createElement("div",{className:"last-message"},a)))}}]),a}(n.PureComponent);g.defaultProps={lastMessage:"",active:!1,onClock:function(){}};var C=a(8),S=a(40),y=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleSubmit=function(e){e.preventDefault();var t=n.state.reciever;(0,n.props.onSendPrivateMessage)(t),n.setState({reciever:""})},n.addChatForUser=function(e){n.props.onSendPrivateMessage(e),n.setActiveSideBar(a.type.CHATS)},n.setActiveSideBar=function(e){n.setState({activeSideBar:e})},n.state={reciever:"",activeSideBar:a.type.CHATS},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this,t=this.props,n=t.chats,r=t.activeChat,c=t.user,i=t.setActiveChat,o=t.logout,l=t.users,u=this.state,m=u.reciever,d=u.activeSideBar;return s.a.createElement("div",{id:"side-bar"},s.a.createElement("div",{className:"heading"},s.a.createElement("div",{className:"app-name"},"Our Cool Chat ",s.a.createElement(E.a,null)),s.a.createElement("div",{className:"menu"},s.a.createElement(f.b,null))),s.a.createElement("form",{onSubmit:this.handleSubmit,className:"search"},s.a.createElement("i",{className:"search-icon"},s.a.createElement(E.b,null)),s.a.createElement("input",{placeholder:"Search",type:"text",value:m,onChange:function(t){e.setState({reciever:t.target.value})}}),s.a.createElement("div",{className:"plus"})),s.a.createElement("div",{className:"side-bar-select"},s.a.createElement("div",{onClick:function(){e.setActiveSideBar(a.type.CHATS)},className:"side-bar-select__option ".concat(d===a.type.CHATS?"active":"")},s.a.createElement("span",null,"Chats")),s.a.createElement("div",{onClick:function(){e.setActiveSideBar(a.type.USERS)},className:"side-bar-select__option ".concat(d===a.type.USERS?"active":"")},s.a.createElement("span",null,"Users"))),s.a.createElement("div",{className:"users",ref:"users",onClick:function(t){t.target===e.refs.user&&i(null)}},d===a.type.CHATS?n.map((function(t){return s.a.createElement(g,{key:t.id,lastMessage:Object(C.get)(Object(C.last)(t.messages),"message",""),name:t.isCommunity?t.name:Object(S.createChatNameFromUsers)(t.users,c.name),active:r.id===t.id,onClick:function(){e.props.setActiveChat(t)}})})):Object(C.differenceBy)(l,[c],"name").map((function(t){return s.a.createElement(g,{key:t.id,name:t.name,onClick:function(){e.addChatForUser(t.name)}})}))),s.a.createElement("div",{className:"current-user"},s.a.createElement("span",null,c.name),s.a.createElement("div",{onClick:function(){o()},title:"Logout",className:"logout"},s.a.createElement(f.a,null))))}}]),a}(n.Component);y.type={USERS:"users",CHATS:"chats"};var N=function(e){var t=e.name,a=e.numberOfUsers;return s.a.createElement("div",{className:"chat-header"},s.a.createElement("div",{className:"user-info"},s.a.createElement("div",{className:"user-name"},t),s.a.createElement("div",{className:"status"},s.a.createElement("div",{className:"indicator"}),s.a.createElement("span",null,a||null))),s.a.createElement("div",{className:"options"},s.a.createElement(E.d,null),s.a.createElement(E.c,null),s.a.createElement(f.b,null)))},k=a(14),b=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).scrollDown=n.scrollDown.bind(Object(k.a)(n)),n}return Object(o.a)(a,[{key:"scrollDown",value:function(){var e=this.refs.container;e.scrollTop=e.scrollHeight}},{key:"componentDidMount",value:function(){this.scrollDown()}},{key:"componentDidUpdate",value:function(e,t){this.scrollDown()}},{key:"render",value:function(){var e=this.props,t=e.messages,a=e.user,n=e.typingUsers;return s.a.createElement("div",{ref:"container",className:"thread-container"},s.a.createElement("div",{className:"thread"},t.map((function(e){return s.a.createElement("div",{key:e.id,className:"message-container ".concat(e.sender===a.name&&"right")},s.a.createElement("div",{className:"time"},e.time),s.a.createElement("div",{className:"data"},s.a.createElement("div",{className:"message"},e.message),s.a.createElement("div",{className:"name"},e.sender)))})),n.map((function(e){return s.a.createElement("div",{key:e,className:"typing-user"},"".concat(e," is typing . . ."))}))))}}]),a}(s.a.Component),T=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleSubmit=function(e){e.preventDefault(),n.sendMessage(),n.setState({message:""})},n.sendMessage=function(){n.props.sendMessage(n.state.message)},n.sendTyping=function(){n.lastUpdateTime=Date.now(),n.state.isTyping||(n.setState({isTyping:!0}),n.props.sendTyping(!0),n.startCheckingTyping())},n.startCheckingTyping=function(){n.typingInterval=setInterval((function(){Date.now()-n.lastUpdateTime>300&&(n.setState({isTyping:!1}),n.stopCheckingTyping())}),300)},n.stopCheckingTyping=function(){n.typingInterval&&(clearInterval(n.typingInterval),n.props.sendTyping(!1))},n.state={message:"",isTyping:!1},n}return Object(o.a)(a,[{key:"componentWillUnmount",value:function(){this.stopCheckingTyping()}},{key:"render",value:function(){var e=this,t=this.state.message;return s.a.createElement("div",{className:"message-input"},s.a.createElement("form",{onSubmit:this.handleSubmit,className:"message-form"},s.a.createElement("input",{id:"message",ref:"messageinput",type:"text",className:"form-control",value:t,autoComplete:"off",placeholder:"Type something interesting",onKeyUp:function(t){13!==t.keyCode&&e.sendTyping()},onChange:function(t){var a=t.target;e.setState({message:a.value})}}),s.a.createElement("button",{disabled:t.length<1,type:"submit",className:"send"}," ","Send"," ")))}}]),a}(s.a.Component),O=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={chats:[],users:[],activeChat:null},e.sendOpenPrivateMessage=function(t){var a=e.props,n=a.socket,s=a.user,r=e.state.activeChat;n.emit(p.PRIVATE_MESSAGE,{receiver:t,sender:s.name,activeChat:r})},e.resetChat=function(t){return e.addChat(t,!0)},e.addChat=function(t,a){var n=e.props.socket,s=e.state.chats,r=a?[t]:[].concat(Object(h.a)(s),[t]);e.setState({chats:r,activeChat:a?t:e.state.activeChat});var c="".concat(p.MESSAGE_RECIEVED,"-").concat(t.id),i="".concat(p.TYPING,"-").concat(t.id);n.on(i,e.updateTypingInChat(t.id)),n.on(c,e.addMessageToChat(t.id))},e.addMessageToChat=function(t){return function(a){var n=e.state.chats.map((function(e){return e.id===t&&e.messages.push(a),e}));e.setState({chats:n})}},e.updateTypingInChat=function(t){return function(a){var n=a.isTyping,s=a.user;if(s!==e.props.user.name){var r=e.state.chats.map((function(e){return e.id===t&&(n&&!e.typingUsers.includes(s)?e.typingUsers.push(s):!n&&e.typingUsers.includes(s)&&(e.typingUsers=e.typingUsers.filter((function(e){return e!==s})))),e}));e.setState({chats:r})}}},e.sendMessage=function(t,a){e.props.socket.emit(p.MESSAGE_SENT,{chatId:t,message:a})},e.sendTyping=function(t,a){e.props.socket.emit(p.TYPING,{chatId:t,isTyping:a})},e.setActiveChat=function(t){e.setState({activeChat:t})},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.socket;this.initSocket(e)}},{key:"componentWillUnmount",value:function(){var e=this.props.socket;e.off(p.PRIVATE_MESSAGE),e.off(p.USER_CONNECTED),e.off(p.USER_DISCONNECTED)}},{key:"initSocket",value:function(e){var t=this;this.props.user;e.emit(p.COMMUNITY_CHAT,this.resetChat),e.on(p.PRIVATE_MESSAGE,this.addChat),e.on("connect",(function(){e.emit(p.COMMUNITY_CHAT,t.resetChat)})),e.on(p.USER_CONNECTED,(function(e){t.setState({users:Object(C.values)(e)})})),e.on(p.USER_DISCONNECTED,(function(e){t.setState({users:Object(C.values)(e)})}))}},{key:"render",value:function(){var e=this,t=this.props,a=t.user,n=t.logout,r=this.state,c=r.chats,i=r.activeChat,o=r.users;return s.a.createElement("div",{className:"container"},s.a.createElement(y,{logout:n,user:a,users:o,chats:c,activeChat:i,setActiveChat:this.setActiveChat,onSendPrivateMessage:this.sendOpenPrivateMessage}),s.a.createElement("div",{className:"chat-room-container"},null!==i?s.a.createElement("div",{className:"chat-room"},s.a.createElement(N,{name:i.name}),s.a.createElement(b,{messages:i.messages,user:a,typingUsers:i.typingUsers}),s.a.createElement(T,{sendMessage:function(t){e.sendMessage(i.id,t)},sendTyping:function(t){e.sendTyping(i.id,t)}})):s.a.createElement("div",{className:"chat-room choose"},s.a.createElement("h3",null,"Choose a chat!"))))}}]),a}(s.a.Component),U=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={socket:"null",user:""},e.initSocket=function(){var t=d()("/");t.on("connect",(function(){console.log("Connected")})),e.setState({socket:t})},e.setUser=function(t){e.state.socket.emit(p.USER_CONNECTED,t),e.setState({user:t})},e.logout=function(){e.state.socket.emit(p.LOGOUT),e.setState({user:null})},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.initSocket()}},{key:"render",value:function(){var e=this.state,t=e.socket,a=e.user;return s.a.createElement("div",{className:"container"},a?s.a.createElement(O,{socket:t,user:a,logout:this.logout}):s.a.createElement(v,{socket:t,setUser:this.setUser}))}}]),a}(s.a.Component),j=(a(79),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return s.a.createElement(U,{title:"Chat App"})}}]),a}(s.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[42,1,2]]]);
//# sourceMappingURL=main.8e9f99ea.chunk.js.map