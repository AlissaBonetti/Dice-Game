

function diceGame1(){
    var dice01=Math.random();
    var diceRoll01 = Math.floor(dice01*6)+1;
    if(diceRoll01===1){
        document.querySelector("i").setAttribute("class","fa-solid fa-dice-one"); 
    }
    else if(diceRoll01===2){
        document.querySelector("i").setAttribute("class","fa-solid fa-dice-two"); 
    }
    else if(diceRoll01===3){
        document.querySelector("i").setAttribute("class","fa-solid fa-dice-three"); 
    }
    else if (diceRoll01===4){
        document.querySelector("i").setAttribute("class","fa-solid fa-dice-four"); 
    }
    else if (diceRoll01===5){
        document.querySelector("i").setAttribute("class","fa-solid fa-dice-five"); 
    }
    else {
        document.querySelector("i").setAttribute("class","fa-solid fa-dice-six"); 
    }
    return(diceRoll01);
}

function diceGame2(){
    var dice02=Math.random();
    var diceRoll02 = Math.floor(dice02*6)+1;
    if(diceRoll02===1){
        document.querySelector(".dice2").firstElementChild.setAttribute("class","fa-solid fa-dice-one"); 
    }
    else if(diceRoll02===2){
        document.querySelector(".dice2").firstElementChild.setAttribute("class","fa-solid fa-dice-two"); 
    }
    else if(diceRoll02===3){
        document.querySelector(".dice2").firstElementChild.setAttribute("class","fa-solid fa-dice-three"); 
    }
    else if (diceRoll02===4){
        document.querySelector(".dice2").firstElementChild.setAttribute("class","fa-solid fa-dice-four"); 
    }
    else if (diceRoll02===5){
        document.querySelector(".dice2").firstElementChild.setAttribute("class","fa-solid fa-dice-five"); 
    }
    else {
        document.querySelector(".dice2").firstElementChild.setAttribute("class","fa-solid fa-dice-six"); 
    }
    return(diceRoll02);
}

function whoWins(){
    if (diceRoll01<diceRoll02){
            document.querySelector(".title").innerHTML = "Player 2 wins this round!";
    }
    else if (diceRoll01>diceRoll02){
             document.querySelector(".title").innerHTML = "Player 1 wins this round!";
    }
    else {
             document.querySelector(".title").innerHTML = "It's a Draw!";
    }
}
