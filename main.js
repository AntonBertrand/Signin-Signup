function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form-message");

    messageElement.textContent = message;
    messageElement.classList.remove(".form-input-success-message",  ".form-input-error-message");
    messageElement.classList.add(`form-input-${type}-message`);
} 

function setInputError (inputElement, message) {
    inputElement.classList.add("form-input-error");
    inputElement.parentElement.querySelector(".form-error-message").textContent = message;
    inputElement.parentElement.querySelector(".form-error-message").classList.add("form-input-error-message");

}

function clearInputError(inputElement) {
    inputElement.classList.remove("form-input-error");
    inputElement.parentElement.querySelector(".form-error-message").textContent = "";
    inputElement.parentElement.querySelector(".form-error-message").classList.remove("form-input-error-message");
}


document.addEventListener("DOMContentLoaded", () => {

    const loginForm = document.querySelector('#login-form');
    const signupForm = document.querySelector('#signup-form')

    document.querySelector('#link-signup').addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form-hidden");
        signupForm.classList.remove("form-hidden");
    });


    document.querySelector('#link-login').addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form-hidden");
        signupForm.classList.add("form-hidden");
    });

    loginForm.addEventListener("submit", e => {
        e.preventDefault();

        //AJAX Login

        setFormMessage(loginForm, "error", "Invalid username/password combination");
        
    });

    document.querySelectorAll(".form-input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if (e.target.id == "signupUsername" && e.target.value.length < 10) {
                setInputError(inputElement, "Username must be at least 10 characters in length");
            }
        });

        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        })

    });

});
