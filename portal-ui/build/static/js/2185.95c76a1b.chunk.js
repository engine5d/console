"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[2185],{62185:function(e,t,n){n.r(t);var a=n(29439),r=n(1413),o=n(72791),s=n(56028),l=n(61889),i=n(36151),c=n(21435),d=n(11135),u=n(25787),h=n(23814),f=n(60364),p=n(62666),m=n(45248),x=n(42649),v=n(92388),j=n(80184),Z={setModalErrorSnackMessage:x.zb},b=(0,f.$j)((function(e){var t=e.objectBrowser;return{detailsOpen:t.objectDetailsOpen,selectedInternalPaths:t.selectedInternalPaths}}),Z);t.default=b((0,u.Z)((function(e){return(0,d.Z)((0,r.Z)((0,r.Z)({},h.ID),h.DF))}))((function(e){var t=e.modalOpen,n=e.folderName,r=e.bucketName,d=e.onClose,u=e.setModalErrorSnackMessage,h=e.classes,f=e.existingFiles,x=e.detailsOpen,Z=e.selectedInternalPaths,b=(0,o.useState)(""),w=(0,a.Z)(b,2),P=w[0],g=w[1],C=(0,o.useState)(!1),k=(0,a.Z)(C,2),F=k[0],y=k[1],E="".concat(r,"/").concat((0,m.le)(n));if(Z&&x){var I=(0,m.le)(Z).split("/");if(I){I.pop();var N=I.join("/"),O="".concat(N).concat(N.endsWith("/")?"":"/");E="".concat(r,"/").concat(O)}}var S=function(){var e="";if(Z&&x){var t=(0,m.le)(Z).split("/");if(t){t.pop();var a=t.join("/");e="".concat(a).concat(a.endsWith("/")?"":"/")}}else if(""!==n){var o=(0,m.le)(n);e=o.endsWith("/")?o:"".concat(o,"/")}if(-1===f.findIndex((function(t){return t.name===e+P}))){var s="/buckets/".concat(r,"/browse/").concat((0,m.ug)("".concat(e).concat(P,"/")));p.Z.push(s),d()}else u({errorMessage:"Folder cannot have the same name as an existing file",detailedError:""})};(0,o.useEffect)((function(){var e=!0;0===P.trim().length&&(e=!1),y(e)}),[P]);return(0,j.jsx)(o.Fragment,{children:(0,j.jsx)(s.Z,{modalOpen:t,title:"Choose or create a new path",onClose:d,titleIcon:(0,j.jsx)(v.Z9,{}),children:(0,j.jsxs)(l.ZP,{container:!0,children:[(0,j.jsxs)(l.ZP,{item:!0,xs:12,className:h.formFieldRow,children:[(0,j.jsx)("strong",{children:"Current Path:"})," ",(0,j.jsx)("br",{}),(0,j.jsx)("div",{style:{textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden",fontSize:14,textAlign:"left"},dir:"rtl",children:E})]}),(0,j.jsx)(l.ZP,{item:!0,xs:12,className:h.formFieldRow,children:(0,j.jsx)(c.Z,{value:P,label:"New Folder Path",id:"folderPath",name:"folderPath",placeholder:"Enter the new Folder Path",onChange:function(e){g(e.target.value)},onKeyPress:function(e){"Enter"===e.code&&""!==P&&S()},required:!0})}),(0,j.jsxs)(l.ZP,{item:!0,xs:12,className:h.modalButtonBar,children:[(0,j.jsx)(i.Z,{type:"button",color:"primary",variant:"outlined",onClick:function(){g("")},children:"Clear"}),(0,j.jsx)(i.Z,{type:"submit",variant:"contained",color:"primary",disabled:!F,onClick:S,children:"Create"})]})]})})})})))}}]);
//# sourceMappingURL=2185.95c76a1b.chunk.js.map