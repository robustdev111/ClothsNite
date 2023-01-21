let url="http://localhost:3000"

let adminInfo=[];
window.addEventListener("load",()=>{
  fetch(`${url}/Admins`).then(res=>res.json()).then(data=>{
    adminInfo=data
    console.log(adminInfo)
  })
})




let loginForm=document.getElementById("loginForm");
loginForm.addEventListener("submit",(event)=>{
    event.preventDefault();
    var email = document.getElementById("email")
    var password = document.getElementById("password")
  
    let validUser=adminInfo.filter((ele)=>{

      if(ele.email==email.value){
        if(ele.password==password.value){
          return true
        }
      }

    })
// console.log(validUser)

    if(validUser.length==1){
      alert("Login successfull")
      window.location.href ="adminDashboard.html"

      localStorage.setItem("admin_name",JSON.stringify(validUser[0].userName))

    }else{
      alert("Invalid credential")

      email.value=""
      password.value=""
    }




    // Hard-coded login credentials
    // if (email == "admin@gmail.com" && password == "admin") {
    //   alert("Login successful!");
    // } else {
    //   alert("Incorrect email or password. Please try again.");
    // }

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