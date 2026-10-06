window.onload = function () {
    alert("ようこそ！かるたの世界へ！");
}
window.addEventListener("scroll",function(){

const nav=document.querySelector(".navbar");

if(window.scrollY>50){

nav.style.background="#111827";

}

else{

nav.style.background="darkcyan";

}

});
const sections=document.querySelectorAll("section");

window.addEventListener("scroll",function(){

sections.forEach(section=>{

const position=section.getBoundingClientRect().top;

if(position<window.innerHeight-100){

section.style.opacity="1";

section.style.transform="translateY(0)";

}

});

});
document.getElementById("showVideo").onclick = function () {
    document.getElementById("videoContainer").style.display = "block";
};
document.querySelector(".banner button").onclick=function(){

window.open("https://www.google.com/search?q=Karuta+Club");

}