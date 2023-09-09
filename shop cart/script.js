document.addEventListener('DOMContentLoaded',loaditem);

function loaditem(){
    loadcontent();
    updatetotal()
}
function loadcontent(){
    // remove item
    let cartremove=document.querySelectorAll('.remove');
    cartremove.forEach((cremove)=>{
        cremove.addEventListener('click',removeItem);
    });
    //qty counter
    let qtycount=document.querySelectorAll('.qtycounter');
    qtycount.forEach((qty)=>{
        qty.addEventListener('change',changeqty);
    });
}
//qty counter
function changeqty() {
    if(isNaN(this.value)||this.value<1){
        this.value=1;
    }
    updatetotal()
    loadcontent()
}

let itemlist=[];

//remove item
function removeItem(){ 
    if(confirm("Are you sure you want to remove")){
        let title=this.parentElement.querySelector('.title').innerHTML;
        console.log(title);
        itemlist=itemlist.filter(elm=>elm.title!=title);
        this.parentElement.remove();
        loadcontent()
}
updatetotal()
}

//product cart
let addtocart=document.querySelectorAll('.AddCart');
addtocart.forEach((task)=>{
    task.addEventListener('click',addcart);
});
// add cart
function addcart(){ 
    let watch=this.parentElement;
    let title=watch.querySelector('.card-title').innerHTML;
    let rate=watch.querySelector('.price').innerHTML;
    let img=watch.querySelector('.image').src;
    let addproducts={
        title,rate,img
    }
//exist or not exist
if (itemlist.find((el)=>el.title==addproducts.title)){
    alert("Product Already Exist");
    return;
}
else{
    itemlist.push(addproducts)
}

    let newproduct= createCartProt(title,rate,img);
    let content=document.createElement('div');
    content.innerHTML=createCartProt(title,rate,img);
    let collecter=document.querySelector('.cart_value');
    // console.log(collecter);
    
    collecter.append(content)
    loadcontent()
    updatetotal()
    
}

function createCartProt(title,rate,img){
 return`
 <div class="cart-box">
 <div class="d-flex cart-details" style=" padding: 5px; border: 2px rgb(113, 112, 112) solid; border-radius: 7px;">
 <img src=${img} alt="" class="w-25 img-thumbnail">
     <div class="mt-2 item" style="margin-left: 20%;">
         <div class="title">${title} </div>
         <div class="cprice">${rate}</div>
         <input type="number" value="1" id="" class="w-25 qty_counter"><input type="button" value="add" class="btn btn-primary" onclick="add()" style=" margin-left: 10px; height: 25px; padding:0px ;">
         <div class="qty_price">${rate}</div>
         
     </div>
     <img src="images/trash-bin.svg" alt="" class="remove me-2" style="width: 20px; cursor: pointer;" >
 </div>
</div>
<br>

`;
}
var quantityInputs =document.getElementsByClassName('qty_counter');
for(var i=0 ; i <quantityInputs.length; i++ ){
    var input =quantityInputs[i]
    input.addEventListener("change",changeqty);

    updatetotal();
}

// total
function updatetotal() {
    const cart_Item= document.querySelectorAll('.cart-box');
    const totalVal=document.querySelector('.total_price');
     let total=0;
    cart_Item.forEach(product=>{
        let PriceEle=product.querySelector('.cprice');
        let price=parseFloat(PriceEle.innerHTML.replace("₹",""));
        let qty=product.querySelector('.qty_counter').value;
        // console.log(qty);
        total+=(price*qty);
        product.querySelector('.qty_price').innerText="₹"+price*qty;
    });
    totalVal.innerHTML='₹'+total;

    const cartCount=document.querySelector('.cartcount');
    let count=itemlist.length;
    cartCount.innerHTML=count;

    if(count==0){
        cartCount.style.display='none';
      }else{
        cartCount.style.display='block';
      }
 }

// testing total
// function updatetotal() {
//     var cartContent =document.getElementsByClassName('cart_value')[0] 
//     var cartBoxes = document.getElementsByClassName('cart-box')
//     var total = 0;
//     for(var i=0 ; i <cartBoxes.length; i++) {
//     var cartBox = cartBoxes[i]
//     var priceElement = cartBox.getElementsByClassName('qty_price').value
//     var quantityElement =cartBox.getElementsByClassName('qty_counter')[0]
//     // var price= parseFloat(priceElement.innerText.replace("₹"," "));
//     var price=parseFloat(priceElement.innerText.replace("₹",""))
//     var quantity = quantityElement.value 
//     total= total + price * quantity;
//     console.log(priceElement);
//     }
//     total =Math.round(total *100)/100;

//     document.getElementsByClassName("total_pri")[0].innerText ='₹'+ total; 
// }
function add(){
    updatetotal()
}