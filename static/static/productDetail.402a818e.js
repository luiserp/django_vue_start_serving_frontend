import{r as n,b as m,T as f,o as r,c as p,a as t,t as d,n as w,_ as y,u as x,g as k,d as C,h as T,v as $,e as I,i as D,F as N,p as S,j as B,k as v}from"./index.5cb6e4a5.js";const V={class:"d-flex"},P={class:"toast-body"},q=t("button",{type:"button",class:"btn-close btn-close-white me-2 m-auto","data-bs-dismiss":"toast","aria-label":"Close"},null,-1),F={__name:"toastNotification",props:["message","bgclass"],emits:["timeout"],setup(e,{emit:i}){const l=n(null);m(()=>{s()});const s=()=>{new f(l.value).show(),setTimeout(()=>{i("timeout")},5e3)};return(a,o)=>(r(),p("div",{ref_key:"toast",ref:l,class:w([[e.bgclass],"toast bottom-0 end-0 mb-5 me-4 position-absolute align-items-center text-white border-0"]),role:"alert","aria-live":"assertive","aria-atomic":"true"},[t("div",V,[t("div",P,d(e.message),1),q])],2))}};const h=e=>(S("data-v-927d9054"),e=e(),B(),e),M={class:"row mt-5 container"},R={class:"col-9"},j=["src","alt"],z={class:"pt-5"},A={class:"ps-2"},E={class:"col-3"},U=h(()=>t("h3",null,"Information",-1)),G={class:"mt-4 fw-bold"},H=v("Price: "),J={class:"fw-normal"},K={class:"input-group mb-3"},L=h(()=>t("i",{class:"bi bi-cart-plus-fill"},null,-1)),O=v(" Add to Car"),Q=[L,O],W={__name:"productDetail",setup(e){const i=x(),l=k(),s=n({}),a=n(1),o=n(!1);m(()=>{g()});const b=()=>{l.commit("addItemtoCart",{product:s.value,quantity:a.value}),o.value=!0},g=async()=>{await C.get(`api/v1/products/${i.params.category}/${i.params.slug}/`).then(u=>{s.value=u.data})};return(u,c)=>(r(),p(N,null,[t("div",null,[t("div",M,[t("div",R,[t("img",{class:"img-fluid",src:s.value.get_image,alt:s.value.name},null,8,j),t("h4",z,d(s.value.name),1),t("p",A,d(s.value.description),1)]),t("div",E,[U,t("p",G,[H,t("span",J,d(s.value.price),1)]),t("form",null,[t("div",K,[T(t("input",{type:"text",class:"form-control","onUpdate:modelValue":c[0]||(c[0]=_=>a.value=_),"aria-label":"Recipient's username","aria-describedby":"add_to_car_btn"},null,512),[[$,a.value]]),t("button",{onClick:b,class:"btn btn-outline-dark",type:"button",id:"add_to_car_btn"},Q)])])])])]),o.value?(r(),I(F,{key:0,onTimeout:c[1]||(c[1]=_=>o.value=!o.value),ref:"toast",message:"Product was added to the cart.",bgclass:"bg-success"},null,512)):D("",!0)],64))}};var Y=y(W,[["__scopeId","data-v-927d9054"]]);export{Y as default};