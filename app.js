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

var haronHobbies = prompt('Do you think Haron enjoys playing Fifa 18 and 2k18 during his down time. Please respond with Y or N or YES or NO').toUpperCase();
if(haronHobbies === 'Y' || haronHobbies === 'YES') {
    alert('This is correct, I\'m sure I can beat anyone in');
    console.log('This is correct, I\'m sure I can beat anyone in');
} else if ( haronHobbies === 'N' || haronHobbies === 'NO') {
    alert('Your wrong, if your having a difficult time believing it come play me sometime and see for yourself.');
    console.log('Your wrong, if your having a difficult time believing it come play me sometime and see for yourself.');
} else {
    alert('please input Y or N');
    console.log('please input Y or N');
}
