import{g as p,l as d,o as l,c as m,a as t,t as n,k as h,m as _,r as b,q as f,F as y,s as k,e as v}from"./index.5cb6e4a5.js";const I=t("i",{class:"bi bi-dash-lg"},null,-1),C=[I],F=t("i",{class:"bi bi-plus-lg"},null,-1),q=[F],x=t("i",{class:"bi bi-x-lg"},null,-1),$=[x],g={__name:"cartElement",props:["item"],setup(a){const s=a,e=p(),r=d(()=>(parseFloat(s.item.product.price)*parseInt(s.item.quantity)).toFixed(2)),i=()=>{e.commit("removeItemfromCart",s.item)},o=()=>{e.commit("addItemtoCart",{product:s.item.product,quantity:1})},c=()=>{e.commit("removeItemfromCart",{product:s.item.product,quantity:1})};return(u,V)=>(l(),m("tr",null,[t("td",null,n(a.item.product.name),1),t("td",null,n(a.item.product.price),1),t("td",null,[h(n(a.item.quantity)+" ",1),t("button",{onClick:c,class:"btn rounded-circle"},C),t("button",{onClick:o,class:"btn rounded-circle"},q)]),t("td",null,n(_(r)),1),t("td",null,[t("button",{onClick:i,class:"btn"},$)])]))}},B={class:"container"},P=t("h2",{class:"my-3"},"Cart",-1),w={class:"table shadow-sm"},Q=t("thead",null,[t("tr",null,[t("th",{scope:"col"},"Product"),t("th",{scope:"col"},"Price"),t("th",{scope:"col"},"Quantity"),t("th",{scope:"col"},"Total"),t("th",{scope:"col"})])],-1),S={class:"container-fluid shadow-sm p-3"},T=t("h3",null,"Summary",-1),E=t("span",{class:"fw-bold"},"Total: ",-1),N=t("button",{class:"btn btn-dark my-3"},"Proceed to checkout",-1),L={__name:"cart",setup(a){const s=p(),e=b({});f(()=>{e.value=s.state.cart});const r=d(()=>{let o=0;for(let c of e.value.items)o+=parseFloat(c.product.price)*parseFloat(c.quantity);return o.toFixed(2)}),i=d(()=>{let o=0;for(let c of e.value.items)o+=parseFloat(c.quantity);return o});return(o,c)=>(l(),m("div",B,[P,t("table",w,[Q,t("tbody",null,[(l(!0),m(y,null,k(e.value.items,u=>(l(),v(g,{key:u.product.id,item:u},null,8,["item"]))),128))])]),t("div",S,[T,t("p",null,[E,h(n(_(r))+", "+n(_(i))+" Items",1)])]),N]))}};export{L as default};
