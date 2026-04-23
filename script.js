// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Password-protected CV download
const downloadBtn = document.getElementById('downloadBtn');
const passwordModal = document.getElementById('passwordModal');
const closeBtn = document.querySelector('.close');
const submitBtn = document.getElementById('submitBtn');
const passwordInput = document.getElementById('passwordInput');
const errorMsg = document.getElementById('errorMsg');

// Open modal when download button is clicked
downloadBtn.addEventListener('click', function() {
    passwordModal.style.display = 'block';
    passwordInput.focus();
});

// Close modal when X is clicked
closeBtn.addEventListener('click', function() {
    passwordModal.style.display = 'none';
    passwordInput.value = '';
    errorMsg.textContent = '';
});

// Close modal when clicking outside of it
window.addEventListener('click', function(event) {
    if (event.target === passwordModal) {
        passwordModal.style.display = 'none';
        passwordInput.value = '';
        errorMsg.textContent = '';
    }
});

// Submit password
submitBtn.addEventListener('click', function() {
    const enteredPassword = passwordInput.value;
    const correctPassword = 'Test@123'; // Replace with your actual code

    if (enteredPassword === correctPassword) {
        // If correct, trigger download
        const link = document.createElement('a');
        link.href = 'Hakim_Tuyisenge_CV.pdf'; // Replace with your actual CV file path
        link.download = 'Hakim_Tuyisenge_CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Close modal
        passwordModal.style.display = 'none';
        passwordInput.value = '';
        errorMsg.textContent = '';
    } else {
        errorMsg.textContent = 'Incorrect code. Please try again.';
        errorMsg.style.color = 'red';
        passwordInput.value = '';
        passwordInput.focus();
    }
});

// Allow Enter key to submit
passwordInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        submitBtn.click();
    }
});
