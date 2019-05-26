var display1 = document.getElementById("p1display");
var display2 = document.getElementById("p2display");
var Score_Limit = document.querySelector("p");
var number = document.querySelector("input");
var buttoms1 = document.querySelector("#p1");
var buttoms2 = document.querySelector("#p2");
var buttoms3 = document.querySelector("#reset");
var Score_default_limit = 5;
var score1 = 0, score2 = 0;

number,addEventListener("change", function(){
	
})

buttoms1.addEventListener("click", function(){
	if(score1<Score_default_limit && score2<Score_default_limit){
		score1 ++;
	}
	if(score1 === Score_default_limit){
		display1.classList.add("winner");
	}
	display1.textContent = score1;
	
})
buttoms2.addEventListener("click", function(){
	 if(score1<Score_default_limit && score2<Score_default_limit){
		score2 ++;
	}
	if(score2 === Score_default_limit){
		
		display2.classList.add("winner");
	}
	display2.textContent = score2;
	
})

buttoms3.addEventListener("click", function(){
	score1 = 0, score2 = 0
	display1.textContent = score1;
	display2.textContent = score2;
	display2.classList.remove("winner");
	display1.classList.remove("winner");

})

