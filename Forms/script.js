// a keyup listener on the first input field, so that once you type a letter in this field, it goes into the <span id="display-firstname">
document.querySelector("#firstname").addEventListener('keyup', 
function (e) {document.querySelector("#display-firstname").textContent = this.value});

// a keyup listener on the second input (the number input), so that if the age is below 18 the content of the section a-hard-truth remains hidden, otherwise show them this hard to swallow fact
document.querySelector("#age").onkeyup = function () {
    if(this.value >= 18) {
        const sectionNode = document.querySelector("#a-hard-truth");
        sectionNode.setAttribute("style", "visibility: visible");
    }
}

// turn the field red if the password is too short (less than 6 characters) or if the password and its confirmation do not match
const checkPwd = (e) => {
    let bgColor = "#ffffff";

    const pwd = document.querySelector("#pwd");
    const pwdConfirm =  document.querySelector("#pwd-confirm");

    if(e.target.value.length < 6) {
        bgColor = "#ff0000";
    }

    e.target.setAttribute("style", `background-color: ${bgColor}`);

    if(pwd.value !== pwdConfirm.value && pwdConfirm.value != ""){
        pwdConfirm.setAttribute("style", "background-color: #ff0000");
    }
}

document.querySelector("#pwd").addEventListener('keyup', checkPwd);
document.querySelector("#pwd-confirm").addEventListener('keyup', checkPwd);

// a change listener on the <select> field to toggle a dark mode on the whole page
const toggleDarkmode = (e) => {
    let bgColor;
    let textColor;

    if(e.target.value == "light") {
        bgColor = "#ffffff";
        textColor = "#000000";
    } else {
        bgColor = "#000000";
        textColor = "#ffffff";
    }

    document.body.style.backgroundColor = bgColor;
    document.body.style.color = textColor;
}

document.querySelector("#toggle-darkmode").addEventListener('change', toggleDarkmode);