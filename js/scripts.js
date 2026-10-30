document.getElementById("current-year").textContent =
    new Date().getFullYear();



let box1 = document.querySelector("#box1");
box1.addEventListener("mouseenter", function (dets) {
    box1.style.transform = 'scale(1.05)';
})
box1.addEventListener("mouseleave", function (dets) {
    box1.style.transform = 'scale(1)';
})

///box2
let box2 = document.querySelector("#box2");
box2.addEventListener("mouseenter", function (dets) {
    box2.style.transform = 'scale(1.05)';
})
box2.addEventListener("mouseleave", function (dets) {
    box2.style.transform = 'scale(1)';
})

//box3
let box3 = document.querySelector("#box3");
box3.addEventListener("mouseenter", function (dets) {
    box3.style.transform = 'scale(1.05)';
})
box3.addEventListener("mouseleave", function (dets) {
    box3.style.transform = 'scale(1)';
})
///box4
let box4 = document.querySelector("#box4");
box4.addEventListener("mouseenter", function (dets) {
    box4.style.transform = 'scale(1.05)';
})
box4.addEventListener("mouseleave", function (dets) {
    box4.style.transform = 'scale(1)';
})

