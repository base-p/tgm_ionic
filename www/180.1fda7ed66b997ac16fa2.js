(window.webpackJsonp=window.webpackJsonp||[]).push([[180],{GNwS:function(n,o,t){"use strict";t.r(o);var l=t("CcnG"),u=t("mrSG"),i=t("a3Cf"),e=function(n){function o(){return null!==n&&n.apply(this,arguments)||this}return Object(u.c)(o,n),o.prototype.playVideo=function(n,o){return Object(i.cordova)(this,"playVideo",{sync:!0},arguments)},o.prototype.playAudio=function(n,o){return Object(i.cordova)(this,"playAudio",{sync:!0},arguments)},o.prototype.stopAudio=function(){return Object(i.cordova)(this,"stopAudio",{sync:!0},arguments)},o.prototype.pauseAudio=function(){return Object(i.cordova)(this,"pauseAudio",{sync:!0,platforms:["iOS"]},arguments)},o.prototype.resumeAudio=function(){return Object(i.cordova)(this,"resumeAudio",{sync:!0,platforms:["iOS"]},arguments)},o.pluginName="StreamingMedia",o.plugin="cordova-plugin-streaming-media",o.pluginRef="plugins.streamingMedia",o.repo="https://github.com/nchutchind/cordova-plugin-streaming-media",o.platforms=["Amazon Fire OS","Android","iOS"],o}(i.IonicNativePlugin),a=function(){function n(n){this.streamingMedia=n,this.env3={},this.env3="nv3",this.streamingMedia.playVideo("https://s3.amazonaws.com/tgm-videos/MVI_0061_out.webm",{successCallback:function(){console.log("Video played")},errorCallback:function(n){console.log("Error streaming")},orientation:"landscape",shouldAutoClose:!0,controls:!1})}return n.prototype.ngOnInit=function(){},n}(),r=function(){return function(){}}(),c=t("pMnS"),p=t("ra/t"),s=t("ntG5"),b=l.nb({encapsulation:0,styles:[[""]],data:{}});function d(n){return l.Fb(0,[(n()(),l.pb(0,0,null,null,4,"ion-content",[["padding",""]],null,null,null,p.w,p.f)),l.ob(1,49152,null,0,s.p,[l.h,l.k],null,null),(n()(),l.pb(2,0,null,0,1,"h2",[],null,null,null,null,null)),(n()(),l.Db(3,null,["Env3 :: ",""])),(n()(),l.pb(4,0,null,0,0,"video",[["autoplay","false"],["controls",""],["src","https://s3.amazonaws.com/tgm-videos/MVI_0061_out.webm"],["width","100%"]],null,null,null,null,null))],null,function(n,o){n(o,3,0,o.component.env3)})}function m(n){return l.Fb(0,[(n()(),l.pb(0,0,null,null,1,"app-video-sample",[],null,null,null,d,b)),l.ob(1,114688,null,0,a,[e],null,null)],function(n,o){n(o,1,0)},null)}var f=l.lb("app-video-sample",a,m,{},{},[]),w=t("Ip0R"),g=t("gIcY"),v=t("95zI"),h=t("9opb"),y=t("apKv"),j=t("B4/3"),A=t("ZYCi");t.d(o,"VideoSamplePageModuleNgFactory",function(){return O});var O=l.mb(r,[],function(n){return l.vb([l.wb(512,l.j,l.bb,[[8,[c.a,f]],[3,l.j],l.x]),l.wb(4608,w.k,w.j,[l.u,[2,w.s]]),l.wb(4608,g.c,g.c,[]),l.wb(4608,v.a,v.a,[l.z,l.g]),l.wb(4608,h.a,h.a,[v.a,l.j,l.q]),l.wb(4608,y.a,y.a,[v.a,l.j,l.q]),l.wb(4608,e,e,[]),l.wb(1073742336,w.b,w.b,[]),l.wb(1073742336,g.b,g.b,[]),l.wb(1073742336,g.a,g.a,[]),l.wb(1073742336,j.a,j.a,[]),l.wb(1073742336,A.p,A.p,[[2,A.v],[2,A.n]]),l.wb(1073742336,r,r,[]),l.wb(1024,A.l,function(){return[[{path:"",component:a}]]},[])])})}}]);