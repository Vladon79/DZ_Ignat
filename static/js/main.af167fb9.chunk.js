(this.webpackJsonpmy_dz1=this.webpackJsonpmy_dz1||[]).push([[0],[,,,,,,function(e,t,n){e.exports={someClass:"Affairs_someClass__l4fwN",button:"Affairs_button__3YaQm",parametr:"Affairs_parametr__2j9U2",deleteButtonn:"Affairs_deleteButtonn__1FxUS",affair:"Affairs_affair__179X1"}},,,,,function(e,t,n){e.exports={messages:"Message_messages__1Alhk",message:"Message_message__8WR15",avatar:"Message_avatar__3FT3j",content:"Message_content__Ltxgc",angel:"Message_angel__3gg-m",text:"Message_text__2fXBO",name:"Message_name__Tzmp0",time:"Message_time__HOFTG"}},function(e,t,n){e.exports={error:"HW5_error__33i-O",header:"HW5_header__fgR5q",block:"HW5_block__1qXpL",active:"HW5_active__2nBU0"}},function(e,t,n){e.exports={someClass:"Greeting_someClass__uGflL",users:"Greeting_users__2grNo",button:"Greeting_button__24QRF",notError:"Greeting_notError__1-UDC",error:"Greeting_error__1uvQ8",numberUsers:"Greeting_numberUsers__6UIMt"}},,function(e,t,n){e.exports={HW6:"HW6_HW6__2dqAP",button:"HW6_button__3Jllk",text:"HW6_text__1FSio",span:"HW6_span__29Jmr"}},,,,function(e,t,n){e.exports={superInput:"SuperInputText_superInput__3XH9u",errorInput:"SuperInputText_errorInput__3ei0N",error:"SuperInputText_error__2J82S"}},,,function(e,t,n){e.exports={map:"HW8_map__2VTP6",age:"HW8_age__3IFMl"}},function(e,t,n){e.exports={HW4:"HW4_HW4__32kcv",blue:"HW4_blue__2RJeg",column:"HW4_column__2ZS4I",testSpanError:"HW4_testSpanError___Mj8X"}},,,function(e,t,n){e.exports={App:"App_App__1Sc4o",react:"App_react__3Mqf1"}},,function(e,t,n){e.exports={default:"SuperButton_default__-BXUG",red:"SuperButton_red__1kaz_"}},function(e,t,n){e.exports={clock:"Clock_clock__2HdLo",date:"Clock_date__RWygp"}},function(e,t,n){e.exports={select:"SuperSelect_select__3fEsa",option:"SuperSelect_option__33I2a"}},function(e,t,n){e.exports={radio:"SuperRadio_radio__3l3uR",text:"SuperRadio_text__6ljGg"}},function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__Imn1x",spanClassName:"SuperCheckbox_spanClassName__1K9ch"}},,,,,function(e,t,n){e.exports={HW7:"HW7_HW7__1r_gr"}},,,,,function(e,t,n){},,,,,,,function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(34),s=n.n(c),o=(n(42),n(26)),i=n.n(o),l=n(16),j=n(12),u=n.n(j),d=n(0);var b=function(){return Object(d.jsxs)("div",{className:u.a.header,children:[Object(d.jsxs)("ul",{className:u.a.navLink,children:[Object(d.jsxs)("li",{children:[" ",Object(d.jsx)(l.b,{to:"HW7-9",activeClassName:u.a.active,children:"HW7-9"})]}),Object(d.jsxs)("li",{children:[" ",Object(d.jsx)(l.b,{to:"junior+",activeClassName:u.a.active,children:"junior3+"})]}),Object(d.jsxs)("li",{children:[" ",Object(d.jsx)(l.b,{to:"pre-junior",activeClassName:u.a.active,children:"pre-junior"})]})]}),Object(d.jsx)("div",{className:u.a.block})]})},O=n(2),h=n(3),x=n(21),m=function(e,t){switch(t.type){case"sort":var n=Object(x.a)(e);return"up"===t.payload?n.sort((function(e,t){var n=e.name.toLowerCase(),a=t.name.toLowerCase();return n<a?-1:n>a?1:0})):n.sort((function(e,t){var n=e.name.toLowerCase(),a=t.name.toLowerCase();return n>a?-1:n<a?1:0}));case"check":return e.filter((function(e){return e.age>=t.payload}))}},_=n(8),p=n(4),f=n(28),v=n.n(f),g=function(e){var t=e.red,n=e.className,a=Object(p.a)(e,["red","className"]),r="".concat(t?v.a.red:v.a.default," ").concat(n);return Object(d.jsx)("button",Object(_.a)({className:r},a))},C=n(22),N=n.n(C),k=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var S=function(){var e=Object(a.useState)(k),t=Object(h.a)(e,2),n=t[0],r=t[1],c=n.map((function(e){return Object(d.jsxs)("div",{className:N.a.map,children:[Object(d.jsxs)("div",{children:[" name:",Object(d.jsx)("span",{className:N.a.age,children:e.name})]}),Object(d.jsxs)("div",{children:[" age:",Object(d.jsx)("span",{className:N.a.age,children:e.age})]})]},e._id)}));return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),Object(d.jsx)("h2",{children:"Homeworks 8"}),c,Object(d.jsxs)("div",{children:[Object(d.jsx)(g,{onClick:function(){return r(m(k,{type:"sort",payload:"up"}))},children:"sort up"}),Object(d.jsx)(g,{onClick:function(){return r(m(k,{type:"sort",payload:"down"}))},children:"sort down"}),Object(d.jsx)(g,{onClick:function(){return r(m(k,{type:"check",payload:18}))},children:"check 18"})]}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},y=n(29),H=n.n(y);var w=function(){var e=Object(a.useState)(0),t=Object(h.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(),s=Object(h.a)(c,2),o=s[0],i=s[1],l=Object(a.useState)(!1),j=Object(h.a)(l,2),u=j[0],b=j[1],O=function(){clearInterval(n)},x=(null===o||void 0===o?void 0:o.toLocaleTimeString())||Object(d.jsx)("br",{}),m=(null===o||void 0===o?void 0:o.toDateString())||Object(d.jsx)("br",{});return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:H.a.clock,onMouseEnter:function(){b(!0)},onMouseLeave:function(){b(!1)},children:x}),u?Object(d.jsx)("div",{className:H.a.date,children:m}):Object(d.jsx)("br",{}),Object(d.jsx)(g,{onClick:function(){O();var e=window.setInterval((function(){i(new Date)}),1e3);r(e),console.log(o)},children:"start"}),Object(d.jsx)(g,{onClick:O,children:"stop"})]})};var W=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),Object(d.jsx)("h2",{children:"Homeworks 9"}),Object(d.jsx)(w,{}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},A=n(30),I=n.n(A),T=function(e){var t=e.options,n=e.onChange,a=e.onChangeOption,r=Object(p.a)(e,["options","onChange","onChangeOption"]),c=t?t.map((function(e,t){return Object(d.jsx)("option",{className:I.a.option,value:e,children:e},e+"-"+t)})):[];return Object(d.jsx)("select",Object(_.a)(Object(_.a)({onChange:function(e){n&&n(e),a&&a(e.currentTarget.value)},className:I.a.select},r),{},{children:c}))},E=n(31),U=n.n(E),B=function(e){e.type;var t=e.name,n=e.options,a=e.value,r=e.onChange,c=e.onChangeOption,s=(Object(p.a)(e,["type","name","options","value","onChange","onChangeOption"]),function(e){r&&r(e),c&&c(e.currentTarget.value),console.log(e.currentTarget.value)}),o=n?n.map((function(e,n){return Object(d.jsxs)("label",{className:U.a.text,children:[Object(d.jsx)("input",{type:"radio",name:t,onChange:s,checked:e===a,value:e,className:U.a.radio}),e]},t+"-"+n)})):[];return Object(d.jsx)(d.Fragment,{children:o})},M=n(37),F=n.n(M),P=["x","y","z"];var L=function(){var e=Object(a.useState)(P[0]),t=Object(h.a)(e,2),n=t[0],r=t[1];return Object(d.jsxs)("div",{className:F.a.HW7,children:[Object(d.jsx)("hr",{}),Object(d.jsx)("h2",{children:"Homeworks 7"}),Object(d.jsx)("div",{children:Object(d.jsx)(T,{options:P,value:n,onChangeOption:r})}),Object(d.jsx)("div",{children:Object(d.jsx)(B,{name:"radio",options:P,value:n,onChangeOption:r})}),Object(d.jsx)(S,{}),Object(d.jsx)(W,{}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})};var G=function(){return Object(d.jsxs)("div",{className:u.a.error,children:[Object(d.jsx)("div",{children:"404"}),Object(d.jsx)("div",{children:"Page not found!"})]})},R=n(11),J=n.n(R),X=function(e){return Object(d.jsxs)("div",{className:J.a.message,children:[Object(d.jsx)("img",{src:e.avatar,className:J.a.avatar}),Object(d.jsx)("div",{className:J.a.angel}),Object(d.jsxs)("div",{className:J.a.content,children:[Object(d.jsx)("div",{className:J.a.name,children:e.name}),Object(d.jsx)("div",{className:J.a.text,children:e.message}),Object(d.jsx)("div",{className:J.a.time,children:e.time})]})]})},K="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",D="Some Name",q="some text",z="22:00";var Q=function(){return Object(d.jsxs)("div",{className:J.a.messages,children:[Object(d.jsx)("hr",{}),Object(d.jsx)("h2",{children:"Homeworks 1"}),Object(d.jsx)(X,{avatar:K,name:D,message:q,time:z})]})},Y=n(6),Z=n.n(Y);var V=function(e){var t=e.deleteAffairCallback,n=e.affair;return Object(p.a)(e,["deleteAffairCallback","affair"]),Object(d.jsxs)("div",{className:Z.a.affair,children:[Object(d.jsx)("span",{className:Z.a.afairName,children:n.name}),Object(d.jsxs)("span",{className:Z.a.parametr,children:[" ",n.priority]}),Object(d.jsx)("span",{className:Z.a.deleteButton,children:Object(d.jsx)(g,{red:!0,onClick:function(){return e=n._id,void t(e);var e},className:Z.a.deleteButtonn,children:"X"})})]})};var $=function(e){var t=e.data,n=e.setFilter,a=e.deleteAffairCallback,r=Object(p.a)(e,["data","setFilter","deleteAffairCallback"]),c=t.map((function(e){return Object(d.jsx)(V,{affair:e,deleteAffairCallback:a},e._id)}));return Object(d.jsxs)("div",{className:Z.a.filterButton,children:[c,Object(d.jsx)(g,{onClick:function(){return n("all")},className:Z.a.button,disabled:"all"===r.filter,children:"All"}),Object(d.jsx)(g,{onClick:function(){return n("high")},className:Z.a.button,disabled:"high"===r.filter,children:"High"}),Object(d.jsx)(g,{onClick:function(){return n("middle")},className:Z.a.button,disabled:"middle"===r.filter,children:"Middle"}),Object(d.jsx)(g,{onClick:function(){return n("low")},className:Z.a.button,disabled:"low"===r.filter,children:"Low"})]})},ee=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var te=function(){var e=Object(a.useState)(ee),t=Object(h.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)("all"),s=Object(h.a)(c,2),o=s[0],i=s[1],l=function(e,t){return"all"===t?e:"high"===t?e.filter((function(e){return"high"===e.priority})):"middle"===t?e.filter((function(e){return"middle"===e.priority})):"low"===t?e.filter((function(e){return"low"===e.priority})):void 0}(n,o);return Object(d.jsxs)("div",{className:Z.a.someClass,children:[Object(d.jsx)("hr",{}),Object(d.jsx)("h2",{children:"Homeworks 2"}),Object(d.jsx)($,{data:l,setFilter:i,deleteAffairCallback:function(e){return r(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))},filter:o}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},ne=n(51),ae=n(19),re=n.n(ae),ce=function(e){e.type;var t=e.onChange,n=e.onChangeText,a=e.onKeyPress,r=e.onEnter,c=e.error,s=e.className,o=e.spanClassName,i=Object(p.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),l="".concat(re.a.error," ").concat(o||""),j="".concat(re.a.superInput," ").concat(c?re.a.errorInput:re.a.superInput," ").concat(s);return Object(d.jsxs)("div",{children:[Object(d.jsx)("input",Object(_.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){a&&a(e),r&&"Enter"===e.key&&r()},className:j},i)),Object(d.jsx)("div",{children:c&&Object(d.jsx)("span",{className:l,children:c})})]})},se=n(13),oe=n.n(se),ie=function(e){var t=e.name,n=e.setNameCallback,a=e.addUser,r=e.error,c=e.totalUsers,s=Object(p.a)(e,["name","setNameCallback","addUser","error","totalUsers"]),o=r?oe.a.error:oe.a.notError,i=!!r;return Object(d.jsxs)("div",{className:oe.a.users,children:[Object(d.jsx)(ce,{error:r,value:t,onChange:n,className:o,onKeyPress:s.onKeyPressHandler}),Object(d.jsx)(g,{onClick:a,className:oe.a.button,disabled:i,children:"Add"}),Object(d.jsxs)("div",{className:oe.a.numberUsers,children:["Number of users=",c]})]})},le=function(e){var t=e.users,n=e.addUserCallback,r=Object(a.useState)(""),c=Object(h.a)(r,2),s=c[0],o=c[1],i=Object(a.useState)(""),l=Object(h.a)(i,2),j=l[0],u=l[1],b=function(){0===s.length?u("Error: name not entered"):s.match(" ")?u("Error: forbidden symbol ' '"):(alert("Hello ".concat(s,"!")),n(s),o(""))},O=t.length;return Object(d.jsx)(ie,{name:s,setNameCallback:function(e){o(e.currentTarget.value),u("")},addUser:b,error:j,totalUsers:O,onKeyPressHandler:function(e){"Enter"===e.key&&b()}})};var je=function(){var e=Object(a.useState)([]),t=Object(h.a)(e,2),n=t[0],r=t[1];return console.log(n),Object(d.jsxs)("div",{className:oe.a.someClass,children:[Object(d.jsx)("hr",{}),Object(d.jsx)("h2",{children:"Homeworks 3"}),Object(d.jsx)(le,{users:n,addUserCallback:function(e){var t={_id:Object(ne.a)(),name:e};r([t].concat(Object(x.a)(n)))}}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},ue=n(23),de=n.n(ue),be=n(32),Oe=n.n(be),he=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,a=e.className,r=(e.spanClassName,e.children),c=Object(p.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(Oe.a.checkbox," ").concat(a||"");return Object(d.jsxs)("label",{children:[Object(d.jsx)("input",Object(_.a)({type:"checkbox",onChange:function(e){n?n(e.currentTarget.checked):t&&t(e)},className:s},c)),r&&Object(d.jsx)("span",{className:Oe.a.spanClassName,children:r})]})};var xe=function(){var e=Object(a.useState)(""),t=Object(h.a)(e,2),n=t[0],r=t[1],c=n?"":"error",s=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},o=Object(a.useState)(!1),i=Object(h.a)(o,2),l=i[0],j=i[1];return Object(d.jsxs)("div",{className:de.a.HW4,children:[Object(d.jsx)("hr",{}),Object(d.jsx)("h2",{children:"Homeworks 4"}),Object(d.jsxs)("div",{className:de.a.column,children:[Object(d.jsx)(ce,{value:n,onChangeText:r,onEnter:s,error:c}),Object(d.jsx)(ce,{className:de.a.blue}),Object(d.jsx)(g,{children:"default"}),Object(d.jsx)(g,{red:!0,onClick:s,children:"delete "}),Object(d.jsx)(g,{disabled:!0,children:"disabled"}),Object(d.jsx)(he,{checked:l,onChangeChecked:j,children:"some text "}),Object(d.jsx)(he,{checked:l,onChange:function(e){return j(e.currentTarget.checked)}})]}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},me=n(15),_e=n.n(me),pe=function(e){e.autoFocus;var t=e.onBlur,n=e.onEnter,r=e.spanProps,c=Object(p.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),s=Object(a.useState)(!1),o=Object(h.a)(s,2),i=o[0],l=o[1],j=r||{},u=j.children,b=j.onDoubleClick,O=j.className,x=Object(p.a)(j,["children","onDoubleClick","className"]),m="".concat(_e.a.span," ").concat(O);return Object(d.jsx)(d.Fragment,{children:i?Object(d.jsx)(ce,Object(_.a)({autoFocus:!0,onBlur:function(e){l(!1),t&&t(e)},onEnter:function(){l(!1),n&&n()}},c)):Object(d.jsxs)("span",Object(_.a)(Object(_.a)({onDoubleClick:function(e){l(!0),b&&b(e)},className:m},x),{},{children:["\u270e",u||c.value]}))})};function fe(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}function ve(e,t){var n=t,a=localStorage.getItem(e);return null!==a&&(n=JSON.parse(a)),n}fe("test",{x:"A",y:1});ve("test",{x:"",y:0});var ge=function(){var e=Object(a.useState)(""),t=Object(h.a)(e,2),n=t[0],r=t[1];return Object(d.jsxs)("div",{className:_e.a.HW6,children:[Object(d.jsx)("hr",{}),Object(d.jsx)("h2",{children:"Homeworks 6"}),Object(d.jsx)("div",{className:_e.a.text,children:Object(d.jsx)(pe,{value:n,onChangeText:r,spanProps:{children:n?void 0:"enter text1..."}})}),Object(d.jsx)(g,{onClick:function(){fe("editable-span-value",n)},className:_e.a.button,children:"save"}),Object(d.jsx)(g,{onClick:function(){r(ve("editable-span-value",""))},className:_e.a.button,children:"restore"}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})};var Ce=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(Q,{}),Object(d.jsx)(te,{}),Object(d.jsx)(je,{}),Object(d.jsx)(xe,{}),Object(d.jsx)(ge,{})]})},Ne="/pre-junior";var ke=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)(O.d,{children:[Object(d.jsx)(O.b,{path:"/",exact:!0,render:function(){return Object(d.jsx)(O.a,{to:Ne})}}),Object(d.jsx)(O.b,{path:Ne,render:function(){return Object(d.jsx)(Ce,{})}}),Object(d.jsx)(O.b,{path:"/HW7-9",render:function(){return Object(d.jsx)(L,{})}}),Object(d.jsx)(O.b,{render:function(){return Object(d.jsx)(G,{})}})]})})};var Se=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)(l.a,{children:[Object(d.jsx)(b,{}),Object(d.jsx)(ke,{})]})})};var ye=function(){return Object(d.jsxs)("div",{className:i.a.App,children:[Object(d.jsx)("div",{className:i.a.react,children:"React homeworks:"}),Object(d.jsx)(Se,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(ye,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[49,1,2]]]);
//# sourceMappingURL=main.af167fb9.chunk.js.map