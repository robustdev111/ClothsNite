// console.log("add immage ok")
let url="https://mock-api-wmzl.onrender.com/Products"
//url can be chenge


let form=document.getElementById("add-Product");

form.addEventListener("submit",(e)=>{
  e.preventDefault();
    let pName=document.getElementById("Product-Name")
   let pCatagory=document.getElementById("Product-catagory")
   let pSubCatagory=document.getElementById("Sub-catagory")
   let mrp=document.getElementById("mrp")
   let price=document.getElementById("price")
  
    let discount=document.getElementById("discount")
   let size=document.getElementById("size")
   let img1=document.getElementById("img1")
   let img2=document.getElementById("img2")
   let keyword=document.getElementById("keyword")
   let image=[img1.value,img2.value];

 
   fetch(url, {
      method: 'POST',
      headers: { 
        'Content-type': 'application/json',
        
      },
      body: JSON.stringify({
        
        "title":pName.value,
        "image":image,
        "Keyword":keyword.value||"",
        "category":pCatagory.value,
        "sub-Catagory":pSubCatagory.value,
        "price":price.value,
        "mrp":mrp.value,
        "size":size.value,
        "Brand":Brand.value ||"",
        "discount": discount.value||""




      })

    })

    pName.value=""
    img1.value=""
    img2.value=""
    keyword.value=""
    pCatagory.value=""
    pSubCatagory.value=""
    price.value=""
    mrp.value=""
    size.value=""
   
     discount.value=""

   
   
    
})


