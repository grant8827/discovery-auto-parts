//navbar toggle
$(document).ready(function() {
    $("#menu-bars").click(function() {
        $(".links").toggle('slow');
    });
});


//dropdown toggle
const dropDown = document.getElementById("dropDownCat");
const downArrow = document.getElementById("toggle");

dropDown.addEventListener("click", function(slow) {
    if (downArrow.style.display === "block") {
        downArrow.style.display = "none";
    } else {
        downArrow.style.display = "block";
    };
});




//slide
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

//login form
const login = document.getElementById("form-sign-in")
const btn = document.getElementById("button")

button.addEventListener('login', (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
});

//contact
function sendMail(str) {
    let link = "mailto:grant8827@yahoo.com" + escape("This is my subject") + "&body=" + escape(str);
    location.href = link;
}

function submit_comment() {
    let name = document.forms["contact_form"]["Name"].value;
    let Email = document.forms["contact_form"]["Email"].value;
    let Message = document.form["contact_form"]["message"].value;
    if ((name != "") && (Email != "") && (Message != "")) {
        sendMail("message incomplete")
    }
}