const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

const registerForm = document.getElementById("registerForm");
if (registerForm) {
  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = regEmail.value;
    const password = regPassword.value;
    auth.createUserWithEmailAndPassword(email, password)
      .then(() => {
        alert("Registration successful!");
        window.location.href = "dashboard.html";
      })
      .catch(err => alert(err.message));
  });
}

const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = loginEmail.value;
    const password = loginPassword.value;
    auth.signInWithEmailAndPassword(email, password)
      .then(() => {
        alert("Login successful!");
        window.location.href = "dashboard.html";
      })
      .catch(err => alert(err.message));
  });
}

const userMsg = document.getElementById("welcomeMsg");
auth.onAuthStateChanged(user => {
  if (user && userMsg) userMsg.textContent = `Welcome, ${user.email}`;
});

function logout() {
  auth.signOut().then(() => window.location.href = "index.html");
}