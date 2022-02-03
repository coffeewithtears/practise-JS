var today = new Date();

var name = "Nazerke Bikulova";
var group = "CS-2124";
var day = today.getDay();
var month = today.getMonth();
var year = today.getFullYear();
var date = today.getDate();
var graduationDate;


document.querySelector(".getInfo").innerHTML = name + " " + group ;
document.querySelector(".getYer").innerHTML = "Year : " + year;
document.querySelector(".getDat").innerHTML = "Date : " + date;


var dayList = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var monthList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

document.querySelector(".day").innerHTML = "Today is : " + dayList[day - 1] + ".";
console.log("Today is : " + dayList[day] + ".");

document.querySelector(".getMonh").innerHTML = "Month : " + monthList[month];


var hour = zerO(today.getHours());
var minute = zerO(today.getMinutes());
var seconds = zerO(today.getSeconds());

function zerO(num) {
  return num < 10 ? `0${num}` : num;
}

document.querySelector(".time").innerHTML = "Current time is : " + hour + " : " + minute + " : " + seconds;
console.log("Current time is : " + hour + " : " + minute + " : " + seconds);

document.querySelector(".grad").innerHTML = (2024 - date*365) +  " days left until the freedom!";


function calc() {
  var n1 = parseFloat(document.getElementById('n1').value);
  var n2 = parseFloat(document.getElementById('n2').value);
  var oper = document.getElementById('operators').value;

  if (oper == '*') {
      document.getElementById('result').value = n1 * n2;
  }
  else if (oper == '/') {
    document.getElementById('result').value = n1 / n2;

  }

}
