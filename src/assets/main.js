let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
}

//implement new functions here
if (answer = '' && attempt = ''){
	setHiddenFields();
}
	function setHiddenFields() {
		answer = Math.floor(Math.random() * (10000 - 0));
		while (answer.length < 4){
			answer.toString().prepend('0');
		}
		attempt = 0;
		return answer;
	}
