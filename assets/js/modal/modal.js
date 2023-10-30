const loginModal = document.querySelector('#loginModal');
const sendOTPModal = document.querySelector('#sendOTPModal');
const registerModal = document.querySelector('#registerModal');

const login = new bootstrap.Modal(loginModal);
const sendOTP = new bootstrap.Modal(sendOTPModal);
const register = new bootstrap.Modal(registerModal);

const loginButton = document.querySelector('#btn-login');
const otpButton = document.querySelector('#btn-otp');

loginButton.addEventListener('click', showOTPModal);
otpButton.addEventListener('click', showRegisterModal);

function showOTPModal() {
    login.hide();
    sendOTP.show();
}

function showRegisterModal() {
    sendOTP.hide();
    register.show();
}