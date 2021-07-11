'use strict';

let catbutton = document.getElementById('catbutton');

dataArray=[];

let handleCatButtonClick = function () {
  let dataArray = localStorage.getItem('cart')
  let dataArray = JSON.parse(dataArray);
  if (dataArray !== null) {
    // console.log('allCats array after retrieving from local storage', allCats);
    // allCats = catsFromLS;
    for (let i = 0; i < dataArray.length; i++) {
      new Cat(catsFromLS[i].name);
      allCats[i].render();
    }
    console.log('allCats array after reinstantiating through our Cat constructor', allCats);
  }
};

catbutton.addEventListener('click', handleCatButtonClick);