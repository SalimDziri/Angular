"use strict";(self.webpackChunkMyMoney=self.webpackChunkMyMoney||[]).push([[589],{6589:(E,d,i)=>{i.r(d),i.d(d,{HomeModule:()=>L});var a=i(9808),f=i(9524),x=i(8330),p=i(7503),y=i(9841),e=i(5e3),_=i(8480),D=i(8762),m=i(7093),u=i(3322),C=i(9224),A=i(5245),g=i(3379),M=i(4834);let v=(()=>{class n{transform(t){let o=new Date(t),r=new Date,l=new Date((new Date).setDate((new Date).getDate()-1)),c=new Date;c.setDate(r.getDate()-r.getDay());let h=c;return h.setDate(c.getDate()-7),o.setHours(0,0,0,0)==r.setHours(0,0,0,0)?"Today":o.setHours(0,0,0,0)==l.setHours(0,0,0,0)?"Yesterday":o>c&&o<l?"This week: ":o<c&&o>h?"Last week: ":"This month: "}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275pipe=e.Yjl({name:"elapsedTime",type:n,pure:!0}),n})(),Z=(()=>{class n{transform(t){return t.length>15?t.slice(0,15)+" ...":t}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275pipe=e.Yjl({name:"description",type:n,pure:!0}),n})();function w(n,s){1&n&&(e.TgZ(0,"mat-icon",17),e._uU(1,"arrow_upward"),e.qZA())}function T(n,s){1&n&&(e.TgZ(0,"mat-icon",18),e._uU(1,"arrow_downward"),e.qZA())}function S(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"mat-list-item",23),e.NdJ("click",function(){const l=e.CHM(t).$implicit;return e.oxw(2).showDetails(l.time.toString())}),e._UZ(1,"img",24),e.TgZ(2,"div",25)(3,"span",26),e._uU(4),e.qZA(),e.TgZ(5,"span",27),e._uU(6),e.ALo(7,"description"),e.qZA()(),e.TgZ(8,"div",28)(9,"span",29),e._uU(10),e.ALo(11,"number"),e.qZA(),e.TgZ(12,"span",30),e._uU(13),e.qZA()()()}if(2&n){const t=s.$implicit,o=e.oxw(2);e.xp6(1),e.MGl("src","assets/categories/",t.category,".png",e.LSH),e.xp6(3),e.Oqu(t.category),e.xp6(2),e.Oqu(e.lcZ(7,6,t.description)),e.xp6(4),e.AsE("",e.xi3(11,8,t.amount,"1.0-3")," ",o.userCurrency,""),e.xp6(3),e.Oqu(t.time)}}function O(n,s){if(1&n&&(e.TgZ(0,"mat-list")(1,"div",19)(2,"span",20),e._uU(3),e.ALo(4,"elapsedTime"),e.ALo(5,"date"),e.qZA(),e.TgZ(6,"span",21),e._uU(7),e.ALo(8,"number"),e.qZA()(),e._UZ(9,"mat-divider"),e.YNc(10,S,14,11,"mat-list-item",22),e.qZA()),2&n){const t=s.$implicit,o=e.oxw();e.xp6(3),e.AsE("",e.lcZ(4,5,t.date)," ",e.xi3(5,7,t.date,"mediumDate"),""),e.xp6(4),e.AsE("",e.xi3(8,10,t.total,"1.0-3")," ",o.userCurrency,""),e.xp6(3),e.Q6J("ngForOf",t.transactions)}}const P=function(n){return{color:n}},H=[{path:"",component:(()=>{class n{constructor(t,o){this.transactionsService=t,this.loginService=o,this.month=((new Date).getMonth()+1).toString().length>1?((new Date).getMonth()+1).toString():"0"+((new Date).getMonth()+1).toString(),this.Lastmonth=(Number(this.month)-1).toString(),this.year=(new Date).getFullYear().toString(),this.date=this.month.toString().slice(-2)+"-"+(new Date).getFullYear().toString(),this.userId=this.loginService.getSessionFromStorage(p.E),this.userCurrency=this.loginService.getSessionFromStorage(p.t),this.transaction_monthly_data=[],this.currentExpense$=this.transactionsService.getCurrentMonthExpenseTotal(this.userId,this.year,this.month),this.lastExpense$=this.transactionsService.getCurrentMonthExpenseTotal(this.userId,this.year,this.Lastmonth),this.dailyHistory$=this.transactionsService.getDailyTransaction(this.userId,this.year,this.month),this.current_expense=0,this.last_expense=0,this.expense_difference=0,this.datas=[{date:"date1",total:999.999,transactions:[{id:1,category:"drinks",name:"Photos",description:"azertyuiopppppp............................................................",amount:250,time:new Date("1/1/16").toString()},{id:2,category:"toiletterie",name:"Recipes",description:"desc...",amount:250,time:new Date("1/17/16").toString()},{id:3,category:"transportation",name:"Work",description:"desc...",amount:"250.00",time:new Date("1/28/16").toString()}]},{date:"date2",total:555.555,transactions:[{id:4,category:"household",name:"Photos",description:"desc...",amount:250,time:new Date("1/1/16").toString()},{id:1,category:"cafe",name:"Recipes",description:"desc...",amount:250,time:new Date("1/17/16").toString()},{id:1,category:"grocery",name:"Work",description:"desc...",amount:250,time:new Date("1/28/16").toString()}]},{date:"date3",total:777.777,transactions:[{id:4,category:"household",name:"Photos",description:"desc...",amount:250,time:new Date("1/1/16").toString()},{id:1,category:"cafe",name:"Recipes",description:"desc...",amount:250,time:new Date("1/17/16").toString()},{id:1,category:"grocery",name:"Work",description:"desc...",amount:250,time:new Date("1/28/16").toString()}]}],this.dailyHistory=[]}ngOnInit(){this.getMonthlyExpensesData()}showDetails(t){console.log(t)}getExpencesDifference(t,o){return 0==t?o:o/t*100-100}getMonthlyExpensesData(){this.currentExpense$.subscribe(t=>{console.log("current: "+t),this.current_expense=t}),this.lastExpense$.subscribe(t=>{console.log("last:"+t),this.last_expense=t}),(0,y.a)([this.currentExpense$,this.lastExpense$]).subscribe(([t,o])=>{const r=this.getExpencesDifference(o,t);this.expense_difference=Math.trunc(r)}),this.dailyHistory$.subscribe(t=>{this.dailyHistory=t})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(_.v),e.Y36(D.r))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-home"]],decls:25,vars:11,consts:[["fxLayout","column","fxLayout.lg","row","fxShow","","fxHide.xs","",1,"desktop"],["fxFlex","70%"],[1,"total_expense","height_50"],[1,"yearly_statestic","height_50"],["fxFlex","30%",1,"daily_statestic"],[1,"mobile"],[1,"expense"],["fxLayout","column","fxLayoutAlign","center center"],[1,"expense_title"],["style","color:red",4,"ngIf"],["style","color:green",4,"ngIf"],[3,"ngStyle"],["fxLayout","row","fxLayoutAlign","center center",1,"expense_value"],[1,"expense_flag"],["src","assets/flags/TND.png"],[1,"history"],[4,"ngFor","ngForOf"],[2,"color","red"],[2,"color","green"],["mat-subheader",""],["fxFlex","50","fxLayoutAlign","start",1,"date"],["fxFlex","50","fxLayoutAlign","end",1,"daily_total"],[3,"click",4,"ngFor","ngForOf"],[3,"click"],["fxFlex","10",1,"category",3,"src"],["fxLayout","column","fxFlex","45","fxLayoutAlign","center start",1,"description"],[1,"name","font_weight_500"],[1,"desc","color_A9A9A9"],["fxLayout","column","fxFlex","45","fxLayoutAlign","center end",1,"value"],[1,"amount","font_weight_500"],[1,"hour","color_A9A9A9"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e._uU(3," . "),e.qZA(),e.TgZ(4,"div",3),e._uU(5," . "),e.qZA()(),e.TgZ(6,"div",4),e._uU(7," . "),e.qZA()(),e.TgZ(8,"div",5)(9,"div",6)(10,"mat-card",7)(11,"p",8),e._uU(12,"Spent this month "),e.YNc(13,w,2,0,"mat-icon",9),e.YNc(14,T,2,0,"mat-icon",10),e.TgZ(15,"span",11),e._uU(16),e.qZA()(),e.TgZ(17,"p",12)(18,"span"),e._uU(19),e.ALo(20,"number"),e.qZA(),e.TgZ(21,"span",13),e._UZ(22,"img",14),e.qZA()()()(),e.TgZ(23,"div",15),e.YNc(24,O,11,13,"mat-list",16),e.qZA()()),2&t&&(e.xp6(13),e.Q6J("ngIf",o.expense_difference>0),e.xp6(1),e.Q6J("ngIf",o.expense_difference<0),e.xp6(1),e.Q6J("ngStyle",e.VKq(9,P,o.expense_difference>0?"red":"green")),e.xp6(1),e.hij("",o.expense_difference," %"),e.xp6(3),e.hij("",e.xi3(20,6,o.current_expense,"1.0-3")," "),e.xp6(5),e.Q6J("ngForOf",o.dailyHistory))},directives:[m.xw,u.b8,m.yH,C.a8,m.Wh,a.O5,A.Hw,a.PC,u.Zl,a.sg,g.i$,g.gs,M.d,g.Tg],pipes:[a.JJ,v,a.uU,Z],styles:[".desktop[_ngcontent-%COMP%]{height:100%}.total_expense[_ngcontent-%COMP%]{background-color:red}.yearly_statestic[_ngcontent-%COMP%]{background-color:#00f}.daily_statestic[_ngcontent-%COMP%]{background-color:green}.mobile[_ngcontent-%COMP%]{min-width:300px;padding-bottom:5rem}.expense[_ngcontent-%COMP%]{margin:1rem;min-width:20rem}.expense[_ngcontent-%COMP%]   .expense_title[_ngcontent-%COMP%]{font-size:1rem}.expense[_ngcontent-%COMP%]   .expense_title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{height:1rem;width:1rem;font-size:1rem}.expense[_ngcontent-%COMP%]   .expense_value[_ngcontent-%COMP%]{font-weight:500;font-size:3rem}.expense[_ngcontent-%COMP%]   .expense_flag[_ngcontent-%COMP%]{margin-left:1rem}.history[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%]{margin:.5rem}.height_50[_ngcontent-%COMP%]{height:50%}.font_weight_500[_ngcontent-%COMP%]{font-weight:500}.color_A9A9A9[_ngcontent-%COMP%]{color:#a9a9a9}.mat-subheader[_ngcontent-%COMP%]{padding:0 1rem}"]}),n})()}];let F=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[x.Bz.forChild(H)]]}),n})(),L=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[a.ez,F,f.m]]}),n})()}}]);