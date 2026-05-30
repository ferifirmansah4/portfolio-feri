// ==============================
// TYPING EFFECT
// ==============================

var typed = new Typed("#typing", {

    strings: [

        "Web Developer",
        "Laravel Developer",
        "Data Entry",
        "Administrator",
        "Problem Solver"

    ],

    typeSpeed: 80,
    backSpeed: 50,
    backDelay: 1500,
    loop: true

});

// ==============================
// PARTICLES BACKGROUND
// ==============================

particlesJS("particles-js", {

    particles: {

        number: {
            value: 90
        },

        color: {
            value: "#8b5cf6"
        },

        shape: {
            type: "circle"
        },

        opacity: {
            value: 0.5
        },

        size: {
            value: 3
        },

        line_linked: {

            enable: true,

            distance: 150,

            color: "#8b5cf6",

            opacity: 0.3,

            width: 1

        },

        move: {

            enable: true,

            speed: 2

        }

    }

});

// ==============================
// SCROLL REVEAL
// ==============================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll(

'.project-card,.skill-card,.certificate-card,.about-card,.contact-container a'

).forEach(el => {

    el.classList.add("hidden");

    observer.observe(el);

});

// ==============================
// PARALLAX PROFILE
// ==============================

document.addEventListener("mousemove", (e)=>{

    const card = document.querySelector(".profile-card");

    if(!card) return;

    let x = (window.innerWidth / 2 - e.pageX) / 30;

    let y = (window.innerHeight / 2 - e.pageY) / 30;

    card.style.transform =
    `rotateY(${x}deg) rotateX(${y}deg)`;

});

// ==============================
// ACTIVE NAVBAR
// ==============================

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(".navbar ul li a");

window.addEventListener("scroll", ()=>{

    let current = "";

    sections.forEach(section => {

        const sectionTop =
        section.offsetTop - 150;

        if(pageYOffset >= sectionTop){

            current =
            section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(
            link.getAttribute("href")
            === "#" + current
        ){

            link.classList.add("active");

        }

    });

});

// ==============================
// HERO COUNTER ANIMATION
// ==============================

const counters =
document.querySelectorAll(".counter");

const speed = 100;

counters.forEach(counter => {

    const animate = () => {

        const value =
        +counter.getAttribute("data-target");

        const data =
        +counter.innerText;

        const time =
        value / speed;

        if(data < value){

            counter.innerText =
            Math.ceil(data + time);

            setTimeout(animate,20);

        }

        else{

            counter.innerText = value;

        }

    }

    animate();

});

// ==============================
// NAVBAR SHADOW
// ==============================

window.addEventListener("scroll", ()=>{

    const navbar =
    document.querySelector(".navbar");

    navbar.classList.toggle(
        "scrolled",
        window.scrollY > 50
    );

});

// ==============================
// FLOATING PARTICLE CURSOR
// ==============================

const cursor = document.createElement("div");

cursor.classList.add("cursor-glow");

document.body.appendChild(cursor);

document.addEventListener(

"mousemove",

(e)=>{

cursor.style.left =
e.clientX + "px";

cursor.style.top =
e.clientY + "px";

}

);

// ==============================
// PROJECT HOVER EFFECT
// ==============================

document.querySelectorAll(

".project-card"

).forEach(card=>{

card.addEventListener(

"mousemove",

(e)=>{

const rect =
card.getBoundingClientRect();

const x =
e.clientX - rect.left;

const y =
e.clientY - rect.top;

card.style.transform =

`
perspective(1000px)
rotateY(${(x - rect.width/2)/15}deg)
rotateX(${-(y - rect.height/2)/15}deg)
scale(1.03)
`;

});

card.addEventListener(

"mouseleave",

()=>{

card.style.transform =

`
perspective(1000px)
rotateY(0deg)
rotateX(0deg)
scale(1)
`;

});

});

// ==============================
// SCROLL TO TOP BUTTON
// ==============================

const topBtn =
document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.classList.add("top-btn");

document.body.appendChild(topBtn);

window.addEventListener(

"scroll",

()=>{

if(window.scrollY > 500){

topBtn.classList.add("show-top");

}

else{

topBtn.classList.remove("show-top");

}

});

topBtn.addEventListener(

"click",

()=>{

window.scrollTo({

top:0,
behavior:"smooth"

});

});

// ==============================
// PRELOADER
// ==============================

window.addEventListener("load", ()=>{

document.body.classList.add("loaded");

});

// ==============================
// CONSOLE SIGNATURE
// ==============================

console.log(`

🚀 Portfolio Feri Firmansyah

Built with HTML CSS JS

GitHub :
https://github.com/ferifirmansah4

`);
