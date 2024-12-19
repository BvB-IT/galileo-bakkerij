
const FORMAPP = {
    init() {
        FORMAPP.addListeners();
    },

    addListeners() {
        let form = document.contactForm;
        let name = document.getElementById('name');
        let email = document.getElementById('email');
        let phone = document.getElementById('phone');
        let message = document.getElementById('message');

        if (name) {
            console.log("name found");
            name.addEventListener('input', FORMAPP.logEvent);
            name.addEventListener('change', FORMAPP.testName);
            name.addEventListener('input', FORMAPP.validate);
            name.addEventListener('invalid', FORMAPP.fail);
            form.addEventListener('submit', FORMAPP.validate);
        } else
            console.log('name not found');

    },

    logEvent(ev) {
        console.log(ev); // Logs the Event object for each key press
    },

    validate(ev) {
        ev.preventDefault();
        let form = ev.target;

        let name = document.getElementById('name');
        console.log('willValidate', name.willValidate);
        console.log(name.validity);

    },
    testName(ev) {
        let name = ev.target;
        name.setCustomValidity('');
        let currently = name.checkValidity();
        console.log('currently', currently)
    },

    fail(ev) {
        let field = ev.target;
        // the invalid event fired
        console.log('INVALID');
        //standard display change for any element
        switch (field.id) {
            case 'name':
                let span = field.parentElement.querySelector('.errMessage');
                span.textContent = 'Must be a valid Gmail address.';
                break;
        }
    },
};

document.addEventListener('DOMContentLoaded', FORMAPP.init);
console.log("form.js loaded");
