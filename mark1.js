const chalk = require('chalk');
var readLineSync = require('readline-sync')
const error = chalk.keyword('red');
const correct = chalk.keyword('green');
console.log(chalk.cyan("-------------------------------"));
console.log(chalk.redBright.bold("       🤩 WELCOME! 🤩"));
console.log(chalk.cyan("-------------------------------"));
var username = readLineSync.question("What is your name? ");
console.log(chalk.yellow("Hi " + username + " !"));
console.log("Let's see how well do you know me 🥰");

var leaderBoard = [{ name: "Anshika", score: 5 }, { name: "Aryan", score: 4 }];

var questions = [{ question: "Q1. where do i live?", answer: "meerut" }, {
    question: "Q2. what is my age?", answer: "20"
}, {
    question: "Q3. what is the name of my college? ",
    answer: "abesec"
}, {
    question: "Q4. Do i have a pet?",
    answer: "no"
}, {
    question: "Q5. Am i a dog person or a cat person?",
    answer: "dog person"
}];
var score = 0;
function play(question, answer) {
    var q = readLineSync.question(question);
    if (q.toLowerCase() == answer) {
        console.log(correct("✅ This is correct!"));
        score++;
    } else {
        console.log(error("😞 This is incorrect!"));
    }
}
for (var i = 0; i < questions.length; i++) {
    var currentq = questions[i];
    play(currentq.question, currentq.answer);

}

console.log("Your final score is : " + score + "/5 🤩");
f = 0;
var a = { name: username, score: score };
for (var j = 0; j < leaderBoard.length; j++) {
    var c = leaderBoard[j];
    if (score >= c.score) {
        f = 1;
        leaderBoard.splice(j, 0, a);
        break;
    }
}
if (f === 0) {
    leaderBoard.push(a);
}
console.log(chalk.yellow("------------------------------"));
console.log(chalk.yellow("         🥳LEADERBOARD🥳           "));
for (var k = 0; k < leaderBoard.length; k++) {
    console.log(leaderBoard[k].name + "     - " + leaderBoard[k].score);
}
console.log(chalk.yellow("------------------------------"));
console.log("THANKYOU FOR PLAYING!");
