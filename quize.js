import readlineSync from 'readline-sync';
import chalk from 'chalk';

let score = 0;
const userName = readlineSync.question("What is your name? ");

console.log("Welcome " + userName + " :) to DO YOU KNOW ABOUT Bhanu? ");

// Array of object
let questions = [
    {
        question: "Where i live? \n a:Chhattisgarh \n b:Hyderabad \n c:Pune \n d:Banglore \n Your answer is ",
        answer: "a"
    },
    {
        question: "Where do i will work? \n a:USA \n b:India \n c:Canada \n d:Landon \n Your answer is ",
        answer: "b"
    },
    {
        question: "What is my favourite color? \n a:Red \n b:White \n c:Blue \n d:Purpul \n Your answer is ",
        answer: "c"
    },
    {
        question: "What is my favourite place? \n a:Natural place \n b:Party place \n c:Sport place \n d:Garden place \n Your answer is ",
        answer: "a"
    },
    {
        question: "Which is my current location? \n a:Chhattisgarh \n b:Hyderabad \n c:Pune \n d:Banglore \n Your answer is ",
        answer: "b"
    },
    {
        question: "Which is my favourite breakfast ? \n a:Chapati with curry \n b:Dosa \n c:Idaly \n d:Banana with milk \n Your answer is ",
        answer: "d"
    },
    {
        question: "Which place completed my master degree? \n a:Chhattisgarh \n b:Hyderabad \n c:Pune \n d:Banglore \n Your answer is ",
        answer: "a"
    },
    {
        question: "Which type of cloth wear by me? \n a:Old-kurta's \n b:Classy \n c:Formal \n d:Fancy \n Your answer is ",
        answer: "c"
    },
    {
        question: "Which type of hair i have? \n a:Straight \n b:Wavy \n c:Curly \n d:Coily \n Your answer is ",
        answer: "c"
    },
    {
        question: "What is my height in feet? \n a:5'2 \n b:5'0 \n c:5'9 \n d:5'5 \n Your answer is ",
        answer: "d"
    }
]


// Function
const userQueAndAns = (question, answer) => {

    const questionOne = readlineSync.question(question);
    if (questionOne.toUpperCase() === answer.toUpperCase()) {
        console.log(chalk.green("Yes! right answer..."));
        score = score + 1;
    } else {
        console.log(chalk.red("OPPS! wrong answer..."));
        score = score - 1;
    }

    console.log(chalk.bgBlue.white("You score is : " + score));
    console.log("-------------");
}


// For-loop
for (var i = 0; i < questions.length; i++) {
    var currentQuetions = questions[i];     // get the value used on array index number
    var que = currentQuetions.question;
    var ans = currentQuetions.answer;

    userQueAndAns(que, ans);    // function call
}

console.log(chalk.green("Final score of " + userName + " is " + score));


// Data of high-score

var highScore = [
    {
        Name: "Aditya",
        Score: 7
    },
    {
        Name: "Deepak",
        Score: 8
    },
    {
        Name: "Raghuraj",
        Score: 5
    },
    {
        Name : "Rahul",
        Score : 9
    }
]

for (var i = 0; i < highScore.length; i++) {
    var HS = highScore[i];
    if (score > HS.Score) {
        console.log(chalk.green(`Congrats...! you break the record of ${HS.Name} - ${HS.Score}`));
    }
}
console.log(`You can beat the ${HS.Name} score... sure next time you definetly chase : ` + HS.Name + "-" + HS.Score);
console.log(chalk.bgGray.white(`Highest score is : ${highScore[3].Name} - ${highScore[3].Score}`));