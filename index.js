const time = document.getElementById("time"),
  greeting = document.getElementById("greeting"),
  name = document.getElementById("name"),
  goal = document.getElementById("goal");
function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();
  time.innerHTML = `${hour}<span>:</span>${minWithZero(
    min
  )}<span>:</span>${minWithZero(sec)}<span></span>`;

  setTimeout(showTime, 1000);
}

function minWithZero(n) {
  return (parseInt(n, 10) < 10 ? "0" : "") + n;
}

function setBackground() {
  let today = new Date(),
    hour = today.getHours();

  if (hour < 12) {
    // Morning

    document.body.style.backgroundImage = "url('morning.jpg')";

    greeting.textContent = "Good Morning";
    greeting.style.color = "white";
    time.style.color = "white";
    name.style.color = "white";
    goal.style.color = "white";
  } else if (hour > 12 && hour < 18) {
    // Afternoon
    document.body.style.backgroundImage = "url('day.jpg')";
    greeting.textContent = "Good Afternoon";
    greeting.style.color = "white";
    time.style.color = "white";
    name.style.color = "white";
    goal.style.color = "white";
    // document.body.style.color ="white";
  } else {
    // Evening
    document.body.style.backgroundImage = "url('night.jpg')";
    greeting.textContent = "Good Evening";
    // document.body.style.color ="white";
    greeting.style.color = "white";
    time.style.color = "white";
    name.style.color = "white";
    goal.style.color = "white";
  }
}

function getName() {
  if (localStorage.getItem("name") === null) {
    name.textContent = "[Enter your name]";
  } else {
    name.textContent = localStorage.getItem("name");
  }
}

function setName(e) {
  debugger;
  if (e.type == "keypress") {
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem("name", e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem("name", e.target.innerText);
  }
}

name.addEventListener("keypress", setName);
name.addEventListener("blur", setName);

function getGoal() {
  if (localStorage.getItem("goal") === null) {
    goal.textContent = "[Set your goal]";
  } else {
    goal.textContent = localStorage.getItem("goal");
  }
}
function setGoal(e) {
  if (e.type == "keypress") {
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem("goal", e.target.innerText);
      goal.blur();
    }
  } else {
    localStorage.setItem("goal", e.target.innerText);
  }
}

goal.addEventListener("keypress", setGoal);
goal.addEventListener("blur", setGoal);

// function clicked() {

//   if(onclick){
// name.textContent.style.display = "none";
//   }

// }

showTime();
setBackground();
getName();
getGoal();
// setName();
// clicked();

// TO DO:
// ad a reminder or something, after set your goal and name, a reminder for tomorrow
// like a calendar which remind you day by day
