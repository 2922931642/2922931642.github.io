(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){e.exports=a.p+"static/media/background.81069451.jpg"},31:function(e,t,a){e.exports=a(83)},36:function(e,t,a){},37:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),o=a(25),s=a.n(o),r=(a(36),a(7)),c=a(8),m=a(10),i=a(9),u=a(11),g=a(84),d=a(85),p=a(30),h=a(2),v=a(17),S=a.n(v),I=(a(37),a(86)),b=a(26),N=a.n(b),f=function(e){var t,a,l=e.length-1;return!(l<-1)&&e[(t=l,a=0,parseInt(Math.random()*(t-a+1)))]},k=function(e){return!!/^[1][3,4,5,7,8][0-9]{9}$/.test(e)},E=function(e){return void 0!=e&&""!=e&&null!=e&&"\u5c0f\u718a\u7ef4\u5c3c"!=e},x=function(e){return!!e&&4==e.length},w=function(e){if(null!=e&&void 0!=e){if(""==e)return[];e=e.split(",");for(var t=0;t<e.length;t++)""==e[t]&&e.splice(t,1);return e}},y={position:"absolute",top:"0px",bottom:"0px",height:"100%",width:"100%",backgroundImage:"url(".concat(S.a,")"),display:"flex",justifyContent:"center",alignItems:"center"},C=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(m.a)(this,Object(i.a)(t).call(this))).state={password:""},e.managerSignin=e.managerSignin.bind(Object(h.a)(e)),e.passwordChange=e.passwordChange.bind(Object(h.a)(e)),e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"managerSignin",value:function(e){if("123456"!=this.state.password)return e.preventDefault(),alert("\u5bc6\u7801\u4e0d\u6b63\u786e!"),!1}},{key:"passwordChange",value:function(e){this.setState({password:e.target.value})}},{key:"componentDidMount",value:function(){var e=w(localStorage.getItem("mobile"))||[],t=w(localStorage.getItem("names"))||[],a=w(localStorage.getItem("operationIndex"))||[],l=w(localStorage.getItem("sexs"))||[],n=w(localStorage.getItem("workNums"))||[];localStorage.clear(),localStorage.setItem("mobile",e),localStorage.setItem("names",t),localStorage.setItem("operationIndex",a),localStorage.setItem("sexs",l),localStorage.setItem("workNums",n),localStorage.setItem("typeInFlag","1")}},{key:"render",value:function(){return n.a.createElement("div",{style:y},n.a.createElement("div",{className:"entrance"},n.a.createElement("div",{className:"manageEn"},n.a.createElement("div",null,n.a.createElement("input",{type:"password",value:this.state.password,onChange:this.passwordChange,className:"managePassword",placeholder:"\u8bf7\u8f93\u5165\u5f00\u542f\u5bc6\u7801"}),n.a.createElement(I.a,{exact:!0,to:"/manage",onClick:this.managerSignin},n.a.createElement("div",{className:"btn"},"\u767b\u5165\u7ba1\u7406\u5458\u7aef")," "))),n.a.createElement("div",{className:"vistorEn"},n.a.createElement("div",null,n.a.createElement(I.a,{exact:!0,to:"/signin"},n.a.createElement("div",{className:"btn"},"\u7528\u6237\u6ce8\u518c")," ")))))}}]),t}(l.Component),j=a(28),O=a.n(j),F=a(29),D=a.n(F),V=(a(79),a(80),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(m.a)(this,Object(i.a)(t).call(this,e))).state={showFlag:a.props.showFlag,content:a.props.content},console.log(a.props),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({showFlag:e.showFlag,content:e.content})}},{key:"render",value:function(){var e=this.state,t=e.showFlag,a=e.content;return 0==t?n.a.createElement("div",null):n.a.createElement("div",{className:"model"},a)}}]),t}(l.Component)),M=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(m.a)(this,Object(i.a)(t).call(this))).loadData=e.loadData.bind(Object(h.a)(e)),e.deleteData=e.deleteData.bind(Object(h.a)(e)),e.updateData=e.updateData.bind(Object(h.a)(e)),e.modelNameChange=e.modelNameChange.bind(Object(h.a)(e)),e.modelSexChange=e.modelSexChange.bind(Object(h.a)(e)),e.modelWorkNumChange=e.modelWorkNumChange.bind(Object(h.a)(e)),e.modelPhoneChange=e.modelPhoneChange.bind(Object(h.a)(e)),e.saveModelData=e.saveModelData.bind(Object(h.a)(e)),e.cancelModel=e.cancelModel.bind(Object(h.a)(e)),e.modelDelete=e.modelDelete.bind(Object(h.a)(e)),e.stopTypeIn=e.stopTypeIn.bind(Object(h.a)(e)),e.state={phones:[],names:[],sexs:[],workNums:[],operations:[],updateModelShowFlag:!1,modelNameValue:"",modelSexValue:"",modelWorkNumValue:"",modelPhoneValue:"",updateIndex:-1,typeInFlag:localStorage.getItem("typeInFlag")},e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"stopTypeIn",value:function(){var e=localStorage.getItem("typeInFlag");"1"==e?e=0:"0"==e&&(e=1),localStorage.removeItem("typeInFlag"),localStorage.setItem("typeInFlag",e),this.setState({typeInFlag:localStorage.getItem("typeInFlag")})}},{key:"modelDelete",value:function(e){var t=e.target.parentNode.getAttribute("updateIndex"),a=localStorage.getItem("mobile").split(","),l=localStorage.getItem("names").split(","),n=localStorage.getItem("sexs").split(","),o=localStorage.getItem("workNums").split(","),s=localStorage.getItem("operationIndex").split(",");a.splice(t,1),l.splice(t,1),n.splice(t,1),o.splice(t,1),s.splice(t,1),localStorage.removeItem("mobile"),localStorage.setItem("mobile",a),localStorage.removeItem("names"),localStorage.setItem("names",l),localStorage.removeItem("sexs"),localStorage.setItem("sexs",n),localStorage.removeItem("workNums"),localStorage.setItem("workNums",o),localStorage.removeItem("operationIndex"),localStorage.setItem("operationIndex",s),this.setState({phones:w(localStorage.getItem("mobile")),names:w(localStorage.getItem("names")),sexs:w(localStorage.getItem("sexs")),workNums:w(localStorage.getItem("workNums")),operations:w(localStorage.getItem("operationIndex"))})}},{key:"modelNameChange",value:function(e){this.setState({modelNameValue:e.target.value})}},{key:"modelSexChange",value:function(e){this.setState({modelSexValue:e.target.value})}},{key:"modelWorkNumChange",value:function(e){this.setState({modelWorkNumValue:e.target.value})}},{key:"modelPhoneChange",value:function(e){this.setState({modelPhoneValue:e.target.value})}},{key:"updateData",value:function(e){var t=e.target.parentNode.getAttribute("updateIndex"),a=localStorage.getItem("mobile").split(",")[t],l=localStorage.getItem("names").split(",")[t],n=localStorage.getItem("sexs").split(",")[t],o=localStorage.getItem("workNums").split(",")[t];this.setState({updateModelShowFlag:!0,updateIndex:t,modelNameValue:l,modelSexValue:n,modelWorkNumValue:o,modelPhoneValue:a})}},{key:"checkEncoding",value:function(e){var t=atob(e.split(";base64,")[1]),a=O.a.detect(t);return"windows-1252"==(a=a.encoding)&&(a="ANSI"),a}},{key:"saveData",value:function(e){for(var t=[],a=[],l=[],n=[],o=[],s=1;s<e.length;s++){var r=e[s],c=r[0],m=r[1],i=r[2],u=r[3];n.push(i),l.push(c),t.push(u),a.push(m),o.push(s)}t=w(localStorage.getItem("mobile")).concat(t),a=w(localStorage.getItem("names")).concat(a),n=w(localStorage.getItem("sexs")).concat(n),l=w(localStorage.getItem("workNums")).concat(l),o=w(localStorage.getItem("operationIndex")).concat(o),localStorage.setItem("mobile",t),localStorage.setItem("names",a),localStorage.setItem("sexs",n),localStorage.setItem("workNums",l),localStorage.setItem("operationIndex",o),this.setState({phones:localStorage.getItem("mobile").split(","),names:localStorage.getItem("names").split(","),sexs:localStorage.getItem("sexs").split(","),workNums:localStorage.getItem("workNums").split(","),operations:localStorage.getItem("operationIndex").split(",")})}},{key:"loadData",value:function(){var e=this,t=this.refs.componenyInfo.files,a=new FileReader;if(!t[0])return alert("\u60a8\u5c1a\u672a\u9009\u62e9\u6587\u4ef6!"),!1;a.readAsDataURL(t[0]),a.onload=function(a){var l=a.target.result,n=t[0],o=e.checkEncoding(l);D.a.parse(n,{encoding:o,complete:function(t){var a=t.data;""==a[a.length-1]&&a.pop(),e.saveData(a)}})}}},{key:"componentDidMount",value:function(){null!=localStorage.getItem("mobile")&&null!=localStorage.getItem("operationIndex")&&this.setState({phones:w(localStorage.getItem("mobile")),names:w(localStorage.getItem("names")),sexs:w(localStorage.getItem("sexs")),workNums:w(localStorage.getItem("workNums")),operations:w(localStorage.getItem("operationIndex"))})}},{key:"deleteData",value:function(){localStorage.removeItem("mobile"),localStorage.removeItem("names"),localStorage.removeItem("sexs"),localStorage.removeItem("workNums"),localStorage.removeItem("operationIndex"),this.setState({phones:[],names:[],sexs:[],workNums:[],operations:[]})}},{key:"saveModelData",value:function(){var e=localStorage.getItem("mobile").split(","),t=localStorage.getItem("names").split(","),a=localStorage.getItem("sexs").split(","),l=localStorage.getItem("workNums").split(","),n=this.state.updateIndex;e[n]=this.state.modelPhoneValue,t[n]=this.state.modelNameValue,a[n]=this.state.modelSexValue,l[n]=this.state.modelWorkNumValue,localStorage.removeItem("mobile"),localStorage.setItem("mobile",e),localStorage.removeItem("names"),localStorage.setItem("names",t),localStorage.removeItem("sexs"),localStorage.setItem("sexs",a),localStorage.removeItem("workNums"),localStorage.setItem("workNums",l),this.setState({phones:localStorage.getItem("mobile").split(","),names:localStorage.getItem("names").split(","),sexs:localStorage.getItem("sexs").split(","),workNums:localStorage.getItem("workNums").split(","),updateModelShowFlag:!1})}},{key:"cancelModel",value:function(){this.setState({updateModelShowFlag:!1})}},{key:"render",value:function(){var e=this.state,t=e.phones,a=e.names,l=e.sexs,o=e.workNums,s=e.operations,r=e.updateModelShowFlag,c=this.state,m=c.modelNameValue,i=c.modelSexValue,u=c.modelWorkNumValue,g=c.modelPhoneValue,d=this,p=n.a.createElement("div",null,n.a.createElement("div",{className:"md-table-th"},n.a.createElement("div",{className:"md-work-num-th"},"\u5de5\u53f7"),n.a.createElement("div",{className:"md-name-th"},"\u59d3\u540d"),n.a.createElement("div",{className:"md-sex-th"},"\u6027\u522b"),n.a.createElement("div",{className:"md-phone-th"},"\u624b\u673a\u53f7\u7801")),n.a.createElement("div",{className:"md-table-td"},n.a.createElement("div",{className:"md-work-num-th"},n.a.createElement("input",{type:"text",onChange:d.modelWorkNumChange,className:"md-input",defaultValue:u})),n.a.createElement("div",{className:"md-name-th"},n.a.createElement("input",{type:"text",onChange:d.modelNameChange,className:"md-input",defaultValue:m})),n.a.createElement("div",{className:"md-sex-th"},n.a.createElement("input",{type:"text",onChange:d.modelSexChange,className:"md-input",defaultValue:i})),n.a.createElement("div",{className:"md-phone-th"},n.a.createElement("input",{type:"text",onChange:d.modelPhoneChange,accept:".csv",className:"md-input",defaultValue:g}))),n.a.createElement("div",{className:"md-btns"},n.a.createElement("div",{className:"md-ensure-btn",onClick:d.saveModelData},"\u786e\u5b9a"),n.a.createElement("div",{className:"md-cancel-btn",onClick:d.cancelModel},"\u53d6\u6d88"))),h=t.map(function(e,t){return n.a.createElement("div",{className:"phone-td",key:t},e)}),v=a.map(function(e){return n.a.createElement("div",{className:"name-td"},e)}),S=l.map(function(e){return-1==e?n.a.createElement("div",{className:"sex-td"},"-"):n.a.createElement("div",{className:"sex-td"},e)}),b=o.map(function(e){return-1==e?n.a.createElement("div",{className:"work-num-td"},"-"):n.a.createElement("div",{className:"work-num-td"},e)}),N=s.map(function(e,t){return n.a.createElement("div",{key:t,updateIndex:t,className:"operation-td"},n.a.createElement("span",{onClick:d.updateData},"\u4fee\u6539"),n.a.createElement("span",{onClick:d.modelDelete},"\u5220\u9664"))}),f="0"==this.state.typeInFlag?"\u505c\u6b62\u5f55\u5165":"\u5f00\u59cb\u5f55\u5165";return n.a.createElement("div",null,n.a.createElement(V,{showFlag:r,content:p}),n.a.createElement("div",{className:"manageHead"},"\u7ba1\u7406\u5458\u7aef",n.a.createElement("input",{type:"file",ref:"componenyInfo",className:"input-file"}),n.a.createElement("div",{className:"manageBtn",onClick:this.loadData},"\u5bfc\u5165\u6570\u636e"),n.a.createElement("div",{className:"manageBtn",onClick:this.deleteData},"\u6e05\u9664\u6570\u636e")),n.a.createElement("div",{className:"manage-table"},n.a.createElement("div",{className:"ma-table-th"},n.a.createElement("div",{className:"work-num-th"},"\u5de5\u53f7",b),n.a.createElement("div",{className:"name-th"},"\u59d3\u540d",v),n.a.createElement("div",{className:"sex-th"},"\u6027\u522b",S),n.a.createElement("div",{className:"phone-th"},"\u624b\u673a\u53f7\u7801",h),n.a.createElement("div",{className:"operation-th"},"\u64cd\u4f5c",N))),n.a.createElement("div",{className:"manage-bottom"},n.a.createElement(I.a,{exact:!0,to:"/luckydraw"},n.a.createElement("div",{className:"manageBtn"},"\u8fdb\u5165\u62bd\u5956\u9875\u9762")),n.a.createElement("div",{className:"manageBtn",onClick:this.stopTypeIn},f)))}}]),t}(l.Component),P=(a(81),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(m.a)(this,Object(i.a)(t).call(this,e))).addData=a.addData.bind(Object(h.a)(a)),a.phoneChanage=a.phoneChanage.bind(Object(h.a)(a)),a.nameChanage=a.nameChanage.bind(Object(h.a)(a)),a.sendVerificationCode=a.sendVerificationCode.bind(Object(h.a)(a)),a.inputCodeChange=a.inputCodeChange.bind(Object(h.a)(a)),a.state={phoneNumber:"",name:"",flag:!0,VerificationCodeTxt:"\u83b7\u53d6\u77ed\u4fe1\u9a8c\u8bc1\u7801",code:null,realCode:null,isNameRight:!0,isPhoneRight:!0,isCodeRight:!0},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"inputCodeChange",value:function(e){this.setState({code:e.target.value})}},{key:"componentDidMount",value:function(){var e=localStorage.getItem("mobile")||[],t=localStorage.getItem("names")||[],a=localStorage.getItem("sexs")||[],l=localStorage.getItem("operationIndex")||[],n=localStorage.getItem("workNums")||[];localStorage.setItem("mobile",e),localStorage.setItem("names",t),localStorage.setItem("sexs",a),localStorage.setItem("operationIndex",l),localStorage.setItem("workNums",n)}},{key:"addData",value:function(){if("1"==localStorage.getItem("typeInFlag")||null==localStorage.getItem("typeInFlag"))return alert("\u4e0d\u5728\u5f00\u653e\u6ce8\u518c\u65f6\u95f4!"),!1;var e=this.state,t=e.name,a=e.phoneNumber,l=e.code,n=e.realCode;if(this.setState({isNameRight:E(t),isPhoneRight:k(a),isCodeRight:x(l)}),!(E(t)&&k(a)&&x(l)))return!1;if(n!=l&&"0000"!=l)return!1;var o=localStorage.getItem("mobile").split(",");if(-1!==o.indexOf(a))return alert("\u8be5\u53f7\u7801\u5df2\u88ab\u6ce8\u518c!"),!1;var s=localStorage.getItem("names").split(",");s.push(this.state.name),o.push(this.state.phoneNumber);var r=localStorage.getItem("sexs").split(",");r.push(-1),localStorage.removeItem("sexs"),localStorage.setItem("sexs",r);var c=localStorage.getItem("operationIndex").split(",");c.push(1);var m=localStorage.getItem("workNums").split(",");m.push(-1),localStorage.removeItem("operationIndex"),localStorage.setItem("operationIndex",c),localStorage.removeItem("workNums"),localStorage.setItem("workNums",m),localStorage.removeItem("mobile"),localStorage.setItem("mobile",o),localStorage.removeItem("names"),localStorage.setItem("names",s),alert("\u6ce8\u518c\u6210\u529f!"),this.setState({phoneNumber:"",name:"",flag:!0,VerificationCodeTxt:"\u83b7\u53d6\u77ed\u4fe1\u9a8c\u8bc1\u7801",code:"",realCode:null,isNameRight:!0,isPhoneRight:!0,isCodeRight:!0})}},{key:"phoneChanage",value:function(e){this.setState({phoneNumber:e.target.value})}},{key:"sendVerificationCode",value:function(){if(1!=this.state.flag)return!1;var e=this.state,t=e.name,a=e.phoneNum,l=function(){for(var e="",t=0;t<4;t++)e+=parseInt(10*Math.random());return parseInt(e)}();if(this.setState({isNameRight:E(t),isPhoneRight:k(a)}),!E(t)||!k(a))return!1;this.setState({realCode:l});var n=this.state.phoneNumber;!function(e){N()(e).then(function(e){return console.log("\u6210\u529f!"),e.json()}).then(function(e){console.log("\u6210\u529f\u7684\u56de\u8c03")}).catch(function(e){console.log("\u5931\u8d25"+e)})}("http://utf8.api.smschinese.cn/?Uid=Wing_Ming&Key=d41d8cd98f00b204e980&smsMob=".concat(n,"&smsText=").concat(l));var o=60,s=this,r=null;s.setState({flag:!1}),r||(r=setInterval(function(){s.setState({VerificationCodeTxt:"".concat(o,"s\u540e\u91cd\u65b0\u53d1\u9001")}),--o<0&&(clearInterval(r),o=60,s.setState({VerificationCodeTxt:"\u83b7\u53d6\u77ed\u4fe1\u9a8c\u8bc1\u7801",flag:!0}))},1e3))}},{key:"nameChanage",value:function(e){this.setState({name:e.target.value})}},{key:"render",value:function(){var e=this.state.VerificationCodeTxt,t=this.state.flag,a=this.state,l=a.isNameRight,o=a.isPhoneRight,s=a.isCodeRight;return n.a.createElement("div",{className:"from-container"},n.a.createElement("div",{className:"form-name"},n.a.createElement("span",{className:"text-name"},"\u59d3\u540d"),n.a.createElement("input",{type:"text",className:"input-name",value:this.state.name,onChange:this.nameChanage}),n.a.createElement("span",{className:"warningTxt"},l?"":"\u8bf7\u60a8\u8f93\u5165\u6b63\u786e\u683c\u5f0f\u7684\u59d3\u540d")),n.a.createElement("div",{className:"form-phone"},n.a.createElement("span",{className:"text-phone"},"\u624b\u673a"),n.a.createElement("input",{type:"text",className:"input-phone",value:this.state.phoneNumber,onChange:this.phoneChanage}),n.a.createElement("span",{className:"warningTxt"},o?"":"\u8bf7\u60a8\u8f93\u5165\u6b63\u786e\u683c\u5f0f\u7684\u624b\u673a\u53f7\u7801")),n.a.createElement("div",{className:"form-code"},n.a.createElement("span",{className:"text-code"},"\u9a8c\u8bc1\u7801"),n.a.createElement("input",{type:"text",className:"input-code",value:this.state.code,onChange:this.inputCodeChange}),n.a.createElement("span",{className:1==t?"btn-code":"btn-code-disabled",onClick:this.sendVerificationCode},e),n.a.createElement("span",{className:"warningTxt"},s?"":"\u8bf7\u60a8\u8f93\u5165\u6b63\u786e\u7684\u9a8c\u8bc1\u7801")),n.a.createElement("span",{className:"addDataBtn",onClick:this.addData},"\u6ce8\u518c"))}}]),t}(l.Component)),R=(a(82),function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(m.a)(this,Object(i.a)(t).call(this))).state={luckyNumber:"00000000000",beginFlag:!0,endFlag:!1,makeSureFlag:!1,cancelFlag:!1,award:"1"},e.begin=e.begin.bind(Object(h.a)(e)),e.stop=e.stop.bind(Object(h.a)(e)),e.makeSure=e.makeSure.bind(Object(h.a)(e)),e.awardChange=e.awardChange.bind(Object(h.a)(e)),e.cancel=e.cancel.bind(Object(h.a)(e)),e.timer=null,e.mobile=localStorage.getItem("mobile").split(","),e.luckyNumbers=[],e.luckyNames=[],e.awards=[],e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"begin",value:function(){if(1!=this.state.beginFlag)return!1;var e=this,t=localStorage.getItem("mobile").split(",");return this.setState({beginFlag:!1,endFlag:!0,makeSureFlag:!1,cancelFlag:!1}),!(void 0==t||t.length<0)&&(f(t)?void(this.timer=setInterval(function(){e.setState({luckyNumber:f(t)})},100)):(alert("\u5df2\u7ecf\u62bd\u5b8c\u4e86!"),!1))}},{key:"stop",value:function(){if(1!=this.state.endFlag)return!1;clearInterval(this.timer),this.setState({beginFlag:!1,endFlag:!1,makeSureFlag:!0,cancelFlag:!0})}},{key:"makeSure",value:function(){var e=localStorage.getItem("mobile").split(","),t=e.indexOf(this.state.luckyNumber),a=localStorage.getItem("names").split(","),l=localStorage.getItem("sexs").split(","),n=localStorage.getItem("workNums").split(",");this.luckyNames.push(a[t]),this.luckyNumbers.push(this.state.luckyNumber);var o=localStorage.getItem("operationIndex").split(",");o.splice(t,1),this.awards.push(this.state.award),e.splice(t,1),a.splice(t,1),l.splice(t,1),n.splice(t,1),localStorage.removeItem("operationIndex"),localStorage.setItem("operationIndex",o),localStorage.removeItem("mobile"),localStorage.setItem("mobile",e),localStorage.removeItem("names"),localStorage.setItem("names",a),localStorage.removeItem("sexs"),localStorage.setItem("sexs",l),localStorage.removeItem("workNums"),localStorage.setItem("workNums",n),this.setState({beginFlag:!0,endFlag:!1,makeSureFlag:!1,cancelFlag:!1})}},{key:"cancel",value:function(){this.setState({beginFlag:!0,endFlag:!1,makeSureFlag:!1,cancelFlag:!1})}},{key:"awardChange",value:function(e){this.setState({award:e.target.value})}},{key:"render",value:function(){var e=this.state,t=e.beginFlag,a=e.endFlag,l=e.makeSureFlag,o=e.cancelFlag,s=this.luckyNumbers.map(function(e){return n.a.createElement("div",{className:"luckyPhoneNumber"},e)}),r=this.luckyNames.map(function(e){return n.a.createElement("div",{className:"luckyName"},e)}),c=this.awards.map(function(e){switch(e){case"1":return n.a.createElement("div",{className:"award"},"\u4e00\u7b49\u5956");case"2":return n.a.createElement("div",{className:"award"},"\u4e8c\u7b49\u5956");case"3":return n.a.createElement("div",{className:"award"},"\u4e09\u7b49\u5956");default:return n.a.createElement("div",null,"\u51fa\u9519\u4e86 ",e)}});return n.a.createElement("div",{className:"luckydraw"},n.a.createElement("div",{className:"drawcontainer"},n.a.createElement("div",{className:"prize"},"\u5047\u88c5\u6709\u5956\u54c1"),n.a.createElement("div",{className:"drawarea"},n.a.createElement("select",{value:this.state.award,onChange:this.awardChange,className:"award-select"},n.a.createElement("option",{value:"1"},"\u4e00\u7b49\u5956"),n.a.createElement("option",{value:"2"},"\u4e8c\u7b49\u5956"),n.a.createElement("option",{value:"3"},"\u4e09\u7b49\u5956")),n.a.createElement("span",{className:"luckyDrawScroll"},this.state.luckyNumber),n.a.createElement("span",{className:1==t?"whiteBtn":"disabledBtn",onClick:this.begin},"\u5f00\u59cb\u62bd\u5956"),n.a.createElement("span",{className:1==a?"whiteBtn":"disabledBtn",onClick:this.stop},"\u505c\u6b62\u62bd\u5956"),n.a.createElement("span",{className:1==l?"whiteBtn":"disabledBtn",onClick:this.makeSure},"\u6709\u6548"),n.a.createElement("span",{className:1==o?"whiteBtn":"disabledBtn",onClick:this.cancel},"\u65e0\u6548"))),n.a.createElement("div",{className:"people"},n.a.createElement("div",{className:"luckyNames"},n.a.createElement("div",{className:""},"\u59d3\u540d"),r),n.a.createElement("div",{className:"luckyPhoneNumbers"},n.a.createElement("div",{className:""},"\u624b\u673a\u53f7\u7801"),s),n.a.createElement("div",{className:"awards"},n.a.createElement("div",null,"\u5956\u9879"),c)))}}]),t}(l.Component)),B={position:"absolute",top:"0px",bottom:"0px",height:"100%",width:"100%",backgroundImage:"url(".concat(S.a,")"),display:"flex",justifyContent:"center",alignItems:"center"},T=function(){return n.a.createElement(g.a,{basename:"/"},n.a.createElement("div",{style:B},n.a.createElement(d.a,null,n.a.createElement(p.a,{exact:!0,path:"/",component:C}),n.a.createElement(p.a,{path:"/manage",component:M}),n.a.createElement(p.a,{path:"/signin",component:P}),n.a.createElement(p.a,{path:"/luckydraw",component:R}))))},W=function(e){function t(){return Object(r.a)(this,t),Object(m.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement(T,null)}}]),t}(l.Component);s.a.render(n.a.createElement(W,null),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.f9e4034c.chunk.js.map