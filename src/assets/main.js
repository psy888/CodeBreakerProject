let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
    if (!answer && !attempt){
	setHiddenFields();
	}
	if (validateInput(input)){
		return attempt++;
	}else{
		return false;
	}
}

//implement new functions here
function setHiddenFields() {
	answer.value = Math.floor(Math.random() * 10000);
	while (answer.value.length < 4){
		answer.value = '0' + answer.value;
	}
	attempt = 0;
	return answer;
}
function setMessage(messageP){
	message.innerHTML = messageP; 
}
function validateInput(input){
	if (input.value.length != 4){
		setMessage('Guesses must be exactly 4 characters long.');
		return false;
	}else{
		return true;
	}
}
function getResults(input){

}
