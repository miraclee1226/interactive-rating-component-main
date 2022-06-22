"use strict";
window.addEventListener("load", function() {

let ratingItems = document.querySelectorAll('i');
let butSub = document.querySelector('.button');
let selField = document.querySelector('.itemSel');
for(let item of ratingItems){
    item.onclick = function(event){
        let activeItem = document.querySelector('.active');
        if(activeItem) activeItem.classList.remove('active');      
        event.currentTarget.classList.add('active');    
    };  
};
butSub.onclick = function(){
    document.querySelector('.hidden').classList.remove('hidden');
    document.querySelector('.container').classList.add('hidden');
    let selTxt = document.createElement('p');
    if(document.querySelector('.active')){
        let itemSel = document.querySelector('.active').innerHTML;
        selTxt.innerHTML = `You selected ${itemSel} out of 5`;
        selField.append(selTxt);
    }
}

const CLICKED_CLASS = "clicked";
const title = document.querySelector(".spanNum");

function handleClick() {
    title.classList.toggle(CLICKED_CLASS);
}

title.addEventListener("click", handleClick);

function init(){
    handleClick();
    }

    init();

});






