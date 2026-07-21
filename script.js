window.addEventListener("load",()=>{

document.body.style.opacity="1";

});

const sections=document.querySelectorAll(".page");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{threshold:0.25});

sections.forEach(section=>{

observer.observe(section);

});
