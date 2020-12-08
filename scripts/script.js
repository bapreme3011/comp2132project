
const maxrolltimes = 3;
let rolltimes = 0;
const popup = document.getElementById('pop-up');
let scoreuser = document.getElementById('score1');
let scorecom = document.getElementById('score3');
let scoreuserdisplay = document.getElementById('score2');
let scorecomdisplay = document.getElementById('score4');
let scoreusertotal = 0;
let scorecomtotal = 0;
let popuptext = document.querySelector('#pop-up h1')
const closePopup = document.getElementById('btn-close');

closePopup.addEventListener("click", function(){
    popup.style.opacity = "0";   
});

function popupwindow(){
    if(scoreusertotal > scorecomtotal)
    {
        popup.style.transition = "ease-in 1s";
        popup.style.opacity= "0.8";
        popuptext.innerHTML="You Win!";
    }
    else if(scoreusertotal < scorecomtotal)
    {
        popup.style.transition = "ease-in 1s";
        popup.style.opacity= "0.8";
        popuptext.innerHTML ="You Lose!";
    }
    else if(scoreusertotal === scorecomtotal)
    {
        popup.style.transition = "ease-in 1s";
        popup.style.opacity= "0.8";
       popuptext.innerHTML = "Draw";
    }
}

function checkrolltime(){
    if(rolltimes === maxrolltimes)
        {
            popupwindow();
        }
    
}


function rollDice(){

        var randomNumber1 = Math.floor(Math.random() * 6) + 1; 
        var randomNumber2 = Math.floor(Math.random() * 6) + 1;
        var randomNumber3 = Math.floor(Math.random() * 6) + 1;
        var randomNumber4 = Math.floor(Math.random() * 6) + 1;

        document.querySelector("#img1").setAttribute("src", 
            "images/dice" + randomNumber1 + ".png"); 

        document.querySelector("#img2").setAttribute("src", 
            "images/dice" + randomNumber2 + ".png");

        document.querySelector("#img3").setAttribute("src", 
            "images/dice" + randomNumber3 + ".png"); 

        document.querySelector("#img4").setAttribute("src", 
            "images/dice" + randomNumber4 + ".png");  


        if (randomNumber1 === 1 || randomNumber2 === 1) { 
            scoreuser.innerHTML = 0; 
            scoreusertotal += 0
        } 

        else if (randomNumber1 === randomNumber2) { 
            scoreuser.innerHTML = (randomNumber1 + randomNumber2)*2;
            scoreusertotal += (randomNumber1 + randomNumber2)*2
        } 

        else { 
            scoreuser.innerHTML = randomNumber1 + randomNumber2;
            scoreusertotal += randomNumber1 + randomNumber2
        }

        if (randomNumber3 === 1 || randomNumber4 === 1) { 
            scorecom.innerHTML = 0; 
            scorecomtotal += 0
        } 

        else if (randomNumber3 === randomNumber4) { 
            scorecom.innerHTML = (randomNumber3 + randomNumber4)*2;
            scorecomtotal += (randomNumber3 + randomNumber4)*2
        } 

        else { 
            scorecom.innerHTML = randomNumber3 + randomNumber4;
            scorecomtotal += randomNumber3 + randomNumber4
        } 
        scoreuserdisplay.innerHTML = scoreusertotal;
        scorecomdisplay.innerHTML = scorecomtotal;
        
        rolltimes++;
        checkrolltime();
} 

function newGame(){
    scoreuser.innerHTML = 0;
    scorecom.innerHTML = 0;
    scoreusertotal = 0;
    scorecomtotal = 0;
    scoreuserdisplay.innerHTML = scoreusertotal;
    scorecomdisplay.innerHTML = scorecomtotal;
    rolltimes = 0;
}
        