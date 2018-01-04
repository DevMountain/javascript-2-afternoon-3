/* 
  Once you complete a problem, refresh ./SpecRunner.html in your browser and check to see if the problem's test(s) are passing.
  Passed tests will be indicated by a green circle.
  Failed tests will be indicated by a red X.

  You can refresh the page at any time to re-run all the tests.
*/

////////// PROBLEM 1 //////////

// Do not edit the code below.
var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Missy', 'Blaine', 'Joe'];
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
var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Missy', 'Blaine', 'Joe'];
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

// Do not edit the code below.
var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Missy', 'Blaine', 'Joe'];
// Do not edit the code above.

/*
  Write a function called printContainMessage that two paramets: name and result.
  The function should check to see if the result is true or false.
  If the result is true, the function should console.log "name is in the array".
  If the result is false, the function should console.log "name is not in the array"

  Example: printContainMessage("James", false) -> console.log("James is not in the array")
  Example: printContainMessage("Jessica", true) -> console.log("Jessica is in the array")
*/

//Code Here
function printContainMessage( name, result ) {
  if ( result === true ) {
    console.log(name + " is in the array");
  } else if ( result === false ) {
    console.log(name + " is not in the array");
  }
}

/*
  Write a function called contains that takes that has three parameters: array, name, and cb.
  Inside the function, check to see if the name is inside the array.
  If it is inside the array, call the callback function with the name and true.
  If it is not inside the array, call the callback function with the name and false.
*/

//Code Here
function contains( array, name, cb ) {
  var result = array.includes( name );

  cb( name, result );
}

/*
  Invoke the contains function and pass in the given names array, "Joe", and the printContainMessage function you created earlier.
  Once you have called the contains function, take a look inside your developer tools on the Console tab. You should see "Joe is in the array" printed to console.
*/

//Code Here
contains( names, "Joe", printContainMessage );



////////// PROBLEM 5 //////////

// Do not edit the code below.
var names = ['Tyler', 'Cahlan', 'Ryan', 'Tyler', 'Missy', 'Cahlan', 'Joe'];
// Do not edit the code above.


/*
  Write a function called printUnique that takes in an array.
  The function should console log the unique array.
*/

//Code Here
function printUnique( array ) {
  console.log( array );
}

/*
  Write a function called unique that takes has two parameters: array and cb.
  The function should remove all duplicates from an array and call the callback function with the new array.
*/

//Code Here
function unique( array, cb ) {
  var uniqueArray = [];

  for( var i = 0; i < array.length; i++ ) {
    if ( !uniqueArray.includes( array[i] ) ) {
      uniqueArray.push( array[i] );
    }
  }

  cb( uniqueArray );
}

/*
  Invoke the unique function and pass in the given names array and the printUnique function you created earlier.
  Once you have called the unique function, take a look inside your developer tools on the Console tab. You should see ["Tyler", "Cahlan", "Ryan", "Missy", "Joe"] printed to console.
*/

//Code Here
unique( names, printUnique );



////////// PROBLEM 6 //////////

// Do not edit the code below.
var names = ['Tyler', 'Cahlan', 'Ryan'];
// Do not edit the code above.

/*
  Write a function called printEachIndexAndValue that takes in an index and a value.
  The function should console log "The element in the index position is value".

  Example: printEachIndexAndValue( 1, "Bob" ) -> console.log("The element in the 1 position is Bob");
  Example: printEachIndexAndValue( 5, "Joe" ) -> console.log("The element in the 5 position is Joe");
*/

//Code Here
function printEachIndexAndValue( index, value ) {
  console.log("The element in the " + index + " position is " + value);
}

/*
  Write a function called each that has two parameters: array and cb.
  The function should loop through the array can call the call back function once for every element.

  Remember to pass the given elements index and value to the call back function.
*/

//Code Here
function each( array, cb ) {
  for( var i = 0; i < array.length; i++ ) {
    cb( i, array[i] );
  } 
}

/*
  Invoke the each function and pass in the given names array and the printUnique function you created earlier.
  Once you have called the unique function, take a look inside your developer tools on the Console tab.
  You should see three console logs: "The element in the 0 position is Tyler", "The element in the 1 position is Cahlan", "The element in the 2 position is Ryan"
*/

//Code Here
each( names, printEachIndexAndValue );



////////// PROBLEM 7 //////////

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
  }
];
// Do not edit the code above.

/*
  Write a function called printUserProps that has one parameter: user
  The function should console log "The user with the id of user.id has the email of user.email, the name of user.name, and the address of user.address".

  Example: printUserProps({ id: 0, email: 'email@email.com', name: 'Bob' address: '111 street' }) -> console.log("The user with the id of 0 has the email of email@email.com, the name of Bob, and the address of 111 street")
*/

//Code Here
function printUserProps( user ) {
  console.log("The user with the id of " + user.id + " has the email of " + user.email + ", the name of " + user.name + ", and the address of " + user.address );
}

/*
  Write a function called getUserById that has three parameters: array, id, and cb.
  The function should look through the array to find the object with the given id.
  The function should then call the given call back function with the found object.
*/

//Code Here
function getUserById( array, id, cb ) {
  var user = {};

  for( var i = 0; i < array.length; i++ ) {
    if( array[i].id === id ) {
      user = array[i];
    }
  }

  cb( user );
}

/*
  Invoke the getUserById function and pass in the given users array, '15a', and the printUserProps function you created earlier.
  Once you have called the getUserById function, take a look inside your developer tools on the Console tab.
  You should see the following console log: "The user with the id of 15a has the email of cahlan@gmail.com, the name of Cahlan, and the address of 135 East 320 North"
*/

//Code Here
getUserById( users, '15a', printUserProps );

