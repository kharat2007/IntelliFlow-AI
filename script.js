document.querySelectorAll(".faq-question").forEach(btn=>{

btn.addEventListener("click",()=>{

const answer=btn.nextElementSibling;

answer.style.display=
answer.style.display==="block"?"none":"block";

});

});
document.querySelector(".contact-form").addEventListener("submit",function(e){

e.preventDefault();

alert("✅ Thank you! Our AI team will contact you soon.");

this.reset();

});
const counters=document.querySelectorAll(".counter");

counters.forEach(counter=>{

const update=()=>{

const target=+counter.dataset.target;

const count=+counter.innerText;

const speed=80;

const inc=target/speed;

if(count<target){

counter.innerText=Math.ceil(count+inc);

setTimeout(update,25);

}else{

counter.innerText=target+"+";

}

};

update();

});
document.querySelectorAll(".faq-btn").forEach(btn=>{

btn.onclick=()=>{

const content=btn.nextElementSibling;

content.style.display=
content.style.display==="block"?"none":"block";

};

});

document.querySelector(".contact-form").addEventListener("submit",e=>{

e.preventDefault();

alert("✅ Message Sent Successfully!");

e.target.reset();

});
const topBtn=document.getElementById("topBtn");

window.onscroll=()=>{

if(document.documentElement.scrollTop>400){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

};

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};
document.querySelector(".play-btn").onclick = () => {
    window.open("https://youtube.com/watch?v=YOUR_VIDEO_ID","_blank");
};