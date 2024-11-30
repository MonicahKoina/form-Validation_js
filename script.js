const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();
})

const validateInputs = () => {
    const usernameValue = username.ariaValueMax.trim();
    const emailValue = email.value.trim();
    const passwordValue =  password.value.trim();
    const password2Value = password2.value.trim();

}