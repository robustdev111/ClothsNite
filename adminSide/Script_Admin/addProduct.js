// console.log("add immage ok")
let urll = "http://localhost:3000/Products"
//url can be chenge


let form = document.getElementById("add-Product");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let pName = document.getElementById("Product-Name")
  let pCatagory = document.getElementById("Product-catagory")
  let pSubCatagory = document.getElementById("Sub-catagory")
  let mrp = document.getElementById("mrp")
  let price = document.getElementById("price")
  let quentity = document.getElementById("quentity")
  let discount = document.getElementById("discount")
  let size1 = document.getElementById("size1").value
  let size2 = document.getElementById("size2").value
  let size3 = document.getElementById("size3").value
  let img1 = document.getElementById("img1").value
  let img2 = document.getElementById("img2").value
  let colour = document.getElementById("colour")

  let size = [`${size1}`, `${size2}`, `${size3}`]


  fetch(urll, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',

    },
    body: JSON.stringify({

      "title": pName.value,
      "image1": img1,
      "image2": img2,
      "colour": colour.value,
      "category": pCatagory.value,
      "sub-Catagory": pSubCatagory.value,
      "price": price.value,
      "mrp": mrp.value,
      "size": size,
      "Brand":  "",
      "discount": discount.value || "",
      "quentity":quentity.value


    })

  })

  pName.value = ""
  img1.value = ""
  img2.value = ""
  keyword.value = ""
  pCatagory.value = ""
  pSubCatagory.value = ""
  price.value = ""
  mrp.value = ""
  size.value = ""

  discount.value = ""




})


