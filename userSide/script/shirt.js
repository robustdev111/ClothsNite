let url="http://localhost:3000/Products"


let productarr=[];
fetch(url)
.then((res)=>{
    return res.json()
})
.then((data)=>{

   let r= data.filter(e=>e.category=="shirts")
            
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
    
    // console.log(data.category=="shirts")
})
//sorting
  
let sort=document.getElementById("sort");
sort.addEventListener("change",(e)=>{
    console.log(e.target.value)
    if(e.target.value=="High to Low"){
        let sortdata1=productarr.sort((e1,e2)=>{
            return e2.price-e1.price
        })
        displayproduct(sortdata1)
    }else{
        let sortdata2=productarr.sort((e1,e2)=>{
            return e1.price-e2.price
        })
      displayproduct(sortdata2)
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
function displayproduct(productObj){
    let productList=`<div class="productlist">
        ${productObj.map(e=>getcard(
            e.id,
            e.title,
            e.image,
            e.price,
            e.offer
        )).join("")}
    </div>`
      
    product_main.innerHTML=productList
}

// card
function getcard(id,title,image,price,offer){
    let card=`
    <div class="product-card">
    <div class="card-img">
        <img src=${image} alt="">
    </div>
     <div class="card-content">
       <p>${title}</p>
       <h5>${price}</h5>
       <p>${offer}</p>
      
     </div>
 </div>`
 return card
}