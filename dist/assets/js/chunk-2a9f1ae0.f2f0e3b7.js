(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2a9f1ae0"],{"04b6":function(e,t,r){"use strict";r("7a98")},"1dde":function(e,t,r){var o=r("d039"),s=r("b622"),a=r("2d00"),l=s("species");e.exports=function(e){return a>=51||!o((function(){var t=[],r=t.constructor={};return r[l]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},3119:function(e,t,r){"use strict";r.r(t);var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[r("el-breadcrumb-item",{nativeOn:{click:function(t){return e.turnTo("outline")}}},[e._v("首页")]),r("el-breadcrumb-item",[e._v("我要发布")]),r("el-breadcrumb-item",[e._v("发布场次")])],1),r("el-card",{staticClass:"addCard"},[r("div",{staticClass:"note"},[e._v("请填写您将要发布的场次的相关信息噢！")]),r("el-form",{ref:"slotForm",staticClass:"big-form",attrs:{model:e.slotForm,rules:e.rules,"label-width":"100px","label-position":"left"}},[r("el-form-item",{attrs:{label:"演出 ID",prop:"showId",required:""}},[r("el-input",{staticStyle:{width:"200px"},model:{value:e.slotForm.showId,callback:function(t){e.$set(e.slotForm,"showId",t)},expression:"slotForm.showId"}})],1),r("el-form-item",{attrs:{label:"场次日期",required:""}},[r("el-col",{attrs:{span:6}},[r("el-form-item",{attrs:{prop:"day"}},[r("el-date-picker",{staticStyle:{width:"200px"},attrs:{type:"date",placeholder:"日期",format:"yyyy 年 MM 月 dd 日","value-format":"yyyy/MM/dd"},model:{value:e.slotForm.day,callback:function(t){e.$set(e.slotForm,"day",t)},expression:"slotForm.day"}})],1)],1)],1),r("el-form-item",{attrs:{inline:"true",label:"起止时间",required:""}},[r("el-time-select",{staticStyle:{width:"200px"},attrs:{placeholder:"起始时间","picker-options":{start:"00:00",step:"00:10",end:"24:00"}},model:{value:e.slotForm.timeStart,callback:function(t){e.$set(e.slotForm,"timeStart",t)},expression:"slotForm.timeStart"}}),r("el-time-select",{staticStyle:{width:"200px"},attrs:{placeholder:"结束时间","picker-options":{start:"00:00",step:"00:10",end:"24:00",minTime:e.slotForm.timeStart}},model:{value:e.slotForm.timeEnd,callback:function(t){e.$set(e.slotForm,"timeEnd",t)},expression:"slotForm.timeEnd"}})],1),r("el-form-item",{attrs:{label:"演出地址",prop:"place",required:""}},[r("el-input",{staticStyle:{width:"500px"},model:{value:e.slotForm.place,callback:function(t){e.$set(e.slotForm,"place",t)},expression:"slotForm.place"}})],1),r("el-card",{staticClass:"AreaList"},[r("el-form",{staticClass:"demo-dynamic",attrs:{"v-model":e.slotForm.areas,"label-width":"40px"}},e._l(e.slotForm.areas,(function(t,o){return r("div",{key:o,staticStyle:{width:"100%",display:"flex"}},[r("el-row",{attrs:{gutter:8}},[r("el-col",{attrs:{span:6}},[r("el-form-item",{attrs:{"label-width":"0",prop:e.slotForm.areas.name,rules:{required:!0,message:"名称不能为空",trigger:"blur"}}},[r("el-input",{attrs:{placeholder:"分区名称"},model:{value:e.slotForm.areas[o].name,callback:function(t){e.$set(e.slotForm.areas[o],"name",t)},expression:"slotForm.areas[index].name"}})],1)],1),r("el-col",{attrs:{span:6}},[r("el-form-item",{attrs:{"label-width":"0",prop:e.slotForm.areas.availble,rules:{required:!0,message:"价格不能为空",trigger:"blur"}}},[r("el-input",{attrs:{placeholder:"座位数"},model:{value:e.slotForm.areas[o].available,callback:function(t){e.$set(e.slotForm.areas[o],"available",t)},expression:"slotForm.areas[index].available"}})],1)],1),r("el-col",{attrs:{span:6}},[r("el-form-item",{attrs:{"label-width":"0",prop:e.slotForm.areas.price,rules:{required:!0,message:"价格不能为空",trigger:"blur"}}},[r("el-input",{attrs:{placeholder:"票价"},model:{value:e.slotForm.areas[o].price,callback:function(t){e.$set(e.slotForm.areas[o],"price",t)},expression:"slotForm.areas[index].price"}})],1)],1),r("el-col",{attrs:{span:4}},[r("el-button",{on:{click:function(r){return e.removeArea(t)}}},[e._v("删除")])],1)],1)],1)})),0)],1),r("el-form-item",{staticStyle:{"margin-top":"20px"},attrs:{required:"",label:"添加分区"}},[r("el-button",{on:{click:e.addAreas}},[e._v(" 点击增分区 ")])],1),r("el-form-item",{attrs:{label:"上传座位图",required:""}},[r("el-upload",{attrs:{action:"#","list-type":"picture-card","auto-upload":!1},scopedSlots:e._u([{key:"file",fn:function(t){var o=t.file;return r("div",{},[r("img",{staticClass:"el-upload-list__item-thumbnail",attrs:{src:o.url,alt:""}}),r("span",{staticClass:"el-upload-list__item-actions"},[r("span",{staticClass:"el-upload-list__item-preview",on:{click:function(t){return e.handlePictureCardPreview(o)}}},[r("i",{staticClass:"el-icon-zoom-in"})])])])}}])},[r("i",{staticClass:"el-icon-plus",attrs:{slot:"default"},slot:"default"})])],1),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("slotForm")}}},[e._v("立即发布")]),r("el-button",{on:{click:function(t){return e.resetForm("slotForm")}}},[e._v("重置")])],1)],1)],1),r("el-dialog",{attrs:{title:"确认信息",visible:e.confirmVisible,width:"500px"},on:{"update:visible":function(t){e.confirmVisible=t}}},[r("div",[e._v(" 您将要发布一个场次，信息如下： "),r("el-card",{staticClass:"confirm-card"},[r("el-row",[e._v("演出ID:"+e._s(e.slotForm.showId))]),r("el-row",[e._v("商家ID:"+e._s(e.slotForm.sellerId))]),r("el-row",[e._v("场次地点:"+e._s(e.slotForm.place))]),r("el-row",[e._v("场次日期:"+e._s(e.slotForm.day))]),r("el-row",[e._v("场次开始时间:"+e._s(e.slotForm.timeStart))]),r("el-row",[e._v("场次结束时间:"+e._s(e.slotForm.timeEnd))])],1)],1),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.confirmVisible=!1}}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.Release}},[e._v("确 定")])],1)]),r("el-dialog",{attrs:{title:"系统提示",visible:e.successVisible,width:"300px"},on:{"update:visible":function(t){e.successVisible=t}}},[r("span",[e._v("发布场次成功")]),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{type:"primary"},on:{click:function(t){e.successVisible=!1}}},[e._v("继续发布")]),r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.turnTo("outline")}}},[e._v(" 返回首页 ")])],1)])],1)},s=[],a=r("1da1"),l=(r("96cf"),r("a434"),r("d81d"),r("d3b7"),r("3ca3"),r("ddb0"),r("2b3d"),r("bc3a")),i=r.n(l),n={name:"ReleaseSlot",data:function(){return{slotForm:{showId:"",sellerId:this.$route.params.sellerId,place:"",day:"",timeStart:"",timeEnd:"",map:"https://i.loli.net/2021/07/16/Yv7jhVQ8sFTerq9.jpg",areas:[{price:"",name:"",available:""}]},confirmVisible:!1,successVisible:!1,rules:{showId:[{required:!0,trigger:"blur"}],day:[{required:!0,trigger:"blur"}],timeStart:[{required:!0,trigger:"blur"}],timeEnd:[{required:!0,trigger:"blur"}]},imageUrl:""}},methods:{removeArea:function(e){var t=this.slotForm.areas.indexOf(e);-1!==t&&this.slotForm.areas.splice(t,1)},submitForm:function(e){var t=this;this.$refs[e].validate((function(e){if(!e)return console.log("error submit!!"),!1;t.confirmVisible=!0}))},resetForm:function(e){this.$refs[e].resetFields(),this.areas={}},Release:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.confirmVisible=!1,r="/AddSlot",t.next=4,i.a.post(r,{showId:e.slotForm.showId,sellerId:e.slotForm.sellerId,place:e.slotForm.place,day:e.slotForm.day,timeStart:e.slotForm.timeStart,timeEnd:e.slotForm.timeEnd,map:e.slotForm.map,areas:e.slotForm.areas}).then((function(){e.successVisible=!0,e.resetForm("slotForm")})).catch((function(t){e.$message.error("未知错误！"),console.log(t)}));case 4:case"end":return t.stop()}}),t)})))()},handleAvatarSuccess:function(e,t){this.imageUrl=URL.createObjectURL(t.raw)},beforeAvatarUpload:function(e){var t="image/jpeg"===e.type;return t||this.$message.error("上传座位图片只能是 JPG 格式!"),t},addAreas:function(){this.slotForm.areas.push({})},delAreas:function(e){var t=this.slotForm.areas.indexOf(e);-1!==t&&this.slotForm.areas.splice(t,1)},turnTo:function(e){this.$router.push("/"+e+"/"+sessionStorage.getItem("selId"))}}},c=n,u=(r("04b6"),r("2877")),m=Object(u["a"])(c,o,s,!1,null,"4d12d3ae",null);t["default"]=m.exports},"65f0":function(e,t,r){var o=r("861d"),s=r("e8b5"),a=r("b622"),l=a("species");e.exports=function(e,t){var r;return s(e)&&(r=e.constructor,"function"!=typeof r||r!==Array&&!s(r.prototype)?o(r)&&(r=r[l],null===r&&(r=void 0)):r=void 0),new(void 0===r?Array:r)(0===t?0:t)}},"7a98":function(e,t,r){},a434:function(e,t,r){"use strict";var o=r("23e7"),s=r("23cb"),a=r("a691"),l=r("50c4"),i=r("7b0b"),n=r("65f0"),c=r("8418"),u=r("1dde"),m=u("splice"),d=Math.max,p=Math.min,f=9007199254740991,b="Maximum allowed length exceeded";o({target:"Array",proto:!0,forced:!m},{splice:function(e,t){var r,o,u,m,v,h,F=i(this),y=l(F.length),g=s(e,y),w=arguments.length;if(0===w?r=o=0:1===w?(r=0,o=y-g):(r=w-2,o=p(d(a(t),0),y-g)),y+r-o>f)throw TypeError(b);for(u=n(F,o),m=0;m<o;m++)v=g+m,v in F&&c(u,m,F[v]);if(u.length=o,r<o){for(m=g;m<y-o;m++)v=m+o,h=m+r,v in F?F[h]=F[v]:delete F[h];for(m=y;m>y-o+r;m--)delete F[m-1]}else if(r>o)for(m=y-o;m>g;m--)v=m+o-1,h=m+r-1,v in F?F[h]=F[v]:delete F[h];for(m=0;m<r;m++)F[m+g]=arguments[m+2];return F.length=y-o+r,u}})},b727:function(e,t,r){var o=r("0366"),s=r("44ad"),a=r("7b0b"),l=r("50c4"),i=r("65f0"),n=[].push,c=function(e){var t=1==e,r=2==e,c=3==e,u=4==e,m=6==e,d=7==e,p=5==e||m;return function(f,b,v,h){for(var F,y,g=a(f),w=s(g),_=o(b,v,3),x=l(w.length),k=0,S=h||i,I=t?S(f,x):r||d?S(f,0):void 0;x>k;k++)if((p||k in w)&&(F=w[k],y=_(F,k,g),e))if(t)I[k]=y;else if(y)switch(e){case 3:return!0;case 5:return F;case 6:return k;case 2:n.call(I,F)}else switch(e){case 4:return!1;case 7:n.call(I,F)}return m?-1:c||u?u:I}};e.exports={forEach:c(0),map:c(1),filter:c(2),some:c(3),every:c(4),find:c(5),findIndex:c(6),filterOut:c(7)}},d81d:function(e,t,r){"use strict";var o=r("23e7"),s=r("b727").map,a=r("1dde"),l=a("map");o({target:"Array",proto:!0,forced:!l},{map:function(e){return s(this,e,arguments.length>1?arguments[1]:void 0)}})},e8b5:function(e,t,r){var o=r("c6b6");e.exports=Array.isArray||function(e){return"Array"==o(e)}}}]);
//# sourceMappingURL=chunk-2a9f1ae0.f2f0e3b7.js.map