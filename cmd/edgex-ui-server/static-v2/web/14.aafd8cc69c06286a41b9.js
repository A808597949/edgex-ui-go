(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{Hsa7:function(e,t,s){"use strict";s.r(t),s.d(t,"SystemAgentModule",function(){return R});var i=s("ofXK"),a=s("3Pt+"),n=s("tyNb"),r=s("fXoL"),c=s("nBa0"),o=s("7PPe"),b=s("EnSQ"),d=s("limL"),l=s("1ahc"),h=s("KWWs");function g(e,t){if(1&e&&(r.Lb(0,"pre"),r.mc(1),r.Kb()),2&e){const e=r.Vb();r.xb(1),r.nc(e.config)}}let m=(()=>{class e{constructor(e,t,s,i,a,n,r){this.sysService=e,this.route=t,this.cmdSvc=s,this.dataService=i,this.metadataSvc=a,this.schedulerSvc=n,this.notiSvc=r,this.service=""}ngOnInit(){this.route.queryParams.subscribe(e=>{e.svcName&&(this.service=e.svcName,this.getConfigs())})}getConfigV2(e){switch(e){case"edgex-core-data":return this.dataService.getConfig().subscribe(e=>{this.config=JSON.stringify(e,null,3)});case"edgex-core-metadata":return this.metadataSvc.getConfig().subscribe(e=>{this.config=JSON.stringify(e,null,3)});case"edgex-core-command":return this.cmdSvc.getConfig().subscribe(e=>{this.config=JSON.stringify(e,null,3)});case"edgex-support-notifications":return this.schedulerSvc.getConfig().subscribe(e=>{this.config=JSON.stringify(e,null,3)});case"edgex-support-scheduler":return this.notiSvc.getConfig().subscribe(e=>{this.config=JSON.stringify(e,null,3)})}}getConfigs(){this.sysService.getConfigBySvcName(this.service).subscribe(e=>{this.config=JSON.stringify(e[0].config,null,3)})}edit(){}}return e.\u0275fac=function(t){return new(t||e)(r.Ib(c.a),r.Ib(n.a),r.Ib(o.a),r.Ib(b.a),r.Ib(d.a),r.Ib(l.a),r.Ib(h.a))},e.\u0275cmp=r.Cb({type:e,selectors:[["app-config"]],decls:7,vars:2,consts:[[1,"card"],[1,"card-header"],[1,"fa","fa-file-text","text-danger","mr-2"],[1,"card-body"],[4,"ngIf"]],template:function(e,t){1&e&&(r.Lb(0,"div",0),r.Lb(1,"div",1),r.Lb(2,"span"),r.Jb(3,"i",2),r.mc(4),r.Kb(),r.Kb(),r.Lb(5,"div",3),r.kc(6,g,2,1,"pre",4),r.Kb(),r.Kb()),2&e&&(r.xb(4),r.oc(" ",t.service," Config Inspect"),r.xb(2),r.Yb("ngIf",t.config))},directives:[i.k],styles:[".btn[disabled][_ngcontent-%COMP%]:hover{cursor:not-allowed}"]}),e})();function u(e,t){if(1&e&&(r.Lb(0,"span",34),r.mc(1),r.Kb()),2&e){const e=r.Vb();r.xb(1),r.nc(e.metrics.executor)}}function p(e,t){if(1&e&&(r.Lb(0,"span",34),r.mc(1),r.Kb()),2&e){const e=r.Vb();r.xb(1),r.oc("",e.metrics.raw.mem_usage," ")}}function f(e,t){if(1&e&&(r.Lb(0,"span",34),r.mc(1),r.Kb()),2&e){const e=r.Vb();r.xb(1),r.oc("",e.metrics.cpuUsedPercent,"%")}}function v(e,t){if(1&e&&(r.Lb(0,"span",34),r.mc(1),r.Kb()),2&e){const e=r.Vb();r.xb(1),r.nc(e.metrics.raw.net_io)}}let L=(()=>{class e{constructor(e,t,s){this.route=e,this.router=t,this.sysService=s,this.refreshRate=3,this.option={tooltip:{show:!0,trigger:"axis",formatter:"{c0}%"},legend:{data:[""]},dateZoom:{show:!1,start:0,end:100},calculable:!0,xAxis:[{type:"category",boundaryGap:!1,data:[0,0,0,0,0,0,0,0,0,0]}],yAxis:[{type:"value",axisLabel:{formatter:"{value}%"}}],series:[{name:"",type:"line",smooth:!0,itemStyle:{normal:{color:"#425CC7",areaStyle:{type:"default"}}},data:[0,0,0,0,0,0,0,0,0,0]}]},this.netChartOption={tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#922C48"}}},legend:{data:["RX","TX"]},xAxis:[{type:"category",boundaryGap:!1,data:[0,0,0,0,0,0,0,0,0,0]}],yAxis:[{type:"value"}],series:[{name:"RX",type:"line",smooth:!0,stack:"\u603b\u91cf",itemStyle:{normal:{color:"#922C48",areaStyle:{type:"default"}}},data:[0,0,0,0,0,0,0,0,0,0]},{name:"TX",type:"line",smooth:!0,stack:"\u603b\u91cf",itemStyle:{normal:{color:"#425CC7",areaStyle:{type:"default"}}},data:[0,0,0,0,0,0,0,0,0,0]}]}}ngOnInit(){this.route.queryParams.subscribe(e=>{e.svcName&&(this.service=e.svcName,this.memoryUsageChart=echarts.init(document.getElementById("memory-usage")),this.cpuUsageChart=echarts.init(document.getElementById("cpu-usage")),this.networkUsageChart=echarts.init(document.getElementById("network-usage")),this.option.legend.data.shift(),this.option.legend.data.push("Memory"),this.memoryUsageChart.setOption(this.option),this.option.legend.data.shift(),this.option.legend.data.push("CPU"),this.cpuUsageChart.setOption(this.option),this.networkUsageChart.setOption(this.netChartOption),this.sysService.getMetricsBySvcName(e.svcName).subscribe(e=>{this.metrics=e[0].metrics,this.feedAllCharts()}),this.timer=window.setInterval(this.metricsTimer,1e3*this.refreshRate,this))})}metricsTimer(e){e.sysService.getMetricsBySvcName(e.service).subscribe(t=>{this.metrics=t[0].metrics,e.feedAllCharts()})}feedAllCharts(){let e=this.cpuUsageChart.getOption();e.series[0].data.shift(),e.series[0].data.push(this.metrics.cpuUsedPercent),e.xAxis[0].data.shift(),e.xAxis[0].data.push(this.timestamp()),this.cpuUsageChart.setOption(e);let t=this.memoryUsageChart.getOption();t.series[0].data.shift(),t.series[0].data.push(this.metrics.raw.mem_perc.substring(0,this.metrics.raw.mem_perc.length-1)),t.xAxis[0].data.shift(),t.xAxis[0].data.push(this.timestamp()),this.memoryUsageChart.setOption(t);let s=this.networkUsageChart.getOption(),i=this.metrics.raw.net_io.split("/"),a=i[0].trim().replace("kB","").replace("MB",""),n=i[1].trim().replace("kB","").replace("MB","");s.series[0].data.shift(),s.series[0].data.push(a),s.series[1].data.shift(),s.series[1].data.push(n),s.xAxis[0].data.shift(),s.xAxis[0].data.push(this.timestamp()),this.networkUsageChart.setOption(s)}onRateSelect(){console.log(this.refreshRate),clearInterval(this.timer),this.timer=window.setInterval(this.metricsTimer,1e3*this.refreshRate,this)}timestamp(){let e=new Date;return`${e.getHours()}:${e.getMinutes()}:${e.getSeconds()}`}ngOnDestroy(){clearInterval(this.timer)}}return e.\u0275fac=function(t){return new(t||e)(r.Ib(n.a),r.Ib(n.e),r.Ib(c.a))},e.\u0275cmp=r.Cb({type:e,selectors:[["app-metrics"]],decls:64,vars:6,consts:[[1,"card","mb-3"],[1,"card-header","font-weight-bold"],[1,"fa","fa-wrench"],[1,"card-body"],[1,"media"],[1,"align-self-center","mr-3"],[1,"fa","fa-server","fa-3x","color-edgex-red"],[1,"media-body"],[1,"d-inline","font-weight-bold","ml-3","float-right"],[1,"badge","badge-primary","mr-1"],["class","text-weight",4,"ngIf"],[1,"mt-0","font-weight-bold"],[1,"badge","badge-success"],[1,"font-weight-bold","d-inline"],[1,"badge","badge-info","mr-2"],[1,"font-weight-bold","ml-2","d-inline"],[1,"badge","badge-warning","mr-1"],[1,"input-group","mb-3","mt-3",2,"width","200px"],[1,"input-group-prepend"],[1,"input-group-text"],[1,"form-control",3,"ngModel","ngModelChange"],["selected","","value","3"],["value","5"],["value","10"],["value","15"],[1,"row"],[1,"col-lg-4"],[1,"card-header"],[1,"fa","fa-area-chart"],[1,"card-body","overflow-auto"],["id","memory-usage",1,"vw-auto",2,"height","300px"],["id","cpu-usage",1,"vw-auto",2,"height","300px"],[1,"card"],["id","network-usage",1,"vw-auto",2,"height","300px"],[1,"text-weight"]],template:function(e,t){1&e&&(r.Lb(0,"div",0),r.Lb(1,"div",1),r.Jb(2,"i",2),r.mc(3," Setting "),r.Kb(),r.Lb(4,"div",3),r.Lb(5,"div",4),r.Lb(6,"div",5),r.Jb(7,"i",6),r.Kb(),r.Lb(8,"div",7),r.Lb(9,"div",8),r.Lb(10,"span",9),r.mc(11,"executor "),r.Kb(),r.kc(12,u,2,1,"span",10),r.Kb(),r.Lb(13,"h5",11),r.mc(14),r.Lb(15,"span",12),r.mc(16,"up"),r.Kb(),r.Kb(),r.Lb(17,"div",13),r.Lb(18,"span",14),r.mc(19,"mem_usage"),r.Kb(),r.kc(20,p,2,1,"span",10),r.Kb(),r.Lb(21,"div",15),r.Lb(22,"span",16),r.mc(23,"cpu_usage"),r.Kb(),r.kc(24,f,2,1,"span",10),r.Kb(),r.Lb(25,"div",15),r.Lb(26,"span",9),r.mc(27,"net_io"),r.Kb(),r.kc(28,v,2,1,"span",10),r.Kb(),r.Kb(),r.Kb(),r.Lb(29,"div",17),r.Lb(30,"div",18),r.Lb(31,"span",19),r.mc(32,"Refresh Rate"),r.Kb(),r.Kb(),r.Lb(33,"select",20),r.Tb("ngModelChange",function(e){return t.refreshRate=e})("ngModelChange",function(){return t.onRateSelect()}),r.Lb(34,"option",21),r.mc(35,"3s"),r.Kb(),r.Lb(36,"option",22),r.mc(37,"5s"),r.Kb(),r.Lb(38,"option",23),r.mc(39,"10s"),r.Kb(),r.Lb(40,"option",24),r.mc(41,"15s"),r.Kb(),r.Kb(),r.Kb(),r.Kb(),r.Kb(),r.Lb(42,"div",25),r.Lb(43,"div",26),r.Lb(44,"div",0),r.Lb(45,"div",27),r.Jb(46,"i",28),r.mc(47,"Memory usage"),r.Kb(),r.Lb(48,"div",29),r.Jb(49,"div",30),r.Kb(),r.Kb(),r.Kb(),r.Lb(50,"div",26),r.Lb(51,"div",0),r.Lb(52,"div",27),r.Jb(53,"i",28),r.mc(54,"CPU usage"),r.Kb(),r.Lb(55,"div",29),r.Jb(56,"div",31),r.Kb(),r.Kb(),r.Kb(),r.Lb(57,"div",26),r.Lb(58,"div",32),r.Lb(59,"div",27),r.Jb(60,"i",28),r.mc(61,"Network traffic"),r.Kb(),r.Lb(62,"div",29),r.Jb(63,"div",33),r.Kb(),r.Kb(),r.Kb(),r.Kb()),2&e&&(r.xb(12),r.Yb("ngIf",t.metrics),r.xb(2),r.oc("",t.service," "),r.xb(6),r.Yb("ngIf",t.metrics),r.xb(4),r.Yb("ngIf",t.metrics),r.xb(4),r.Yb("ngIf",t.metrics),r.xb(5),r.Yb("ngModel",t.refreshRate))},directives:[i.k,a.l,a.d,a.g,a.h,a.m],styles:[".btn[disabled][_ngcontent-%COMP%]:hover{cursor:not-allowed}"]}),e})(),y=(()=>{class e{constructor(e){this.activatedRoute=e}ngOnInit(){this.activatedRoute.url.subscribe(e=>console.log("The URL changed to: "+e))}}return e.\u0275fac=function(t){return new(t||e)(r.Ib(n.a))},e.\u0275cmp=r.Cb({type:e,selectors:[["app-system-agent"]],decls:1,vars:0,template:function(e,t){1&e&&r.Jb(0,"router-outlet")},directives:[n.j],styles:[""]}),e})();var K=s("hsl2"),S=s("9vc0");function x(e,t){1&e&&(r.Lb(0,"button",12),r.Jb(1,"span",13),r.mc(2," Loading... "),r.Kb())}function w(e,t){if(1&e){const e=r.Mb();r.Lb(0,"button",14),r.Tb("click",function(){return r.gc(e),r.Vb().refresh()}),r.Lb(1,"span"),r.Jb(2,"i",15),r.mc(3,"Refresh"),r.Kb(),r.Kb()}if(2&e){const e=r.Vb();r.Yb("disabled",e.operationBtnDisabled)}}function C(e,t){1&e&&(r.Lb(0,"span",23),r.mc(1,"running"),r.Kb())}function k(e,t){1&e&&(r.Lb(0,"span",24),r.mc(1,"stopped"),r.Kb())}const I=function(){return["../metric"]},O=function(e){return{svcName:e}};function J(e,t){if(1&e&&(r.Lb(0,"a",25),r.Jb(1,"i",26),r.Kb()),2&e){const e=r.Vb().$implicit;r.Yb("routerLink",r.cc(2,I))("queryParams",r.dc(3,O,e.name))}}function B(e,t){1&e&&(r.Lb(0,"a"),r.Jb(1,"i",27),r.Kb())}const N=function(){return["../config"]};function M(e,t){if(1&e&&(r.Lb(0,"a",25),r.Jb(1,"i",28),r.Kb()),2&e){const e=r.Vb().$implicit;r.Yb("routerLink",r.cc(2,N))("queryParams",r.dc(3,O,e.name))}}function V(e,t){1&e&&(r.Lb(0,"a"),r.Jb(1,"i",27),r.Kb())}function Y(e,t){if(1&e){const e=r.Mb();r.Lb(0,"span"),r.Lb(1,"span",29),r.Tb("click",function(){r.gc(e);const t=r.Vb().$implicit;return r.Vb().start(t.name)}),r.mc(2,"start"),r.Kb(),r.Lb(3,"span",30),r.Tb("click",function(){r.gc(e);const t=r.Vb().$implicit;return r.Vb().restart(t.name)}),r.mc(4,"restart"),r.Kb(),r.Lb(5,"span",31),r.Tb("click",function(){r.gc(e);const t=r.Vb().$implicit;return r.Vb().stop(t.name)}),r.mc(6,"stop"),r.Kb(),r.Kb()}}function D(e,t){1&e&&(r.Lb(0,"div",32),r.Lb(1,"span",33),r.mc(2,"Loading..."),r.Kb(),r.Kb(),r.Lb(3,"div",34),r.Lb(4,"span",33),r.mc(5,"Loading..."),r.Kb(),r.Kb(),r.Lb(6,"div",35),r.Lb(7,"span",33),r.mc(8,"Loading..."),r.Kb(),r.Kb())}function P(e,t){if(1&e&&(r.Lb(0,"tr"),r.Lb(1,"td"),r.mc(2),r.Kb(),r.Lb(3,"td",16),r.kc(4,C,2,0,"span",17),r.kc(5,k,2,0,"span",18),r.Kb(),r.Lb(6,"td",16),r.kc(7,J,2,5,"a",19),r.kc(8,B,2,0,"a",20),r.Kb(),r.Lb(9,"td",16),r.kc(10,M,2,5,"a",19),r.kc(11,V,2,0,"a",20),r.Kb(),r.Lb(12,"td"),r.kc(13,Y,7,0,"span",21),r.kc(14,D,9,0,"ng-template",null,22,r.lc),r.Kb(),r.Kb()),2&e){const e=t.$implicit,s=r.fc(15),i=r.Vb();r.xb(2),r.nc(e.name),r.xb(1),r.Yb("ngSwitch",e.alive),r.xb(1),r.Yb("ngSwitchCase",!0),r.xb(2),r.Yb("ngSwitch",e.alive),r.xb(1),r.Yb("ngSwitchCase",!0),r.xb(2),r.Yb("ngSwitch",e.alive),r.xb(1),r.Yb("ngSwitchCase",!0),r.xb(3),r.Yb("ngIf",!i.operationBtnDisabled)("ngIfElse",s)}}const U=[{path:"",component:y,children:[{path:"",redirectTo:"service-list",pathMatch:"full"},{path:"service-list",component:(()=>{class e{constructor(e,t,s){this.sysService=e,this.msgSvc=t,this.errorSvc=s,this.defaultServcies=["edgex-core-metadata","edgex-core-data","edgex-core-command","edgex-support-notifications","edgex-support-scheduler","rule-engine","edgex-app-service-configurable-rules"],this.operationBtnDisabled=!1,this.toggleClass="",this.availServices=[]}ngOnInit(){this.allSvcHealthCheck()}allSvcHealthCheck(){this.sysService.getAllSvcHealth(this.defaultServcies.join(",")).subscribe(e=>{this.availServices=[],e.forEach((e,t)=>{let s={name:""+e.serviceName,statusCode:""+e.statusCode};s.alive=200===e.statusCode,this.availServices.push(s)}),this.availServices.sort((e,t)=>e.name>t.name?1:-1)})}refresh(){this.operationBtnDisabled=!0,this.sysService.getAllSvcHealth(this.defaultServcies.join(",")).subscribe(e=>{this.availServices=[],e.forEach((e,t)=>{let s={name:""+e.serviceName,statusCode:""+e.statusCode};s.alive=200===e.statusCode,this.availServices.push(s)}),this.operationBtnDisabled=!1,this.availServices.sort((e,t)=>e.name>t.name?1:-1),this.msgSvc.success("refresh")})}start(e){this.operationBtnDisabled=!0,this.sysService.startV2(e).subscribe(e=>{200===e[0].statusCode?(this.availServices.forEach(t=>{if("edgex-"+t.name===e[0].serviceName)return t.statusCode=String(e[0].statusCode),void(t.alive=!0)}),setTimeout(()=>{this.operationBtnDisabled=!1},2e3)):this.msgSvc.errors(e[0].message)})}restart(e){this.operationBtnDisabled=!0,this.sysService.restartV2(e).subscribe(e=>{200===e[0].statusCode?setTimeout(()=>{this.allSvcHealthCheck(),this.operationBtnDisabled=!1},2e3):this.msgSvc.errors(e[0].message)})}stop(e){this.operationBtnDisabled=!0,this.sysService.stopV2(e).subscribe(e=>{200===e[0].statusCode?setTimeout(()=>{this.allSvcHealthCheck(),this.operationBtnDisabled=!1},2e3):this.msgSvc.errors(e[0].message)})}}return e.\u0275fac=function(t){return new(t||e)(r.Ib(c.a),r.Ib(K.a),r.Ib(S.a))},e.\u0275cmp=r.Cb({type:e,selectors:[["app-service-list"]],decls:25,vars:3,consts:[[1,"card"],[1,"card-header"],[1,"fa","fa-list","text-danger","mr-2"],[1,"card-body","p-0"],[1,"bg-light","px-3","py-2"],["class","btn btn-primary","type","button","disabled","",4,"ngIf"],["class","btn btn-primary btn-sm ",3,"disabled","click",4,"ngIf"],[1,"table-responsive"],[1,"table","table-hover","text-truncate"],[1,"thead-light"],["scope","col"],[4,"ngFor","ngForOf"],["type","button","disabled","",1,"btn","btn-primary"],["role","status","aria-hidden","true",1,"spinner-grow","spinner-grow-sm"],[1,"btn","btn-primary","btn-sm",3,"disabled","click"],[1,"fa","fa-refresh","mr-1"],[3,"ngSwitch"],["class","badge badge-success",4,"ngSwitchCase"],["class","badge badge-danger",4,"ngSwitchDefault"],[3,"routerLink","queryParams",4,"ngSwitchCase"],[4,"ngSwitchDefault"],[4,"ngIf","ngIfElse"],["LoadingTemplate",""],[1,"badge","badge-success"],[1,"badge","badge-danger"],[3,"routerLink","queryParams"],[1,"fa","fa-area-chart"],[1,"fa","fa-ban","fa-stack-lg","text-danger"],[1,"fa","fa-file-text"],["role","button",1,"badge","badge-info","mr-1",3,"click"],["role","button",1,"badge","badge-warning","mr-1",3,"click"],["role","button",1,"badge","badge-danger",3,"click"],["role","status",1,"spinner-grow","spinner-grow-sm","text-info","mr-1"],[1,"sr-only"],["role","status",1,"spinner-grow","spinner-grow-sm","text-warning","mr-1"],["role","status",1,"spinner-grow","spinner-grow-sm","text-danger"]],template:function(e,t){1&e&&(r.Lb(0,"div",0),r.Lb(1,"div",1),r.Jb(2,"i",2),r.Lb(3,"span"),r.mc(4,"System Services List"),r.Kb(),r.Kb(),r.Lb(5,"div",3),r.Lb(6,"div",4),r.kc(7,x,3,0,"button",5),r.kc(8,w,4,1,"button",6),r.Kb(),r.Lb(9,"div",7),r.Lb(10,"table",8),r.Lb(11,"thead",9),r.Lb(12,"tr"),r.Lb(13,"th",10),r.mc(14,"Name"),r.Kb(),r.Lb(15,"th",10),r.mc(16,"State"),r.Kb(),r.Lb(17,"th",10),r.mc(18,"Metric"),r.Kb(),r.Lb(19,"th",10),r.mc(20,"Config"),r.Kb(),r.Lb(21,"th",10),r.mc(22,"Operation"),r.Kb(),r.Kb(),r.Kb(),r.Lb(23,"tbody"),r.kc(24,P,16,9,"tr",11),r.Kb(),r.Kb(),r.Kb(),r.Kb(),r.Kb()),2&e&&(r.xb(7),r.Yb("ngIf",t.operationBtnDisabled),r.xb(1),r.Yb("ngIf",!t.operationBtnDisabled),r.xb(16),r.Yb("ngForOf",t.availServices))},directives:[i.k,i.j,i.l,i.m,i.n,n.h],styles:[".btn[disabled][_ngcontent-%COMP%]:hover{cursor:not-allowed}"]}),e})()},{path:"metric",component:L},{path:"config",component:m}]}];let A=(()=>{class e{}return e.\u0275mod=r.Gb({type:e}),e.\u0275inj=r.Fb({factory:function(t){return new(t||e)},imports:[[n.i.forChild(U)],n.i]}),e})(),R=(()=>{class e{}return e.\u0275mod=r.Gb({type:e}),e.\u0275inj=r.Fb({factory:function(t){return new(t||e)},imports:[[i.b,a.b,A]]}),e})()}}]);