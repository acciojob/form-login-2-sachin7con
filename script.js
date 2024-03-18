//SGN your JS code here. If required.
function ValFunc(){
	const fName = document.getElementById("FirstName");
	const lName = document.getElementById("LastName");
	const pNum = document.getElementById("PhoneNumber");
	const email = document.getElementById("Email");

	alert(fName.name + ": " + fName.value +  " " + lName.name + ": " + lName.value + " " + pNum.name + ": " + pNum.value + " " + email.name + ": "  + email.value );
}