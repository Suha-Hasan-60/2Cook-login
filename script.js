function sendOTP() {
    var phone = document.getElementById('phone').value;
    var otp = Math.floor(100000 + Math.random() * 900000); // Generate a random 6-digit OTP
    alert("OTP sent to " + phone + ": " + otp); // Simulate sending OTP
    localStorage.setItem('otp', otp); // Store OTP in local storage for verification
}

function verifyOTP() {
    var enteredOTP = document.getElementById('otp').value;
    var storedOTP = localStorage.getItem('otp');
    if (enteredOTP === storedOTP) {
        alert("OTP verified successfully!");
    } else {
        alert("Incorrect OTP. Please try again.");
    }
}
