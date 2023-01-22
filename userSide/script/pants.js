let url="http://localhost:3000/Products"


let productarr=[];
fetch(url)
.then((res)=>{
    return res.json()
})
.then((data)=>{

   let r= data.filter(e=>e.category=="pants")
            
   let productObj=r.map(e=>{
     return {
         id:e.id,
         title:e.title,
         price:e.price,
         offer:e.offer,
         image:e.image1,
         color:e.colour
    } 
        
   })
   productarr=productObj
   displayproduct(productObj)
})





   
      

//sorting
//   console.log(productarr)
  let sort=document.getElementById("sort");
   sort.addEventListener("change",(e)=>{
        console.log(e.target.value)
        if(e.target.value=="High to Low"){
            productarr=productarr.sort((e1,e2)=>{
                return e2.price-e1.price
            })
           displayproduct(productarr)
        }else{
            productarr=productarr.sort((e1,e2)=>{
                return e1.price-e2.price
            })
            displayproduct(productarr)
        }
    })
  



//filter
let filter=document.getElementById("filterColor");
let filterdata=productarr
filter.addEventListener("change",()=>{
    let  value=filter.value
    if(value=="black"){
        let filterdata1 =productarr.filter((e)=> e.color=="black"
        )
        displayproduct(filterdata1)
    }
    else  if(value=="red"){
        let filterdata2=productarr.filter((e)=> e.color=="red")
        displayproduct(filterdata2)
    }
    else  if(value=="blue"){
       let  filterdata3=productarr.filter((e)=> e.color=="blue")
        displayproduct(filterdata3)
    }
    else  if(value=="white"){
        let filterdata4=productarr.filter((e)=> e.colo=="white")
        displayproduct(filterdata4)
    }

})




// display product data
let product_main=document.getElementById("product-main")
function displayproduct(data){
    product_main.innerHTML=null
    data.forEach((element,index)=> {
    let  productCard=document.createElement("div");
    productCard.classList.add("product-card")

    let  productImg=document.createElement("div");
    productImg.classList.add("card-img")
    let  img=document.createElement("img");
    img.setAttribute("src",element.image)



    let  productContent=document.createElement("div");
    productContent.classList.add("card-content")
    let  p1=document.createElement("p");
    p1.innerText=element.title
    let  h5=document.createElement("h5");
    h5.innerText=element.price
    let  p2=document.createElement("p");
    p2.innerText=element.offer


    
    img.addEventListener("click",()=>{
     let productData=JSON.parse(localStorage.getItem("orders"))||[]

        productData.push(element)
        localStorage.setItem("orders", JSON.stringify(productData))
        alert("Product Added to Cart")
        displayproduct(data)
       })

   


     productImg.append(img)
     productContent.append(p1,h5,p2)
    productCard.append(productImg,productContent)
    product_main.append(productCard)
});


}