const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");let d=null;function n(d){if(d)return t.disabled=!0,void(e.disabled=!1);t.disabled=!1,e.disabled=!0}t.addEventListener("click",(function(){d=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,"0")}`}),1e3),n(!0)})),e.addEventListener("click",(function(){clearInterval(d),n(!1)}));
//# sourceMappingURL=01-color-switcher.2d8f8c65.js.map
