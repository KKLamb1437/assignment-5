function updateText(){
    document.getElementById("heading").innerHTML = "Let's play Craps!";
}
function random(){
// variables given the value which in this scenario is a randum number between 1-6
    var die1 = Math.ceil(Math.random() * 6);
    var die2 = Math.ceil(Math.random() * 6);
    var sum = die1 + die2;
//if the sum is 7 or 11 it will display craps = you lose
    if (sum == 7 || sum == 11)
        {  document.getElementById("result").innerHTML= "Craps = you lose";
        }
        // if the both dice are the same or "doubles" it will display Doubles= you win
        else if (die1==die2 && die1%2== 0)
        {
           document.getElementById("result").innerHTML = "Doubles = you win";}
           //else takes the last if and else if statement and if no conditions are met then this function takes place
        else{
            document.getElementById("result").innerHTML = "Keep rolling!"
        }
           //I learned about a template string from w3school  using `` it allows you to insert Var into the string
   document.getElementById("Craps").innerHTML = `Die 1: ${die1} <br> Die 2: ${die2} <br> Sum: ${sum}`; 
    
   } 
