// function to get number of songs
function getNumber() {
let number = prompt("How many Michael Buble songs do you know all the words to?");
let message;

if (number <=10) {
 message = "You're not a true fan ";
} else if(number <=15) {
    message = "You need abit more time with Buble ";
} else if(number >=50) {
    message = "You have been entered into a raffle, to meet buble himself, Raffle ends year 2045 ";
} else {
    message ="SPECIAL FACT! Music, along with painting, poetry, literature and architecture, was Olympic event from 1912 until 1948.";
}

}

console.log(number);
console.log(message);

document.write(message);

// fuction to make the user guess a number
function guessANumber(){
    let answer;

    //while the answer is incorrect keep asking
    while (answer != 3) {
answer = prompt ("Guess a number between between 0 - 10");

// all we are doing is asking and doing nothing with response
// add the word 'answer', answer is equal to nothing so it will run the loop

if (answer != 3) {
    alert ("No, try again");
} else {
    alert("Nice, thats my lucky number");
    document.write("You must be lucky!");
}
}
    }

//invoke the question
guessANumber();



function getRating() {
    let rating = prompt("Please rate my website between 1-5");
    let output = "";

    for(let i = 0; i < rating; i++) {
        output = output + "<img src='./bubl.jpg' class='bulb'/>"
        
    }
    document.write(output);

}
getRating();


    
let a = 42;
let b = "forty-two";

