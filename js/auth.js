const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    //get user info
    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;
    ///signup user
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        console.log(cred)
    })
})