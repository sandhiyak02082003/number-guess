var randomNumber=Math.round(Math.random()*100);
console.log(randomNumber);
var submitButton=document.getElementById("submit");
var message=document.getElementById("message");
var msg;
let lives=document.getElementById("lives");
let s=10;
submitButton.onclick = () =>
{
    let r=s;
    console.log();
    let inputNumber=document.getElementById("number-input").value;
    s--;
    
    if(inputNumber==randomNumber)
    {
       msg="You won the game";
       
    }
    else if(inputNumber>randomNumber)
    {
        msg="Oops! You guess is high!";
    }
    else if(inputNumber<randomNumber)
    {
        msg="Oops! You guess is low!";
    }
     if(s==1)
    { 
        submitButton.onclick = () =>
        {
            location.href="./loss.html";
        }
    }
    
    message.innerHTML=msg;
    message.style.display="inherit";
    lives.innerHTML= s,"lives";

}
