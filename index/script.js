// Форма обратной связи
const form = document.getElementById("form");
const username = document.getElementById("from_name");
const email = document.getElementById("email_id");
const tel = document.getElementById("tel_number");
const sendButton = document.getElementById("send-button");


form.addEventListener("submit", (event) => {
	event.preventDefault();

	const isValidUserName = ValidateUsername(username.value);
	const isValidUserEmail = ValidateEmail(email.value);
	const isValidNumber = ValidateNumber(tel.value);

	if (isValidUserName) {
		username.classList.remove("isNotValid")
	} else {
		username.classList.add("isNotValid")
	}

	if (isValidUserEmail) {
		email.classList.remove("isNotValid")
	} else {
		email.classList.add("isNotValid")
	}

	if (isValidNumber) {
		tel.classList.remove("isNotValid")
	} else {
		tel.classList.add("isNotValid")
	}


	if (isValidUserEmail && isValidUserName && isValidNumber) {
		document.getElementById("alert").classList.remove("visible");
		sendButton.innerText = 'Отправление';
		const serviceID = 'service_ditx1ga'; // Берётся из (Email Services -> Add New Service)
		const templateID = 'template_j7jnes4'; // Берётся из (Email Templates -> My Default Template)
		emailjs.sendForm(serviceID, templateID, form)
			.then(() => {
				sendButton.innerText = 'Отправить';
				document.getElementById("from_name").value = "";
				document.getElementById("email_id").value = "";
				document.getElementById("tel_number").value = "";

			}, (err) => {
				sendButton.innerText = 'Отправить';
				alert(JSON.stringify(err));
			});
	} else {
		document.getElementById("alert").classList.add("visible");
	}
})

function ValidateUsername(username) {
	if (/^[А-ЯЁ а-яё A-Z a-z]+$/.test(username)) {
		return (true)
	}
	return (false)
}

function ValidateEmail(mail) {
	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
		return (true)
	}
	return (false)
}

function ValidateNumber(tel) {
	if (/^[\s()+-]*([0-9][\s()+-]*){6,20}$/.test(tel)) {
		return (true)
	}
	return (false)
}

jQuery(function($) {
	$(".phone_mask").mask("+7 (999) 999-9999");
});