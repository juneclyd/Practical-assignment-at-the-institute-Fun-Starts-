const body = document.getElementsByTagName('body')[0];
let count = 0;
let speed = new Set();
while (speed.size < 5) {
    let randomNumber = (Math.random() * 10).toFixed(1);
    if (randomNumber !== 0) {
        speed.add(Number(randomNumber));
    }
}
speed = Array.from(speed)

function drawCircles() {
    const timerDrawCircles =  setInterval(function() {
        let displayCircle = '<div class="circle"></div>';
        if(count < 5){
            body.insertAdjacentHTML("afterbegin", displayCircle);
        }else{
            clearInterval(timerDrawCircles);
            let start = Date.now();
            movementCircles(start);
        }
        count = count + 1;
    }, 500);
}

function movementCircles(start){
    const timerMovementCircles = setInterval(function() {
        let timePassed = Date.now() - start;
        draw(timePassed);
    },1)
    function draw(timePassed) {
        const circles = document.querySelectorAll(".circle");
        circles.forEach((el, i) => {
            el.style.marginLeft = timePassed / speed[i] + 'px';
            el.getBoundingClientRect().left + timePassed / speed[i]
            if(el.getBoundingClientRect().left > window.screen.width - 290) {
                clearInterval(timerMovementCircles);
                return;
            }
        })
    }
}

drawCircles();

document.querySelector(".btn").addEventListener('click', () => location.reload())
console.log(speed);