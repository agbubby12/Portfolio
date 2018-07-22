const icons = [
    "https://image.flaticon.com/icons/svg/189/189001.svg",
    "https://image.flaticon.com/icons/svg/188/188987.svg",
    "https://image.flaticon.com/icons/svg/188/188990.svg",
    "https://image.flaticon.com/icons/svg/188/188989.svg",
    "https://image.flaticon.com/icons/svg/188/188993.svg",
    "https://image.flaticon.com/icons/svg/189/189000.svg",
    "https://image.flaticon.com/icons/svg/188/188995.svg",
    "https://image.flaticon.com/icons/svg/188/188997.svg",
    "https://image.flaticon.com/icons/svg/361/361998.svg",
];

icons.forEach(function (icon, i) {
    let img = document.createElement("img");
    img.src = icon;
    document.body.appendChild(img);

    img.style.top = Math.floor(Math.random() * (window.innerHeight - 50)) + "px";
    img.style.left = Math.floor(Math.random() * (window.innerHeight - 50)) + "px";
});

document.addEventListener('keydown', function (event) {
    if(event.key === 's') {
        let ball = document.querySelectorAll("img")[8];
        let topHeight = parseInt(ball.style.top) + 3;
        ball.style.top = topHeight + "px";
    }
    if(event.key === 'w') {
        let ball = document.querySelectorAll("img")[8];
        let topHeight = parseInt(ball.style.top) - 3;
        ball.style.top = topHeight + "px";
    }
    if(event.key === 'd') {
        let ball = document.querySelectorAll("img")[8];
        let leftHeight = parseInt(ball.style.left) + 3;
        ball.style.left = leftHeight + "px";
    }
    if(event.key === 'a') {
        let ball = document.querySelectorAll("img")[8];
        let leftHeight = parseInt(ball.style.left) - 3;
        ball.style.left = leftHeight + "px";
    }
});


