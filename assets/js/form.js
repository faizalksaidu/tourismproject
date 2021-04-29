let email = document.getElementById("email");
let pwd = document.getElementById("pwd");

function validate() {
	if(email.value == "" || pwd.value == "") {
		alert("Feilds cannit be empty");
		return false;
	} else {
		alert("validation is okay");
		return true;
	}
}