const errorMsg = 'Please provide a valid email adress';
const formEl = document.getElementById("notify-form");
const inputEl = document.getElementById('email');
const btnEl = document.getElementById("btn-submit");

const errorEl = document.createElement('p');
errorEl.classList.add('error_text');
errorEl.textContent = errorMsg;

// console.log(errorEl);

const validateEmail = email => {
    const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regEx.test(String(email).toLowerCase) 
}



btnEl.addEventListener('click', () => {
    const email = inputEl.value;
    console.log(email);
    if (validateEmail(email)) {
        formEl.removeChild(error);
        formEl.classList.remove('error');
    }
    else {
        formEl.classList.add('error');
        formEl.insertBefore(errorEl, btnEl);
    }
})
