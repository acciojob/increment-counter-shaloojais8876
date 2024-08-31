//your JS code here. If required.
const para = document.getElementById("counter");
const btn = document.getElementById("incrementBtn");

incrementBtn.addEventListener("click", ()=>{
let count = Number(para.innerText);
	para.innerText = ++count;
	alert(count);
})
