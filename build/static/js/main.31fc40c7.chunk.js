(this["webpackJsonpmonika-learning"]=this["webpackJsonpmonika-learning"]||[]).push([[0],{59:function(e,t,a){e.exports=a.p+"static/media/learnign.408a7538.jpg"},69:function(e,t,a){e.exports=a(79)},79:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(7),o=a.n(i),s=a(60),l=a(10),c=a(80),u=a(112),p=a(108),m=Object(p.a)((function(e){return{root:{display:"flex",justifyContent:"center",alignItems:"center",padding:15,backgroundColor:e.palette.primary.main},text:{color:"white"}}})),v=function(e){var t=m();return r.a.createElement(c.a,{className:t.root},r.a.createElement(u.a,{variant:"h4",className:t.text},"IT Learning"))},d=a(113),f=a(59),g=a.n(f),h=Object(p.a)((function(e){return{root:{padding:30,display:"flex",flexDirection:"column",alignItems:"center",position:"relative",maxWidth:"100%"},button:{marginTop:30,marginBottom:50},img:{maxWidth:"100%"}}})),y=function(e){var t=h();return r.a.createElement(c.a,{className:t.root},r.a.createElement(u.a,{align:"center",variant:"h4",gutterBottom:!0},"Witaj na naszej stronie!"),r.a.createElement(u.a,{align:"center",variant:"h6",gutterBottom:!0},"Ju\u017c dzisiaj zacznij swoj\u0105 przygod\u0119 z programowaniem. Skorzystaj z opieki naszych specjalist\xf3w w dziedzinach nauki j\u0119zyk\xf3w programowania. Wype\u0142nij kr\xf3tki formularz, a my odezwiemy si\u0119 do Ciebie i zaproponujemy odpowiedni kurs."),r.a.createElement(d.a,{className:t.button,variant:"outlined",color:"primary",onClick:function(){return e.history.push("/zapisz-sie")}},"Zapisz si\u0119"),r.a.createElement("img",{alt:"learning",src:g.a,className:t.img}))},b=a(44),k=a(45),j=a(47),E=a(46),O=a(116),z=a(118),w=a(119),I=a(114),S=a(20),x=a(25),T=function(e){var t=!1;return e.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)||(t=!0),t},C=function(e){var t,a,n=e.split(":");switch(n[0]){case"minLength":return a=n[1],a=Number(a),function(e){var t=!1;return e.length<a&&(t=!0),t};case"email":return T;case"sameAs":return t=n[1],function(e,a){var n=!1;return e!==a[t]&&(n=!0),n};default:return console.log('"'.concat(e,'" IS WRONG VALIDATE TYPE !!! THIS INPUT WONT BE VALIDATE')),function(){return!1}}},N=function(e){Object(j.a)(a,e);var t=Object(E.a)(a);function a(e){var n;Object(b.a)(this,a),(n=t.call(this)).validateInputs=function(){var e={},t=n.state.values;return n.state.inputs.forEach((function(a){if("function"===typeof a.validate){var n=a.validate(t[a.key],t);!0===n&&(e[a.key]=!0),"object"===typeof n&&(!0===n.isError&&(e[a.key]=!0),t[a.key]=n.newValue)}})),n.setState({errors:e,values:t}),Object.values(e).includes(!0)},n.submit=function(e){var t=!0;if(n.props.validateOnSubmit&&(t=!n.validateInputs()),t)return e(n.state.values),!0},n.clean=function(){var e=Object.keys(n.state.values).reduce((function(e,t){return Object.assign(e,Object(x.a)({},t,""))}),{});n.setState({errors:{},values:e})},n.getInputsValues=function(){return n.state.values},n.onChange=function(e,t,a,r,i,o){return function(s){var l="function"===typeof o?o(s.target.value):s.target.value;if(r)n.setState({values:Object(S.a)(Object(S.a)({},n.state.values),{},Object(x.a)({},e,l))},n.validateInputs);else{var c={};if(a||n.state.errors[e]&&!i){var u=t(l,n.state.values);c[e]=u,"object"===typeof u&&(c[e]=u.isError,l=u.newValue)}n.setState({values:Object(S.a)(Object(S.a)({},n.state.values),{},Object(x.a)({},e,l)),errors:Object(S.a)(Object(S.a)({},n.state.errors),c)})}}};var r=e.inputs.reduce((function(e,t){return Object.assign(e,Object(x.a)({},t.key,""))}),{}),i=e.inputs.map((function(e){return e.key||(console.error("YOU DIDNT ADD KEY TO INPUT!! ADD IT!"),e.key=Math.random().toString(36).substring(2,15)),"object"===typeof e.props?(delete e.props.value,delete e.props.onChange):e.props={},"string"===typeof e.validate&&(e.validate=C(e.validate)),e})),o=e.eachInputProps||{};return delete o.value,delete o.onChange,n.state={inputs:i,values:r,errors:{},eachInputProps:o},n}return Object(k.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("form",Object.assign({onSubmit:function(e){return e.preventDefault()}},this.props.formProps),this.state.inputs.map((function(t){return r.a.createElement(O.a,Object.assign({key:t.key,value:e.state.values[t.key],onChange:e.onChange(t.key,t.validate,t.alwaysValidate,t.alwaysAllValidate,t.dontValidateIfBug,t.valueFunc),error:e.state.errors[t.key],helperText:e.state.errors[t.key]?t.errorText:t.helperText},e.state.eachInputProps,t.props,{style:Object(S.a)(Object(S.a)({},e.state.eachInputProps.style),t.props.style)}))})))}}]),a}(r.a.Component),D={root:{padding:30,display:"flex",flexDirection:"column",alignItems:"center"},input:{marginBottom:20,width:230},form:{display:"flex",flexDirection:"column"}},A=" ()+-0123456789".split(""),P=function(e){Object(j.a)(a,e);var t=Object(E.a)(a);function a(){var e;Object(b.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={select:"",selectItems:["Java","Python","C++","C#"],isSelectError:!1,description:"",openSnackbar:!1},e.inputs=[{key:"firstname",validate:"minLength:3",errorText:"Minimum 3 znaki",props:{label:"Imi\u0119"},valueFunc:function(e){return e.length>15?e.substring(0,e.length-1):e}},{key:"lastname",validate:"minLength:3",errorText:"Minimum 3 znaki",props:{label:"Nazwisko"},valueFunc:function(e){return e.length>25?e.substring(0,e.length-1):e}},{key:"email",validate:"email",errorText:"Wprowad\u017a prawid\u0142owy adres e-mail",props:{label:"Email"}},{key:"tel",validate:"minLength:7",valueFunc:function(e){return(!e||A.includes(e[e.length-1]))&&e.length<13?e:e.substring(0,e.length-1)},errorText:"Wprowad\u017a prawid\u0142owy numer telefonu",props:{label:"Numer telefonu"}}],e.submit=function(){var t=!e.state.select;e.form.validateInputs()||t?e.setState({isSelectError:t}):(e.form.clean(),e.setState({select:"",description:"",openSnackbar:!0}))},e}return Object(k.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(c.a,{style:D.root},r.a.createElement(u.a,{variant:"h4",gutterBottom:!0},"Zapisz si\u0119"),r.a.createElement(N,{ref:function(t){return e.form=t},inputs:this.inputs,eachInputProps:{variant:"outlined",style:D.input},formProps:{style:D.form}}),r.a.createElement(O.a,{value:this.state.select,style:D.input,onChange:function(t){e.setState({select:t.target.value}),t.target.value&&e.state.isSelectError&&e.setState({isSelectError:!1})},label:"Wybierz kurs",variant:"outlined",select:!0,error:this.state.isSelectError},this.state.selectItems.map((function(e){return r.a.createElement(z.a,{key:e,value:e},e)}))),r.a.createElement(O.a,{variant:"outlined",style:D.input,label:"Uwagi",value:this.state.description,onChange:function(t){return e.setState({description:t.target.value})},multiline:!0,rows:3}),r.a.createElement(d.a,{variant:"outlined",color:"primary",onClick:this.submit},"Zapisz"),r.a.createElement(w.a,{style:{backgroundColor:"green"},anchorOrigin:{vertical:"bottom",horizontal:"left"},open:this.state.openSnackbar,autoHideDuration:7e3,onClose:function(t,a){return"clickaway"!==a&&e.setState({openSnackbar:!1})}},r.a.createElement(I.a,{style:{backgroundColor:"green"},message:"Zapisali\u015bmy Twoje dane! Wkr\xf3tce dostaniesz wiadomo\u015b\u0107 z propozycj\u0105 szkolenia."})))}}]),a}(r.a.Component),W=Object(p.a)((function(e){return{root:{margin:"30px auto",maxWidth:1e3}}})),B=function(e){var t=W();return r.a.createElement("div",{className:t.root},r.a.createElement(v,null),r.a.createElement(s.a,null,r.a.createElement(l.d,null,r.a.createElement(l.b,{path:"/",exact:!0,component:y}),r.a.createElement(l.b,{path:"/zapisz-sie",component:P}),r.a.createElement(l.a,{to:"/"}))))},V=a(115),L=a(61),Z=a(48),F=a.n(Z),J=Object(L.a)({palette:{primary:{light:F.a[300],main:F.a[500],dark:F.a[700]}}});o.a.render(r.a.createElement(V.a,{theme:J},r.a.createElement(B,null)),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.31fc40c7.chunk.js.map