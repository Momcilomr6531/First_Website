# Looping code

## The for ... of loop 

* An example would be using an array : 

` const cats ["leopard", "Serval"]; `

and the loop 

`for (const cat of cats) { console.log(cat); }`

where the idea is: given a collection of cats, get the first item. Assign the variable cat to it and then run the code again. Get the next item and repeat assigning the variable until you've reached the end of the array. 

## Specialized loops 

* Java has more speacialized loops like `map()` and `filter()`. 

* you can use `map()`to do something to each itemm in a collection. 

* e.g if I make a function 
`function toUpper(string)`
which makes everything upper case via the command `{ return string.toUpperCase();}`

I can take my array and turn all elementer upercase via 

`const upperCats = cats.map(toUpper);`


* Simlarly you can use the `filter()` function to test items. 

lets say we have `function lCat(cat)`

which calls `return cat.startsWith("L")`

then we can say 

`const filtered = cats.filter(lCat);`

and we will get a new array with only the elements starting with L. 

## For loops

* Syntax `for(initializer; condition; final-expression){}`

* The initializer is a variable set to a number e.g `i = 0`

* The condition is the limit at which the variable should stop loooping

* The final expression is run each time the loop has gone through and affects the variable. 

## For loops & collections

* The following two pieces of code have identical function: 

* `for (const cat of cats){console.log(cat);}`

* ` for(let i = 0; i < cats.length; i ++){console.log(cats[i]);}`

* use for of whenever possible. However, if we want any element to be treated differently we would need to use a standard for loop and an if. 

## Breaking and Continuing 

* We can exit a loop with a `break;` statement if nescessary

* We can skip an iteration of a loop using the `continue;` statement

## While and do...While

* The general syntax of a while loop : 
 `initializer while(condition){ final-expression}`

 * basically a for loop with the initializer set before the loop

 * Lets say I used the cat array agian and wanted to display my favorite cats. The code would look something like this: 

 `let myFavoriteCats = "My cats are called ";`

 * initialize `let i = 0;`  
 
 * with the while loop : 
 ```js
const cats = ["Pete", "Biggles", "Jasmine"];

let myFavoriteCats = "My cats are called ";

let i = 0;

while (i < cats.length) {
  if (i === cats.length - 1) {
    myFavoriteCats += `${cats[i]}.`;
  } else {
    myFavoriteCats += `${cats[i]}, `;
  }
  i++;
}

console.log(myFavoriteCats); // "My cats are called Pete, Biggles, and Jasmine."
```
