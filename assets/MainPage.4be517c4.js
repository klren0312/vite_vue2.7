import{n as a,i as n,d as c,r as o,p as r,a as l}from"./index.f243451b.js";const p={__name:"LastComp",setup(_){const e=n("count");return{__sfc:!0,theCount:e,inject:n}}};var i=function(){var e=this,t=e._self._c,s=e._self._setupProxy;return t("div",[e._v("get count: "+e._s(s.theCount))])},v=[],f=a(p,i,v,!1,null,null,null,null),d=f.exports;const m={__name:"DeepComp",setup(_){const e=n("testData");return{__sfc:!0,testData:e,LastComp:d,inject:n}}};var $=function(){var e=this,t=e._self._c,s=e._self._setupProxy;return t("div",[t("div",[e._v(e._s(s.testData.name))]),t("div",[e._v(e._s(s.testData.test))]),t(s.LastComp)],1)},g=[],C=a(m,$,g,!1,null,null,null,null),x=C.exports;const u=c({id:"app",state:()=>({isOk:!0}),getters:{getIsOk(){return this.isOk}},actions:{setIsOk(_){this.isOk=_}}});const k={__name:"HelloWorld",props:{msg:String},setup(_){const e=u(),t=o(0);return r("count",t),{__sfc:!0,appStore:e,count:t,addCount:()=>{t.value++,t.value%2===0?e.setIsOk(!1):e.setIsOk(!0)},ref:o,provide:r,DeepComp:x,useAppStore:u}}};var h=function(){var e=this,t=e._self._c,s=e._self._setupProxy;return t("div",[t("h1",[e._v(e._s(e.msg))]),t(s.DeepComp),t("button",{attrs:{type:"button"},on:{click:s.addCount}},[e._v("count is: "+e._s(s.count))]),t("div",[e._v("isOk: "+e._s(s.appStore.isOk))])],1)},y=[],D=a(k,h,y,!1,null,"98494147",null,null),O=D.exports;const P={__name:"MainPage",setup(_){const e=l({test:12345,name:"test"});return r("testData",e),{__sfc:!0,testData:e,HelloWorld:O,provide:r,reactive:l}}};var H=function(){var e=this,t=e._self._c,s=e._self._setupProxy;return t("div",[t(s.HelloWorld,{attrs:{msg:"Hello Vue27 + Vite"}})],1)},S=[],F=a(P,H,S,!1,null,null,null,null),R=F.exports;export{R as default};