const input = document.querySelector("#phone");

window.intlTelInput(input, {
  initialCountry: "bd",
  utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@18.2.1/build/js/utils.js",
});