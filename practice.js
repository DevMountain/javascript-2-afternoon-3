/* 
  Once you complete a problem, refresh ./SpecRunner.html in your browser and check to see if the problem's test(s) are passing.
  Passed tests will be indicated by a green circle.
  Failed tests will be indicated by a red X.

  You can refresh the page at any time to re-run all the tests.
*/

////////// PROBLEM 1 //////////

// Do not edit the code below.
var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
// Do not edit the code above.

/*
  Write a function called logFirstName that has a parameter called firstName.
  The function should console.log the given argument for firstName.
*/

//Code Here
function logFirstName( firstName ) {
  console.log(firstName);
}

/*
  Write a function called first that has two parameters, arr ( an array ) and cb ( a callback function ).
  Inside the function, invoke the callback function and pass in the first element of the given array argument.
*/

//Code Here
function first( arr, cb ) {
  cb( arr[0] );
}

/*
  Invoke the first function and pass in the given names array for the first argument and pass in the logFirstName function you created for the second argument.
  Once your have called the last function, take a look inside your developer tools on the Console tab. You should see Tyler printed to console.
*/

//Code Here
first( names, logFirstName );



////////// PROBLEM 2 //////////

// Do not edit the code below.
var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
// Do not edit the code above.

/*
  Write a function called logLastName that has a parameter called lastName.
  The function should console.log the given argument for lastName.
*/

//Code Here
function logLastName( lastName ) {
  console.log(lastName);
}

/*
  Write a function called last that has two parameters, arr ( an array ) and cb ( a callback function ).
  Inside the function, invoke the callback function and pass in the last element of the given array argument.
*/

//Code Here
function last( arr, cb ) {
  cb( arr[ arr.length - 1 ] );
}

/*
  Invoke the last function and pass in the given names array for the last argument and pass in the logLastName function you created for the second argument.
  Once your have called the last function, take a look inside your developer tools on the Console tab. You should see Cahlan printed to console.
*/

//Code Here
last( names, logLastName );



////////// PROBLEM 3 //////////

/*
  Write a function called logProduct that has a parameter called product.
  The function should console.log the given argument for product.
*/

//Code Here
function logProduct( product ) {
  console.log( product );
}

/*
  Write a function called multiply that takes in three parameters: num1, num2, and cb.
  Inside the function, invoke the callback function and pass in the answer of num1 multiplied by num2.
*/

//Code Here
function multiply( num1, num2, cb ) {
  cb( num1 * num2 );
}

/*
  Invoke the multiply function and pass in two numbers and the logProduct function you created.
  Once you have called the multiply function, take a look inside your developer tools on the Console tab. You should see the product printed to console.
*/

//Code Here
multiply( 2, 3, logProduct );


////////// PROBLEM 4 //////////

/*
  Write a function called contains that takes in three parameters: an array, a name and a callback.  
  Check if the name exists in the array. 
  If it does, invoke the callback with true as the argument. 
  If the name does not exist, invoke the callback with false as the argument.
*/

//Code Here 

// Do not edit the code below.
contains(names, 'Colt', function(result){
  if(result === true){
    console.log('Colt is in the array');
  } else {
    console.log('Colt is not in the array');
  }
});
// Do not edit the code above.



////////// PROBLEM 5 //////////

/*
  Write a function called uniq that takes in an array and a callback function.
  Remove any duplicate values from the array, and invoke the callback with the modified array as an argument.
*/

//Code Here

// Do not edit the code below.
uniq(names, function(uniqArr){
  console.log('The new names array with all the duplicate items removed is ', uniqArr);
});
// Do not edit the code above.



////////// PROBLEM 6 //////////

/* 
  Write a function called each that takes in an array of names and a callback function. 
  For each name in the array, invoke the callback and pass in the name and the name's index as arguments.
*/

//Code Here 

// Do not edit the code below.
each(names, function(item, indice){
  console.log('The item in the ' + indice + ' position is ' + item)
});
// Do not edit the code above.



////////// PROBLEM 7 //////////

/*
  Write a function called getUserById that takes in three parameters: an array of objects (users), an id and a callback, and searches for the user with a matching id.
  When the correct user object is found, invoke the callback with the user object as an argument.
*/

// Code here

// Do not edit the code below.
var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
];

getUserById(users, '16t', function(user){
  console.log('The user with the id 16t has the email of ' + user.email + ' the name of ' + user.name + ' and the address of ' + user.address); 
});
// Do not edit the code above.