let loginForm=document.getElementById("loginForm");
loginForm.addEventListener("submit",(event)=>{
    event.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
  
    // Hard-coded login credentials
    if (email == "admin@gmail.com" && password == "admin") {
      alert("Login successful!");
    } else {
      alert("Incorrect email or password. Please try again.");
    }
    
})


// function login() {
//     var email = document.getElementById("email").value;
//     var password = document.getElementById("password").value;
  
//     // Hard-coded login credentials
//     if (email == "admin@gmail.com" && password == "admin") {
//       alert("Login successful!");
//     } else {
//       alert("Incorrect email or password. Please try again.");
//     }
//   }