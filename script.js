function checkPassword() {
    const password = document.getElementById('password').value;
    const correctPassword = '123456'; // Replace with your desired password
    const message = document.getElementById('message');
    
    if (password === correctPassword) {
        document.getElementById('password-section').style.display = 'none';
        document.getElementById('content-section').style.display = 'block';
    } else {
        message.textContent = 'Incorrect password, please try again.';
        message.style.color = 'red';
    }
}
