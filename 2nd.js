
// 1


// Write code: Suppose you have a login system where you can log in by using only any of three names.

// 1) Determine three names inside your code.'
// 2) Write a code that takes the user input.
// 3) If the user provided name doesn’t match with none of your predetermined names it will display “Sorry! We don’t find you in the system.” Otherwise, it will display “Welcome! “.
// *
// 2/2
// var prompt = require('prompt-sync')();
// var name = prompt("Enter your name: ")

// if (name == "Aimon") {
//     console.log("welcome!")
// }
// else if(name == "Rana"){
//     console.log("welcome!")
// }
// else if(name == "Jihad"){
//     console.log("welcome!")
// }
// else{
//     console.log("Sorry! We don’t find you in the system.")
// }


// 2


// Write a code that prompts the user to enter a year. The code should display a message indicating whether the year is a leap year or not.

// *
// 2/2
// var prompt = require('prompt-sync')();
// var year= prompt("enter year ")
// if  (year % 400 == 0){
//     console.log("The is a leaf year")
// }
// else if (year % 4 == 0 && year % 100 != 0){
//     console.log("The year is a leaf year")
// }
// else{
//     console.log("The year is not a leaf year")
// }    


// 3


// Create a simple shopping cart program. The program should:

// 1) Prompt the user to enter the price of three items one by one.

// 2) Apply a discount based on the total cost:

// 3) If the total cost is greater than 50 TK, apply a 10% discount. If the total cost is greater than 100, apply a 20% discount. Use the formula: discountedCost = totalCost - (totalCost * discount)

// 4) Display the final cost after applying the discount.



// *
// 3/3
// var prompt = require('prompt-sync')();
// var Shirt = Number(prompt("Shirt prize "))
// var pant = Number(prompt("pant prize "))
// var Lungi = Number(prompt("lungi prize "))
// var t = Shirt + pant + Lungi


// if (t>100){
//     var f1 = t-(t*0.2 )
//     console.log("You have gotten 20% discount. your discounted prize is: ", f1)
// }
// else if (t>50){
//     var f2 = t-(t*0.1)
//     console.log("You have gotten 10% discount. your discounted prize is: ",f2)
// }
// else {
//     console.log("your prize is: ", t)
// }


// 4


// Write a code that calculates the final grade for a student based on their scores in different subjects. The program should:

// 1) Prompt the user to enter the scores for three subjects: Math, English, and Science.

// 2) Calculate the average score using the formula: average = (mathScore + englishScore + scienceScore) / 3.

// 3) Display the final average score.

// 4) Use conditional statements to determine and display the corresponding letter grade based on the following grading scale:

// A:  > 60 

// F: <60

// *
// 3/3
// var prompt = require('prompt-sync')();
// var math = Number(prompt("Math number "))
// var english =Number(prompt("English number "))
// var science = Number(prompt("Science number "))
// var t = (math + english + science) / 3
// if (t > 60){
//     console.log("you have gotten A grade and your average number is ", t)
// }
// else if (t < 60){
//     console.log("you have gotten F grade and your average number is ",t)
// }

