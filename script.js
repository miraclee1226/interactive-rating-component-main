"use strict";
window.addEventListener("load", function() {

let ratingItems = document.querySelectorAll('span');
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


const span = document.querySelector('.span');

function select(divEl, spanEl) {
    Array.from(divEl.children).forEach (
        v => v.classList.remove('selected')
    )
    if(spanEl) spanEl.classList.add('selected');
}

span.addEventListener('click', e => {
    const selected = e.target;
    select(span, selected);
})


});






