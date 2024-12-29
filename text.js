// question solve


// 1 - Sum of two integers.

// let a = 10;
// let b = 20;

// let sum = a+b;
// console.log(sum)


// 2- Print the messege along with values and sum
// 	Ex - The sum of 45 & 12  = 57

// let a = 45;
// let b = 12;

// let sum = a+ b;
// console.log(`The sum of ${a} and ${b} = ${sum}`)

// 3- Accept two integers from user and print the sum
// 	Ex - The sum of 45 & 12 = 57

// let num1 =  45 ;
// let num2 = 12 ;

// // Calculate the sum
// let sum = num1 + num2;

// // Print the result
// console.log(`The sum of ${num1} & ${num2} = ${sum}`);

// 4- Accept the User's name, age and print in following manner
// 	Ex - Hello Shery, you are 12 years old.

// let name = "shery";
// let age = 12;

// console.log(`Hello ${name}, you are ${age} years old.`)


// 5- Solve Increment & decrement operator questions on
// 	https://javaconceptoftheday.com/quiz-on-increment-and-decrement-operators/


//Increment

// let a = 3;
// // let b = ++a; //pre-Increment 
// let b = a++ // post- increment
// console.log(b , a)

//decrement

// let a = 10;
// // let b = --a;  //pre-decrement
// let b = a--;  //post-decrement
// console.log(a, b)   

// 6- Accept two numbers from user and swap their values
//                 Part 2 - Swap without using third variable

// let num1 = 10;
//   let num2 = 20;
//  console.log(`swap their values = num1 = ${num1} , num2 = ${num2}`)

// Part 2 - Swap without using third variable

// let tem = 10;
//  let num1 = 20;
//   let num2 = tem;

//  console.log(`Swap without using third variable = num1 = ${num1}, num2 = ${num2}`)

//=========================================MATH=======================================================

// 7]- Accept the length and width of a rectangle. Calculate & print the area and perimiter.

// let length = 10;
// let width = 20;

// const area = length * width;
// const perimiter = 2 *(length * width);

// console.log(`area of rectangle = ${area}`)
// console.log(`perimiter of rectangle = ${perimiter}`)

// 9- Accept the three sides of triangle and calculate the area using herons formula.

// let sideA = 10;
// let sideB = 20;
// let sideC = 30;

// let semiPerimeter = sideA + sideB + sideC /2;//semiPerimeter formula [a+b+c/2]

// let triangleArea = Math.sqrt(   ///area of triangle formula [root s(s-a)(s-b)(s-c)]
//     semiPerimeter*
//     (semiPerimeter-sideA)*
//     (semiPerimeter-sideB)*
//     (semiPerimeter-sideC)
// );

// console.log(triangleArea)

// 10- Find surface area of sphere.

 //let redius = 10;
//let surfaceArea = 4 * Math.PI * Math.pow(redius, 2); //  Surface Area = 4 * π * r^2

//console.log(`The surface area of the sphere is: ${surfaceArea.toFixed(2)}`);

// 11- Find circumference and area of circle.

// let radius = 10;

// let circumference = 2 * Math.PI * radius;  //circumference = [2PI.R]

// console.log(`circumference of cricle ${circumference}`)

// let area = Math.PI * Math.pow(radius, 2);

// console.log(`area of circle ${area}`)

// =====================================if else=================================================================

//12- Accept two numbers and print the greatest between them.

// let num1 = 30;
// let num2 = 20;

// if (num1> num2) {
//     console.log(`The greatest number is num1 = ${num1}`)
// }else{
//     console.log(`The number is equal`)
// }

// 13- Accept the gender from the user as char and print the respective greeting message
//       Ex - Good Morning Sir (on the basis of gender).

// let gender = "M";
// if (gender === "M") {
//     console.log("good moring sir")
// }else if(gender === "F"){
//    console.log("good moring madam")

// }else{
//     console.log("good morning")
// }

// 14- Extend the previous program and handle the wrong inputs.
//       Print Good Morning sir for input m or M & Good morning Maam for input F or f 
//       else print Wrong Input
// solve:-

// let gender = "M,F";


// if (gender === "M") {
//     console.log(" Good morning sir")
// }else if(gender === "F"){
//     console.log("Good morning mam")
// }else{
//     console.log("Wrong Input")
// }

// 15- Accept an integer and check whether it is an even number or odd.
// solve:-

// let integer = 10;
// if (integer %2 ==0){
//     console.log("even number");
// }else {
//     console.log("odd number")
// }

// 16- Accept name and age from the user. Check if the user is a valid voter or not.
//       Vaid - Hello Shery, You are a valid voter.
//       Invalid - Sorry Shery, you can't cast the vote.
// 	Part 2 - Print after how many years the user will be eligible

// let name = "aakash";
// let age = 17;
// if (age >= 18){
//     console.log(`Hello ${name}, You are a vilid voter.`)
    
// }else{
//     let yearsToVote = 18 - age;
//   console.log(`You will be eligible to vote after ${yearsToVote} years.`);
//     console.log(` Sorry ${name}, you can't cast the vote. `)
// }

// 17- Accept a day number between 1-7 and print the corresponding dayname.

// let day = 6;
// switch (day) {
//     case 1:
//         console.log("Sunday");
//         break;
//     case 2:
//         console.log("monday");
//         break;
//     case 3:
//         console.log("tusday");
//         break;
//     case 4:
//         console.log("wenesday");
//         break;
   
//     case 5:
//         console.log("thesday");
//         break;
//     case 6:
//         console.log("friday");
//         break;
//     case 7:
//         console.log("saterday");
//         break;
//    default:{
//     console.log("Invalid day")
//    }
// }

// 18- Accept three numbers and print the greatest among them.
// solve:-
// let num1 = 11;
// let num2 = 2;
// let num3 = 3;
// if (num1 > num2 && num1 > num3) {
//    console.log("grest number is", num1);
// }else{
//     console.log("lo")
// }

// 22- Accept an english alphabet from user and check if it is a consonent or a vowel;
// solve:-

// let englishAlphabet = "a" ;
// if (englishAlphabet == "a") {
//     console.log("vowel");
    
// }else{
//     console.log("consonent")
// }

// ====================================================loop===================================================

// 23- Accept an integer and Print hello world n times.

// solve:-

// let n = 5;

// for (let i = 0; i <= n; i++) {
//     console.log("Hello")
// }

// 24- Print natural number up to n. 

// let n = 10;
//  for(let i =1; i<=n; i++){
//     console.log(i);
//  }

// 25- Reverse for loop. Print n to 1.
// solve:-

// let n = 1;
//  for(let i=10; i>=n; i--){
//     console.log(i)
//  }

// 26- Take a number as input and print its table
//        5 * 1 = 5
//        5 * 2 = 10 ... up to 10 terms
// solve:-

// let n = 5;

// for (let i = 1; i <= 10; i++) {
//     console.log(`${n} *${i} = ${n * i}`);
// }

// 27- Sum up to n terms.
// solve:-

// let sum = 0;

// for(let i = 1; i <= 10; i++){
//     sum = sum += i;
//     console.log(sum);
// }
