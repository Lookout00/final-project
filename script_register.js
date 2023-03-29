const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
signupBtn.onclick = (()=>{
});
signupLink.onclick = (()=>{
signupBtn.click();
return false;
});

window.location.href = form.getAttribute("action");