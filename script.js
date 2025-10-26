let number1 = document.getElementById("number1");
let number2 = document.getElementById("number2");
let number3 = document.getElementById("number3");
let number4 = document.getElementById("number4");
let number5 = document.getElementById("number5");
let number6 = document.getElementById("number6");

let counter1 = 0, counter2 = 0, counter3 = 0; counter4 = 0; counter5 = 0; counter6 = 0;

let htmlSkill = setInterval(() => {
    if (counter1 == 90) { // HTML = 90%
        clearInterval(htmlSkill);
    } else {
        counter1 += 1;
        number1.innerHTML = counter1 + "%";
        document.querySelectorAll(".outer")[0].style.background =
            conic - gradient(`#ff4b2b ${counter1 * 3.6}deg, #ddd 0deg`);
    }
}, 20);

let cssSkill = setInterval(() => {
    if (counter2 == 90) { // CSS = 80%
        clearInterval(cssSkill);
    } else {
        counter2 += 1;
        number2.innerHTML = counter2 + "%";
        document.querySelectorAll(".outer")[1].style.background =
            conic - gradient(`#ff4b2b ${counter2 * 3.6}deg, #ddd 0deg`);
    }
}, 20);

let jsSkill = setInterval(() => {
    if (counter3 == 80) { // JS = 70%
        clearInterval(jsSkill);
    } else {
        counter3 += 1;
        number3.innerHTML = counter3 + "%";
        document.querySelectorAll(".outer")[2].style.background =
            conic - gradient(`#ff4b2b ${counter3 * 3.6}deg, #ddd 0deg`);
    }
}, 20);

let JavaSkill = setInterval(() => {
    if (counter4 == 90) { // Java = 90%
        clearInterval(JavaSkill);
    } else {
        counter4 += 1;
        number4.innerHTML = counter4 + "%";
        document.querySelectorAll(".outer")[3].style.background =
            conic - gradient(`#ff4b2b ${counter4 * 3.6}deg, #ddd 0deg`);
    }
}, 20);

let ReactSkill = setInterval(() => {
    if (counter5 == 80) { // HTML = 90%
        clearInterval(ReactSkill);
    } else {
        counter5 += 1;
        number5.innerHTML = counter5 + "%";
        document.querySelectorAll(".outer")[4].style.background =
            conic - gradient(`#ff4b2b ${counter5 * 3.6}deg, #ddd 0deg`);
    }
}, 20);

let TailwindSkill = setInterval(() => {
    if (counter6 == 90) { // HTML = 90%
        clearInterval(TailwindSkill);
    } else {
        counter6 += 1;
        number6.innerHTML = counter6 + "%";
        document.querySelectorAll(".outer")[5].style.background =
            conic - gradient(`#ff4b2b ${counter6 * 3.6}deg, #ddd 0deg`);
    }
}, 20);



function sendWhatsapp() {
    let number = "+918870424829";

    // Get values
    let firstName = document.getElementById('firstName').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let subject = document.getElementById('subject').value;
    let message = document.getElementById('message').value;

    // Construct the message
    var url = "https://wa.me/" + number + "?text="
        + "Name: " + firstName + "%0a"
        + "Email: " + email + "%0a"
        + "Phone: " + phone + "%0a"
        + "Subject: " + subject + "%0a"
        + "Message: " + message + "%0a"


    window.open(url, '_blank').focus();
}

function sendMessage() {
    alert("Your Message was sending Successfully! Thank you!")
}


  // Navbar scroll background
  window.addEventListener("scroll", function() {
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("scrolled", window.scrollY > 50);
});
