let totalProducts=document.getElementById("totalProducts");
    let readyToShip=document.getElementById("readyToShip");
    let pendingProducts=document.getElementById("pendingProducts");

    window.addEventListener("load",()=>{
       let fetchP= fetch("http://localhost:3000/Products")
       fetchP.then((res)=>{
            return res.json()
        })
        .then((data)=>{
            // console.log(data)
            totalProducts.innerText=data.length
        })

        let fetchReadytoShip=fetch("http://localhost:3000/readytoship")
            fetchReadytoShip.then((res)=>{
                return res.json()
            })
            .then((data)=>{
                // console.log(data)
                readyToShip.innerText=data.length
            })

        let fetchPendingOrders=fetch("http://localhost:3000/orders")
            fetchPendingOrders.then((res)=>{
                return res.json()
            })
            .then((data)=>{
                // console.log(data)
                pendingProducts.innerText=data.length
            })    
    })


let admin_name=document.getElementById("Admin_name");



window.addEventListener("load",()=>{
    let name=JSON.parse(localStorage.getItem("admin_name"))
    admin_name.innerText=name;

    console.log(name)

})