!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),n=null;function a(n){if(n)return t.disabled=!0,void(e.disabled=!1);t.disabled=!1,e.disabled=!0}t.addEventListener("click",(function(){n=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,"0"))}),1e3),a(!0)})),e.addEventListener("click",(function(){clearInterval(n),a(!1)}))}();
//# sourceMappingURL=01-color-switcher.dc047001.js.map
