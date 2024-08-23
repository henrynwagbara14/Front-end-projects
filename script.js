document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const validUsername = 'user';
    const validPassword = 'password';

    if (username === validUsername && password === validPassword) {
        window.location.href = 'Gallery.html';
    } else {
        document.getElementById('errorMessage').textContent = 'Invalid username or password.';
    }
});


function Logout() {

    sessionStorage.removeItem('loggedIn');
    localStorage.removeItem('loggedIn');

    window.location.href = 'login.html';
}

