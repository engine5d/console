(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[9002],{23804:function(e,t,n){"use strict";n(72791);var i=n(11135),a=n(25787),s=n(61889),r=n(80184);t.Z=(0,a.Z)((function(e){return(0,i.Z)({root:{border:"1px solid #E2E2E2",borderRadius:2,backgroundColor:"#FBFAFA",paddingLeft:25,paddingTop:31,paddingBottom:21,paddingRight:30},leftItems:{fontSize:16,fontWeight:"bold",marginBottom:15,display:"flex",alignItems:"center","& .min-icon":{marginRight:15,height:28,width:38}},helpText:{fontSize:16,paddingLeft:5}})}))((function(e){var t=e.classes,n=e.iconComponent,i=e.title,a=e.help;return(0,r.jsx)("div",{className:t.root,children:(0,r.jsxs)(s.ZP,{container:!0,children:[(0,r.jsxs)(s.ZP,{item:!0,xs:12,className:t.leftItems,children:[n,i]}),(0,r.jsx)(s.ZP,{item:!0,xs:12,className:t.helpText,children:a})]})})}))},32512:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return T}});var i=n(70885),a=n(1413),s=n(72791),r=n(60364),l=n(11135),o=n(25787),c=n(61889),d=n(42649),u=n(23814),m=n(38442),h=n(56087),f=n(74833),p=n(81207),x=n(92983),Z=n(23804),g=n(60680),j=n(75578),v=n(40603),b=n(36151),k=n(56028),S=n(21435),N=n(17420),C=n(64163),R=n(37516),P=n(80184),y=(0,r.$j)(null,{setModalErrorSnackMessage:d.zb}),E=(0,o.Z)((function(e){return(0,l.Z)((0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)({buttonContainer:{textAlign:"right"},multiContainer:{display:"flex",alignItems:"center"},sizeFactorContainer:{"& label":{display:"none"},"& div:first-child":{marginBottom:0}}},u.bK),u.QV),u.DF),u.ID),{},{modalFormScrollable:(0,a.Z)((0,a.Z)({},u.ID.modalFormScrollable),{},{paddingRight:10})}))}))(y((function(e){var t=e.closeModalAndRefresh,n=e.open,a=e.classes,r=e.bucketName,l=e.ruleID,o=e.setModalErrorSnackMessage,d=(0,s.useState)(!0),u=(0,i.Z)(d,2),m=u[0],h=u[1],x=(0,s.useState)(!1),Z=(0,i.Z)(x,2),g=Z[0],j=Z[1],v=(0,s.useState)("1"),y=(0,i.Z)(v,2),E=y[0],I=y[1],F=(0,s.useState)(""),A=(0,i.Z)(F,2),T=A[0],w=A[1],D=(0,s.useState)(""),M=(0,i.Z)(D,2),B=M[0],O=M[1],_=(0,s.useState)(!1),z=(0,i.Z)(_,2),L=z[0],U=z[1],G=(0,s.useState)(!1),H=(0,i.Z)(G,2),K=H[0],V=H[1],W=(0,s.useState)(""),Y=(0,i.Z)(W,2),q=Y[0],$=Y[1],Q=(0,s.useState)(""),X=(0,i.Z)(Q,2),J=X[0],ee=X[1],te=(0,s.useState)(""),ne=(0,i.Z)(te,2),ie=ne[0],ae=ne[1],se=(0,s.useState)(!1),re=(0,i.Z)(se,2),le=re[0],oe=re[1],ce=(0,s.useState)(!1),de=(0,i.Z)(ce,2),ue=de[0],me=de[1],he=(0,s.useState)(!1),fe=(0,i.Z)(he,2),pe=fe[0],xe=fe[1];return(0,s.useEffect)((function(){m&&p.Z.invoke("GET","/api/v1/buckets/".concat(r,"/replication/").concat(l)).then((function(e){I(e.priority.toString());var t=e.prefix||"",n=e.tags||"";O(t),$(n),ee(n),w(e.destination.bucket),U(e.delete_marker_replication),ae(e.storageClass||""),oe(!!e.existingObjects),me(!!e.deletes_replication),xe("Enabled"===e.status),V(!!e.metadata_replication),h(!1)})).catch((function(e){o(e),h(!1)}))}),[m,o,r,l]),(0,s.useEffect)((function(){if(g){var e={arn:T,ruleState:pe,prefix:B,tags:J,replicateDeleteMarkers:L,replicateDeletes:ue,replicateExistingObjects:le,replicateMetadata:K,priority:parseInt(E),storageClass:ie};p.Z.invoke("PUT","/api/v1/buckets/".concat(r,"/replication/").concat(l),e).then((function(){j(!1),t(!0)})).catch((function(e){o(e),j(!1)}))}}),[g,r,l,T,B,J,L,E,ue,le,pe,K,ie,t,o]),(0,P.jsx)(k.Z,{modalOpen:n,onClose:function(){t(!1)},title:"Edit Bucket Replication",titleIcon:(0,P.jsx)(f.xR,{}),children:(0,P.jsx)("form",{noValidate:!0,autoComplete:"off",onSubmit:function(e){e.preventDefault(),j(!0)},children:(0,P.jsxs)(c.ZP,{container:!0,children:[(0,P.jsxs)(c.ZP,{item:!0,xs:12,className:a.modalFormScrollable,children:[(0,P.jsx)(c.ZP,{item:!0,xs:12,className:a.formFieldRow,children:(0,P.jsx)(R.Z,{checked:pe,id:"ruleState",name:"ruleState",label:"Rule State",onChange:function(e){xe(e.target.checked)},value:pe})}),(0,P.jsx)(c.ZP,{item:!0,xs:12,className:a.formFieldRow,children:(0,P.jsx)(C.Z,{label:"Destination",content:T})}),(0,P.jsx)(c.ZP,{item:!0,xs:12,className:a.formFieldRow,children:(0,P.jsx)(S.Z,{id:"priority",name:"priority",onChange:function(e){e.target.validity.valid&&I(e.target.value)},label:"Priority",value:E,pattern:"[0-9]*"})}),(0,P.jsx)(c.ZP,{item:!0,xs:12,className:"".concat(a.spacerTop," ").concat(a.formFieldRow),children:(0,P.jsx)(S.Z,{id:"storageClass",name:"storageClass",onChange:function(e){ae(e.target.value)},placeholder:"STANDARD_IA,REDUCED_REDUNDANCY etc",label:"Storage Class",value:ie})}),(0,P.jsx)(c.ZP,{item:!0,xs:12,children:(0,P.jsxs)("fieldset",{className:a.fieldGroup,children:[(0,P.jsx)("legend",{className:a.descriptionText,children:"Object Filters"}),(0,P.jsx)(c.ZP,{item:!0,xs:12,className:a.formFieldRow,children:(0,P.jsx)(S.Z,{id:"prefix",name:"prefix",onChange:function(e){O(e.target.value)},placeholder:"prefix",label:"Prefix",value:B})}),(0,P.jsx)(c.ZP,{item:!0,xs:12,className:a.formFieldRow,children:(0,P.jsx)(N.Z,{name:"tags",label:"Tags",elements:q,onChange:function(e){ee(e)},keyPlaceholder:"Tag Key",valuePlaceholder:"Tag Value",withBorder:!0})})]})}),(0,P.jsx)(c.ZP,{item:!0,xs:12,children:(0,P.jsxs)("fieldset",{className:a.fieldGroup,children:[(0,P.jsx)("legend",{className:a.descriptionText,children:"Replication Options"}),(0,P.jsx)(c.ZP,{item:!0,xs:12,className:a.formFieldRow,children:(0,P.jsx)(R.Z,{checked:le,id:"repExisting",name:"repExisting",label:"Existing Objects",onChange:function(e){oe(e.target.checked)},value:le,description:"Replicate existing objects"})}),(0,P.jsx)(R.Z,{checked:K,id:"metadatataSync",name:"metadatataSync",label:"Metadata Sync",onChange:function(e){V(e.target.checked)},value:K,description:"Metadata Sync"}),(0,P.jsx)(c.ZP,{item:!0,xs:12,className:a.formFieldRow,children:(0,P.jsx)(R.Z,{checked:L,id:"deleteMarker",name:"deleteMarker",label:"Delete Marker",onChange:function(e){U(e.target.checked)},value:L,description:"Replicate soft deletes"})}),(0,P.jsx)(c.ZP,{item:!0,xs:12,className:a.formFieldRow,children:(0,P.jsx)(R.Z,{checked:ue,id:"repDelete",name:"repDelete",label:"Deletes",onChange:function(e){me(e.target.checked)},value:ue,description:"Replicate versioned deletes"})})]})})]}),(0,P.jsxs)(c.ZP,{item:!0,xs:12,className:a.modalButtonBar,children:[(0,P.jsx)(b.Z,{type:"button",variant:"outlined",color:"primary",disabled:m||g,onClick:function(){t(!1)},children:"Cancel"}),(0,P.jsx)(b.Z,{type:"submit",variant:"contained",color:"primary",disabled:m||g,children:"Save"})]})]})})})}))),I=(0,j.Z)(s.lazy((function(){return n.e(889).then(n.bind(n,20889))}))),F=(0,j.Z)(s.lazy((function(){return Promise.all([n.e(2442),n.e(9088)]).then(n.bind(n,69088))}))),A=(0,r.$j)((function(e){return{session:e.console.session,loadingBucket:e.buckets.bucketDetails.loadingBucket,bucketInfo:e.buckets.bucketDetails.bucketInfo}}),{setErrorSnackMessage:d.Ih}),T=(0,o.Z)((function(e){return(0,l.Z)((0,a.Z)((0,a.Z)((0,a.Z)({},u.qg),u.OR),{},{twHeight:{minHeight:400}}))}))(A((function(e){var t=e.classes,n=e.match,a=e.setErrorSnackMessage,r=e.loadingBucket,l=(0,s.useState)(!0),o=(0,i.Z)(l,2),d=o[0],u=o[1],j=(0,s.useState)([]),b=(0,i.Z)(j,2),k=b[0],S=b[1],N=(0,s.useState)(!1),C=(0,i.Z)(N,2),R=C[0],y=C[1],A=(0,s.useState)(!1),T=(0,i.Z)(A,2),w=T[0],D=T[1],M=(0,s.useState)(!1),B=(0,i.Z)(M,2),O=B[0],_=B[1],z=(0,s.useState)(""),L=(0,i.Z)(z,2),U=L[0],G=L[1],H=(0,s.useState)(!1),K=(0,i.Z)(H,2),V=K[0],W=K[1],Y=n.params.bucketName,q=(0,m.F)(Y,[h.Ft.S3_GET_REPLICATION_CONFIGURATION]);(0,s.useEffect)((function(){r&&u(!0)}),[r,u]),(0,s.useEffect)((function(){d&&(q?p.Z.invoke("GET","/api/v1/buckets/".concat(Y,"/replication")).then((function(e){var t=e.rules?e.rules:[];t.sort((function(e,t){return e.priority-t.priority})),S(t),u(!1)})).catch((function(e){a(e),u(!1)})):u(!1))}),[d,a,Y,q]);var $=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];D(e)},Q=[{type:"delete",onClick:function(e){G(e.id),W(!1),y(!0)}},{type:"view",onClick:function(e){G(e.id),_(!0)},disableButtonFunction:!(0,m.F)(Y,[h.Ft.S3_PUT_REPLICATION_CONFIGURATION],!0)}];return(0,P.jsxs)(s.Fragment,{children:[w&&(0,P.jsx)(I,{closeModalAndRefresh:function(){$(!1),u(!0)},open:w,bucketName:Y,setReplicationRules:k}),R&&(0,P.jsx)(F,{deleteOpen:R,selectedBucket:Y,closeDeleteModalAndRefresh:function(e){y(!1),e&&u(!0)},ruleToDelete:U,remainingRules:k.length,deleteAllRules:V}),O&&(0,P.jsx)(E,{closeModalAndRefresh:function(e){_(!1),e&&u(!0)},open:O,bucketName:Y,ruleID:U}),(0,P.jsxs)(c.ZP,{container:!0,children:[(0,P.jsxs)(c.ZP,{item:!0,xs:12,className:t.actionsTray,children:[(0,P.jsx)(g.Z,{children:"Replication"}),(0,P.jsxs)("div",{children:[(0,P.jsx)(m.s,{scopes:[h.Ft.S3_PUT_REPLICATION_CONFIGURATION],resource:Y,matchAll:!0,errorProps:{disabled:!0},children:(0,P.jsx)(v.Z,{tooltip:"Delete All Replication Rules",onClick:function(){G("allRules"),W(!0),y(!0)},text:"Delete All Rules",icon:(0,P.jsx)(f.XH,{}),color:"secondary",variant:"outlined",disabled:0===k.length})}),(0,P.jsx)(m.s,{scopes:[h.Ft.S3_PUT_REPLICATION_CONFIGURATION],resource:Y,matchAll:!0,errorProps:{disabled:!0},children:(0,P.jsx)(v.Z,{tooltip:"Add Replication Rule",onClick:function(){$(!0)},text:"Add Replication Rule",icon:(0,P.jsx)(f.dt,{}),color:"primary",variant:"contained"})})]})]}),(0,P.jsx)(c.ZP,{item:!0,xs:12,children:(0,P.jsx)(m.s,{scopes:[h.Ft.S3_GET_REPLICATION_CONFIGURATION],resource:Y,errorProps:{disabled:!0},children:(0,P.jsx)(x.Z,{itemActions:Q,columns:[{label:"Priority",elementKey:"priority",width:55,contentTextAlign:"center"},{label:"Destination",elementKey:"destination",renderFunction:function(e){return(0,P.jsx)(s.Fragment,{children:e.bucket.replace("arn:aws:s3:::","")})}},{label:"Prefix",elementKey:"prefix",width:200},{label:"Tags",elementKey:"tags",renderFunction:function(e){return(0,P.jsx)(s.Fragment,{children:e&&""!==e.tags?"Yes":"No"})},width:60},{label:"Status",elementKey:"status",width:100}],isLoading:d,records:k,entityName:"Replication Rules",idField:"id",customPaperHeight:t.twHeight,textSelectable:!0})})}),(0,P.jsxs)(c.ZP,{item:!0,xs:12,children:[(0,P.jsx)("br",{}),(0,P.jsx)(Z.Z,{title:"Replication",iconComponent:(0,P.jsx)(f.wN,{}),help:(0,P.jsxs)(s.Fragment,{children:["MinIO supports server-side and client-side replication of objects between source and destination buckets.",(0,P.jsx)("br",{}),(0,P.jsx)("br",{}),"You can learn more at our"," ",(0,P.jsx)("a",{href:"https://docs.min.io/minio/baremetal/replication/replication-overview.html?ref=con",target:"_blank",rel:"noreferrer",children:"documentation"}),"."]})})]})]})]})})))},64163:function(e,t,n){"use strict";var i=n(1413),a=n(72791),s=n(61889),r=n(11135),l=n(25787),o=n(23814),c=n(80184);t.Z=(0,l.Z)((function(e){return(0,r.Z)((0,i.Z)({},o.xx))}))((function(e){var t=e.classes,n=e.label,i=void 0===n?"":n,r=e.content,l=e.multiLine,o=void 0!==l&&l;return(0,c.jsx)(a.Fragment,{children:(0,c.jsxs)(s.ZP,{className:t.prefinedContainer,children:[""!==i&&(0,c.jsx)(s.ZP,{item:!0,xs:12,className:t.predefinedTitle,children:i}),(0,c.jsx)(s.ZP,{item:!0,xs:12,className:t.predefinedList,children:(0,c.jsx)(s.ZP,{item:!0,xs:12,className:o?t.innerContentMultiline:t.innerContent,children:r})})]})})}))},17420:function(e,t,n){"use strict";var i=n(42982),a=n(70885),s=n(1413),r=n(72791),l=n(26181),o=n.n(l),c=n(48573),d=n.n(c),u=n(11135),m=n(25787),h=n(61889),f=n(77961),p=n(30829),x=n(20068),Z=n(23814),g=n(21435),j=n(47919),v=n(80184);t.Z=(0,m.Z)((function(e){return(0,u.Z)((0,s.Z)((0,s.Z)((0,s.Z)({},Z.YI),Z.Hr),{},{inputWithBorder:{border:"1px solid #EAEAEA",padding:15,height:150,overflowY:"auto",position:"relative",marginTop:15},lineInputBoxes:{display:"flex",marginBottom:10},queryDiv:{alignSelf:"center",margin:"0 4px",fontWeight:600}}))}))((function(e){var t=e.elements,n=e.name,s=e.label,l=e.tooltip,c=void 0===l?"":l,u=e.keyPlaceholder,m=void 0===u?"":u,Z=e.valuePlaceholder,b=void 0===Z?"":Z,k=e.onChange,S=e.withBorder,N=void 0!==S&&S,C=e.classes,R=(0,r.useState)([""]),P=(0,a.Z)(R,2),y=P[0],E=P[1],I=(0,r.useState)([""]),F=(0,a.Z)(I,2),A=F[0],T=F[1],w=(0,r.createRef)();(0,r.useEffect)((function(){if(1===y.length&&""===y[0]&&1===A.length&&""===A[0]&&t&&""!==t){var e=t.split("&"),n=[],i=[];e.forEach((function(e){var t=e.split("=");2===t.length&&(n.push(t[0]),i.push(t[1]))})),n.push(""),i.push(""),E(n),T(i)}}),[y,A,t]),(0,r.useEffect)((function(){var e=w.current;e&&y.length>1&&e.scrollIntoView(!1)}),[y]);var D=(0,r.useRef)(!0);(0,r.useLayoutEffect)((function(){D.current?D.current=!1:O()}),[y,A]);var M=function(e){e.persist();var t=(0,i.Z)(y);t[o()(e.target,"dataset.index",0)]=e.target.value,E(t)},B=function(e){e.persist();var t=(0,i.Z)(A);t[o()(e.target,"dataset.index",0)]=e.target.value,T(t)},O=d()((function(){var e="";y.forEach((function(t,n){if(y[n]&&A[n]){var i="".concat(t,"=").concat(A[n]);0!==n&&(i="&".concat(i)),e="".concat(e).concat(i)}})),k(e)}),500),_=A.map((function(e,t){return(0,v.jsxs)(h.ZP,{item:!0,xs:12,className:C.lineInputBoxes,children:[(0,v.jsx)(g.Z,{id:"".concat(n,"-key-").concat(t.toString()),label:"",name:"".concat(n,"-").concat(t.toString()),value:y[t],onChange:M,index:t,placeholder:m}),(0,v.jsx)("span",{className:C.queryDiv,children:":"}),(0,v.jsx)(g.Z,{id:"".concat(n,"-value-").concat(t.toString()),label:"",name:"".concat(n,"-").concat(t.toString()),value:A[t],onChange:B,index:t,placeholder:b,overlayIcon:t===A.length-1?(0,v.jsx)(j.Z,{}):null,overlayAction:function(){!function(){if(""!==y[y.length-1].trim()&&""!==A[A.length-1].trim()){var e=(0,i.Z)(y),t=(0,i.Z)(A);e.push(""),t.push(""),E(e),T(t)}}()}})]},"query-pair-".concat(n,"-").concat(t.toString()))}));return(0,v.jsx)(r.Fragment,{children:(0,v.jsxs)(h.ZP,{item:!0,xs:12,className:C.fieldContainer,children:[(0,v.jsxs)(p.Z,{className:C.inputLabel,children:[(0,v.jsx)("span",{children:s}),""!==c&&(0,v.jsx)("div",{className:C.tooltipContainer,children:(0,v.jsx)(x.Z,{title:c,placement:"top-start",children:(0,v.jsx)(f.Z,{className:C.tooltip})})})]}),(0,v.jsxs)(h.ZP,{item:!0,xs:12,className:"".concat(N?C.inputWithBorder:""),children:[_,(0,v.jsx)("div",{ref:w})]})]})})}))},56028:function(e,t,n){"use strict";var i=n(70885),a=n(1413),s=n(72791),r=n(60364),l=n(13400),o=n(55646),c=n(5574),d=n(65661),u=n(39157),m=n(11135),h=n(25787),f=n(23814),p=n(42649),x=n(29823),Z=n(28057),g=n(80184),j=(0,r.$j)((function(e){return{modalSnackMessage:e.system.modalSnackBar}}),{setModalSnackMessage:p.MK});t.Z=(0,h.Z)((function(e){return(0,m.Z)((0,a.Z)((0,a.Z)({},f.Qw),{},{content:{padding:25,paddingBottom:0},customDialogSize:{width:"100%",maxWidth:765}},f.sN))}))(j((function(e){var t=e.onClose,n=e.modalOpen,r=e.title,m=e.children,h=e.classes,f=e.wideLimit,p=void 0===f||f,j=e.modalSnackMessage,v=e.noContentPadding,b=e.setModalSnackMessage,k=e.titleIcon,S=void 0===k?null:k,N=(0,s.useState)(!1),C=(0,i.Z)(N,2),R=C[0],P=C[1];(0,s.useEffect)((function(){b("")}),[b]),(0,s.useEffect)((function(){if(j){if(""===j.message)return void P(!1);"error"!==j.type&&P(!0)}}),[j]);var y=p?{classes:{paper:h.customDialogSize}}:{maxWidth:"lg",fullWidth:!0},E="";return j&&(E=j.detailedErrorMsg,(""===j.detailedErrorMsg||j.detailedErrorMsg.length<5)&&(E=j.message)),(0,g.jsxs)(c.Z,(0,a.Z)((0,a.Z)({open:n,classes:h},y),{},{scroll:"paper",onClose:function(e,n){"backdropClick"!==n&&t()},className:h.root,children:[(0,g.jsxs)(d.Z,{className:h.title,children:[(0,g.jsxs)("div",{className:h.titleText,children:[S," ",r]}),(0,g.jsx)("div",{className:h.closeContainer,children:(0,g.jsx)(l.Z,{"aria-label":"close",id:"close",className:h.closeButton,onClick:t,disableRipple:!0,size:"small",children:(0,g.jsx)(x.Z,{})})})]}),(0,g.jsx)(Z.Z,{isModal:!0}),(0,g.jsx)(o.Z,{open:R,className:h.snackBarModal,onClose:function(){P(!1),b("")},message:E,ContentProps:{className:"".concat(h.snackBar," ").concat(j&&"error"===j.type?h.errorSnackBar:"")},autoHideDuration:j&&"error"===j.type?1e4:5e3}),(0,g.jsx)(u.Z,{className:v?"":h.content,children:m})]}))})))},60680:function(e,t,n){"use strict";n(72791);var i=n(11135),a=n(25787),s=n(80184);t.Z=(0,a.Z)((function(e){return(0,i.Z)({root:{padding:0,margin:0,fontSize:".9rem"}})}))((function(e){var t=e.classes,n=e.children;return(0,s.jsx)("h1",{className:t.root,children:n})}))},26759:function(e,t,n){"use strict";var i=n(95318);t.Z=void 0;var a=i(n(45649)),s=n(80184),r=(0,a.default)((0,s.jsx)("path",{d:"m7 10 5 5 5-5z"}),"ArrowDropDown");t.Z=r},70366:function(e,t,n){"use strict";var i=n(95318);t.Z=void 0;var a=i(n(45649)),s=n(80184),r=(0,a.default)((0,s.jsx)("path",{d:"m7 14 5-5 5 5z"}),"ArrowDropUp");t.Z=r},97911:function(e,t,n){"use strict";var i=n(95318);t.Z=void 0;var a=i(n(45649)),s=n(80184),r=(0,a.default)((0,s.jsx)("path",{d:"M14.67 5v14H9.33V5h5.34zm1 14H21V5h-5.33v14zm-7.34 0V5H3v14h5.33z"}),"ViewColumn");t.Z=r},26769:function(e,t,n){var i=n(39066),a=n(93629),s=n(43141);e.exports=function(e){return"string"==typeof e||!a(e)&&s(e)&&"[object String]"==i(e)}}}]);
//# sourceMappingURL=9002.0d569a45.chunk.js.map