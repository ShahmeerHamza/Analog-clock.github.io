setInterval(() => {
    d = new Date();
    h = d.getHours();
    min = d.getMinutes();
    sec = d.getSeconds();
    hrotaion = 30*h + min/2
    minrotaion = 6*min + sec/10
    secrotaion = 6*sec
    document.querySelector(".hour").style.transform = `rotate(${hrotaion}deg)`;
    document.querySelector(".minute").style.transform = `rotate(${minrotaion}deg)`;
    document.querySelector(".second").style.transform = `rotate(${secrotaion}deg)`;
}, 1000);

function first() {
        document.querySelector(".clock").style.backgroundImage="url(clock.jpg)"
        document.getElementById("second").style.display="block"
        document.getElementById("first").style.display="none"
}
function second() {
    document.querySelector(".clock").style.backgroundImage="url(clock2.jpg)"
    document.getElementById("third").style.display="block"
    document.getElementById("second").style.display="none"
}
function third() {
    document.querySelector(".clock").style.backgroundImage="url(clock2.png)"
    document.getElementById("first").style.display="block"
    document.getElementById("third").style.display="none"
}