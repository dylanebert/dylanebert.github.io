var line = document.getElementById("line");
var length = line.getTotalLength();

line.style.strokeDasharray = length;
line.style.strokeDashoffset = length;

window.addEventListener("scroll", myFunction);
myFunction();

function myFunction() {
	var scrollpercent = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
	var draw = length * (scrollpercent + 0.05) * 0.75;
	line.style.strokeDashoffset = length - draw;
}