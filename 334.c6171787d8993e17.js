"use strict";(self.webpackChunkMyMoney=self.webpackChunkMyMoney||[]).push([[334],{6334:(L,r,s)=>{s.r(r),s.d(r,{SettingModule:()=>M});var c=s(9808),m=s(1083),l=s(7503),t=s(5e3),d=s(520);let p=(()=>{class n{constructor(e){this.http=e,this.baseUrl="https://mybucksmanager.000webhostapp.com/api/"}getUserData(e){return this.http.get(this.baseUrl+"users/"+e)}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(d.eN))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var f=s(8762),v=s(1271),o=s(7093),u=s(4623),h=s(4834),x=s(7423),Z=s(773);function y(n,i){1&n&&(t.TgZ(0,"div",16)(1,"button",17),t._uU(2,"Update"),t.qZA()()),2&n&&(t.xp6(1),t.Q6J("color","primary"))}function S(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"div",2)(1,"div",3),t.NdJ("click",function(){return t.CHM(e),t.oxw().switch("avatar","face1")}),t._UZ(2,"img",4),t.qZA(),t.TgZ(3,"div",5)(4,"mat-list")(5,"mat-list-item",6),t._UZ(6,"img",7),t.TgZ(7,"div",8)(8,"span",9),t._uU(9,"username"),t.qZA(),t.TgZ(10,"span",10),t._uU(11),t.qZA()()(),t._UZ(12,"mat-divider"),t.TgZ(13,"mat-list-item",6),t._UZ(14,"img",11),t.TgZ(15,"div",8)(16,"span",9),t._uU(17,"Currency"),t.qZA(),t.TgZ(18,"span",10),t._uU(19),t.qZA()()(),t._UZ(20,"mat-divider"),t.TgZ(21,"mat-list-item",6),t._UZ(22,"img",12),t.TgZ(23,"div",8)(24,"span",9),t._uU(25,"Email"),t.qZA(),t.TgZ(26,"span",10),t._uU(27),t.qZA()()(),t._UZ(28,"mat-divider"),t.TgZ(29,"mat-list-item",6),t._UZ(30,"img",13),t.TgZ(31,"div",8)(32,"span",9),t._uU(33,"Phone"),t.qZA(),t.TgZ(34,"span",10),t._uU(35),t.qZA()()(),t._UZ(36,"mat-divider"),t.TgZ(37,"mat-list-item",6),t._UZ(38,"img",14),t.TgZ(39,"div",8)(40,"span",9),t._uU(41,"Password"),t.qZA(),t.TgZ(42,"span",10),t._uU(43,"**************"),t.qZA()()(),t._UZ(44,"mat-divider"),t.qZA(),t.YNc(45,y,3,1,"div",15),t.qZA()()}if(2&n){const e=t.oxw();t.xp6(2),t.MGl("src","assets/avatars/",e.userData.avatar,".png",t.LSH),t.xp6(9),t.Oqu(e.userData.username),t.xp6(3),t.MGl("src","assets/flags/",e.userCurrency,".png",t.LSH),t.xp6(5),t.Oqu(e.userData.currency),t.xp6(8),t.Oqu(e.userData.email),t.xp6(8),t.Oqu(e.userData.phone),t.xp6(10),t.Q6J("ngIf",e.update)}}function U(n,i){1&n&&(t.TgZ(0,"div",18),t._UZ(1,"mat-spinner",19),t.qZA()),2&n&&(t.xp6(1),t.Q6J("diameter",40))}const A=[{path:"",component:(()=>{class n{constructor(e,a,g){this.userService=e,this.loginService=a,this.snackBar=g,this.isLoading=!1,this.update=!1,this.userId=this.loginService.getSessionFromStorage(l.E),this.userCurrency=this.loginService.getSessionFromStorage(l.t)}ngOnInit(){this.isLoading=!0,this.subscription=this.userService.getUserData(this.userId).subscribe({next:e=>{this.userData=e,this.isLoading=!1},error:e=>{"404"==e.status?this.snackBar.open("Transaction not found","dismiss",{duration:3e3}):"502"==e.status?this.snackBar.open("Connection timed out, Try again later","dismiss",{duration:3e3}):(this.snackBar.open(e.message,"dismiss",{duration:3e3}),console.log("error =>"+e.message))}})}ngOnDestroy(){this.subscription.unsubscribe()}switch(e,a){this.update=!0,this.userData[e]=a}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(p),t.Y36(f.r),t.Y36(v.ux))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-setting"]],decls:2,vars:2,consts:[["class","container","fxLayout","column",4,"ngIf"],["class","spinner","fxLayoutAlign","center center",4,"ngIf"],["fxLayout","column",1,"container"],["fxLayout","column","fxLayoutAlign","center center",1,"avatar","clickable",3,"click"],["alt","avatar",3,"src"],[1,"details"],[1,"clickable"],["fxFlex","15","src","assets/username.png","alt","user"],["fxLayout","column","fxFlex","","fxLayoutAlign","center start",1,"description"],[1,"name","color_A9A9A9","font_weight_500"],[1,"desc","font_weight_500"],["fxFlex","15","alt","currency",3,"src"],["fxFlex","15","src","assets/email.png","alt","email"],["fxFlex","15","src","assets/phone.png","alt","phone"],["fxFlex","15","src","assets/password.png","alt","password"],["class","update","fxLayout","column","fxLayoutAlign","center center",4,"ngIf"],["fxLayout","column","fxLayoutAlign","center center",1,"update"],["mat-flat-button","",3,"color"],["fxLayoutAlign","center center",1,"spinner"],[3,"diameter"]],template:function(e,a){1&e&&(t.YNc(0,S,46,7,"div",0),t.YNc(1,U,2,1,"div",1)),2&e&&(t.Q6J("ngIf",!a.isLoading),t.xp6(1),t.Q6J("ngIf",a.isLoading))},directives:[c.O5,o.xw,o.Wh,u.i$,u.Tg,o.yH,h.d,x.lW,Z.Ou],styles:[".container[_ngcontent-%COMP%]{min-height:90%;padding:1rem}.details[_ngcontent-%COMP%]{margin-top:1rem}.description[_ngcontent-%COMP%]{margin-left:1rem}.avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:7rem;height:7rem}.spinner[_ngcontent-%COMP%]{margin:0;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.update[_ngcontent-%COMP%]{margin-top:2rem}.font_weight_500[_ngcontent-%COMP%]{font-weight:500}.color_A9A9A9[_ngcontent-%COMP%]{color:#a9a9a9}.clickable[_ngcontent-%COMP%]:hover{cursor:pointer}"]}),n})()}];let C=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[m.Bz.forChild(A)]]}),n})();var T=s(4733);let M=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[c.ez,C,T.m]]}),n})()}}]);