const switchToContactButton = document.getElementById('switch_to_contact_button');
const backToNameButton = document.getElementById('back_to_name_button');
const switchToRegisterButton = document.getElementById('switch_to_register_button');
const backToContactButton = document.getElementById('back_to_contact_button');
const finishRegisterButton = document.getElementById('finish_register_button');
const tab1 = document.getElementById('tab_1');
const tab2 = document.getElementById('tab_2');
const tab3 = document.getElementById('tab_3');

showTab1();

if (switchToContactButton) {
    switchToContactButton.addEventListener("click", function() {
        if (areRequiredFieldsFilled(1)) {
            showTab2();
        }
    });
}

if (backToNameButton) {
    backToNameButton.addEventListener("click", showTab1);
}

if (switchToRegisterButton) {
    switchToRegisterButton.addEventListener("click", function() {
        if (areRequiredFieldsFilled(2)) {
            showTab3();
        }
    });
}

if (backToContactButton) {
    backToContactButton.addEventListener("click", showTab2);
}

if (finishRegisterButton) {
    finishRegisterButton.addEventListener("click", function() {
        if (areRequiredFieldsFilled(3)) {
            success();
        }
    });
}

function showTab1() {
    tab1.style.display = "block";
    tab2.style.display = "none";
    tab3.style.display = "none";
}

function showTab2() {
    tab1.style.display = "none";
    tab2.style.display = "block";
    tab3.style.display = "none";
}

function showTab3() {
    tab1.style.display = "none";
    tab2.style.display = "none";
    tab3.style.display = "block";
}

function success() {
    alert("Vielen Dank, Sie haben sich erfolgreich angemeldet");
    showTab1();
}

function areRequiredFieldsFilled(tabId) {
    const requiredFields = document.querySelectorAll(`#tab_${tabId} [required]`);

    for (const field of requiredFields) {
        if (!field.value.trim()) {
            return false;
        }
    }

    return true;
}



/*
console.log("test");
let submitButton = document.getElementById("submit_button");
if(submitButton) {
    submitButton.addEventListener("click", function(event){
        event.preventDefault();
        let gif=document.getElementById("gif");
        gif.style.display="block";
        
    });
}
*/