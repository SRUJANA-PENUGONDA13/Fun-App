var questionBank = {'Which number should come next in the pattern?\n 37, 34, 31, 28 \n' : '25',
                    '14 : 9 :: 26 : ?\n' : '13',
                    '7 : 48 :: 12 :: ?\n' : '143',
                    'BCDE: PQRS :: WXYZ : ?\n' : 'KLMN',
                    'GHB : HBG :: JKM : ?\n' : 'KMJ'
                    }
var score = 0;

function displayQuestion(key)
{
  var response = readlineSync.question(chalk.rgb(168, 93, 50).bold('\n',key));
  console.time('You have solved this question in ');
  if(questionBank[ key ] == response )
  {
    score = score + 1;
  }
  else
  {
    console.log(chalk.red.bold("Wrong Answer"));
  }
  console.timeEnd('You have solved this question in ');

}

const chalk = require('chalk');

console.log(chalk.rgb(168, 93, 50).bold('Hi Folk \nThis is Srujana'));
console.log(chalk.rgb(168, 93, 50).bold('Here is small quiz for you let\'s have fun by playing it'));

var readlineSync = require('readline-sync');
var userName = readlineSync.question(chalk.white.bold('Your name please \n'));

console.log(chalk.rgb(168, 93, 50).bold('Welcome  ' + userName + '!'));
console.log(chalk.white.bold('Here is a quiz to test your IQ'));
console.time('\n\nYou have completed the Quiz in ');

for(var key in questionBank)
{
  displayQuestion(key);
}

console.timeEnd('\n\nYou have completed the Quiz in ');
console.log(chalk.green.bold("\nFinal Score : " + score));
console.log("\nThank you :)");








