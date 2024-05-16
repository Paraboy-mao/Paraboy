import{h as e,a as l}from"./ElementPlus-DLRbsWH9.js";import{h as a,j as o,k as s,_ as t}from"./index-Deer7808.js";import{f as u}from"./sysRole-CdQkfeqh.js";import{T as d}from"./TableComponent-iOq0Uxb_.js";import{l as r,a as n,Z as i,ah as m,ap as c,m as p,p as f,U as y,O as v,u as U,S as _,P as V,M as b,q as D,T as g,F as h,a7 as N,R as w}from"./vue-DiyBcK8j.js";import"./axios-dB_UgXDe.js";const C={class:"dialog-footer"},x=t(r({__name:"user",setup(t){const r=n(!1);let x=n({pageNo:1,pageSize:10,account:"",userName:""}),k=i({sysUserDo:{account:"",isMultiLogin:1,password:"",state:1,userName:""},sysUserRoleDos:[]});const M=n([]),R=n(0),j=n(!1),L=n([]),P=n([]),E=[{label:"用户名称",field:"userName",slotName:"text"},{label:"账号",field:"account",slotName:"text"},{label:"角色权限",field:"roles",slotName:"roles"},{label:"用户状态",field:"state",slotName:"state"},{label:"是否多点登录",field:"isMultiLogin",slotName:"isMultiLogin"},{label:"操作",field:"operation",slotName:"operation"}];u({}).then((e=>{L.value=e.data}));const T=()=>{let e={sysUserDo:k.sysUserDo,sysUserRoleDos:[]};M.value.forEach((l=>{e.sysUserRoleDos.push({account:k.sysUserDo.account,roleCode:l})})),a(e).then((e=>{r.value=!1,A(),l({type:e.data?"success":"error",message:e.data?"创建成功":"创建失败"})}))};function z(e){M.value=[],e.id?(k.sysUserDo={...e},e.roles.forEach((l=>{M.value.push(l.roleCode),k.sysUserRoleDos.push({account:e.account,roleCode:l.roleCode})}))):k=i({sysUserDo:{account:"",isMultiLogin:1,password:"",state:1,userName:""},sysUserRoleDos:[]}),r.value=!0}function A(){j.value=!0,o(x.value).then((e=>{j.value=!1,P.value=e.data.records,R.value=e.data.total}))}function S(e){x.value={...x.value,...e},A()}return A(),(a,o)=>{const t=m("el-input"),u=m("el-form-item"),n=m("el-button"),i=m("el-form"),G=m("el-card"),q=m("el-tag"),F=m("el-popconfirm"),I=m("el-option"),O=m("el-select"),Z=m("el-radio"),B=m("el-radio-group"),H=m("el-dialog"),J=c("loading");return p(),f("div",null,[y(G,{shadow:"never",style:{"margin-bottom":"10px"}},{default:v((()=>[y(i,{inline:!0,model:U(x)},{default:v((()=>[y(u,{label:"用户名称"},{default:v((()=>[y(t,{modelValue:U(x).userName,"onUpdate:modelValue":o[0]||(o[0]=e=>U(x).userName=e),placeholder:"用户名称",clearable:""},null,8,["modelValue"])])),_:1}),y(u,{label:"账号"},{default:v((()=>[y(t,{modelValue:U(x).account,"onUpdate:modelValue":o[1]||(o[1]=e=>U(x).account=e),placeholder:"账号",clearable:""},null,8,["modelValue"])])),_:1}),y(u,null,{default:v((()=>[y(n,{type:"primary",onClick:A,icon:U(e),loading:j.value},{default:v((()=>[_("搜索")])),_:1},8,["icon","loading"])])),_:1})])),_:1},8,["model"])])),_:1}),V((p(),b(d,{tableData:P.value,total:R.value,formParams:U(x),column:E,onGetAddorEdit:z,onGetRefresh:A,onSetPaging:S,tableTitle:"用户列表"},{text:v((({scope:e,item:l})=>[D("span",null,g(e.row[l.field]),1)])),roles:v((({scope:e,item:l})=>[(p(!0),f(h,null,N(e.row[l.field],(e=>(p(),b(q,{class:"roles-tag"},{default:v((()=>[_(g(e.roleName),1)])),_:2},1024)))),256))])),state:v((({scope:e,item:l})=>[D("span",null,g(1==e.row[l.field]?"启用":"禁用"),1)])),isMultiLogin:v((({scope:e,item:l})=>[D("span",null,g(1==e.row[l.field]?"是":"否"),1)])),operation:v((({scope:e,item:a})=>[y(n,{type:"primary",size:"small",onClick:l=>z(e.row)},{default:v((()=>[_("编辑")])),_:2},1032,["onClick"]),y(F,{title:"Are you sure to delete this?",onConfirm:a=>{return o=e.row.account,void s({account:o}).then((e=>{A(),l({type:e.data?"success":"error",message:e.data?"删除成功":"删除失败"})}));var o}},{reference:v((()=>[y(n,{type:"danger",size:"small"},{default:v((()=>[_("删除")])),_:1})])),_:2},1032,["onConfirm"])])),_:1},8,["tableData","total","formParams"])),[[J,j.value]]),y(H,{modelValue:r.value,"onUpdate:modelValue":o[9]||(o[9]=e=>r.value=e),title:"操作",width:"600"},{footer:v((()=>[D("div",C,[y(n,{onClick:o[8]||(o[8]=e=>r.value=!1)},{default:v((()=>[_("取消")])),_:1}),y(n,{type:"primary",onClick:T},{default:v((()=>[_("确定")])),_:1})])])),default:v((()=>[y(i,{model:U(k).sysUserDo,"label-width":"auto",style:{"max-width":"600px"}},{default:v((()=>[y(u,{label:"用户名称"},{default:v((()=>[y(t,{modelValue:U(k).sysUserDo.userName,"onUpdate:modelValue":o[2]||(o[2]=e=>U(k).sysUserDo.userName=e)},null,8,["modelValue"])])),_:1}),y(u,{label:"账号"},{default:v((()=>[y(t,{modelValue:U(k).sysUserDo.account,"onUpdate:modelValue":o[3]||(o[3]=e=>U(k).sysUserDo.account=e)},null,8,["modelValue"])])),_:1}),U(k).sysUserDo.id?w("",!0):(p(),b(u,{key:0,label:"密码"},{default:v((()=>[y(t,{modelValue:U(k).sysUserDo.password,"onUpdate:modelValue":o[4]||(o[4]=e=>U(k).sysUserDo.password=e)},null,8,["modelValue"])])),_:1})),y(u,{label:"角色权限"},{default:v((()=>[y(O,{modelValue:M.value,"onUpdate:modelValue":o[5]||(o[5]=e=>M.value=e),multiple:"",placeholder:"选着角色"},{default:v((()=>[(p(!0),f(h,null,N(L.value,(e=>(p(),b(I,{key:e.roleCode,label:e.roleName,value:e.roleCode},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),y(u,{label:"用户状态"},{default:v((()=>[y(B,{modelValue:U(k).sysUserDo.state,"onUpdate:modelValue":o[6]||(o[6]=e=>U(k).sysUserDo.state=e)},{default:v((()=>[y(Z,{value:1},{default:v((()=>[_("启用")])),_:1}),y(Z,{value:0},{default:v((()=>[_("停用")])),_:1})])),_:1},8,["modelValue"])])),_:1}),y(u,{label:"是否多点登录"},{default:v((()=>[y(B,{modelValue:U(k).sysUserDo.isMultiLogin,"onUpdate:modelValue":o[7]||(o[7]=e=>U(k).sysUserDo.isMultiLogin=e)},{default:v((()=>[y(Z,{value:1},{default:v((()=>[_("启用")])),_:1}),y(Z,{value:0},{default:v((()=>[_("停用")])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1},8,["model"])])),_:1},8,["modelValue"])])}}}),[["__scopeId","data-v-ab521855"]]);export{x as default};
