(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{2127:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("transition",{attrs:{appear:"","enter-active-class":"animated fadeIn"}},[a("q-table",{staticClass:"my-sticky-header-column-table shadow-24",attrs:{data:e.table_list,"row-key":"id",separator:e.separator,loading:e.loading,filter:e.filter,columns:e.columns,"hide-bottom":"",pagination:e.pagination,"no-data-label":"No data","no-results-label":"No data you want","table-style":{height:e.height},flat:"",bordered:""},on:{"update:pagination":function(t){e.pagination=t}},scopedSlots:e._u([{key:"top",fn:function(){return[a("q-btn-group",{attrs:{push:""}},[a("q-btn",{attrs:{label:e.$t("new"),icon:"add"},on:{click:function(t){e.newForm=!0}}},[a("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[10,10],"content-style":"font-size: 12px"}},[e._v("\n             "+e._s(e.$t("newtip"))+"\n           ")])],1),a("q-btn",{attrs:{label:e.$t("refresh"),icon:"refresh"},on:{click:function(t){return e.reFresh()}}},[a("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[10,10],"content-style":"font-size: 12px"}},[e._v("\n             "+e._s(e.$t("refreshtip"))+"\n           ")])],1)],1)]},proxy:!0},{key:"body",fn:function(t){return[a("q-tr",{attrs:{props:t}},[t.row.id===e.editid?[a("q-td",{key:"company_name",attrs:{props:t}},[a("q-input",{attrs:{dense:"",outlined:"",square:"",label:"Company Name",autofocus:"",rules:[function(e){return e&&e.length>0||"Please Enter The Company Name"}]},model:{value:e.editFormData.company_name,callback:function(t){e.$set(e.editFormData,"company_name",t)},expression:"editFormData.company_name"}})],1)]:t.row.id!==e.editid?[a("q-td",{key:"company_name",attrs:{props:t}},[e._v("\n             "+e._s(t.row.company_name)+"\n           ")])]:e._e(),t.row.id===e.editid?[a("q-td",{key:"company_city",attrs:{props:t}},[a("q-input",{attrs:{dense:"",outlined:"",square:"",label:"Company City",rules:[function(e){return e&&e.length>0||"Please Enter The Company City"}]},model:{value:e.editFormData.company_city,callback:function(t){e.$set(e.editFormData,"company_city",t)},expression:"editFormData.company_city"}})],1)]:t.row.id!==e.editid?[a("q-td",{key:"company_city",attrs:{props:t}},[e._v("\n             "+e._s(t.row.company_city)+"\n           ")])]:e._e(),t.row.id===e.editid?[a("q-td",{key:"company_address",attrs:{props:t}},[a("q-input",{attrs:{dense:"",outlined:"",square:"",label:"Company Address",rules:[function(e){return e&&e.length>0||"Please Enter The Company Address"}]},model:{value:e.editFormData.company_address,callback:function(t){e.$set(e.editFormData,"company_address",t)},expression:"editFormData.company_address"}})],1)]:t.row.id!==e.editid?[a("q-td",{key:"company_address",attrs:{props:t}},[e._v("\n             "+e._s(t.row.company_address)+"\n           ")])]:e._e(),t.row.id===e.editid?[a("q-td",{key:"company_contact",attrs:{props:t}},[a("q-input",{attrs:{dense:"",outlined:"",square:"",type:"number",label:"Company Contact",rules:[function(e){return e&&e>0||"Please Enter The Company Contact"}]},model:{value:e.editFormData.company_contact,callback:function(t){e.$set(e.editFormData,"company_contact",e._n(t))},expression:"editFormData.company_contact"}})],1)]:t.row.id!==e.editid?[a("q-td",{key:"company_contact",attrs:{props:t}},[e._v("\n             "+e._s(t.row.company_contact)+"\n           ")])]:e._e(),t.row.id===e.editid?[a("q-td",{key:"company_manager",attrs:{props:t}},[a("q-input",{attrs:{dense:"",outlined:"",square:"",label:"Company Manager",rules:[function(e){return e&&e.length>0||"Please Enter The Company Manager"}]},model:{value:e.editFormData.company_manager,callback:function(t){e.$set(e.editFormData,"company_manager",t)},expression:"editFormData.company_manager"}})],1)]:t.row.id!==e.editid?[a("q-td",{key:"company_manager",attrs:{props:t}},[e._v("\n             "+e._s(t.row.company_manager)+"\n           ")])]:e._e(),a("q-td",{key:"creater",attrs:{props:t}},[e._v("\n           "+e._s(t.row.creater)+"\n         ")]),a("q-td",{key:"create_time",attrs:{props:t}},[e._v("\n           "+e._s(t.row.create_time)+"\n         ")]),a("q-td",{key:"update_time",attrs:{props:t}},[e._v("\n           "+e._s(t.row.update_time)+"\n         ")]),e.editMode?e.editMode?[t.row.id===e.editid?[a("q-td",{key:"action",staticStyle:{width:"100px"},attrs:{props:t}},[a("q-btn",{attrs:{round:"",flat:"",push:"",color:"secondary",icon:"check"},on:{click:function(t){return e.editDataSubmit()}}},[a("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[10,10],"content-style":"font-size: 12px"}},[e._v("\n                 "+e._s(e.$t("confirmedit"))+"\n              ")])],1),a("q-btn",{attrs:{round:"",flat:"",push:"",color:"red",icon:"close"},on:{click:function(t){return e.editDataCancel()}}},[a("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[10,10],"content-style":"font-size: 12px"}},[e._v("\n                "+e._s(e.$t("canceledit"))+"\n              ")])],1)],1)]:t.row.id!==e.editid?void 0:e._e()]:e._e():[a("q-td",{key:"action",staticStyle:{width:"100px"},attrs:{props:t}},[a("q-btn",{attrs:{round:"",flat:"",push:"",color:"purple",icon:"edit"},on:{click:function(a){return e.editData(t.row)}}},[a("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[10,10],"content-style":"font-size: 12px"}},[e._v("\n                 "+e._s(e.$t("edit"))+"\n              ")])],1),a("q-btn",{attrs:{round:"",flat:"",push:"",color:"dark",icon:"delete"},on:{click:function(a){return e.deleteData(t.row.id)}}},[a("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[10,10],"content-style":"font-size: 12px"}},[e._v("\n                "+e._s(e.$t("delete"))+"\n              ")])],1)],1)]],2)]}}])})],1),[a("div",{staticClass:"q-pa-lg flex flex-center"},[a("q-btn",{directives:[{name:"show",rawName:"v-show",value:e.pathname_previous,expression:"pathname_previous"}],attrs:{flat:"",push:"",color:"purple",label:e.$t("previous"),icon:"navigate_before"},on:{click:function(t){return e.getListPrevious()}}},[a("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[10,10],"content-style":"font-size: 12px"}},[e._v("\n          "+e._s(e.$t("previous"))+"\n        ")])],1),a("q-btn",{directives:[{name:"show",rawName:"v-show",value:e.pathname_next,expression:"pathname_next"}],attrs:{flat:"",push:"",color:"purple",label:e.$t("next"),"icon-right":"navigate_next"},on:{click:function(t){return e.getListNext()}}},[a("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[10,10],"content-style":"font-size: 12px"}},[e._v("\n          "+e._s(e.$t("next"))+"\n        ")])],1),a("q-btn",{directives:[{name:"show",rawName:"v-show",value:!e.pathname_previous&&!e.pathname_next,expression:"!pathname_previous && !pathname_next"}],attrs:{flat:"",push:"",color:"dark",label:e.$t("no_data")}})],1)],a("q-dialog",{model:{value:e.newForm,callback:function(t){e.newForm=t},expression:"newForm"}},[a("q-card",{staticClass:"shadow-24"},[a("q-bar",{staticClass:"bg-light-blue-10 text-white rounded-borders",staticStyle:{height:"50px"}},[a("div",[e._v(e._s(e.$t("newtip")))]),a("q-space"),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{dense:"",flat:"",icon:"close"}},[a("q-tooltip",[e._v(e._s(e.$t("index.close")))])],1)],1),a("q-card-section",{staticClass:"scroll",staticStyle:{"max-height":"325px",width:"400px"}},[a("q-input",{attrs:{dense:"",outlined:"",square:"",label:"Company Name",autofocus:"",rules:[function(e){return e&&e.length>0||"Please Enter The Company Name"}]},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.newDataSubmit()}},model:{value:e.newFormData.company_name,callback:function(t){e.$set(e.newFormData,"company_name",t)},expression:"newFormData.company_name"}}),a("q-input",{attrs:{dense:"",outlined:"",square:"",label:"Company City",rules:[function(e){return e&&e.length>0||"Please Enter The Company City"}]},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.newDataSubmit()}},model:{value:e.newFormData.company_city,callback:function(t){e.$set(e.newFormData,"company_city",t)},expression:"newFormData.company_city"}}),a("q-input",{attrs:{dense:"",outlined:"",square:"",label:"Company Address",rules:[function(e){return e&&e.length>0||"Please Enter The Company Address"}]},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.newDataSubmit()}},model:{value:e.newFormData.company_address,callback:function(t){e.$set(e.newFormData,"company_address",t)},expression:"newFormData.company_address"}}),a("q-input",{attrs:{dense:"",outlined:"",square:"",type:"number",label:"Company Contact",rules:[function(e){return e&&e>0||"Please Enter The Company Contact"}]},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.newDataSubmit()}},model:{value:e.newFormData.company_contact,callback:function(t){e.$set(e.newFormData,"company_contact",e._n(t))},expression:"newFormData.company_contact"}}),a("q-input",{attrs:{dense:"",outlined:"",square:"",label:"Company Manager",rules:[function(e){return e&&e.length>0||"Please Enter The company_manager"}]},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.newDataSubmit()}},model:{value:e.newFormData.company_manager,callback:function(t){e.$set(e.newFormData,"company_manager",t)},expression:"newFormData.company_manager"}})],1),a("div",{staticStyle:{float:"right",padding:"15px 15px 15px 0"}},[a("q-btn",{staticStyle:{"margin-right":"25px"},attrs:{color:"white","text-color":"black"},on:{click:function(t){return e.newDataCancel()}}},[e._v(e._s(e.$t("cancel")))]),a("q-btn",{attrs:{color:"primary"},on:{click:function(t){return e.newDataSubmit()}}},[e._v(e._s(e.$t("submit")))])],1)],1)],1),a("q-dialog",{model:{value:e.deleteForm,callback:function(t){e.deleteForm=t},expression:"deleteForm"}},[a("q-card",{staticClass:"shadow-24"},[a("q-bar",{staticClass:"bg-light-blue-10 text-white rounded-borders",staticStyle:{height:"50px"}},[a("div",[e._v(e._s(e.$t("delete")))]),a("q-space"),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{dense:"",flat:"",icon:"close"}},[a("q-tooltip",[e._v(e._s(e.$t("index.close")))])],1)],1),a("q-card-section",{staticClass:"scroll",staticStyle:{"max-height":"325px",width:"400px"}},[e._v("\n       "+e._s(e.$t("deletetip"))+"\n     ")]),a("div",{staticStyle:{float:"right",padding:"15px 15px 15px 0"}},[a("q-btn",{staticStyle:{"margin-right":"25px"},attrs:{color:"white","text-color":"black"},on:{click:function(t){return e.deleteDataCancel()}}},[e._v(e._s(e.$t("cancel")))]),a("q-btn",{attrs:{color:"primary"},on:{click:function(t){return e.deleteDataSubmit()}}},[e._v(e._s(e.$t("submit")))])],1)],1)],1)],2)},o=[],i=(a("5319"),a("3004")),s=a("bd4c"),r=a("a357"),c=a("18d6"),l={name:"Pagecompany",data(){return{openid:"",login_name:"",authin:"0",pathname:"company/",pathname_previous:"",pathname_next:"",separator:"cell",loading:!1,height:"",table_list:[],columns:[{name:"company_name",required:!0,label:this.$t("baseinfo.view_company.company_name"),align:"left",field:"company_name"},{name:"company_city",label:this.$t("baseinfo.view_company.company_city"),field:"company_city",align:"center"},{name:"company_address",label:this.$t("baseinfo.view_company.company_address"),field:"company_address",align:"center"},{name:"company_contact",label:this.$t("baseinfo.view_company.company_contact"),field:"company_contact",align:"center"},{name:"company_manager",label:this.$t("baseinfo.view_company.company_manager"),field:"company_manager",align:"center"},{name:"creater",label:this.$t("creater"),field:"creater",align:"center"},{name:"create_time",label:this.$t("createtime"),field:"create_time",align:"center"},{name:"update_time",label:this.$t("updatetime"),field:"update_time",align:"center"},{name:"action",label:this.$t("action"),align:"right"}],filter:"",pagination:{page:1,rowsPerPage:"30"},newForm:!1,newFormData:{company_name:"",company_city:"",company_address:"",company_contact:"",company_manager:"",creater:""},editid:0,editFormData:{},editMode:!1,deleteForm:!1,deleteid:0,sender:"",receiver:"",chat:!1,chat_list:"",chat_text:"",chat_next:null}},methods:{getList(){var e=this;c["a"].has("auth")&&Object(i["d"])(e.pathname,{}).then((t=>{if(e.table_list=t.results,t.previous){var a=t.previous.split(":")[0],n=t.previous.replace(a,window.location.href.split(":")[0]);e.pathname_previous=n}else e.pathname_previous=t.previous;if(t.next){var o=t.next.split(":")[0],i=t.next.replace(o,window.location.href.split(":")[0]);e.pathname_next=i}else e.pathname_next=t.next})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))},getListPrevious(){var e=this;c["a"].has("auth")&&Object(i["d"])(e.pathname_previous,{}).then((t=>{if(e.table_list=t.results,t.previous){var a=t.previous.split(":")[0],n=t.previous.replace(a,window.location.href.split(":")[0]);e.pathname_previous=n}else e.pathname_previous=t.previous;if(t.next){var o=t.next.split(":")[0],i=t.next.replace(o,window.location.href.split(":")[0]);e.pathname_next=i}else e.pathname_next=t.next})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))},getListNext(){var e=this;c["a"].has("auth")&&Object(i["d"])(e.pathname_next,{}).then((t=>{if(e.table_list=t.results,t.previous){var a=t.previous.split(":")[0],n=t.previous.replace(a,window.location.href.split(":")[0]);e.pathname_previous=n}else e.pathname_previous=t.previous;if(t.next){var o=t.next.split(":")[0],i=t.next.replace(o,window.location.href.split(":")[0]);e.pathname_next=i}else e.pathname_next=t.next})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))},reFresh(){var e=this;e.getList()},newDataSubmit(){var e=this;e.newFormData.creater=e.login_name,Object(i["g"])(e.pathname,e.newFormData).then((t=>{400===t.status_code?e.$q.notify({message:"Please Enter the words",icon:"close",color:"negative"}):500===t.status_code?e.$q.notify({message:t.detail,icon:"close",color:"negative"}):(e.getList(),e.newDataCancel(),e.$q.notify({message:"Success Create",icon:"check",color:"green"}))})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))},newDataCancel(){var e=this;e.newForm=!1,e.newFormData={company_name:"",company_city:"",company_address:"",company_contact:"",company_manager:"",creater:""}},editData(e){var t=this;t.editMode=!0,t.editid=e.id,t.editFormData={company_name:e.company_name,company_city:e.company_city,company_address:e.company_address,company_contact:e.company_contact,company_manager:e.company_manager,creater:t.login_name}},editDataSubmit(){var e=this;Object(i["h"])(e.pathname+e.editid+"/",e.editFormData).then((t=>{400===t.status_code?e.$q.notify({message:"Please Enter the words",icon:"close",color:"negative"}):500===t.status_code?e.$q.notify({message:t.detail,icon:"close",color:"negative"}):(e.editDataCancel(),e.getList(),e.$q.notify({message:"Success Edit Data",icon:"check",color:"green"}))})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))},editDataCancel(){var e=this;e.editMode=!1,e.editid=0,e.editFormData={company_name:"",company_city:"",company_address:"",company_contact:"",company_manager:"",creater:""}},deleteData(e){var t=this;t.deleteForm=!0,t.deleteid=e},deleteDataSubmit(){var e=this;Object(i["c"])(e.pathname+e.deleteid+"/").then((t=>{400===t.status_code?e.$q.notify({message:"Please Enter the words",icon:"close",color:"negative"}):500===t.status_code?e.$q.notify({message:t.detail,icon:"close",color:"negative"}):(e.deleteDataCancel(),e.getList(),e.$q.notify({message:"Success Edit Data",icon:"check",color:"green"}))})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))},deleteDataCancel(){var e=this;e.deleteForm=!1,e.deleteid=0},downloadData(){var e=this;Object(i["e"])(e.pathname+"file/?lang="+c["a"].getItem("lang")).then((t=>{var a=Date.now(),n=s["b"].formatDate(a,"YYYYMMDDHHmmssSSS");const o=Object(r["a"])(e.pathname+n+".csv","\ufeff"+t.data,"text/csv");!0!==o&&e.$q.notify({message:"Browser denied file download...",color:"negative",icon:"warning"})}))}},created(){var e=this;c["a"].has("openid")?e.openid=c["a"].getItem("openid"):(e.openid="",c["a"].set("openid","")),c["a"].has("login_name")?e.login_name=c["a"].getItem("login_name"):(e.login_name="",c["a"].set("login_name","")),c["a"].has("auth")?(e.authin="1",e.getList()):e.authin="0"},mounted(){var e=this;this.$q.platform.is.electron?e.height=String(e.$q.screen.height-290)+"px":e.height=e.$q.screen.height-290+"px"},updated(){},destroyed(){}},p=l,d=a("2877"),m=a("4f83"),u=a("eaac"),y=a("e7a9"),_=a("9c40"),h=a("05c0"),f=a("bd08"),g=a("db86"),v=a("27f9"),b=a("24e8"),w=a("f09f"),q=a("d847"),x=a("2c91"),k=a("a370"),D=a("7f67"),$=a("eebe"),C=a.n($),F=Object(d["a"])(p,n,o,!1,null,null,null);"function"===typeof m["default"]&&Object(m["default"])(F);t["default"]=F.exports;C()(F,"components",{QTable:u["a"],QBtnGroup:y["a"],QBtn:_["a"],QTooltip:h["a"],QTr:f["a"],QTd:g["a"],QInput:v["a"],QDialog:b["a"],QCard:w["a"],QBar:q["a"],QSpace:x["a"],QCardSection:k["a"]}),C()(F,"directives",{ClosePopup:D["a"]})},"4f83":function(e,t,a){"use strict";var n=a("c4c5"),o=a.n(n);t["default"]=o.a},c4c5:function(e,t){}}]);