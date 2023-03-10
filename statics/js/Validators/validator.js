export class Validator {
	constructor() {}

	static checkEmptyFields(fields) {
		var isAnyEmpty = false;
		let emptyFeilds = [];
		for (var i = 0; i < fields.length; i++) {
			if (fields[i].value == "") {
				emptyFeilds.push(fields[i]);
				isAnyEmpty = true;
			}
		}
		let result = {
			isAnyEmpty: isAnyEmpty,
			EmptyFeilds: emptyFeilds,
		};
		return result;
	}

	static validatePin(pin) {
		var regex = /( *?[0-9] *?){6}/;
		return regex.test(pin);
	}

	static checkEmailValid(email) {
		const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
		return regex.test(email);
	}

	static applyNumbericValidation(evt) {
		var theEvent = evt || window.event;

		// Handle paste
		if (theEvent.type === "paste") {
			key = evt.clipboardData.getData("text/plain");
		} else {
			// Handle key press
			var key = theEvent.keyCode || theEvent.which;
			key = String.fromCharCode(key);
			if (theEvent.key == ".") key = theEvent.key;
		}
		var regex = /[0-9]|\./;
		if (!regex.test(key)) {
			theEvent.returnValue = false;
			if (theEvent.preventDefault) theEvent.preventDefault();
		}
	}

	static applyPinValidation(e, element) {
		this.applyNumbericValidation(e);
		if (element.value.length == 6) e.preventDefault();
		let regex = /[0-9]/;
		if (!regex.test(e.key)) e.preventDefault();
	}

	static applyNameValidation(e) {
		let regex = /^[a-zA-Z]+$/;
		if (!regex.test(e.key)) {
			e.preventDefault();
		}
	}

	static applyUsernameValidation(e) {
		let regex = /^[0-9]|[a-zA-Z]+$/;
		if (!regex.test(e.key)) {
			e.preventDefault();
		}
	}

	static validateUsername(e) {
		let regex = /^[0-9]|[a-zA-Z]+$/;
		return regex.test(e);
	}

	static applyPhoneValidation(e, element) {
		let regex = /[0-9]/;
		if (!regex.test(e.key)) e.preventDefault();
		if (element.value.length === 11) e.preventDefault();
	}
}
