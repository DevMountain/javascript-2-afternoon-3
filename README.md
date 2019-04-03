<img src="https://s3.amazonaws.com/devmountain/readme-logo.png" width="250" align="right">

# Project Summary

In this project, we'll provide practice JavaScript problems to help you better understand `callbacks`.

## Setup

* `Fork` this repository.
* `Clone` your fork.
* Open `./practice.js` with your code editor.
* Open `./index.html` with your browser.

## Directions

Complete all <b>7</b> activities inside of `./practice.js` to make the spec runner pass it's tests. In order to check the progress of the spec runner, open `./SpecRunner.html` with your browser. Remember to commit and push your code often. Good luck!

## Tips and Tricks

One of the biggest tools at the developer's disposal is the browser's built-in debugger. To use it, open `./index.html` with your browser. Another great tool for small and isolated pieces of code is <a href="http://www.pythontutor.com/visualize.html#">Python Tutor</a>. Just make sure to change the code to `JavaScript ES6`.

## Resources

<details>

<summary> <code> Callbacks </code> </summary>

```js
// Most simply, a callback is a function that is passed as an argument to another function.
// That might look one of two ways:

// Example 1

// This is a generic function, it could be doing anything, but here it's just returning a string

function imDoingIt() {
  return 'Did it!';
}

// This next function expects a function as an argument for our cb parameter.
// Functions that receive functions as arguments are called higher-order functions.
// We know it expects a function because we're invoking cb within the functions body.
// cb is not a special keyword. Like any parameter, it's just a placeholder.
// We could call it catfish or hotdog if we wanted, but that wouldn't make a lot of sense. 

function doTheThing(cb) {
  return cb();
}

// Here we invoke doTheThing, passing it the imDoingIt function's definition (that just means we didn't invoke the passed in function).
// The imDoingIt function is aliased as cb in the function above, which we then invoke in our function body.

doTheThing(imDoingIt); // the result of calling this function is 'Did it!'

// Example 2

// In this example, we do the exact same thing, except instead of using a named function (imDoingIt) we're using an anonymous function as the passed in argument to doTheThing.
// An anonymous function is just a function without a name.

function doTheThing(cb) {
  return cb();
}

doTheThing(function() {
  return 'Did it!';
});

// ------------------

// The callback pattern is often used in asynchronous programming,
// and we'll see more of that later, but here's a simple example
// (note: this is hypothetical code (pseudo code) and is for example only):

function login(processUserCbFunc) {
  let user = fetchUser() // This is a fake function that takes time to run. It will log the user in, getting the users data                            // from the server.
  // When fetchUser finishes running, we want to tell JavaScript to do something with the user's data
  processUserCbFunc(user);
}

function processUser(user) {
  return 'The logged in user is ' + user.name;
}

// log the user in and when that's done, process them
login(processUser)

// --------------------

//Another common use case for the callback pattern is code reuse.
// Let's imagine you're processing bank transactions (deposits and withdrawals).
// You might write your code like this with callbacks.

// Transaction is a function that expects a dollar amount, and a callback function called action

function transaction(amt, action) {
  // rather than adding this if statement to make sure we're dealing with valid dollar amounts in both the deposit and withdraw functions below, we can write it once here.
  // This helps keep our code D-R-Y (Don't Repeat Yourself)
  if (amt <= 0) {
    return 'Please use a valid amount';
  }
  // As long as the amt is greater than 0, we'll perform our action (invoke our callback function) passing in the amt.
  return action(amt);
}

// a function that would deposit the given amount
function deposit(amt) {
  return 'You deposited $' + amt;
}

// a function that would withdraw the given amount
function withdraw(amt) {
  return 'You withdrew $' + amt;
}

// In these four invocations we call our transaction function with an amount,
// and a callback representing which action we want to perform with the given amounts.

transaction(100, deposit); // 'You deposited $100'

transaction(50, withdraw); // 'You withdrew $50'

transaction(-40, withdraw); // 'Please use a valid amount'

transaction(-100, deposit); // 'Please use a valid amount'

// As you can see above, callbacks provide a pattern for reusing chunks of
// code and grouping/reducing our logic (in this case our simple if statement
// that applies to both deposits and withdrawls).

// In review:

// a callback is a function passed as an argument to another functions invocation
// a higher-order function is any function that receives a function as an argument to it's invocation
// from above: transaction(deposit) => transaction would be the higher-order function and deposit would be the callback
// The callback pattern (or more simply, using callbacks in our code) allows us to write cleaner code with less repetition
// Callbacks are often used for asynchronous programming (think requesting data, logging a user in, etc.)
```

</details>

## Contributions

If you see a problem or a typo, please fork, make the necessary changes, and create a pull request so we can review your changes and merge them into the master repo and branch.

## Copyright

© DevMountain LLC, 2017. Unauthorized use and/or duplication of this material without express and written permission from DevMountain, LLC is strictly prohibited. Excerpts and links may be used, provided that full and clear credit is given to DevMountain with appropriate and specific direction to the original content.

<p align="center">
<img src="https://s3.amazonaws.com/devmountain/readme-logo.png" width="250">
</p>
