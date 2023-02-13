let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";

let item = "";

let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");
let box3 = document.getElementById("box3");

box1.addEventListener("click", function(){
	(tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}

});

box2.addEventListener("click", function(){
	(tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
});

box3.addEventListener("click", function(){
	(tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
});

let usercard = document.getElementById("usercard");

let p = document.createElement("p");

p.innerText = `${tg.initDataUnsafe.user.first_name}
${tg.initDataUnsafe.user.last_name}`;


usercard.appendChild(p); 
