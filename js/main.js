import getData from "./getData.js";
import {showCards} from "./showCards.js";

const d = document;
var Rubia = d.getElementById('Rubia');
var Morena = d.getElementById('Morena');
var Roja = d.getElementById('Roja');
const productsCenter = d.querySelector(".productos__center");
const itemTypes = d.querySelector('.item__total');//Selector de contador de tipo de cerveza
const itemTypes1 = d.querySelector('.item__total1');
let beerType = null;   
const url="https://products-axia.herokuapp.com/products?filterId_like="
export const formatoCOP = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
});

//Ejecución 
document.addEventListener("DOMContentLoaded",()=> {
    retriveBeerFromLocalStorage();
    changeData();
});
//carga y actualización de data
function changeData(){
    const data = getData(url+beerType);
    showCards(data,productsCenter);
}
//LocalStorage Actualización
function retriveBeerFromLocalStorage() {
    const beer = +window.localStorage.getItem("beerType") || '';
    beerType = beer;
    updateBeerType();
}
function updateBeerType() {itemTypes.innerText = beerType;itemTypes1.innerText=beerType;
    window.localStorage.setItem("beerType", beerType);
}
Rubia.addEventListener('click', function() {
    Rubia.checked?beerTypeSend(Rubia.value):beerTypeSend('');
  });
Morena.addEventListener('click', function() {
    Morena.checked?beerTypeSend(Morena.value):beerTypeSend('');
  });
Roja.addEventListener('click', function() {
    Roja.checked?beerTypeSend(Roja.value):beerTypeSend('');
  });

function beerTypeSend(roundResult) {beerType = roundResult;updateBeerType();}


//Modal y Filtros(botones)
const filtersBtn= d.querySelector(".filters_change");
const resetBtn= d.querySelector(".clean");
const filterBtn = d.querySelector(".filter")
const modalBg = d.querySelector(".modal-bg");
const modal = d.querySelector(".modal");
const body= d.getElementById("body");

filtersBtn.addEventListener("click", ()=>{modal.classList.add("active");modalBg.classList.add("active");body.style.overflow='hidden';});
modalBg.addEventListener("click", (event) => {if (event.target === modalBg) {hideModal();}});
d.querySelector(".close").addEventListener("click", hideModal);
function hideModal() {modal.classList.remove("active");modalBg.classList.remove("active");body.style.overflow='scroll'}
filterBtn.addEventListener("click",(event)=>{changeData();hideModal()} )
resetBtn.addEventListener("click",(event)=>{checkAll();beerTypeSend('');changeData()})

function checkAll() {
    document.querySelectorAll('#forms input[type=checkbox]').forEach(function(checkElement) {
        checkElement.checked = false;
    });
}





