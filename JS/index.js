
let formEmail = document.querySelector('.ComingSoon__input')
let button = document.querySelector('.ComingSoon__button')

let iconError = document.querySelector('.Form__iconError')
let textError = document.querySelector('.Form__messageError')

const emailForm = /^[a-zA-Z0-9.!#$%&'*+/=?^_{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/


button.addEventListener('click', () => {

	let emailValue = formEmail.value

	if (emailForm.test(emailValue)) {
		iconError.classList.add('hidden')
		textError.classList.add('hidden')

	} else {
		iconError.classList.remove('hidden')
		textError.classList.remove('hidden')
	}

})
