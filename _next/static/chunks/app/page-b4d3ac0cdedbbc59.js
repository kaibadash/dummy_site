(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{2523:(e,t,s)=>{Promise.resolve().then(s.bind(s,3801))},3801:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>h});var a=s(5155),i=s(2115);let l=e=>{let{onLoginSuccess:t}=e,[s,l]=(0,i.useState)(""),[n,r]=(0,i.useState)(""),[u,d]=(0,i.useState)("");return(0,i.useEffect)(()=>{},[]),(0,a.jsxs)("div",{children:[(0,a.jsx)("h2",{children:"ログイン"}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{children:"ID: "}),(0,a.jsx)("input",{id:"id-input",type:"text",className:"input-default",value:s,onChange:e=>l(e.target.value)})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{children:"パスワード: "}),(0,a.jsx)("input",{id:"password-input",type:"password",className:"input-default",value:n,onChange:e=>r(e.target.value)})]}),(0,a.jsx)("button",{onClick:()=>{s.startsWith("test")&&n.startsWith("test")?(d("ログイン成功"),t()):d("IDまたはパスワードが間違っています")},className:"button-default",children:"ログイン"}),u&&(0,a.jsx)("p",{children:u})]})},n=()=>{let[e,t]=(0,i.useState)(""),[s,l]=(0,i.useState)("");return(0,a.jsxs)("form",{onSubmit:t=>{t.preventDefault(),console.log("Submitted text:",e),l(e)},children:[(0,a.jsx)("input",{id:"text-input",type:"text",className:"input-default",value:e,onChange:e=>{t(e.target.value)},placeholder:"テキストを入力してください"}),(0,a.jsx)("button",{type:"submit",className:"button-default",children:"送信"}),(0,a.jsx)("div",{id:"submitted-text",children:s})]})};var r=s(5565);let u=()=>{let[e,t]=(0,i.useState)(null);return(0,a.jsxs)("div",{children:[(0,a.jsx)("input",{id:"image-input",type:"file",accept:"image/*",onChange:e=>{var s;let a=null===(s=e.target.files)||void 0===s?void 0:s[0];if(a){let e=new FileReader;e.onloadend=()=>{t(e.result)},e.readAsDataURL(a)}},className:"button-default"}),e&&(0,a.jsx)(r.default,{id:"image-preview",src:e,alt:"Preview",width:200,height:200,style:{maxWidth:"200px"}})]})},d=()=>{let[e,t]=(0,i.useState)(new Date);return(0,i.useEffect)(()=>{let e=setInterval(()=>{t(new Date)},1e3);return()=>clearInterval(e)},[]),(0,a.jsx)("div",{id:"current-time",children:(0,a.jsxs)("div",{children:[e.toLocaleDateString()," ",e.toLocaleTimeString()]})})},c={src:"/dummy_site/_next/static/media/satoutyouzu_bg_black.ef2ce22f.png"};function h(){let[e,t]=(0,i.useState)(!1),[s,r]=(0,i.useState)(!1),[h,x]=(0,i.useState)(!1);return(0,a.jsxs)("div",{className:"bg-green-100 text-green-800 p-6",children:[(0,a.jsxs)("main",{className:"space-y-4",children:[(0,a.jsx)("img",{src:c.src,alt:"Logo",width:100,height:100,className:"mx-auto"}),(0,a.jsx)("h1",{className:"text-green-900 text-center",children:"Dummy Site"}),(0,a.jsx)("p",{children:"You can log in using an ID and password that start with test."}),!h&&(0,a.jsx)(l,{onLoginSuccess:()=>{t(!0),r(!0),x(!0)}}),h&&(0,a.jsx)(d,{}),e&&(0,a.jsx)(n,{}),s&&(0,a.jsx)(u,{})]}),(0,a.jsx)("footer",{className:"text-center",children:(0,a.jsx)("a",{href:"https://github.com/kaibadash/dummy_site",children:"GitHub"})})]})}}},e=>{var t=t=>e(e.s=t);e.O(0,[565,441,517,358],()=>t(2523)),_N_E=e.O()}]);