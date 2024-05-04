/*var name = "John";
var age = 23;

var message = "My name is " + name + " and I am " + age + " years old.";

console.log(message);




var students = []; // Changed variable name to "students" for clarity

function Student(first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
}

students.push(new Student("Jenny", "Peter", 8));
students.push(new Student("Carol", "Omondi", 6));
students.push(new Student("Paul", "Otieno", 7));

for (var i = 0; i < students.length; i++) {
    console.log(students[i]); // Corrected console.log statement
}


var accountBalance = 500;

function makeTransaction(salePrice){
	accountBalance -= salePrice
}

makeTransaction(300);
console.log(accountBalance);*/


var numField1 = document.getElementById("numField1");
var numField2 = document.getElementById("numField2");
var resultField = document.getElementById("resultField");
var form = document.getElementById("xIsWhatPercentOfY");

form.addEventListener("submit", function(event){
	if (!numField1.value || !numField2.value) {
		alert("please enter values in the field");
		} else {
			var x = parseFloat(numField1.value);
			var y = parseFloat(numField2.value);
			
			var result = x/y;
			var percent = result * 100;
			
			resultField.innerText = "Answer: " + percent + " %";
			event.preventDefault();
		}
})
