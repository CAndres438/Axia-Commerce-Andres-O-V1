import { formatoCOP } from "./main.js";

const itemTypes2 = document.querySelector('.item__total2');
//Muestra de Productos
export const showCards = async (list,productsCenter)=>{
    const cards= await list;
    productsCenter.innerHTML= '';
    cards.forEach(element=>{
        const{name,description,price,img}=element
        productsCenter.innerHTML+=`
        <div class="producto">
		<div class="image__container">
			<img src=${img} alt="${name}">
        </div>
        <div class="producto__footer">
            <h1>${name}</h1>
            <p class="description">${description}</p>
            <p class="price"><b>${formatoCOP.format(price)}<b></p>
            <div class="bottom">
            <div class="btn__group">
            <a class="btn addToCart" data-id=${name}>AGREGAR</a>
            </div>
            </div>
        </div>
        </div>` 
    }
    
    )
    getButtons();
}
//Contador de Productos y aviso de inclusión
let cartCount=0

function getButtons() {
    const buttons = [...document.querySelectorAll(".addToCart")];
    buttons.forEach((button)=>{
        button.addEventListener("click", (e)=>{
            e.preventDefault();
            e.target.innerHTML = "EN EL CARRITO";
            e.target.disabled = true;
            cartCount+=1;
            itemTypes2.innerText = cartCount;

        })   
    })
}

