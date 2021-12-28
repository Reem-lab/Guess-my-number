/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉Correct number';
console.log(document.querySelector('.message').textContent);


document.querySelector('.number').textContent = 25;
document.querySelector('.score').textContent = 2;


document.querySelector('.guess').textContent = 2;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message){
    document.querySelector('.message').textContent = message ;
}

const displayNumber = function (number){
    document.querySelector('.number').textContent = number ;
}


document.querySelector('.check').addEventListener
   ('click',function(){
       const guess =Number((document.querySelector('.guess').value));
       console.log(guess, typeof guess);

        // if there is not a number
        if(!guess){
            displayMessage('⛔ No number');
        }
        // if the played wins the game
        else if(guess === secretNumber){
            displayMessage('🎉Correct number');
            displayNumber(secretNumber);

             document.querySelector ('body').style.backgroundColor ='#60b347';
             document.querySelector ('.number').style.width ='30rem';

             if (score > highScore){
                 highScore = score;
                 document.querySelector('.highscore').textContent = highScore ;
             }
        }
        //if the player lose the game
        else if (guess !== secretNumber){
            if(score > 1){
                displayMessage( guess > secretNumber ? '💹 Too high!' : '📉 Too low!' );
                score--;
                document.querySelector('.score').textContent = score;
            }else {
                displayMessage('🤯 Oops you lost the game!');
                document.querySelector('.score').textContent = 0;
            } 
        }

        // // if the score is too high
        // else if (guess > secretNumber){
        //     if(score > 1){
        //         document.querySelector('.message').textContent = '💹 Too high!';
        //         score--;
        //         document.querySelector('.score').textContent = score;
        //     }else {
        //         document.querySelector('.message').textContent = '🤯 Oops you lost the game!';
        //     } 

        // }
        // // if the score is too low
        // else if (guess < secretNumber){
        //     if(score > 1){
        //         document.querySelector('.message').textContent = '📉 Too low!';
        //         score--;
        //         document.querySelector('.score').textContent = score;
        //     }else {
        //         document.querySelector('.message').textContent = '🤯 Oops you lost the game!';
        //     }
        // }
    });

    document.querySelector('.again').addEventListener
    ('click', function() {
             score = 20;
            secretNumber = Math.trunc(Math.random() * 20) + 1;

            displayMessage('Start guessing...');
            document.querySelector('.score').textContent = score;
            displayNumber('?');
            document.querySelector('.guess').value = '';

            document.querySelector ('body').style.backgroundColor ='#222';
            document.querySelector ('.number').style.width ='15rem';
    });



