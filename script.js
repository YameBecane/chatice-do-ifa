const menuBtn =
document.getElementById("menuBtn");


const menu =
document.getElementById("menu");



menuBtn.onclick = () => {

menu.classList.toggle("show");

};





let slides =
document.querySelectorAll(".slide");


let dots =
document.querySelectorAll(".dot");


let index=0;



function changeSlide(){


slides.forEach(
slide =>
slide.classList.remove("active")
);


dots.forEach(
dot =>
dot.classList.remove("active")
);



index++;


if(index >= slides.length){

index=0;

}



slides[index]
.classList.add("active");


dots[index]
.classList.add("active");


}



setInterval(changeSlide,4000);




window.onclick = (event)=>{


if(!event.target.matches("#menuBtn")){

menu.classList.remove("show");

}


}
