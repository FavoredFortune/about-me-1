'use strict';

var haronAge = prompt ('Do you think Haron\'s younger than 21 years old? Please respond with Y or N or with YES or NO').toUpperCase();
if (haronAge === 'Y' || haronAge === 'Yes') {
    alert('Your wrong Haron is 25 years');
    console.log('Your wrong Haron is 25 years');
} else if ( haronAge === 'N' || haronAge === 'NO') {
    alert('Your right! Haron\'s 25 years old');
    console.log('Your right! Haron\'s 25 years old');    
} else {
    alert('Please input Y or N');
    console.log('Please input Y or N');
}

var haronCareer = prompt('Do you think Haron wants to be a Full Stack Developer. Please respond with Y or N or with YES or NO').toUpperCase();
if (haronCareer === 'Y' || haronCareer === 'YES') {
    alert('You are correct');
    console.log('You are correct');
} else if (haronCareer === 'N' || haronCareer === 'NO') {
    alert('No your wrong, I\'m striving to get to that point everyday');
    console.log('No your wrong, I\'m striving to get to that point everyday');
} else {
    alert('Please input Y or N');
    console.log('Please input Y or N');
}

