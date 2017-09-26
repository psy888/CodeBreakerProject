let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
    if (answer = ''; && attempt = '';){
	setHiddenFields();
	}
}

//implement new functions here
function setHiddenFields() {
	answer = Math.floor(Math.random() * (10000 - 0));
	while (answer.length < 4){
		answer.toString().prepend('0');
	}
	attempt = 0;
	return answer;
}
function setMessage(messageP){
	message.innerHTML(messageP); 
}
function validateInput(input){
	if (input.length<4){
		setMessage('Guesses must be exactly 4 characters long.');
		return false;
	}else{
		return true;
	}
}

if (validateInput(input.value)){
	attempt++;
}else{
	return false;
}