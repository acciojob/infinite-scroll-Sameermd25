//your code here!
const ol=document.getElementById("infi-list");
for(let i=1;i<=10;i++){
	createLi(i);
}
let count=11;
ol.addEventListener("scroll",()=>{
	createLi(count++)
})
function createLi(i) {
	const li=document.createElement("li");
	li.innerText=`Item ${i}`;
	ol.appendChild(li);
}
