'use strict';

var greeting = prompt('Hello, this is a guessing game about Haron. Let\'s find out how much you really know him.');

var userName = prompt('First off lets start with a short introduction. Please enter your name below');
var counter = 0;

var haronAge = prompt ('Do you think Haron\'s younger than 21 years old? Please respond with Y or N or with YES or NO').toUpperCase();
if (haronAge === 'Y' || haronAge === 'Yes') {
    alert('Your wrong Haron is 25 years');
    console.log('Your wrong Haron is 25 years');
} else if ( haronAge === 'N' || haronAge === 'NO') {
    alert('Your right! Haron\'s 25 years old');
    console.log('Your right! Haron\'s 25 years old');   
    counter++;
    console.log(counter); 
} else {
    alert('Please input Y or N');
    console.log('Please input Y or N');
}

var haronCareer = prompt('Do you think Haron wants to be a Full Stack Developer. Please respond with Y or N or with YES or NO').toUpperCase();
if (haronCareer === 'Y' || haronCareer === 'YES') {
    alert('You are correct');
    console.log('You are correct');
    counter++;
    console.log(counter);
} else if (haronCareer === 'N' || haronCareer === 'NO') {
    alert('No your wrong, I\'m striving to get to that point everyday');
    console.log('No your wrong, I\'m striving to get to that point everyday');
} else {
    alert('Please input Y or N');
    console.log('Please input Y or N');
}

var haronHobbies = prompt('Do you think Haron enjoys playing Fifa 18 and 2k18 during his down time. Please respond with Y or N or YES or NO').toUpperCase();
if (haronHobbies === 'Y' || haronHobbies === 'YES') {
    alert('This is correct, I\'m sure I can beat anyone in');
    console.log('This is correct, I\'m sure I can beat anyone in');
    counter++;
    console.log(counter);
} else if ( haronHobbies === 'N' || haronHobbies === 'NO') {
    alert('Your wrong, if your having a difficult time believing it come play me sometime and see for yourself.');
    console.log('Your wrong, if your having a difficult time believing it come play me sometime and see for yourself.');
} else {
    alert('please input Y or N');
    console.log('please input Y or N');
}

var haronCollege = prompt('Do you think Haron went to College in WA. Please respond with a Y or N or YES or NO').toUpperCase();
if (haronCollege === 'Y' || haronCollege === 'YES') {
    alert('Your are correct! Infact Haron went to College in WA states capital Olympia');
    console.log('Your are correct! Infact Haron went to College in WA states capital Olympia');
    counter++;
    console.log(counter);
} else if (haronCollege === 'N' || haronCollege === 'NO') {
    alert('Incorrect Haron went to College in Olympia WA');
    console.log('Incorrect Haron went to College in Olympia WA');
} else {
    alert('Please input Y or N');
    console.log('Please input Y or N');
}

var haronSports = prompt('Do you think Haron\'s favorite sport to watch on TV is hockey?').toUpperCase();
if (haronSports === 'y' || haronSports === 'YES') {
    alert('This is incorrect, Haron\'s favorite sport to watch is Football');
    console.log('This is incorrect, Haron\'s favorite sport to watch is Football');
} else if (haronSports === 'N' || haronSports === 'NO') {
    alert('You must know Haron well, his favorite sport to watch on TV is football');
    console.log('You must know Haron well, his favorite sport to watch on TV is football. His favorite to  watch is the Seattle Seahawks.');
    counter++;
    console.log(counter);
} else {
    alert('Please input Y or N');
    console.log('Please input Y or N');
}




for(var i = 0; i < 4; i++) {
    var kobeNum = 8;
    var jerseyNumber = prompt('What the jersey number of Haron\'s favorite basketball player?');
    
    if (jerseyNumber > kobeNum ) {
    alert('The players jesery number is less than ' + jerseyNumber);
} else if (jerseyNumber < kobeNum) {
    alert('The players number is greater then the number ' + jerseyNumber);
} else {
   alert('Correct! #8 Kobe is Haron\'s all time favorite player');
   counter++;
   break;
}

}



//this will store the number of player attempts.
var chanceCounter = 0;

//this loops job is to count the users attempt.
while(chanceCounter < 5) {
    chanceCounter++;
    console.log(chanceCounter);
//favoriteCars stores an array or in regular terms list of my favorite cars.
var favoriteCars = ['MERCEDEZ BENZ', 'PORSCHE', 'CORVETTE', 'BMW'];
//carGuess stores the user answer to the question.
var carGuess = prompt('Haron likes fast cars, which cars do you think he likes the most?').toUpperCase();

//this loops job is to index through favoriteCars[] and see if the users attempts in the array
//This loop must run all the way through.
for(var i = 0; i < favoriteCars.length; i++) {  
    console.log(favoriteCars[i]);
    //If the condition is right, the games says "your right" if not
    
    if (carGuess === favoriteCars[i]) {      
        console.log(userName + ' Your right Haron likes ' + favoriteCars + ' Btw it took you just ' + chanceCounter +' attempts');
        console.log('It took your' + chanceCounter + ' attempts to get it right.')
        counter++
        chanceCounter = 10;
        console.log('You got ' + counter + '\\7 questions correct');
    }else if (chanceCounter === 5) {
        console.log('you\'v used up all your time');
    } else {
        prompt('wrong keep trying');
    }
    
    }
}
