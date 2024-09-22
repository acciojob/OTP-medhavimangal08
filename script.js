let container = document.querySelector(".code-container");
for(let i = 0; i < 6; i++){
	let field = document.createElement("input");
	field.className = "code";
	field.type = "number";
	field.name = "otp";
	container.appendChild(field);
}

let inputfields = document.querySelectorAll(".code");
for(let i = 0; i < inputfields.length; i++){
	inputfields[i].addEventListener('input', function() {
		// Check if the input field contains a number
		if (inputfields[i].value !== "" && i+1 < inputfields.length) {
			// Focus on the next input field
			inputfields[i+1].classList.add('focused');
			inputfields[i].classList.remove('focused');
			
		}
	});
	
	inputfields[i].addEventListener('input', function() {
		// Check if the backspace key was pressed and the input field is empty
		if (inputfields[i].value === "" && i-1 >= 0) {
			// Focus on the previous input field
			inputfields[i-1].classList.add("focused")
			inputfields[i+1].classList.remove("focused")
			
		}
	});
}