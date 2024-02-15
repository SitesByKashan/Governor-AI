// 1) Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
var userName = "Kashan Malik";
console.log("Hello ".concat(userName, ", would you like to learn some Python today?"));
// 2) Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var userName1 = "Irfan Khan";
console.log("Your name in Lowercase is ".concat(userName1.toLowerCase()));
console.log("Your name in Uppercase is ".concat(userName1.toUpperCase()));
console.log("Your name in Titlecase is ".concat(userName1));
// 3) Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
//Albert Einstein once said, “A person who never made a mistake never tried anything new.”
console.log('Albert Einstein said that, "A person who never made a mistake never tried anything new."');
// 4) Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
var famous_person = "Albert Einstein";
var message = "A person who never made a mistake never tried anything new.";
console.log("".concat(famous_person, " said that, \"").concat(message, "\""));
// 5) Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
var nameWithWhiteSpace = "   Kashan Malik   ";
console.log("Your name with Whitespace ".concat(nameWithWhiteSpace));
var nameWithStriping = nameWithWhiteSpace.trim();
console.log("Your name with after striping ".concat(nameWithStriping));
// 6) Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
console.log("8 Number Addition is ".concat(5 + 3));
console.log("8 Number Subtraction is ".concat(10 - 2));
console.log("8 Number Multiplication is ".concat(2 * 4));
console.log("8 Number Division is ".concat(16 / 2));
// 7) Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
var favNum = 10;
console.log("My favorite number is ".concat(favNum));
// 8) Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
// This program written by Kashan Malik on 14/Feb/2024
// This program has store my fav in a variable then print my fav number with a message
var favNum = 15;
console.log("My favorite number is ".concat(favNum));
// This program demonstrates addition, subtraction, multiplication, and division resulting in the number 8.
// Addition
console.log("8 Number Addition is ".concat(5 + 3));
// Subtraction
console.log("8 Number Subtraction is ".concat(10 - 2));
// Multiplication
console.log("8 Number Multiplication is ".concat(2 * 4));
// Division
console.log("8 Number Division is ".concat(16 / 2));
// 9) Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
var friendsName = ["Hashir", "Tayyab", "Suleman", "Jawad"];
for (var i = 0; i < friendsName.length; i++) {
    console.log("My Friend Number ".concat(i + 1, " is ").concat(friendsName[i]));
}
// 10) Greetings: Start with the array you used in Exercise 9, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
for (var i = 0; i < friendsName.length; i++) {
    console.log("Assalam O Alaikum ".concat(friendsName[i], "! Good Morning"));
}
// 11) Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
var cars = ["Sportage", "Fortuner", "Land Cruiser"];
for (var i = 0; i < cars.length; i++) {
    console.log("I would like to own a ".concat(cars[i], "."));
}
// 12) Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
var guests = ["Kashan Malik", "Hashir", "Tayyab Faiz"];
for (var i = 0; i < guests.length; i++) {
    console.log("Dear ".concat(guests[i], ", \nYou are cordially invited to dinner. It would be an honor to have your presence at the table."));
}
// 13) Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 12. Add a print statement at the end of your program stating the name of the guest who can’t make it.
for (var i = 0; i < guests.length; i++) {
    console.log("Dear ".concat(guests[i], ", \nYou are cordially invited to dinner. It would be an honor to have your presence at the table."));
}
console.log("".concat(guests[2], " can't make it to the dinner."));
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
guests[2] = "Jawad Ahmed";
// • Print a second set of invitation messages, one for each person who is still in your list.
for (var i = 0; i < guests.length; i++) {
    console.log("Dear ".concat(guests[i], ", \nYou are cordially invited to dinner. It would be an honor to have your presence at the table."));
}
// 14) More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 13. Add a print statement to the end of your program informing people that you found a bigger dinner table.
for (var i = 0; i < guests.length; i++) {
    console.log("Dear ".concat(guests[i], ", \nYou are cordially invited to dinner. It would be an honor to have your presence at the table."));
}
console.log("\nGreat news! We found a bigger dinner table.");
// • Add one new guest to the beginning of your array.
guests.unshift("Suleman");
// • Add one new guest to the middle of your array. 
guests.splice(Math.floor(guests.length / 2), 0, "Aaliyan");
//• Use append() to add one new guest to the end of your list. 
guests.push("Owais");
//• Print a new set of invitation messages, one for each person in your list.
for (var i = 0; i < guests.length; i++) {
    console.log("Dear ".concat(guests[i], ", \nYou are cordially invited to dinner. It would be an honor to have your presence at the table."));
}
// 15) Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 14. Add a new line that prints a message saying that you can invite only two people for dinner.
for (var i = 0; i < guests.length; i++) {
    console.log("Dear ".concat(guests[i], ", \nYou are cordially invited to dinner. It would be an honor to have your presence at the table."));
}
console.log("\nUnfortunately, we can only invite two people for dinner.");
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
while (guests.length > 2) {
    var removedGuest = guests.pop();
    console.log("Sorry, ".concat(removedGuest, ", we can't invite you to dinner."));
}
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
for (var i = 0; i < guests.length; i++) {
    console.log("Dear ".concat(guests[i], ",\nYou are still cordially invited to dinner."));
}
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
guests = [];
console.log("\nFinal Guest List is ".concat(guests));
// 16) Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
var placesToVisit = ["London", "Dubai", "Canada", "England"];
// • Print your array in its original order.
console.log("Original Order is ".concat(placesToVisit));
// • Print your array in alphabetical order without modifying the actual list.
console.log("Alphabetical Order is ".concat([placesToVisit].sort()));
// • Show that your array is still in its original order by printing it.
console.log("Original Orderis ".concat(placesToVisit));
// • Print your array in reverse alphabetical order without changing the order of the original list.
console.log("Reverse Alphabetical Order is ".concat([placesToVisit].sort().reverse()));
// • Show that your array is still in its original order by printing it again.
console.log("Original Orderis ".concat(placesToVisit));
// • Reverse the order of your list. Print the array to show that its order has changed.
placesToVisit.reverse();
console.log("Reversed Order is ".concat(placesToVisit));
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
placesToVisit.reverse();
console.log("Original Order is ".concat(placesToVisit));
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
placesToVisit.sort();
console.log("Sorted in Alphabetical Order is ".concat(placesToVisit));
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
placesToVisit.sort(function (a, b) { return b.localeCompare(a); });
console.log("Sorted in Reverse Alphabetical Order is ".concat(placesToVisit));
// 17) Dinner Guests: Working with one of the programs from Exercises 12 through 16, print a message indicating the number of people you are inviting to dinner.
var guest = ["Kashan Malik", "Aaliyan", "Owais", "Jawad Ahmed", "Hashir"];
console.log("You are inviting ".concat(guest.length, " people to dinner."));
// 18) Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
var programminglang = ["Typescript", "Python", "Next JS", "Tailwind CSS", "Dart", "Flutter"];
console.log("The list of programming languages is ", programminglang);
// 19) They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
function createItem(name, quantity, price) {
    return {
        name: name,
        quantity: quantity,
        price: price
    };
}
var item1 = createItem("Book", 2, 10.99);
var item2 = createItem("Pen", 5, 1.5);
var item3 = createItem("Notebook", 3, 4.99);
var itemsObject = {
    "item1": item1,
    "item2": item2,
    "item3": item3
};
console.log(itemsObject);
// 20) Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
var studentName = ["Kashan Malik", "Hashir", "Jawad Ahmed", "Tayyab Faiz"];
//It produce array index error
console.log(studentName[7]);
//solving the array index error
console.log(studentName[0]);
// 21) Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
var x = 5;
var y = 10;
// Test 1: Check if x is greater than y
console.log("Is x > y? I predict False.");
console.log(x > y);
// Test 2: Check if y is greater than x
console.log("Is y > x? I predict True.");
console.log(y > x);
// Test 3: Check if x is equal to y
console.log("Is x == y? I predict False.");
console.log(x == y);
// Test 4: Check if x is not equal to y
console.log("Is x != y? I predict True.");
console.log(x != y);
// Test 5: Check if x is less than or equal to y
console.log("Is x <= y? I predict True.");
console.log(x <= y);
// Test 6: Check if y is less than or equal to x
console.log("Is y <= x? I predict False.");
console.log(y <= x);
// Test 7: Check if x plus y is greater than 15
console.log("Is x + y > 15? I predict True.");
console.log(x + y > 15);
// Test 8: Check if y minus x is equal to 5
console.log("Is y - x == 5? I predict True.");
console.log(y - x == 5);
// Test 9: Check if x multiplied by y is equal to 50
console.log("Is x * y == 50? I predict True.");
console.log(x * y == 50);
// Test 10: Check if x divided by y is less than 0.5
console.log("Is x / y < 0.5? I predict False.");
console.log(x / y < 0.5);
// 22) More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
var string1 = 'hello';
var string2 = 'world';
console.log("Is string1 equal to string2? I predict False.");
console.log(string1 === string2);
// • Tests using the lower case function
var lowercaseString = 'Hello';
console.log("Is lowercaseString equal to 'hello' after converting to lowercase? I predict True.");
console.log(lowercaseString.toLowerCase() === 'hello');
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
var num1 = 10;
var num2 = 20;
console.log("Is num1 equal to num2? I predict False.");
console.log(num1 === num2);
console.log("Is num1 not equal to num2? I predict True.");
console.log(num1 !== num2);
console.log("Is num1 less than num2? I predict True.");
console.log(num1 < num2);
console.log("Is num1 greater than num2? I predict False.");
console.log(num1 > num2);
console.log("Is num1 less than or equal to num2? I predict True.");
console.log(num1 <= num2);
console.log("Is num1 greater than or equal to num2? I predict False.");
console.log(num1 >= num2);
// • Tests using "and" and "or" operators
var a = 5;
var b = 10;
console.log("Is a greater than 3 and less than 7? I predict True.");
console.log(a > 3 && a < 7);
console.log("Is b less than 5 or greater than 15? I predict False.");
console.log(b < 5 || b > 15);
// • Test whether an item is in a array
var fruits = ['apple', 'banana', 'orange'];
console.log("Is 'banana' in the fruits array? I predict True.");
console.log(fruits.includes('banana'));
// • Test whether an item is not in a array
console.log("Is 'grape' not in the fruits array? I predict True.");
console.log(!fruits.includes('grape'));
// 23) Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
var alien_color = 'Green';
// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
if (alien_color === 'Green') {
    console.log("The player just earned 5 points.");
}
// • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
var alien_color = "Red";
if (alien_color === 'Green') {
    console.log("The player just earned 5 points.");
}
// 24) Alien Colors #2: Choose a color for an alien as you did in Exercise 23, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
var alien_color = "Green";
if (alien_color === 'Green') {
    console.log("The player just earned 5 points for shooting the alien.");
}
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
else {
    console.log("The player just earned 10 points.");
}
// • Write one version of this program that runs the if block and another that runs the else block.
var alien_color = "Red";
if (alien_color === 'Green') {
    console.log("The player just earned 5 points for shooting the alien.");
}
else {
    console.log("The player just earned 10 points.");
}
// 25) Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
var alien_color = 'Green';
// • If the alien is green, print a message that the player earned 5 points.
if (alien_color === 'Green') {
    console.log("The player earned 5 points.");
}
// • If the alien is yellow, print a message that the player earned 10 points.
else if (alien_color === 'Yellow') {
    console.log("The player earned 10 points.");
}
// • If the alien is red, print a message that the player earned 15 points.
else if (alien_color === 'Red') {
    console.log("The player earned 15 points.");
}
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
var alien_color = 'Yellow';
if (alien_color === 'Green') {
    console.log("The player earned 5 points.");
}
else if (alien_color === 'Yellow') {
    console.log("The player earned 10 points.");
}
else if (alien_color === 'Red') {
    console.log("The player earned 15 points.");
}
var alien_color = 'Red';
if (alien_color === 'Green') {
    console.log("The player earned 5 points.");
}
else if (alien_color === 'Yellow') {
    console.log("The player earned 10 points.");
}
else if (alien_color === 'Red') {
    console.log("The player earned 15 points.");
}
// 26) Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
var age = 64;
// • If the person is less than 2 years old, print a message that the person is a baby.
if (age < 2) {
    console.log("The person is a baby.");
}
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
else if (age === 2 || age < 4) {
    console.log("The person is a toddler.");
}
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
else if (age === 4 || age < 13) {
    console.log("The person is a kid.");
}
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
else if (age === 13 || age < 20) {
    console.log("The person is a teenager.");
}
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
else if (age === 20 || age < 65) {
    console.log("The person is an adult.");
}
// • If the person is age 65 or older, print a message that the person is an elder. 
else if (age >= 65) {
    console.log("The person is an elder.");
}
// 27) Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
var favorite_fruits = ["Apple", "Mango", "Orange"];
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
if (favorite_fruits.includes("Apple")) {
    console.log("You really like Apples.");
}
if (favorite_fruits.includes("Mango")) {
    console.log("You really like Mangos.");
}
if (favorite_fruits.includes("Orange")) {
    console.log("You really like Oranges.");
}
if (favorite_fruits.includes("Grape")) {
    console.log("You really like Grapes.");
}
if (favorite_fruits.includes("Banana")) {
    console.log("You really like Bananas.");
}
// 28) Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
var usernames = ["Admin", "Kashan", "Malik", "Awan"];
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
for (var i = 0; i < usernames.length; i++) {
    if (usernames[i] === "Admin") {
        console.log("Hello Admin, would you like to see a status report?");
    }
    // • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
    else {
        console.log("Hello ".concat(usernames[i], ", thank you for logging in again."));
    }
}
// 29) No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
var usernames = [];
if (usernames.length === 0) {
    console.log("We need to find some users!");
}
else {
    for (var i = 0; i < usernames.length; i++) {
        if (usernames[i] === "Admin") {
            console.log("Hello Admin, would you like to see a status report?");
        }
        else {
            console.log("Hello ".concat(usernames[i], ", thank you for logging in again."));
        }
    }
}
// 30) Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
var current_users = ["kashan", "malik", "awan", "jawad"];
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
var new_users = ["Kashan", "Malik", "Hashir", "Suleman"];
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
for (var i = 0; i < new_users.length; i++) {
    var lowercase_new_username = new_users[i].toLowerCase();
    if (current_users.includes(lowercase_new_username)) {
        console.log("Sorry, the username '".concat(new_users[i], "' is not available. Please enter a new username."));
    }
    else {
        console.log("Congratulations! The username '".concat(new_users[i], "' is available."));
    }
}
// 31) Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// • Loop through the array.
for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    var ordinal 
    // • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
    = void 0;
    // • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
    if (number === 1) {
        ordinal = "st";
    }
    else if (number === 2) {
        ordinal = "nd";
    }
    else if (number === 3) {
        ordinal = "rd";
    }
    else {
        ordinal = "th";
    }
    console.log(number + ordinal);
}
// 32) Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
var pizzas = ['Pepperoni', 'Fajita', 'BBQ Chicken'];
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
for (var i = 0; i < pizzas.length; i++) {
    console.log("I like ".concat(pizzas[i], " pizza."));
}
// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
console.log("Pizza is one of my favorite foods. I really love pizza!");
// 33) Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal.
var animals = ['dog', 'cat', 'rabbit'];
for (var i = 0; i < animals.length; i++) {
    console.log(animals[i]);
    //• Modify your program to print a statement about each animal, such as A dog would make a great pet. 
    console.log("A ".concat(animals[i], " would make a great pet."));
}
//• Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
console.log("Any of these animals would make a great pet!");
// 34) T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
function make_shirt(size, message) {
    console.log("The shirt size is ".concat(size));
    console.log("The message printed on the shirt is ".concat(message));
}
make_shirt("XL", "My Shirt");
// 35) Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirt1(size, message) {
    if (size === void 0) { size = 'L'; }
    if (message === void 0) { message = 'I love TypeScript'; }
    console.log("The shirt size is ".concat(size));
    console.log("The message printed on the shirt is ".concat(message));
}
make_shirt1();
make_shirt1("M");
make_shirt1("XXL", "I love JavaScript");
// 36) Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
function describe_city(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city, " is in ").concat(country));
}
describe_city("Karachi");
describe_city("Lahore");
describe_city("London", "UK");
// 37) City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
function city_country(city, country) {
    return "\"".concat(city, ", ").concat(country, "\"");
}
// Call your function with at least three city-country pairs, and print the value that’s returned.
var city1 = city_country("Karachi", "Pakistan");
var city2 = city_country("Lohare", "Pakistan");
var city3 = city_country("Islamabad", "Pakistan");
console.log(city1);
console.log(city2);
console.log(city3);
// 38) Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
function make_album(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title
    };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}
var album1 = make_album("Artist1", "Album1");
var album2 = make_album("Artist2", "Album2", 12);
var album3 = make_album("Artist3", "Album3");
console.log(album1);
console.log(album2);
console.log(album3);
// 39) Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
var magicianName = ["Kashan", "Malik", "Awan"];
function show_magicians(magicianName) {
    for (var i = 0; i < magicianName.length; i++) {
        console.log(magicianName[i]);
    }
}
show_magicians(magicianName);
// 40) Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
var magicianName = ["Kashan", "Malik", "Awan"];
function show_magicians1(magicianName) {
    for (var i = 0; i < magicianName.length; i++) {
        console.log(magicianName[i]);
    }
}
function make_great(magicianName) {
    for (var i = 0; i < magicianName.length; i++) {
        magicianName[i] = "The Great ".concat(magicianName[i]);
    }
}
make_great(magicianName);
show_magicians1(magicianName);
// 41) Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
var magicianName = ["Kashan", "Malik", "Awan"];
function show_magicians2(magicianName) {
    for (var i = 0; i < magicianName.length; i++) {
        console.log(magicianName[i]);
    }
}
function make_great1(magicianName) {
    var newMagicians = [""];
    for (var i = 0; i < magicianName.length; i++) {
        newMagicians.push("The Great ".concat(magicianName[i]));
    }
    return newMagicians;
}
var greatMagicians = make_great1(magicianName.slice());
console.log("Original Magicians:");
show_magicians2(magicianName);
console.log("\nModified Magicians:");
show_magicians2(greatMagicians);
// 42) Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Making a sandwich with the following items:");
    for (var i = 0; i < items.length; i++) {
        console.log("".concat(i + 1, ") ").concat(items[i]));
    }
    console.log("Enjoy your sandwich!");
}
make_sandwich("Olives");
make_sandwich("Meat", "Condiments");
make_sandwich("Vegetables", "Cheese", "Spreads");
// 43) Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
function carInfo(manufacturer, model) {
    var optional = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        optional[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    for (var i = 0; i < optional.length; i += 2) {
        car[optional[i]] = optional[i + 1];
    }
    return car;
}
var myCar = carInfo('Honda', 'Civic', 'color', 'Blue', 'year', 2023);
console.log(myCar);
