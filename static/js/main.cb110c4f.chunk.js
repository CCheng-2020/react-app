(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[0],{26:function(e,t,a){},27:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(2),s=a.n(n),r=a(21),i=a.n(r),c=(a(26),a(3)),u=a(4),l=a(7),o=a(6),h=(a(27),a(8)),b=a.n(h),d=a(9),j=a(5),p=a(10),g=a.n(p),f=a(11),m=a.n(f),v=a(0),O=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleQueryChange=function(e){n.setState({query:e.target.value})},n.handlePageClick=function(e){var t=e.selectedPage,a=t*n.state.perPage;n.setState({currentPage:t,offset:a},(function(){n.handleSubmit()}))},n.state={query:"",tle:"3le",loading:"false",offset:0,sensorData:[],perPage:10,currentPage:0},n.handleSubmit=n.handleSubmit.bind(Object(j.a)(n)),n}return Object(u.a)(a,[{key:"handleSubmit",value:function(){var e=Object(d.a)(b.a.mark((function e(t){var a,n,s,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a={"X-Client-Dn":"CN=Alice"},n=new URLSearchParams({tle:this.state.tle,query:this.state.query}).toString(),s="https://3ye9kqini1.execute-api.us-east-2.amazonaws.com/test/search?"+n,e.next=6,g.a.get(s,{headers:a});case 6:r=e.sent,this.setState({sensorData:r}),this.setState({loading:!1});case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(v.jsxs)("div",{children:[Object(v.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(v.jsx)("h1",{children:"Search TLE"}),Object(v.jsxs)("label",{children:["1 hour",Object(v.jsx)("input",{type:"radio",value:"1",name:"radiovalues",onChange:this.handleQueryChange})]}),Object(v.jsxs)("label",{children:["24 hours",Object(v.jsx)("input",{type:"radio",value:"24",name:"radiovalues",onChange:this.handleQueryChange})]}),Object(v.jsx)("button",{children:"Submit"})]}),Object(v.jsxs)("div",{children:[this.state.postData,Object(v.jsx)(m.a,{previousLabel:"prev",nextLabel:"next",breakLabel:"...",breakClassName:"break-me",pageCount:this.state.pageCount,marginPagesDisplayed:2,pageRangeDisplayed:5,onPageChange:this.handlePageClick,containerClassName:"pagination",subContainerClassName:"pages pagination",activeClassName:"active"})]})]})}}]),a}(n.Component),x=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleQueryChange=function(e){n.setState({query:e.target.value})},n.handlePageClick=function(e){var t=e.selectedPage,a=t*n.state.perPage;n.setState({currentPage:t,offset:a},(function(){n.handleSubmit()}))},n.state={query:"",tle:"3le",loading:"false",offset:0,sensorData:[],perPage:10,currentPage:0},n.handleSubmit=n.handleSubmit.bind(Object(j.a)(n)),n}return Object(u.a)(a,[{key:"handleSubmit",value:function(){var e=Object(d.a)(b.a.mark((function e(t){var a,n,r,i=this;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a={"X-Client-Dn":"CN=Alice"},n=new URLSearchParams({tle:this.state.tle,query:this.state.query}).toString(),r="https://3ye9kqini1.execute-api.us-east-2.amazonaws.com/test/search?"+n,e.next=6,g.a.get(r,{headers:a}).then((function(e){var t=e.data,a=t.slice(i.state.offset,i.state.offset+i.state.perPage);console.log(a[0]);var n=a.map((function(e){return Object(v.jsxs)(s.a.Fragment,{children:[Object(v.jsx)("p",{children:e.TLE_LINE0}),Object(v.jsx)("p",{children:e.TLE_LINE1}),Object(v.jsx)("p",{children:e.TLE_LINE2})]})}));console.log(n),i.setState({pageCount:Math.ceil(t.length/i.state.perPage),postData:n})}));case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(v.jsxs)("div",{children:[Object(v.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(v.jsx)("h1",{children:"Search TLE"}),Object(v.jsxs)("label",{children:["1 hour",Object(v.jsx)("input",{type:"radio",value:"1",name:"radiovalues",onChange:this.handleQueryChange})]}),Object(v.jsxs)("label",{children:["24 hours",Object(v.jsx)("input",{type:"radio",value:"24",name:"radiovalues",onChange:this.handleQueryChange})]}),Object(v.jsx)("button",{children:"Submit"})]}),Object(v.jsxs)("div",{children:[this.state.postData,Object(v.jsx)(m.a,{previousLabel:"prev",nextLabel:"next",breakLabel:"...",breakClassName:"break-me",pageCount:this.state.pageCount,marginPagesDisplayed:2,pageRangeDisplayed:5,onPageChange:this.handlePageClick,containerClassName:"pagination",subContainerClassName:"pages pagination",activeClassName:"active"})]})]})}}]),a}(n.Component),C=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return Object(v.jsxs)("div",{children:[Object(v.jsx)("h3",{className:"p-3 text-center",children:"Starbuck"}),Object(v.jsx)(x,{}),Object(v.jsx)(O,{})]})}}]),a}(s.a.Component),y=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,50)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),n(e),s(e),r(e),i(e)}))};i.a.render(Object(v.jsx)(s.a.StrictMode,{children:Object(v.jsx)(C,{})}),document.getElementById("root")),y()}},[[49,1,2]]]);
//# sourceMappingURL=main.cb110c4f.chunk.js.map