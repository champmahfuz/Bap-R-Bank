const loginBtn = document.getElementById('login-submit');
loginBtn.addEventListener('click', function () {
    const userEmail = document.getElementById('user-email').value;
    const userPassword = document.getElementById('user-password').value;
    if (userEmail == 'user@bap.com' && userPassword == 'taka') {
        window.location.href = 'banking.html'
    }
    else {
        // alert('You enter your correct email and password');
        const errorMessage = document.getElementById('error-message');
        errorMessage.style.display = 'block';
    }
});