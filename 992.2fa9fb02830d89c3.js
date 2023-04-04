"use strict";(self.webpackChunkMyMoney=self.webpackChunkMyMoney||[]).push([[992],{2992:(ct,w,l)=>{l.r(w),l.d(w,{SettingModule:()=>lt});var u=l(9808),b=l(1083),Z=l(7503),r=l(8966),t=l(5e3),C=l(520);let A=(()=>{class o{constructor(e){this.http=e,this.baseUrl="https://mybucksmanager.000webhostapp.com/api/"}getAvatars(){return this.http.get(this.baseUrl+"avatars")}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(C.eN))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var g=l(1271),_=l(3954),m=l(7093),f=l(773),p=l(7423);function U(o,n){if(1&o){const e=t.EpF();t.TgZ(0,"mat-grid-tile")(1,"div",7),t.NdJ("click",function(){const c=t.CHM(e).$implicit;return t.oxw(2).update(c.name)}),t._UZ(2,"img",8),t.qZA()()}if(2&o){const e=n.$implicit;t.xp6(2),t.MGl("src","assets/avatars/",e.name,".png",t.LSH)}}function k(o,n){if(1&o&&(t.TgZ(0,"mat-grid-list",5),t.YNc(1,U,3,1,"mat-grid-tile",6),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.avatars)}}function J(o,n){1&o&&(t.TgZ(0,"div",9),t._UZ(1,"mat-spinner",10),t.qZA()),2&o&&(t.xp6(1),t.Q6J("diameter",40))}let L=(()=>{class o{constructor(e,i,a,c){this.dialogRef=e,this.data=i,this.avatarService=a,this.snackBar=c,this.avatars=[],this.isLoading=!1}ngOnInit(){this.isLoading=!0,this.subscription=this.avatarService.getAvatars().subscribe({next:e=>{this.avatars=e,this.isLoading=!1},error:e=>{"404"==e.status?this.snackBar.open("Transaction not found","dismiss",{duration:3e3}):"502"==e.status?this.snackBar.open("Connection timed out, Try again later","dismiss",{duration:3e3}):(this.snackBar.open(e.message,"dismiss",{duration:3e3}),console.log("error =>"+e.message))}})}update(e){this.data.res=e,this.dialogRef.close(this.data.res)}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(r.so),t.Y36(r.WI),t.Y36(A),t.Y36(g.ux))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-avatar-dialog"]],decls:8,vars:3,consts:[["mat-dialog-content",""],["cols","3","rowHeight","100px",4,"ngIf"],["class","spinner","fxLayoutAlign","center center",4,"ngIf"],["mat-dialog-actions",""],["mat-flat-button","","mat-dialog-close","",3,"color"],["cols","3","rowHeight","100px"],[4,"ngFor","ngForOf"],[3,"click"],["alt","",3,"src"],["fxLayoutAlign","center center",1,"spinner"],[3,"diameter"]],template:function(e,i){1&e&&(t.TgZ(0,"h1"),t._uU(1,"Choose your avatar"),t.qZA(),t.TgZ(2,"div",0),t.YNc(3,k,2,1,"mat-grid-list",1),t.YNc(4,J,2,1,"div",2),t.qZA(),t.TgZ(5,"div",3)(6,"button",4),t._uU(7,"Cancel"),t.qZA()()),2&e&&(t.xp6(3),t.Q6J("ngIf",!i.isLoading),t.xp6(1),t.Q6J("ngIf",i.isLoading),t.xp6(2),t.Q6J("color","accent"))},directives:[r.xY,u.O5,_.Il,u.sg,_.DX,m.Wh,f.Ou,r.H8,p.lW,r.ZT],styles:[""]}),o})();var s=l(3075),d=l(7322),x=l(7531);let I=(()=>{class o{constructor(e,i){this.dialogRef=e,this.formBuilder=i}ngOnInit(){this.username=this.formBuilder.control(""),this.form=this.formBuilder.group({username:this.username})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(r.so),t.Y36(s.qu))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-username"]],decls:12,vars:6,consts:[["mat-dialog-content","","fxLayout","column","fxLayoutAlign","stretch",3,"formGroup"],["appearance","fill"],["autocomplete","false","matInput","",3,"formControl"],["mat-dialog-actions","","fxLayout","row","fxLayoutAlign","space-around center"],["mat-flat-button","","mat-dialog-close","",3,"color"],["mat-flat-button","",3,"color","mat-dialog-close","disabled"]],template:function(e,i){1&e&&(t.TgZ(0,"h1"),t._uU(1,"Update your username"),t.qZA(),t.TgZ(2,"form",0)(3,"mat-form-field",1)(4,"mat-label"),t._uU(5,"New username "),t.qZA(),t._UZ(6,"input",2),t.qZA()(),t.TgZ(7,"div",3)(8,"button",4),t._uU(9,"Cancel"),t.qZA(),t.TgZ(10,"button",5),t._uU(11,"Ok"),t.qZA()()),2&e&&(t.xp6(2),t.Q6J("formGroup",i.form),t.xp6(4),t.Q6J("formControl",i.username),t.xp6(2),t.Q6J("color","primary"),t.xp6(2),t.Q6J("color","accent")("mat-dialog-close",i.form.value.username)("disabled",!i.form.value.username))},directives:[s._Y,s.JL,r.xY,m.xw,m.Wh,s.sg,d.KE,d.hX,x.Nt,s.Fj,s.JJ,s.oH,r.H8,p.lW,r.ZT],styles:[""]}),o})(),D=(()=>{class o{constructor(e){this.http=e,this.baseUrl="https://mybucksmanager.000webhostapp.com/api/"}getCurrencies(){return this.http.get(this.baseUrl+"currencies")}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(C.eN))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();function P(o,n){if(1&o){const e=t.EpF();t.TgZ(0,"mat-grid-tile")(1,"div",7),t.NdJ("click",function(){const c=t.CHM(e).$implicit;return t.oxw(2).update(c.name)}),t._UZ(2,"img",8),t.TgZ(3,"span"),t._uU(4),t.qZA()()()}if(2&o){const e=n.$implicit;t.xp6(2),t.MGl("src","assets/flags/",e.name,".png",t.LSH),t.xp6(2),t.Oqu(e.name)}}function S(o,n){if(1&o&&(t.TgZ(0,"mat-grid-list",5),t.YNc(1,P,5,2,"mat-grid-tile",6),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.currencies)}}function Y(o,n){1&o&&(t.TgZ(0,"div",9),t._UZ(1,"mat-spinner",10),t.qZA()),2&o&&(t.xp6(1),t.Q6J("diameter",40))}let q=(()=>{class o{constructor(e,i,a,c){this.dialogRef=e,this.data=i,this.currencyService=a,this.snackBar=c,this.currencies=[],this.isLoading=!1}ngOnInit(){this.isLoading=!0,this.subscription=this.currencyService.getCurrencies().subscribe({next:e=>{this.currencies=e,this.isLoading=!1},error:e=>{"404"==e.status?this.snackBar.open("Transaction not found","dismiss",{duration:3e3}):"502"==e.status?this.snackBar.open("Connection timed out, Try again later","dismiss",{duration:3e3}):(this.snackBar.open(e.message,"dismiss",{duration:3e3}),console.log("error =>"+e.message))}})}update(e){this.data.res=e,this.dialogRef.close(this.data.res)}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(r.so),t.Y36(r.WI),t.Y36(D),t.Y36(g.ux))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-currency"]],decls:8,vars:3,consts:[["mat-dialog-content",""],["cols","3","rowHeight","100px",4,"ngIf"],["class","spinner","fxLayoutAlign","center center",4,"ngIf"],["mat-dialog-actions",""],["mat-flat-button","","mat-dialog-close","",3,"color"],["cols","3","rowHeight","100px"],[4,"ngFor","ngForOf"],["fxLayout","column","fxLayoutAlign","center center",3,"click"],["alt","",3,"src"],["fxLayoutAlign","center center",1,"spinner"],[3,"diameter"]],template:function(e,i){1&e&&(t.TgZ(0,"h1"),t._uU(1,"Choose your currency"),t.qZA(),t.TgZ(2,"div",0),t.YNc(3,S,2,1,"mat-grid-list",1),t.YNc(4,Y,2,1,"div",2),t.qZA(),t.TgZ(5,"div",3)(6,"button",4),t._uU(7,"Cancel"),t.qZA()()),2&e&&(t.xp6(3),t.Q6J("ngIf",!i.isLoading),t.xp6(1),t.Q6J("ngIf",i.isLoading),t.xp6(2),t.Q6J("color","accent"))},directives:[r.xY,u.O5,_.Il,u.sg,_.DX,m.xw,m.Wh,f.Ou,r.H8,p.lW,r.ZT],styles:[""]}),o})(),v=(()=>{class o{constructor(e){this.http=e,this.baseUrl="https://mybucksmanager.000webhostapp.com/api/"}getUserData(e){return this.http.get(this.baseUrl+"users/"+e)}checkForEmail(e){return this.http.get(this.baseUrl+"check_email?email="+e)}checkForPhone(e){return this.http.get(this.baseUrl+"check_phone?phone="+e)}checkForOldPassword(e,i){return this.http.get(this.baseUrl+"check_password?id="+e+"&password="+i)}updateUserData(e){return this.http.get(this.baseUrl+"users/"+e.id+"/update?username="+encodeURIComponent(e.username)+"&currency="+e.currency+"&avatar="+e.avatar+"&phone="+e.phone+"&email="+encodeURIComponent(e.email)+"&password"+encodeURIComponent(e.password))}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(C.eN))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();function E(o,n){1&o&&(t.TgZ(0,"span",8),t._uU(1,"Invalid Email"),t.qZA())}function O(o,n){1&o&&(t.TgZ(0,"span",8),t._uU(1,"Email is used"),t.qZA())}function Q(o,n){if(1&o){const e=t.EpF();t.TgZ(0,"button",9),t.NdJ("click",function(){return t.CHM(e),t.oxw().submit()}),t._uU(1,"Ok"),t.qZA()}if(2&o){const e=t.oxw();t.Q6J("color","accent")("disabled",!e.form.value.email)}}function F(o,n){1&o&&t._UZ(0,"mat-spinner",10),2&o&&t.Q6J("color","accent")("diameter",40)}let N=(()=>{class o{constructor(e,i,a,c){this.dialogRef=e,this.formBuilder=i,this.userService=a,this.snackBar=c,this.invalidEmail=!1,this.usedEmail=!1,this.isLoading=!1}ngOnInit(){this.email=this.formBuilder.control(""),this.form=this.formBuilder.group({email:this.email})}submit(){/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,12}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,5}[a-zA-Z0-9])?)*$/gi.test(this.form.value.email)?(this.invalidEmail=!1,this.isLoading=!0,this.subscription=this.userService.checkForEmail(this.form.value.email).subscribe({next:i=>{this.isLoading=!1,"Email already in use"==i.message?(this.email.setErrors(s.kI.required),this.usedEmail=!0):this.dialogRef.close(this.form.value.email)},error:i=>{"404"==i.status?this.snackBar.open("Transaction not found","dismiss",{duration:3e3}):"502"==i.status?this.snackBar.open("Connection timed out, Try again later","dismiss",{duration:3e3}):(this.snackBar.open(i.message,"dismiss",{duration:3e3}),console.log("error =>"+i.message))}})):(this.email.setErrors(s.kI.required),this.invalidEmail=!0,this.usedEmail=!1)}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(r.so),t.Y36(s.qu),t.Y36(v),t.Y36(g.ux))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-email"]],decls:14,vars:7,consts:[["mat-dialog-content","","fxLayout","column","fxLayoutAlign","stretch",3,"formGroup"],["appearance","fill"],["autocomplete","false","matInput","",3,"formControl"],["class","error",4,"ngIf"],["mat-dialog-actions","","fxLayout","row","fxLayoutAlign","space-around center"],["mat-flat-button","","mat-dialog-close","",3,"color"],["mat-flat-button","",3,"color","disabled","click",4,"ngIf"],[3,"color","diameter",4,"ngIf"],[1,"error"],["mat-flat-button","",3,"color","disabled","click"],[3,"color","diameter"]],template:function(e,i){1&e&&(t.TgZ(0,"h1"),t._uU(1,"Update your email ?"),t.qZA(),t.TgZ(2,"form",0)(3,"mat-form-field",1)(4,"mat-label"),t._uU(5,"New email "),t.qZA(),t._UZ(6,"input",2),t.qZA(),t.YNc(7,E,2,0,"span",3),t.YNc(8,O,2,0,"span",3),t.qZA(),t.TgZ(9,"div",4)(10,"button",5),t._uU(11,"Cancel"),t.qZA(),t.YNc(12,Q,2,2,"button",6),t.YNc(13,F,1,2,"mat-spinner",7),t.qZA()),2&e&&(t.xp6(2),t.Q6J("formGroup",i.form),t.xp6(4),t.Q6J("formControl",i.email),t.xp6(1),t.Q6J("ngIf",i.invalidEmail),t.xp6(1),t.Q6J("ngIf",i.usedEmail),t.xp6(2),t.Q6J("color","primary"),t.xp6(2),t.Q6J("ngIf",!i.isLoading),t.xp6(1),t.Q6J("ngIf",i.isLoading))},directives:[s._Y,s.JL,r.xY,m.xw,m.Wh,s.sg,d.KE,d.hX,x.Nt,s.Fj,s.JJ,s.oH,u.O5,r.H8,p.lW,r.ZT,f.Ou],styles:[".error[_ngcontent-%COMP%]{color:red;font-size:1rem;font-weight:500}"]}),o})();function B(o,n){1&o&&(t.TgZ(0,"span",8),t._uU(1,"Invalid Phone number"),t.qZA())}function M(o,n){1&o&&(t.TgZ(0,"span",8),t._uU(1,"Phone number is used"),t.qZA())}function H(o,n){if(1&o){const e=t.EpF();t.TgZ(0,"button",9),t.NdJ("click",function(){return t.CHM(e),t.oxw().submit()}),t._uU(1,"Ok"),t.qZA()}if(2&o){const e=t.oxw();t.Q6J("color","accent")("disabled",!e.form.value.phone)}}function R(o,n){1&o&&t._UZ(0,"mat-spinner",10),2&o&&t.Q6J("color","accent")("diameter",40)}let W=(()=>{class o{constructor(e,i,a,c){this.dialogRef=e,this.formBuilder=i,this.userService=a,this.snackBar=c,this.invalidPhone=!1,this.usedPhone=!1,this.isLoading=!1}ngOnInit(){this.phone=this.formBuilder.control(""),this.form=this.formBuilder.group({phone:this.phone})}submit(){/^[\+]?[(]?[0-9]{2,6}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3}$/gim.test(this.form.value.phone)?(this.invalidPhone=!1,this.isLoading=!0,this.subscription=this.userService.checkForPhone(this.form.value.phone).subscribe({next:i=>{this.isLoading=!1,"Phone number already in use"==i.message?(this.usedPhone=!0,this.invalidPhone=!1,this.phone.setErrors(s.kI.required)):(this.dialogRef.close(this.form.value.phone),this.phone.setErrors(null))},error:i=>{"404"==i.status?this.snackBar.open("Operation not found","dismiss",{duration:3e3}):"502"==i.status?this.snackBar.open("Connection timed out, Try again later","dismiss",{duration:3e3}):(this.snackBar.open(i.message,"dismiss",{duration:3e3}),console.log("error =>"+i.message))}})):(this.phone.setErrors(s.kI.required),this.invalidPhone=!0,this.usedPhone=!1)}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(r.so),t.Y36(s.qu),t.Y36(v),t.Y36(g.ux))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-phone"]],decls:14,vars:7,consts:[["mat-dialog-content","","fxLayout","column","fxLayoutAlign","stretch",3,"formGroup"],["appearance","fill"],["autocomplete","false","matInput","",3,"formControl"],["class","error",4,"ngIf"],["mat-dialog-actions","","fxLayout","row","fxLayoutAlign","space-around center"],["mat-flat-button","","mat-dialog-close","",3,"color"],["mat-flat-button","",3,"color","disabled","click",4,"ngIf"],[3,"color","diameter",4,"ngIf"],[1,"error"],["mat-flat-button","",3,"color","disabled","click"],[3,"color","diameter"]],template:function(e,i){1&e&&(t.TgZ(0,"h1"),t._uU(1,"Update your phone ?"),t.qZA(),t.TgZ(2,"form",0)(3,"mat-form-field",1)(4,"mat-label"),t._uU(5,"New Phone "),t.qZA(),t._UZ(6,"input",2),t.qZA(),t.YNc(7,B,2,0,"span",3),t.YNc(8,M,2,0,"span",3),t.qZA(),t.TgZ(9,"div",4)(10,"button",5),t._uU(11,"Cancel"),t.qZA(),t.YNc(12,H,2,2,"button",6),t.YNc(13,R,1,2,"mat-spinner",7),t.qZA()),2&e&&(t.xp6(2),t.Q6J("formGroup",i.form),t.xp6(4),t.Q6J("formControl",i.phone),t.xp6(1),t.Q6J("ngIf",i.invalidPhone),t.xp6(1),t.Q6J("ngIf",i.usedPhone),t.xp6(2),t.Q6J("color","primary"),t.xp6(2),t.Q6J("ngIf",!i.isLoading),t.xp6(1),t.Q6J("ngIf",i.isLoading))},directives:[s._Y,s.JL,r.xY,m.xw,m.Wh,s.sg,d.KE,d.hX,x.Nt,s.Fj,s.JJ,s.oH,u.O5,r.H8,p.lW,r.ZT,f.Ou],styles:[".error[_ngcontent-%COMP%]{color:red;font-size:1rem;font-weight:500}"]}),o})();var y=l(8762);function G(o,n){1&o&&(t.TgZ(0,"small",8),t._uU(1,"Wrong password"),t.qZA())}function z(o,n){1&o&&(t.TgZ(0,"small",8),t._uU(1,"Passwords doesn't match"),t.qZA())}function X(o,n){if(1&o){const e=t.EpF();t.TgZ(0,"button",9),t.NdJ("click",function(){return t.CHM(e),t.oxw().submit()}),t._uU(1,"Update"),t.qZA()}if(2&o){const e=t.oxw();t.Q6J("color","accent")("disabled",!e.form.value.old_password)("disabled",!e.form.value.new_password)("disabled",!e.form.value.confirm_password)}}function $(o,n){1&o&&t._UZ(0,"mat-spinner",10),2&o&&t.Q6J("color","accent")("diameter",40)}let j=(()=>{class o{constructor(e,i,a,c,h){this.dialogRef=e,this.formBuilder=i,this.userService=a,this.loginService=c,this.snackBar=h,this.userId=this.loginService.getSessionFromStorage(Z.E),this.wrongPassword=!1,this.dontmatchPassword=!1,this.isLoading=!1}ngOnInit(){this.old_password=this.formBuilder.control(""),this.new_password=this.formBuilder.control(""),this.confirm_password=this.formBuilder.control(""),this.form=this.formBuilder.group({old_password:this.old_password,new_password:this.new_password,confirm_password:this.confirm_password})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}submit(){this.form.value.new_password!==this.form.value.confirm_password?(this.new_password.setErrors(s.kI.required),this.confirm_password.setErrors(s.kI.required),this.old_password.setErrors(null),this.dontmatchPassword=!0,this.wrongPassword=!1):(this.dontmatchPassword=!1,this.isLoading=!0,this.subscription=this.userService.checkForOldPassword(this.userId,this.form.value.old_password).subscribe({next:e=>{this.isLoading=!1,"Wrong password"==e.message?(this.old_password.setErrors(s.kI.required),this.new_password.setErrors(null),this.confirm_password.setErrors(null),this.wrongPassword=!0):this.dialogRef.close(this.form.value.new_password)},error:e=>{"404"==e.status?this.snackBar.open("Operation not found","dismiss",{duration:3e3}):"502"==e.status?this.snackBar.open("Connection timed out, Try again later","dismiss",{duration:3e3}):(this.snackBar.open(e.message,"dismiss",{duration:3e3}),console.log("error =>"+e.message))}}))}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(r.so),t.Y36(s.qu),t.Y36(v),t.Y36(y.r),t.Y36(g.ux))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-password"]],decls:22,vars:9,consts:[["mat-dialog-content","","fxLayout","column","fxLayoutAlign","stretch",3,"formGroup"],["appearance","fill"],["type","password","matInput","",3,"formControl"],["class","error",4,"ngIf"],["mat-dialog-actions","","fxLayout","row","fxLayoutAlign","space-around center"],["mat-flat-button","","mat-dialog-close","",3,"color"],["mat-flat-button","",3,"color","disabled","click",4,"ngIf"],[3,"color","diameter",4,"ngIf"],[1,"error"],["mat-flat-button","",3,"color","disabled","click"],[3,"color","diameter"]],template:function(e,i){1&e&&(t.TgZ(0,"h1"),t._uU(1,"Update your phone ?"),t.qZA(),t.TgZ(2,"form",0)(3,"mat-form-field",1)(4,"mat-label"),t._uU(5,"Old password "),t.qZA(),t._UZ(6,"input",2),t.qZA(),t.YNc(7,G,2,0,"small",3),t.TgZ(8,"mat-form-field",1)(9,"mat-label"),t._uU(10,"New password "),t.qZA(),t._UZ(11,"input",2),t.qZA(),t.YNc(12,z,2,0,"small",3),t.TgZ(13,"mat-form-field",1)(14,"mat-label"),t._uU(15,"Confirm password"),t.qZA(),t._UZ(16,"input",2),t.qZA()(),t.TgZ(17,"div",4)(18,"button",5),t._uU(19,"Cancel"),t.qZA(),t.YNc(20,X,2,4,"button",6),t.YNc(21,$,1,2,"mat-spinner",7),t.qZA()),2&e&&(t.xp6(2),t.Q6J("formGroup",i.form),t.xp6(4),t.Q6J("formControl",i.old_password),t.xp6(1),t.Q6J("ngIf",i.wrongPassword),t.xp6(4),t.Q6J("formControl",i.new_password),t.xp6(1),t.Q6J("ngIf",i.dontmatchPassword),t.xp6(4),t.Q6J("formControl",i.confirm_password),t.xp6(2),t.Q6J("color","primary"),t.xp6(2),t.Q6J("ngIf",!i.isLoading),t.xp6(1),t.Q6J("ngIf",i.isLoading))},directives:[s._Y,s.JL,r.xY,m.xw,m.Wh,s.sg,d.KE,d.hX,x.Nt,s.Fj,s.JJ,s.oH,u.O5,r.H8,p.lW,r.ZT,f.Ou],styles:[".error[_ngcontent-%COMP%]{color:red;margin-bottom:.5rem;font-weight:500}"]}),o})();var K=l(6290),T=l(4623),V=l(4834);function tt(o,n){if(1&o){const e=t.EpF();t.TgZ(0,"button",20),t.NdJ("click",function(){return t.CHM(e),t.oxw(3).updateProfile()}),t._uU(1,"Update"),t.qZA()}2&o&&t.Q6J("color","primary")}function et(o,n){1&o&&t._UZ(0,"mat-spinner",21),2&o&&t.Q6J("diameter",40)}function ot(o,n){if(1&o&&(t.TgZ(0,"div",17),t.YNc(1,tt,2,1,"button",18),t.YNc(2,et,1,1,"mat-spinner",19),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",!e.isUpdating),t.xp6(1),t.Q6J("ngIf",e.isUpdating)}}function it(o,n){if(1&o){const e=t.EpF();t.TgZ(0,"div",3)(1,"div",4),t.NdJ("click",function(){return t.CHM(e),t.oxw().openDialog("avatar")}),t._UZ(2,"img",5),t.qZA(),t.TgZ(3,"div",6)(4,"mat-list")(5,"mat-list-item",7),t.NdJ("click",function(){return t.CHM(e),t.oxw().openDialog("username")}),t._UZ(6,"img",8),t.TgZ(7,"div",9)(8,"span",10),t._uU(9,"username"),t.qZA(),t.TgZ(10,"span",11),t._uU(11),t.qZA()()(),t._UZ(12,"mat-divider"),t.TgZ(13,"mat-list-item",7),t.NdJ("click",function(){return t.CHM(e),t.oxw().openDialog("currency")}),t._UZ(14,"img",12),t.TgZ(15,"div",9)(16,"span",10),t._uU(17,"Currency"),t.qZA(),t.TgZ(18,"span",11),t._uU(19),t.qZA()()(),t._UZ(20,"mat-divider"),t.TgZ(21,"mat-list-item",7),t.NdJ("click",function(){return t.CHM(e),t.oxw().openDialog("email")}),t._UZ(22,"img",13),t.TgZ(23,"div",9)(24,"span",10),t._uU(25,"Email"),t.qZA(),t.TgZ(26,"span",11),t._uU(27),t.qZA()()(),t._UZ(28,"mat-divider"),t.TgZ(29,"mat-list-item",7),t.NdJ("click",function(){return t.CHM(e),t.oxw().openDialog("phone")}),t._UZ(30,"img",14),t.TgZ(31,"div",9)(32,"span",10),t._uU(33,"Phone"),t.qZA(),t.TgZ(34,"span",11),t._uU(35),t.qZA()()(),t._UZ(36,"mat-divider"),t.TgZ(37,"mat-list-item",7),t.NdJ("click",function(){return t.CHM(e),t.oxw().openDialog("password")}),t._UZ(38,"img",15),t.TgZ(39,"div",9)(40,"span",10),t._uU(41,"Password"),t.qZA(),t.TgZ(42,"span",11),t._uU(43,"**************"),t.qZA()()(),t._UZ(44,"mat-divider"),t.qZA(),t.YNc(45,ot,3,2,"div",16),t.qZA()()}if(2&o){const e=t.oxw();t.xp6(2),t.MGl("src","assets/avatars/",e.userData.avatar,".png",t.LSH),t.xp6(9),t.Oqu(e.userData.username),t.xp6(3),t.MGl("src","assets/flags/",e.userData.currency,".png",t.LSH),t.xp6(5),t.Oqu(e.userData.currency),t.xp6(8),t.Oqu(e.userData.email),t.xp6(8),t.Oqu(e.userData.phone),t.xp6(10),t.Q6J("ngIf",e.update)}}function nt(o,n){1&o&&(t.TgZ(0,"div",22),t._UZ(1,"mat-spinner",21),t.qZA()),2&o&&(t.xp6(1),t.Q6J("diameter",40))}const st=[{path:"",component:(()=>{class o{constructor(e,i,a,c){this.userService=e,this.loginService=i,this.snackBar=a,this.dialog=c,this.isLoading=!1,this.update=!1,this.isUpdating=!1,this.userId=this.loginService.getSessionFromStorage(Z.E),this.userCurrency=this.loginService.getSessionFromStorage(Z.t)}ngOnInit(){this.isLoading=!0,this.getData()}ngOnDestroy(){this.subscription.unsubscribe(),this.subscription2&&this.subscription2.unsubscribe()}getData(){this.subscription=this.userService.getUserData(this.userId).subscribe({next:e=>{this.userData=e,this.isLoading=!1},error:e=>{"404"==e.status?this.snackBar.open("Transaction not found","dismiss",{duration:3e3}):"502"==e.status?this.snackBar.open("Connection timed out, Try again later","dismiss",{duration:3e3}):(this.snackBar.open(e.message,"dismiss",{duration:3e3}),console.log("error =>"+e.message))}})}openDialog(e){let i,a,c;switch(e){case"avatar":i=this.dialog.open(L,{data:{name:c}}),a="avatar";break;case"username":i=this.dialog.open(I),a="username";break;case"currency":i=this.dialog.open(q,{data:{res:c}}),a="currency";break;case"email":i=this.dialog.open(N,{data:{res:c}}),a="email";break;case"phone":i=this.dialog.open(W,{data:{res:c}}),a="phone";break;case"password":i=this.dialog.open(j,{data:{res:c}}),a="password";break;default:throw new Error(`Invalid component name: ${e}`)}i.afterClosed().subscribe(h=>{h&&this.switch(a,h)})}switch(e,i){this.update=!0,this.userData[e]=i}updateProfile(){this.isUpdating=!0,this.subscription2=this.userService.updateUserData(this.userData).subscribe({next:e=>{this.isUpdating=!1,this.update=!1,this.snackBar.open(e.message,"dismiss",{duration:3e3}),this.getData(),this.loginService.saveSessionToStorage(this.userData.id,this.userData.currency)},error:e=>{this.isUpdating=!1,"404"==e.status?this.snackBar.open("user not found","dismiss",{duration:3e3}):"502"==e.status?this.snackBar.open("Connection timed out, Try again later","dismiss",{duration:3e3}):(this.snackBar.open(e.message,"dismiss",{duration:3e3}),console.log("error =>"+e.message))}})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(v),t.Y36(y.r),t.Y36(g.ux),t.Y36(r.uw))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-setting"]],decls:3,vars:3,consts:[[3,"title"],["class","container","fxLayout","column",4,"ngIf"],["class","spinner","fxLayoutAlign","center center",4,"ngIf"],["fxLayout","column",1,"container"],["fxLayout","column","fxLayoutAlign","center center",1,"avatar","clickable",3,"click"],["alt","avatar",3,"src"],[1,"details"],[1,"clickable",3,"click"],["fxFlex","15","src","assets/username.png","alt","user"],["fxLayout","column","fxFlex","","fxLayoutAlign","center start",1,"description"],[1,"name","color_A9A9A9","font_weight_500"],[1,"desc","font_weight_500"],["fxFlex","15","alt","currency",3,"src"],["fxFlex","15","src","assets/email.png","alt","email"],["fxFlex","15","src","assets/phone.png","alt","phone"],["fxFlex","15","src","assets/password.png","alt","password"],["class","update","fxLayout","column","fxLayoutAlign","center center",4,"ngIf"],["fxLayout","column","fxLayoutAlign","center center",1,"update"],["mat-flat-button","",3,"color","click",4,"ngIf"],[3,"diameter",4,"ngIf"],["mat-flat-button","",3,"color","click"],[3,"diameter"],["fxLayoutAlign","center center",1,"spinner"]],template:function(e,i){1&e&&(t._UZ(0,"app-header",0),t.YNc(1,it,46,7,"div",1),t.YNc(2,nt,2,1,"div",2)),2&e&&(t.Q6J("title","Profile"),t.xp6(1),t.Q6J("ngIf",!i.isLoading),t.xp6(1),t.Q6J("ngIf",i.isLoading))},directives:[K.G,u.O5,m.xw,m.Wh,T.i$,T.Tg,m.yH,V.d,p.lW,f.Ou],styles:["[_nghost-%COMP%]{min-width:100%}.container[_ngcontent-%COMP%]{min-height:90%;padding:1rem;max-width:375px;margin:auto}.details[_ngcontent-%COMP%]{margin-top:1rem}.description[_ngcontent-%COMP%]{margin-left:1rem}.avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:7rem;height:7rem}.spinner[_ngcontent-%COMP%]{margin:0;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.update[_ngcontent-%COMP%]{margin-top:2rem}.font_weight_500[_ngcontent-%COMP%]{font-weight:500}.color_A9A9A9[_ngcontent-%COMP%]{color:#a9a9a9}.clickable[_ngcontent-%COMP%]:hover{cursor:pointer}"]}),o})()}];let at=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[b.Bz.forChild(st)]]}),o})();var rt=l(4733);let lt=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[u.ez,at,rt.m]]}),o})()}}]);