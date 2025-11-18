

/// ================= Utility Functions =================
function generateOTP(length = 6) {
    let otp = "";
    for (let i = 0; i < length; i++) otp += Math.floor(Math.random() * 10);
    return otp;
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
}

function validatePhone(phone) {
    let cleaned = phone.replace(/[\s-()]/g, "");
    if (cleaned.startsWith("+91")) cleaned = cleaned.slice(3);
    else if (cleaned.startsWith("91")) cleaned = cleaned.slice(2);
    return /^[6-9]\d{9}$/.test(cleaned);
}

function getAllUsers() {
    const raw = localStorage.getItem("rr_users");
    return raw ? JSON.parse(raw) : [];
}

function saveUser(user) {
    const users = getAllUsers();
    users.push(user);
    localStorage.setItem("rr_users", JSON.stringify(users));
}

// ================= Signup =================
function get_otp(event) {
    if (event) event.preventDefault();

    const form = document.querySelector(".login-form");
    const formData = new FormData(form);
    const name = formData.get("name").trim();
    const username = formData.get("username").trim();
    const phone = formData.get("phone_number").trim();
    const email = formData.get("email_address").trim();
    const password = formData.get("creat_password").trim();
    const confirm = formData.get("conform_password").trim();

    const strongPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/;

    if (!name) return alert("Please enter your name.");
    if (!username) return alert("Please enter a username.");
    if (!validatePhone(phone)) return alert("Invalid phone number.");
    if (!validateEmail(email)) return alert("Invalid email address.");
    if (!strongPassword.test(password))
        return alert("Password must be at least 6 characters and include uppercase, lowercase, number, and special character.");
    if (password !== confirm) return alert("Passwords do not match.");

    const users = getAllUsers();
    if (users.some(u => u.username.toLowerCase() === username.toLowerCase())) return alert("Username already taken.");
    if (users.some(u => u.email.toLowerCase() === email.toLowerCase())) return alert("Email already registered.");
    if (users.some(u => u.phone === phone)) return alert("Phone number already registered.");

    const otp = generateOTP();
    const expiresAt = Date.now() + 5 * 60 * 1000;

    // Use localStorage instead of sessionStorage
    localStorage.setItem(
        "rr_signup_temp",
        JSON.stringify({ otp, expiresAt, user: { name, username, phone, email, password } })
    );

    alert(`OTP sent to ${phone} and ${email}.\n(Dev only: OTP = ${otp})`);
    // Use relative path
    window.location.href = "./singup_verification.html";
}

function verifyOTP(event) {
    if (event) event.preventDefault();

    const stored = JSON.parse(localStorage.getItem("rr_signup_temp"));
    if (!stored) {
        alert("No signup data found. Please start signup again.");
        window.location.href = "./sing_up.html";
        return;
    }

    const otpInput = document.querySelector("input[name='Otp']").value.trim();
    if (!otpInput) return alert("Please enter the OTP.");
    if (Date.now() > stored.expiresAt) return alert("OTP has expired.");
    if (otpInput !== stored.otp) return alert("Incorrect OTP.");

    saveUser(stored.user);
    localStorage.removeItem("rr_signup_temp");
    alert("✅ OTP Verified & Signup Successful!");
    window.location.href = "../index.html";
}

function resend_otp() {
    const stored = JSON.parse(localStorage.getItem("rr_signup_temp"));
    if (!stored) return alert("Please sign up first.");

    const otp = generateOTP();
    stored.otp = otp;
    stored.expiresAt = Date.now() + 5 * 60 * 1000;
    localStorage.setItem("rr_signup_temp", JSON.stringify(stored));

    alert(`A new OTP has been sent!\n(Dev only: OTP = ${otp})`);
}

// ================= Login =================
function login(event) {
    if (event) event.preventDefault();

    const usernameInput = document.querySelector("input[name='username']").value.trim();
    const passwordInput = document.querySelector("input[name='password']").value.trim();

    if (!usernameInput || !passwordInput) {
        return alert("Please enter both username and password.");
    }

    const users = getAllUsers();
    const user = users.find(u => u.username.toLowerCase() === usernameInput.toLowerCase());

    if (!user) return alert("Username not found. Please sign up.");
    if (user.password !== passwordInput) return alert("Incorrect password. Try again.");
    window.location.href = "./HTML/movies/movie_main.html";
}

// ================= Forgot Password =================
function sendotp(event) {
    if (event) event.preventDefault();
    const phoneInput = document.querySelector("input[name='Phone Number']").value.trim();

    if (!validatePhone(phoneInput)) return alert("Please enter a valid 10-digit Indian phone number.");
    const users = getAllUsers();
    if (!users.some(u => u.phone === phoneInput)) return alert("Phone number not found.");

    const otp = generateOTP();
    localStorage.setItem(
        "forgot_otp",
        JSON.stringify({ phone: phoneInput, otp, expiresAt: Date.now() + 5 * 60 * 1000 })
    );

    alert(`OTP sent successfully!\n(Dev only: OTP = ${otp})`);
}

function OTP_verification(event) {
    if (event) event.preventDefault();
    const enteredOtp = document.querySelector("input[name='Otp']").value.trim();
    const stored = JSON.parse(localStorage.getItem("forgot_otp"));
    if (!stored) return alert("Please request OTP first.");
    if (Date.now() > stored.expiresAt) return alert("OTP expired.");
    if (enteredOtp !== stored.otp) return alert("Incorrect OTP.");

    alert("OTP verified! You can now reset your password.");
    window.location.href = "./reset_password.html";
}

function resendForgotOTP(event) {
    if (event) event.preventDefault();
    const stored = JSON.parse(localStorage.getItem("forgot_otp"));
    if (!stored) return alert("Please request OTP first.");

    const otp = generateOTP();
    stored.otp = otp;
    stored.expiresAt = Date.now() + 5 * 60 * 1000;
    localStorage.setItem("forgot_otp", JSON.stringify(stored));

    alert(`New OTP sent!\n(Dev only: OTP = ${otp})`);
}

// ================= Reset Password =================
function reset_password(event) {
    if (event) event.preventDefault();
    const newPassword = document.querySelector("input[name='new_password']").value.trim();
    const confirmPassword = document.querySelector("input[name='confirm_password']").value.trim();

    const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/;
    if (!strongPasswordRegex.test(newPassword))
        return alert("Password must be at least 6 characters and include uppercase, lowercase, number, and special character.");
    if (newPassword !== confirmPassword) return alert("Passwords do not match.");

    // Update the password for the user
    const users = getAllUsers();
    const phone = JSON.parse(localStorage.getItem("forgot_otp"))?.phone;
    if (!phone) return alert("Something went wrong.");

    const userIndex = users.findIndex(u => u.phone === phone);
    if (userIndex === -1) return alert("User not found.");

    users[userIndex].password = newPassword;
    localStorage.setItem("rr_users", JSON.stringify(users));
    localStorage.removeItem("forgot_otp");

    alert("✅ Password reset successful!");
    window.location.href = "../index.html";
}


//=============== Sidenav ===================

// Open Sidenav
function openSidenav() {
    const sidenav = document.getElementById("sidenav");
    const overlay = document.getElementById("overlay");
    const main = document.getElementById("main");

    sidenav.style.width = window.innerWidth <= 768 ? "45%" : "250px";
    overlay.classList.add("open");

    if (window.innerWidth > 768) {
        main.style.marginLeft = "250px";
    }
}

// Close Sidenav
function closeSidenav() {
    const sidenav = document.getElementById("sidenav");
    const overlay = document.getElementById("overlay");
    const main = document.getElementById("main");

    sidenav.style.width = "0";
    overlay.classList.remove("open");
    main.style.marginLeft = "0";
}

// Close if window resizes to mobile
window.addEventListener("resize", () => {
    if (window.innerWidth <= 768) {
        document.getElementById("main").style.marginLeft = "0";
    }
});

document.getElementById("overlay").addEventListener("click", closeSidenav);

document.getElementById("main").addEventListener("click", () => {
    if (document.getElementById("overlay").classList.contains("open")) {
        closeSidenav();
    }
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && document.getElementById("overlay").classList.contains("open")) {
        closeSidenav();
    }
});


function goBack() {
    window.history.back();
}
function goNext() {
    window.history.forward();
}

