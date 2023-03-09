let menu = document.querySelector("#menu-btn")
let navbar = document.querySelector(".navbar")

menu.addEventListener("click" , openBars) ;

menu.onclick = () => {
    menu.classList.toggle("fa-times")
    navbar.classList.toggle(".active")
}

//open Bar
function openBars() {
        if(navbar.style.display=="block") {
            navbar.style.display= "none" ;
        }else {
            navbar.style.display = "block" ;
        }
}
/*********************************************************************/

//Start Doctors Section

let doctorsData = [
    {
        id : 1 ,
        imageUrl : "images/doc-1.jpg" ,
        name : "Jhon Doe" ,
        job : "Expert Doctor"
    },
    {
        id : 1 ,
        imageUrl : "images/doc-2.jpg" ,
        name : "Jhon Doe" ,
        job : "Expert Doctor"
    },
    {
        id : 1 ,
        imageUrl : "images/doc-3.jpg" ,
        name : "Jhon Doe" ,
        job : "Expert Doctor"
    },
    {
        id : 1 ,
        imageUrl : "images/doc-4.jpg" ,
        name : "Jhon Doe" ,
        job : "Expert Doctor"
    },
    {
        id : 1 ,
        imageUrl : "images/doc-5.jpg" ,
        name : "Jhon Doe" ,
        job : "Expert Doctor"
    },
    {
        id : 6 ,
        imageUrl : "images/doc-6.jpg" ,
        name : "Jhon Doe" ,
        job : "Expert Doctor"
    },
];

let doctorsDom = document.querySelector('.doctors .container') ;

function drawDoctorsUI() {
    let doctorsUI = doctorsData.map((item)=>{
        return `
        <div class="doctor-box">
            <img src="${item.imageUrl}" alt="">
            <div class="text-info">
                <h3 class="doc-name">${item.name}</h3>
                <p class="doc-job">${item.job}</p>
            </div>
            <ul class="icons">
                <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                <a href="#"><i class="fa-brands fa-instagram"></i></a>
                <a href="#"><i class="fa-brands fa-linkedin"></i></a>
                <a href="#"><i class="fa-brands fa-twitter"></i></a>
            </ul>
        </div>
        `
    });
    doctorsDom.innerHTML=doctorsUI.join("");
};
drawDoctorsUI() ;