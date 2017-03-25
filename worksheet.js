//  Part I

// ----------------------------
// write your own forEach() function.
// your function should take an array and a callback as input.
// it should run the callback on each element in the array.
// ----------------------------
function forEach (array, call) {
  for (var i = 0; i < array.length; i++) {
    call(array[i])
  }
}
//  Part II
// ----------------------------
// write your own map() function.
// your function should take an array and a callback as input.
// it should return a new array, where every element in the
// original has been transformed by the callback. .
// ----------------------------
function map (array, call) {
  var newArray = []
  for (var i = 0; i < array.length; i++) {
    newArray[i] = call(array[i])
  }
  return newArray
}
//  Part III
// ----------------------------
// write your own filter() function.
// your function should take an array and a callback as input.
// it should return a new array, where elements have been
// kept or excluded according to the callback.
// ----------------------------
function filter (array, call) {
  var newArray = []
  for (var i = 0; i < array.length; i++) {
    if (call(array[i])) {
      newArray.push(array[i])
    }
  }
  return newArray
}
//  Part IV
// ----------------------------
// write your own reduce() function.

// this one's new. it should take an array, a callback and
// a starting value as input.

// calling .reduce() should combine all the elements of the
// array into a single value. the starting value tells what to
// start with.

// the callback should take as input a "running total" and
// an array element, in that order. it should return an update
// to the running total.

// look at the tests for clarification.
// ----------------------------
function reduce (array, call, startVal) {
  var runTotal = startVal
  for (var i = 0; i < array.length; i++) {
    runTotal = call(runTotal, array[i])
  }
  return runTotal
}
//  HARD MODE
// ----------------------------
// using the built-in array.sort(), sort the following array
// of people by name
// ----------------------------

var people = [
    {name: 'Matt', alma_mater: 'Univ of Texas - Austin'},
    {name: 'Brian', alma_mater: 'Texas A&M'},
    {name: 'Jesse', alma_mater: 'Univ of Texas - Austin'},
    {name: 'Justin', alma_mater: 'Univ of Florida'}
]
function sortNames (x, y) {
  if (x.name < y.name) {
    return -1
  } else if (y.name < x.name) {
    return 1
  }
  return 0
}
people.sort(sortNames)
// ----------------------------
// Using array.map(), array.filter(), and array.sort() on the
// array below:
// - filter for customers whose first-names start with 'J',
// - map to their fullnames,
// - and then sort the items alphabetically by fullname

// store the resulting mapped, filtered, and sorted array
// under the variable name `newCustomers`. i'll look
// for that name in my tests.
// ----------------------------

var customers = [
    {first: 'Joe', last: 'Blogs'},
    {first: 'John', last: 'Smith'},
    {first: 'Dave', last: 'Jones'},
    {first: 'Jack', last: 'White'}
]
function startWithJ (customer) {
  if (customer.first[0] === 'J') {
    return customer
  }
}
function fullName (customer) {
  return {fullname: customer.first + ' ' + customer.last}
}
function fullNameAlpha (x, y) {
  if (x.fullname > y.fullname) {
    return 1
  } else if (y.fullname > x.fullname) {
    return -1
  }
  return 0
}

var newCustomers = customers.filter(startWithJ).map(fullName).sort(fullNameAlpha)
