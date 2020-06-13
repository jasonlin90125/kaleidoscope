let enterbutton = document.getElementById("enter")

var autoExpand = function (field) {
	// Reset field height
	field.style.height = 'inherit';
	// Get the computed styles for the element
	var computed = window.getComputedStyle(field);
	// Calculate the height
	var height = parseInt(computed.getPropertyValue('border-top-width'), 10)
	             + parseInt(computed.getPropertyValue('padding-top'), 10)
	             + field.scrollHeight
	             + parseInt(computed.getPropertyValue('padding-bottom'), 10)
	             + parseInt(computed.getPropertyValue('border-bottom-width'), 10);
	field.style.height = height + 'px';
};

document.addEventListener('input', function (event) {
	if (event.target.tagName.toLowerCase() !== 'textarea') return;
	autoExpand(event.target);
}, false);

var enterbuttonIsClicked = false;
function clickHandler(){ // declare a function that updates the state
  enterbuttonIsClicked = true;
  newIdea();
}
enterbutton.addEventListener('click', clickHandler); // associate the function above with the click event

function newIdea() {
  console.log("New idea!");
  var idea = document.getElementById("input").value;
  console.log(idea);
   
  // store the unordered list as a variable (now we can refer to it as "ul")
  var ul = document.getElementById("list");
  var box = document.createElement("li");
  var text = document.createElement("div");
  text.appendChild(document.createTextNode(idea));
  var date = document.createElement("p");
  getDate(date);
  
  box.appendChild(text);
  box.appendChild(date);
  ul.appendChild(box);  // put list item in our unordered list
  
  document.getElementById("input").value = "";   // erase what is currently in todo list
    
  box.onclick = removeIdea;  // run removeItem when the li is clicked
};

function removeIdea(e) {
  e.target.remove()
}

function getDate(date) {
  var objToday = new Date(),
	  weekday = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'),
	  dayOfWeek = weekday[objToday.getDay()],
	  domEnder = function() { var a = objToday; if (/1/.test(parseInt((a + "").charAt(0)))) return "th"; a = parseInt((a + "").charAt(1)); return 1 == a ? "st" : 2 == a ? "nd" : 3 == a ? "rd" : "th" }(),
	  dayOfMonth = today + ( objToday.getDate() < 10) ? '0' + objToday.getDate() + domEnder : objToday.getDate() + domEnder,
	  months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'),
	  curMonth = months[objToday.getMonth()],
	  curYear = objToday.getFullYear(),
	  curHour = objToday.getHours() > 12 ? objToday.getHours() - 12 : (objToday.getHours() < 10 ? "0" + objToday.getHours() : objToday.getHours()),
	  curMinute = objToday.getMinutes() < 10 ? "0" + objToday.getMinutes() : objToday.getMinutes(),
	  curSeconds = objToday.getSeconds() < 10 ? "0" + objToday.getSeconds() : objToday.getSeconds(),
	  curMeridiem = objToday.getHours() > 12 ? "PM" : "AM";

  var today = curHour + ":" + curMinute + "." + curSeconds + " " +    
    curMeridiem + " | " + dayOfWeek + " | " + curMonth + " " + dayOfMonth + ", " + curYear;

  date.innerHTML = today;
}

/*if (document.getElementsByTagName("ul").document.getElementsByTagName("li").length < 3 ) {
  ul.appendChild(li);  // put list item in our unordered list
}
else {
var newlist = document.createElement("ul");*/