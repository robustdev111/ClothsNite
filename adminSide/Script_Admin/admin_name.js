


let admin_name=document.getElementById("Admin_name");



window.addEventListener("load",()=>{
    let name=JSON.parse(localStorage.getItem("admin_name"))
    admin_name.innerText=name;

    console.log(name)

})