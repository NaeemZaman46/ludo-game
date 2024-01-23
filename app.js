let x = 0;
total = 0;

function rollTheDisk() {
    x= Math.random() * 6 + 1;
    document.querySelector(".digit").innerHTML = Math.trunc(x);
    x = Math.trunc(x);
    if (true) {
        let diskImg = document.querySelector(".images");
        diskImg.src =`image/dice-${x}.png`;
    }
    total +=x;
    if ( total >= 100) {
        alert("You won the game")
    }
    document.querySelector(".scoreBox").innerHTML=`Your score is ${total}`;
    enter()= disabled;
}

    