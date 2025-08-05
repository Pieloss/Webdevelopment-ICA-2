 //handles the hidden page system
function showPage(pageNumber) {
	// Hide all pages
	const pages = document.querySelectorAll('.page');
	pages.forEach(page => page.classList.remove('visible'));

	// Show the selected page
	document.getElementById('page' + pageNumber).classList.add('visible');
}




const btnSubmit = document.querySelector("#btnSubmit");
btnSubmit.addEventListener("click", CheckAns);
const scorebox = document.querySelector("#scorebox");
var q1, q2, q3, q4, score = 0;

function CheckAns() {

	score = 0; //reset score to 0, check ans and give score if correct
	//read the value of the selected radio button for q1

	q1 = document.querySelector("input[name='q1']:checked").value;
	console.log(q1); //check q1 value retrieved
	if (q1 == "1903") score++;

	//read the value of the selected radio button for q2
	q2 = document.querySelector("input[name='q2']:checked").value;
	console.log(q2); //check q2 value retrieved
	if (q2 == "1968") score++;

	q3 = document.querySelector("input[name='q3']:checked").value;
	console.log(q3); //check q1 value retrieved
	if (q3 == "bob") score++;

	q4 = document.querySelector("input[name='q4']:checked").value;
	console.log(q4); //check q1 value retrieved
	if (q4 == "yescorrect") score++;

	scorebox.innerHTML = "Score:" + score;
}






const stopBtn = document.querySelector("#stopBtn");
stopBtn.addEventListener("click", function() {
	clearInterval(moveDurianItvId);
	stopBtn.classList.add("newstate"); //stop running the interval
});

const durianId = document.getElementById("durianId");

function GetRandom(min, max) {
	//this will select a number between min and max
	return Math.round(Math.random() * (max - min)) + min;
}

function MoveDurian() {
const playArea = document.querySelector(".play-area");
const maxLeft = playArea.clientWidth - durianId.clientWidth;
const maxTop = playArea.clientHeight - durianId.clientHeight;

    durianId.style.left = GetRandom(0, maxLeft) + "px";
    durianId.style.top = GetRandom(0, maxTop) + "px";
}
var moveDurianItvId = setInterval(MoveDurian, 400);

const scoreBox = document.getElementById("scoreBox");
var score = 0; //to track how many clicks
function durianCatch() {
	//increases score after clicking
	score++;
	//update html scorebox
	scoreBox.innerHTML = "Score: " + score;
}
//link durian to mouseclick to durianCatch function
durianId.addEventListener("click", durianCatch);

const popAudio = new Audio("audio/dep.mp3");
//create an new Audio Object using sound file
var score = 0; //to track how many clicks

//increases score after clicking
score++;
//update html scorebox
scoreBox.innerHTML = "Score: " + score;
popAudio.play(); //play the audio!
function durianCatch() {
	//increases score after clicking
	score++;
	//update html scorebox
	scoreBox.innerHTML = "Score: " + score;
	popAudio.play(); //play the audio!
}


document.addEventListener("keydown", function(evt) {
	console.log(evt);
	if (evt.code == "KeyT") {
		durianId.classList.add("shrink");
	}
	if (evt.code == "KeyU") {
		durianId.classList.remove("shrink");
	}
});