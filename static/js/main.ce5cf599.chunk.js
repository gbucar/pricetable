(this.webpackJsonppricelist=this.webpackJsonppricelist||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var i=a(1),n=a.n(i),r=a(9),s=a.n(r),o=(a(14),a(2)),c=a(3),l=a(4),u=a(6),k=a(5),d=(a(15),a(16),a(0)),j=function(e){Object(u.a)(a,e);var t=Object(k.a)(a);function a(e){var i;Object(o.a)(this,a),i=t.call(this,e);var r={},s=Object.keys(i.props.items);for(var c in s)r[s[c]]=n.a.createRef();return i.state={refs:r},i}return Object(c.a)(a,[{key:"componentWillReceiveProps",value:function(e){e.current&&this.state.refs[e.current].current.scrollIntoView({behavior:"smooth"})}},{key:"render",value:function(){var e=this;return Object(d.jsx)("div",{id:"content",children:Object.keys(this.props.items).map((function(t){return Object(d.jsxs)("div",{className:"content-block",ref:e.state.refs[t],children:[Object(d.jsx)("div",{id:t,className:"content-block-title",children:t}),Object(d.jsx)("div",{className:"content-block-items",children:e.props.items[t].map((function(e){return Object(d.jsxs)("div",{className:"content-block-item",children:[Object(d.jsx)("div",{className:"product",children:e[0]}),Object(d.jsx)("div",{className:"cost",children:String(e[1]).replace(".",",")+" \u20ac"})]},e)}))})]})}))})}}]),a}(n.a.Component),p=function(e){Object(u.a)(a,e);var t=Object(k.a)(a);function a(e){var i;return Object(o.a)(this,a),(i=t.call(this,e)).state={},i.handleClick=i.handleClick.bind(Object(l.a)(i)),i}return Object(c.a)(a,[{key:"handleClick",value:function(e){this.props.setCurrent(e)}},{key:"render",value:function(){var e=this;return Object(d.jsx)("div",{id:"navbar",children:this.props.options.map((function(t){return Object(d.jsx)("div",{className:"options",onClick:function(){return e.handleClick(t)},children:Object(d.jsx)("div",{children:t})})}))})}}]),a}(n.a.Component),b=a(8),h=function(e){Object(u.a)(a,e);var t=Object(k.a)(a);function a(e){var i;return Object(o.a)(this,a),(i=t.call(this,e)).state={items:b,options:Object.keys(b),current:""},i.setCurrent=i.setCurrent.bind(Object(l.a)(i)),i}return Object(c.a)(a,[{key:"setCurrent",value:function(e){this.setState({current:e})}},{key:"render",value:function(){return Object(d.jsxs)("div",{id:"wrapper",children:[Object(d.jsx)(p,{options:this.state.options,setCurrent:this.setCurrent}),Object(d.jsx)(j,{items:this.state.items,current:this.state.current})]})}}]),a}(n.a.Component);s.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(h,{})}),document.getElementById("root"))},8:function(e){e.exports=JSON.parse('{"BOMBONI":[["Chupa Chups lizika",0.4],["Chupa Chups velika",0.8],["Haribo 100g",1.2],["Mentos",0.9],["kislice",0.3],["\u017eve\u010dilni gumi",0.6],["Mr.Twister",0.6],["Mr.Frogster",0.6],["Skittles",0.6]],"PIJA\u010cA":[["Pepsi 1,5L",1.3],["Pepsi 0,5L",0.8],["Coca Cola 1,5L",1.3],["Cockta 1,5L",1.4],["Cockta 0,5L",0.9],["Cola Mercator 0,5L",0.5],["Cola Mercator 1,5L",0.8],["ledeni \u010daj 0,5L",0.6],["ledeni \u010daj 1,5L",1.1],["Multisola 0,5L",0.7],["Multisola 1,5L",1.1],["Sprite 1,5L",1.4],["Sprite 0,5L",0.9],["Zala z okusom 0,5L",0.6],["Zala z okusom 1,5L",1],["jagodni sok 1L",2.4],["Fanta 1,5L",1.4],["Fanta 0,5L",0.9],["Cedevita 200g",2],["\u010caj",0.2]],"SLADOLED":[["Maksim lu\u010dka",1.8],["Lu\u010dka",0.7],["Je\u017eek",0.8],["Tom",0.8],["lu\u010dka lubenica",0.7],["kaktus",0.6],["kornet double chocolate",2.2],["kornet stracciatella ali gozdni sade\u017ei",1.4],["kornet vanilija",1.4],["\u017eogica",0.6],["Lon\u010dek",1],["ledenka",0.8],["Planica 1L",4.2],["Planica lu\u010dka",1.6],["Tablerone lu\u010dka",0.8]],"MLE\u010cNI IZDELKI":[["ledena kava 1L",1.7],["ledena kava 0,2L",0.5],["mleko",1],["kakav",0.4],["kapu\u010dino",0.3],["vro\u010da \u010dokolada",0.6],["\u010dokoladno mleko 0,5L",1.2],["smetana",1.4]],"\u010cOKOLADNI IZDELKI":[["Milka",1.2],["Milka (bela, jagodna, tuc, oreo, le\u0161nik, itd.)",1.3],["Milka velika",3.2],["temna \u010dokolada",2.2],["Wafelini",0.4],["Kinder \u010dokoladice",1],["Kinder bueno",0.9],["Kinder pingui /     milch-schnithe",0.7],["Kinder maxi king",0.8],["Mars",0.7],["Leo",0.6],["7 days roglji\u010dek",0.6],["7 days mini 60g",0.8],["7 days mini 185g",1.5],["Bounty",0.7],["Doma\u010dica",2.5],["Oreo 66g",0.8],["Jaffa",1.2],["Gran Cereale",1.8],["Nutella 400g",3.5],["Snikers",0.7],["Toffiffe",2.2],["Twix",0.8]],"SLANI IZDELKI":[["Bake Rolls",0.8],["Pombar",1.5],["Pombar ke\u010dap",1.5],["kokice",1],["Smoki",1.4],["torilla \u010dips",1.2],["\u010dips paprika, navaden, sir, \u010debula",2.1],["\u0160tapi\u010di",1],["ara\u0161idi",1],["Pringles",2.6],["\u0161tudentska hrana",2.1]],"UPORABNO":[["instant rezanci v lon\u010dku",2],["toast",1.4],["toast sir",1.2],["zamrznjena pica",2],["med",0.3],["viki krema",0.4],["sladkor",0.1],["slamica",0.05],["vlo\u017eki",2],["svin\u010dnik",0.3],["lepilo",0.6]]}')}},[[18,1,2]]]);
//# sourceMappingURL=main.ce5cf599.chunk.js.map