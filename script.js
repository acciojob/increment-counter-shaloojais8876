//your JS code here. If required.
const para = document.getElementById("counter");
const btn = document.getElementById("incrementBtn");
let count = 0;
incrementBtn.addEventListener("click", ()=>{

	para.innerText = ++count;
	alert("un-incremented value");
})
