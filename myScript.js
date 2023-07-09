const form = document.getElementById('form');
const password = document.getElementById('password');
const rePassword = document.getElementById('rePassword');
const alertMessage = document.querySelector('.alertMessage');
const alertTitle = document.querySelector('#alertTitle');

let isValid = false;
let passwordMatch = false;

function validateForm() {
    isValid = form.checkValidity();
    if (!isValid) {
        alertTitle.textContent = "Please fill the whole areas!";
        alertTitle.style.color = 'red';
        alertMessage.style.borderColor = 'red';
        return;
    }
    if (password.value === rePassword.value) {
        passwordMatch = true;
        password.style.borderColor = 'green';
        rePassword.style.borderColor = 'green';
    } else {
        passwordMatch = false;
        alertTitle.textContent = "Your passwords do not match!";
        alertMessage.style.borderColor = 'red';
        alertTitle.style.color = "red";
        password.style.borderColor = 'red';
        rePassword.style.borderColor = 'red';
        return;
    }
    if (isValid && passwordMatch) {
        alertTitle.textContent = "Registration is successfull!";
        alertMessage.style.borderColor = 'green';
        alertTitle.style.color = "green";
    }
}
function takeFormInformation() {
    const user = {
        name: form.name.value,
        surname: form.surname.value,
        email: form.email.value,
        phone: form.phone.value,
        address: form.address.value,
        password: form.password.value,
    };
    console.log(user)
}
function submitForm(e) {
    e.preventDefault();
    validateForm();
    if (isValid && passwordMatch) {
        takeFormInformation();
    }
}

form.addEventListener('submit', submitForm);