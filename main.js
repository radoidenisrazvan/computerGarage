var MenuItems = document.getElementById("MenuItems");

MenuItems.style.maxHeight = "0px";

function menutoggle(){
    if(MenuItems.style.maxHeight == '0px'){
        MenuItems.style.maxHeight = '300px';
    }
    else {
        MenuItems.style.maxHeight = '0px';
    }
}

/* menu login */

const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');


registerLink.addEventListener('click', () => {
    wrapper.style.display = 'flex'; // Afișează wrapper-ul când este activ
    wrapper.classList.add('active');
});



loginLink.addEventListener('click', ()=>{
    wrapper.classList.remove('active');
    
});


btnPopup.addEventListener('click', ()=>{
    wrapper.style.display = 'flex'; // Afișează wrapper-ul când este activ
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=>{
    wrapper.style.display = 'none'; // Ascunde wrapper-ul când nu este activ
    wrapper.classList.remove('active-popup');
});



/* login/register functionalitate */
const loginForm = document.querySelector('.form-box.login form');
const registerForm = document.querySelector('.form-box.register form');

// admin login account
const sampleUser = {
  email: 'admin@gmail.com',
  password: 'admin'
};

function markAsLoggedIn() {
    document.body.classList.add('logged-in');
  }

function hideLoginButton(){
  const loginButton = document.getElementById('btnLogin');
    if (loginButton) {
        loginButton.style.display = 'none';
    }
}

// Function to handle login
function handleLogin(email, password) {
  if (email === sampleUser.email && password === sampleUser.password) {
    alert('Login successful!');
    wrapper.style.display = 'none';
    wrapper.classList.remove('active');
    markAsLoggedIn();
    hideLoginButton();
  } else {
    alert('Invalid email or password. Please try again.');
  }
}

// Function to handle registration
function handleRegister(username, email, password) {
  alert('Registration successful!');
  wrapper.style.display = 'none';
  wrapper.classList.remove('active'); 
}

// Event listener for login form
loginForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const email = this.querySelector('input[type="email"]').value;
  const password = this.querySelector('input[type="password"]').value;
  handleLogin(email, password);
});

// Event listener for register form
registerForm.addEventListener('submit', function (event) {
    event.preventDefault();
  
    const agreeCheckbox = this.querySelector('input[type="checkbox"]');
    if (!agreeCheckbox.checked) {
      alert('Please agree to the terms & conditions.');
      return;
    }
  
    const username = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const password = this.querySelector('input[type="password"]').value;
    handleRegister(username, email, password);
  });







// ... (your existing code)
