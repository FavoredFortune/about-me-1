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
        console.log(userName + ' Your right Haron likes ' + carGuess + ' and he like ' + favoriteCars + ' Btw it took you just ' + chanceCounter +' attempts');
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