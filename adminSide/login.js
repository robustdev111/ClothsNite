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
<<<<<<< HEAD
=======
    
>>>>>>> 9596f976d09b3f6debded164fede1ff7c39184e7
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