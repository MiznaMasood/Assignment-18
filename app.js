

// // Q1

// var firstName = prompt("First name");
// var lastName = prompt("Enter last name");

// var fullName = firstName + " " + lastName;

// alert( "Hello " +  fullName + "! Welcome to our Website. " );

// // Q2

// var userInput = prompt("Enter your favourite mobile phone model ")

// document.write("My favourite phone is : " + userInput + "<br>" + "Length of string : " + userInput.length )


// Q3
// var text2 = "Pakistani";
// var character = text2.indexOf("n");

// document.write( "String : " + text2 + "<br>"+"Index of 'n': " +character)

// // document.write(text.slice())

// // Q4
// var text3 = "Hello World";
// var lastChar = text3.lastIndexOf("l");
// document.write(" <br> String : " + text3 + "<br>"+"Index of 'l': " +lastChar)


// Q5

// var text4 = "Pakistani";
// var thirdChar = text4.charAt(3);

// document.write( " <br> String : " + text4 + "<br>"+"Character at index 3 : " + thirdChar)


// Q6
// var firstName = prompt("First name");
// var lastName = prompt("Enter last name");
// var fullName = firstName.concat(lastName);

// alert( "Hello " +  fullName + "! Welcome to our Website. " );


// Q7

// var text = "Hyderabad"

// for(var i = 0; i < text.length; i++){
//     if(text.slice(i , i + 9) === "Hyderabad"){
//         text = text.slice(0,i)+ "Islam"
//         document.write("<br> <br> City : Hyderabad <br>" + "After replacement : " + text)
//     }
// }

// // Q8

// var message = "Ali and Sami are best friends. They play cricket and football together."

// for(var i = 0; i < message.length; i++){
//     if(message.slice(i , i + 3) === "and"){
//         message = message.slice(0,i)+ "&" +
//         message.slice(i + 3 )
//         document.write ("<br>" +  message)
//     }
// }

// // Q9

// var number = "472"

// document.write("<br> Value : " + number + "<br>");

// document.write("Type : " + typeof(number) + "<br>");

// var number = +"472"

// document.write("Value : " + number + "<br>");

// document.write("Type : " + typeof(number));

// // Q10

// var userInput = prompt("");
// var updateInput = userInput.toUpperCase();

// document.write(" <br> User input : " + userInput)
// document.write(" <br> Upper Case : " + updateInput)

// // Q11

// var userInput1 = "javascript"
// var firstChar = userInput1.slice(0,1).toUpperCase()
// var remaining = userInput1.slice(1).toLowerCase()

// var combine = (firstChar + remaining)
// document.write( "<br> User input: " + userInput1)
// document.write( "<br> Title case: " + combine)

// // Q12

// var number2 = 35.36 ;
// var newNum = number2.replace("35.36" , "3536 ");

// document.write(newNum)




// Q13

var userInput3 = prompt("Enter name")
//  var userName = "Jhon Doe";

 if(userInput3.includes("!") || userInput3.includes("@") || userInput3.includes(".") || userInput3.includes(",")){
    alert("enter a valid username")
 }
else{
    alert("Username accepted:  " + userInput3)
}























// Q14

//  var bakeryItem = prompt("Welcome to ABC Bakery.What do you want to order?")

// var updateInput3 = bakeryItem.toLowerCase();


// var a = ["cake", "apple pie", "cookie", "chips", "patties" ];

// var flag = "false"

// for(var i = 0; i < bakeryItem.length; i++){
//      if(updateInput3 === a[i]){
//           flag = "true";
//           document.write("<br>" + bakeryItem + " is available in our bakery ")
//      }
// }
// if(flag === "false"){
//      document.write( "<br> we are sorry. "  + bakeryItem + " is not available in our bakery.")
// }



// Q16



var university = "University of Karachi";


for (var i = 0; i < university.length; i++) {
   
    if (university[i] === " ") {
        document.write("<br>"); 
    } else {
        document.write(university[i] + "<br>"); 
    }
}