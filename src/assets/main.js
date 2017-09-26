let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
    if ((answer.value == '') && (attempt.value == '')){
	setHiddenFields();
	console.log('Answer Set!');
	}
	if (validateInput(input.value)){
		attempt.value++;
		console.log('attempt' + attempt.value);
	}else{
		return false;
	}
	if(getResults(input.value)){
		setMessage('You Win! :)');
		showReplay();
		showAnswer(true);
	}else if(attempt.value >= 10){
		setMessage('You Lose! :(');
		showReplay();
		showAnswer(false);
	}else{
		setMessage('Incorrect, try again.');
	}

}

//implement new functions here
function setHiddenFields() {
	answer.value = Math.floor(Math.random() * 10000);
	while (answer.value.length < 4){
		answer.value = '0' + answer.value;
	}
	attempt.value = 0;
	return answer;
}
function setMessage(messageP){
	message.innerHTML = messageP; 
}
function validateInput(input){
	if (input.length == 4){
		setMessage('');
		return true;
	}else{
		setMessage('Guesses must be exactly 4 characters long.');
		return false;
	}
}
function getResults(input){
	let divBegin = '<div class="row"><span class="col-md-6">';
	let divEnd = '</span><div class="col-md-6">';
	let result = '';
	let guessed = 0;
	
		for (var i = 0; i <= 3; i++) {
			if(input[i] == answer.value[i]){
				result += '<span class="glyphicon glyphicon-ok"></span>';
				guessed++;
			}else if(answer.value.indexOf(input[i]) != -1){
				result += '<span class="glyphicon glyphicon-transfer"></span>';
			} else{
				result += '<span class="glyphicon glyphicon-remove"></span>';
			}
		}
		results.innerHTML += '<br>' + divBegin + input + divEnd + divBegin + result + divEnd;
	

	if( guessed == 4){
		return true;
	}else {
		return false;
	}
}
function showAnswer(a){
	code.innerHTML = answer.value;
	if(a){
		code.addClass(' success');
	}else{
		code.addClass(' failure');
	}
}

function showReplay(){
	document.getElementById("guessing-div").style.display = 'none';
	document.getElementById("replay-div").style.display = 'block';
}
