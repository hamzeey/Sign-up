const inputs = document.querySelectorAll('input');
const patterns = {

    telephone: /^\d{11}$/,
    username: /^[a-z\d]{5,12}$/i,
    password: /^[\w@-]{8,20}$/,
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
    //           yourname  @  domain    . extension eg.co or .com  . again eg .uk
};

const validate = (field, regex) => {
    if (regex.test(field.value)) {
        field.className = 'valid';
    } else {
        field.className = 'invalid';
    }
}


inputs.forEach(input => {
    input.addEventListener('keyup', (e) => {

        validate(e.target, patterns[e.target.attributes.name.value]);
    });
});


const form = document.querySelector('.signup-form')

form.addEventListener('submit', e => {
    e.preventDefault();

    console.log(form.username.value);
    console.log(form.email.value);
    console.log(form.password.value);
    console.log(form.telephone.value);
});



