!function(){function t(t,n){return new Promise((function(e,o){var a=Math.random()>.3;setTimeout((function(){a?e({position:t,delay:n}):o({position:t,delay:n})}),n)}))}document.querySelector(".form").addEventListener("submit",(function(n){n.preventDefault();for(var e=new FormData(n.target),o=parseInt(e.get("delay")),a=parseInt(e.get("step")),i=parseInt(e.get("amount")),c=0;c<i;c+=1)t(c+1,o+a*c).then((function(t){var n=t.position,e=t.delay;console.log("✅ Fulfilled promise ".concat(n," in ").concat(e,"ms"))})).catch((function(t){var n=t.position,e=t.delay;console.log("❌ Rejected promise ".concat(n," in ").concat(e,"ms"))}))}))}();
//# sourceMappingURL=03-promises.75f652bc.js.map
