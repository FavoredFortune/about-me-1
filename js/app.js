'use strict';

alert('Hello, this is a guessing game about Haron. Let\'s find out how much you really know him.');

var userName = prompt('First off lets start with a short introduction. Please enter your name below');
//counts how many questions the player got right.
var counter = 0;

var haronAge = prompt ('Do you think Haron\'s younger than 21 years old? Please respond with Y or N or with YES or NO.').toUpperCase();
if (haronAge === 'Y' || haronAge === 'Yes') {
  alert('You\'re wrong. Haron is 25 years old.');
  console.log(userName + ' guessed ' + haronAge);
} else if ( haronAge === 'N' || haronAge === 'NO') {
  alert('You\'re right! Haron\'s 25 years old.');
  console.log(userName + ' guessed ' + haronAge);  
  counter++;
  console.log(userName + ' has ' + counter + ' points.'); 
} else {
  alert('Please input Y or N');
  console.log(userName + 'didn\'t input y or n.');
}

var haronCareer = prompt('Do you think Haron wants to be a full stack developer? Please respond with Y or N or with YES or NO.').toUpperCase();
if (haronCareer === 'Y' || haronCareer === 'YES') {
  alert('You are correct.');
  console.log(userName + ' guessed correctly. ' + haronCareer + ' Haron does want to be a full stack developer.');
  counter++;
  console.log(userName + ' has ' + counter + ' points.'); 
} else if (haronCareer === 'N' || haronCareer === 'NO') {
  alert('No you\'re wrong, I\'m striving to get to that point everyday.');
  console.log(userName + ' guessed that Haron ' + haronCareer + ' want to be a full stack developer.' );
} else {
  alert('Please input Y or N');
  console.log(userName + 'didn\'t input y or n.');
}

var haronHobbies = prompt('Do you think Haron enjoys playing Fifa 18 and 2k18 during his down time? Please respond with Y or N or YES or NO.').toUpperCase();
if (haronHobbies === 'Y' || haronHobbies === 'YES') {
  alert('This is correct. I\'m sure I can beat anyone in these two games. Want to play sometime?');
  console.log(userName + ' guessed correctly. ' + haronHobbies + ' Haron does enjoy these games.');
  counter++;
  console.log(userName + ' has ' + counter + ' points.'); 
} else if ( haronHobbies === 'N' || haronHobbies === 'NO') {
  alert('You\'re wrong. If your having a difficult time believing it, come play me sometime and see for yourself.');
  console.log(userName + ' guessed incorrectly. Thinking that Haron does' + haronHobbies + '\'t enjoy these games.');
} else {
  alert('please input Y or N');
  console.log(userName + 'didn\'t input y or n.');
}

var haronCollege = prompt('Do you think Haron went to college in Washington? Please respond with a Y or N or YES or NO.').toUpperCase();
if (haronCollege === 'Y' || haronCollege === 'YES') {
  alert('Your are correct! In fact, Haron went to college in Washington state\'s capital, Olympia.');
  console.log(userName + ' guessed that ' + haronCollege + ' Haron went to college in Washington.');
  counter++;
  console.log(userName + ' has ' + counter + ' points.'); 
} else if (haronCollege === 'N' || haronCollege === 'NO') {
  alert('Incorrect. Haron went to college in Olympia, Washington.');
  console.log(userName + ' guessed that Haron did' + haronCollege + '\'t to to college in Washington.');
} else {
  alert('Please input Y or N');
  console.log(userName + ' didn\'t input y or n.');
}

var haronSports = prompt('Do you think Haron\'s favorite sport to watch on TV is hockey?').toUpperCase();
if (haronSports === 'y' || haronSports === 'YES') {
  alert('This is incorrect. Haron\'s favorite sport to watch is football.');
  console.log(userName + 'guessed incorrectly. Haron\'s favorite sport to watch is football.');
} else if (haronSports === 'N' || haronSports === 'NO') {
  alert('You must know Haron well! His favorite sport to watch on TV is football.');
  console.log(userName + ' guessed that ' + haronSports + ' , Haron\'s favorite sport to watch on TV is football. His favorite team to watch is the Seattle Seahawks.');
  counter++;
  console.log(userName + ' has ' + counter + ' points.'); 
} else {
  alert('Please input Y or N');
  console.log(userName + 'didn\'t input y or n.');
}

for(var i = 0; i < 4; i++) {
  var kobeNum = 8;
  var jerseyNumber = prompt('What the jersey number of Haron\'s favorite basketball player? Please input a number.');
  jerseyNumber = parseInt(jerseyNumber);
    
  if (jerseyNumber > kobeNum ) {
    alert('The player\'s jesery number is less than ' + jerseyNumber + '. You have three guesses. Please try again.');
    console.log (userName + 'guessed the number ' + jerseyNumber);
  } else if (jerseyNumber < kobeNum) {
    alert('The player\'s number is greater then the number ' + jerseyNumber + '. You have three guesses. Please try again.');
    console.log (userName + 'guessed the number ' + jerseyNumber);
  } else if(jerseyNumber === kobeNum){
    alert('Correct! This is number 8. Kobe\'s number');
    console.log (userName + 'guessed the number ' + jerseyNumber);
    counter++;
    console.log(userName + ' has ' + counter + ' points.'); 
  } else {
    alert('Please input a number. You only get three guesses total.');
  }
}

//this will store the number of player attempts.
var chanceCounter = 0;

//this loops job is to count the users attempt.
while(chanceCounter < 5) {
  chanceCounter++;
  console.log(userName + ' has ' + chanceCounter + ' tries left.');

  //favoriteCars stores an array or in regular terms list of my favorite cars.
  var favoriteCars = ['MERCEDEZ BENZ', 'PORSCHE', 'CORVETTE', 'BMW'];
  //carGuess stores the user answer to the question.
  var carGuess = prompt('Haron likes fast cars, which cars do you think he likes the most?').toUpperCase();

  //this loops job is to index through favoriteCars[] and see if the users attempts in the array
  //This loop must run all the way through.
  for(var i = 0; i < favoriteCars.length; i++) {  
    //If the condition is right, the games says "your right" if not the user can guess again, as long as the attmpt are less than 5 
    if (favoriteCars.includes(carGuess)) {   
      alert(userName + ' You\'re right. Haron likes ' + favoriteCars + '. By the way, it took you just ' + chanceCounter + ' attempts to answer this question.');   
      console.log(userName + ' You\'re right Haron likes ' + favoriteCars + '. By the way, it took you just ' + chanceCounter + ' attempts to answer this question.');
      console.log('It took you' + chanceCounter + ' attempts to get it right.');
      counter++;
      chanceCounter = 10;
      alert('You got ' + counter + '\\7 questions correct');
      console.log('You got ' + counter + '\\7 questions correct');
      break;
    }else if (chanceCounter === 5) {
      console.log(userName + ' has guessed ' + chanceCounter + 'times. And they are now out of guesses.');
    } else {
      alert('Wrong. Keep trying. You have a total of 4 guesses.');
      break;
    }  
  }
}
