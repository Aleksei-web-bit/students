var dateOfBirth;
var countUsers = 0;
var ageSum = 0;

function addStudent() {
const fullName = document.getElementById("fullName").value;
console.log("fullName = " + fullName);

const gender = document.getElementById("gender").value;
console.log("gender = " + gender);

dateOfBirth = document.getElementById("dateOfBirth").value;
console.log("dateOfBirth = " + dateOfBirth);

const age = getAge();
console.log("age = " + age);

const table = document.getElementById("studentsTable");
const row = table.insertRow(1);
const cell1 = row.insertCell(0).innerText = fullName;
const cell2 = row.insertCell(1).innerText = gender;
const cell3 = row.insertCell(2).innerText = dateOfBirth;
const cell4 = row.insertCell(3).innerText = age;

countUsers = countUsers + 1;
ageSum = ageSum + age;

const averageAge = document.getElementById("averageAge");
averageAge.innerHTML = ageSum / countUsers;
}

function getAge() {
const age = Math.floor((new Date() - new Date(dateOfBirth)) / 1000 / 60 / 60 / 24 / 365);
return age;
}