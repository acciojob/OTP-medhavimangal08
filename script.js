let container = document.querySelector(".code-container");
for(let i = 0; i < 6; i++){
	let field = document.createElement("input");
	field.className = "code";
	field.type = "number";
	field.name = "otp";
	field.maxLength = 1;
	container.appendChild(field);
}
let inputfields = document.querySelectorAll(".code");
for(let i = 0; i < inputfields.length; i++){
	inputfields[i].addEventListener('input', function() {
		// Check if the input field contains a number and focus on the next input field
		if (inputfields[i].value !== "" && i+1 < inputfields.length) {
			inputfields[i+1].focus();
		}
	});
	
	inputfields[i].addEventListener('keydown', function(e) {
		// Check if the backspace key was pressed and the input field is empty and focus on the previous input field
		if (e.key === "Backspace" && inputfields[i].value === "" && i-1 >= 0) {
			inputfields[i-1].focus();
		}
	});
}

