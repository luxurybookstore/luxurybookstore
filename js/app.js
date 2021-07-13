'use strict';

let books = [];


function Book(path, name, category, desription, price) {
  this.bookName = name;
  this.image = path;
  this.description = desription;
  this.price = price;
  this.rating = 5;
  this.quantity = 0;
  this.category = category;
  books.push(this);

}




// console.log(books);

Book.prototype.renderbook = function (bookObj) {
  let fictionContainerEl;
  switch (this.category) {

    case 'Fiction':

      fictionContainerEl = document.getElementById('Fiction');
      break;
    case 'Art':
      fictionContainerEl = document.getElementById('Art');
      break;
    case 'Business':
      fictionContainerEl = document.getElementById('Business');
      break;
    case 'Children':
      fictionContainerEl = document.getElementById('Children');
      break;
    case 'Biography':
      fictionContainerEl = document.getElementById('Biography');
      break;
  }



  let divBookEl = document.createElement('div');
  fictionContainerEl.appendChild(divBookEl);
  let bookheadingEl = document.createElement('h3');
  let bookPriceEl = document.createElement('p');
  let bookDescriptionEl = document.createElement('p');
  let bookImgEl = document.createElement('img');
  let buttonEl = document.createElement('button');
  let quantityEl = document.createElement('input');
  quantityEl.setAttribute('type', 'number');
  let qId = (books.indexOf(this) + 100);
  quantityEl.setAttribute('id', `${qId}`);
  quantityEl.setAttribute('value', 1);
  quantityEl.setAttribute('min', 1);

  // min="1"
  let labelEl = document.createElement('label');
  labelEl.setAttribute('for', `${qId}`)
  labelEl.textContent = "Quantity:";




  bookheadingEl.textContent = this.bookName;
  bookPriceEl.textContent = `price :${this.price} $`;
  bookDescriptionEl.textContent = this.description;
  bookImgEl.setAttribute('src', this.image);
  buttonEl.textContent = 'add to cart';

  buttonEl.setAttribute('id', `${books.indexOf(this)}`);
  buttonEl.addEventListener('click', addToCart);
  // buttonEl.addEventListener('click',carItemsRender);





  divBookEl.appendChild(bookImgEl);
  divBookEl.appendChild(bookheadingEl);
  divBookEl.appendChild(bookPriceEl);
  divBookEl.appendChild(bookDescriptionEl);
  divBookEl.appendChild(labelEl);
  divBookEl.appendChild(quantityEl);

  divBookEl.appendChild(buttonEl);





};//this the end of the function


//creating array for cart

let cart = [];

let cartIndex = [];
let counter = 0;
let tableEl = document.getElementById('tableb');


function loading() {


  let dataArray = localStorage.getItem('cart');
  let normalObj = JSON.parse(dataArray);
  let dataIndexnumbers = localStorage.getItem('cartIndexnumbers');
  let normalObjIndex = JSON.parse(dataIndexnumbers);

  let dataCount = localStorage.getItem('count');
  let normalObjcount = JSON.parse(dataCount);

  // console.log("-------------------------------");
  // console.log(dataArray);
  // console.log('-------------------------------');
  // console.log(normalObj);
  // console.log('dataindexnumbers',dataIndexnumbers);
  // console.log('normalObjIndex',normalObjIndex.length);
  if (dataIndexnumbers !== null) {
    cartIndex = normalObjIndex;
    // console.log('this is the data index numbers', cartIndex);
  }
  counter = normalObjcount;
  // console.log(dataIndexnumbers);
  if (normalObj !== null) {
    for (let i = 0; i < normalObjIndex.length; i++) {
      cart[i] = books[normalObjIndex[i]];

      cart[i].quantity = normalObj[i].quantity;


    }
    counter = normalObj.length;
  }
}




function addToCart(event) {
  event.preventDefault();
  let productIndex = event.target.id;
  let qnum=Number(productIndex)+100;

  let qnumValue=document.getElementById(qnum).value;
  // console.log('>>pro',productIndex,'>>q',qnum,"value",qnumValue);




  for (let i = 0; i <= cartIndex.length; i++) {
    if (productIndex === cartIndex[i]) {

      cart[i].quantity=Number(qnumValue);
      settingToLocalStorage();
      console.log(cart);

      break;}
    else if(i>=cartIndex.length){
      cart.push(books[productIndex]);
      cartIndex.push(productIndex);
      //   let x=cartIndex[i];
      //   cart[i].quantity=1;
      cart[i].quantity=Number(qnumValue);
      //   console.log(cart);
      counter++;
      settingToLocalStorage();
      //   console.log('--3---');
      break;}
      }
      renderCartCount();
  //ABDULLU TRY 
  // event.preventDefault();
  // let productIndex = event.target.id;

  // let dataArray = localStorage.getItem('cart');
  // let normalObj = JSON.parse(dataArray);
  // let dataIndexnumbers = localStorage.getItem('cartIndexnumbers');
  // let normalObjIndex = JSON.parse(dataIndexnumbers);
  // let index = [];
  // if(normalObj != null){
  //   for (let i = 0; i < normalObjIndex.length; i++) {
  //     index.push(Number(normalObjIndex[i]));
  //     console.log("index : "+index[i]);
  //   }
  // }
  

  // let qnum = Number(productIndex) + 100;

  // let qnumValue = document.getElementById(qnum).value;
  // // console.log('>>pro',productIndex,'>>q',qnum,"value",qnumValue);

  // // If localStorage was null NO need to render.
  // // Which mean we Dont have localStorage yet.
  // if (normalObj != null) {
  //   for (let i = 0; i < normalObj.length; i++) {
  //     for (let j = 0; j < books.length; j++) {
  //       if (index[i].name !== books[j].name) {
  //         console.log("------------");
  //         for (let i = 0; i <= cartIndex.length; i++) {
  //           if (productIndex === cartIndex[i]) {
        
  //             cart[i].quantity = Number(qnumValue);
  //             settingToLocalStorage();
  //             // console.log(cart);
        
  //             break;
  //           } 
  //           else if (i >= cartIndex.length) {
  //             cart.push(books[productIndex]);
  //             cartIndex.push(productIndex);
  //             //   let x=cartIndex[i];
  //             //   cart[i].quantity=1;
  //             cart[i].quantity = Number(qnumValue);
  //             //   console.log(cart);
  //             counter++;
  //             settingToLocalStorage();
  //             //   console.log('--3---');
  //             break;
  //           }
            

  //         } 
  //       } 
  //       else {
  //         console.log("YOU ALREDAY HAVE IT");
  //       }
        


  //     }
  //     console.log("----------------------------");
  //     console.log(index[0]);
  //     console.log(books[5]);
  //     console.log(normalObj);
  //     console.log(normalObjIndex);
  //   }
  // }
  // else{
  //   for (let i = 0; i <= cartIndex.length; i++) {
  //     if (productIndex === cartIndex[i]) {
  
  //       cart[i].quantity = Number(qnumValue);
  //       settingToLocalStorage();
  //       // console.log(cart);
  
  //       break;
  //     }
  //     else if (i >= cartIndex.length) {
  //       cart.push(books[productIndex]);
  //       cartIndex.push(productIndex);
  //       //   let x=cartIndex[i];
  //       //   cart[i].quantity=1;
  //       cart[i].quantity = Number(qnumValue);
  //       //   console.log(cart);
  //       counter++;
  //       settingToLocalStorage();
  //       //   console.log('--3---');
  //       break;
  //     }
  //   } 
  // }
  // renderCartCount();
  //ABDULLU TRY 

}
//
//   //
//   // // books[productIndex].quantity=1;
//   // cart[0].quantity=1;
//   // console.log(cart);
//   // counter++;
//   // settingToLocalStorage();

//   cart.push(books[productIndex]);
//   cartIndex.push(productIndex);
//   cart[counter].quantity=Number(qnumValue);
//   console.log(cart);
//   console.log(cartIndex);
//   counter++;
//   // if(!==null)
//   // carItemsRender();
//   settingToLocalStorage();
// }




console.log(cart);
let trEl;

//over all items a function to render all items in cart after remove or when ever

function renderAllItems() {
  tableEl.innerHTML = '';

  for (let i = 0; i < cart.length; i++) {
    cart[i].carItemsRender();

  }
}


//render cart funtion
Book.prototype.carItemsRender = function () {

  trEl = document.createElement('tr');
  let thEl1 = document.createElement('td');
  let thEl2 = document.createElement('td');
  let thEl3 = document.createElement('td');
  let thEl5 = document.createElement('td');
  let thEl4 = document.createElement('td');
  let imageEl = document.createElement('img');
  let aEl = document.createElement('a');

  imageEl.setAttribute('src', this.image);
  thEl2.textContent = this.bookName;
  let cartPrice = this.price * this.quantity;
  thEl3.textContent = cartPrice;

  thEl5.textContent = this.quantity;

  aEl.setAttribute('href', '');
  aEl.setAttribute('id', cart.indexOf(this));
  console.log('cart.indexofthis', cart.indexOf(this));
  aEl.textContent = 'remove';
  aEl.addEventListener('click', RemoveItem);

  trEl.appendChild(thEl1);
  trEl.appendChild(thEl2);
  trEl.appendChild(thEl5);
  trEl.appendChild(thEl3);
  trEl.appendChild(thEl4);
  thEl1.appendChild(imageEl);

  thEl4.appendChild(aEl);
  tableEl.appendChild(trEl);

  overallPrice();
};

let tablefooterEl = document.getElementById('tablef');
let thFEl = document.createElement('th');
function overallPrice() {
  let totalprice = 0;



  for (let i = 0; i < cart.length; i++) {
    totalprice += cart[i].price * cart[i].quantity;

  }

  thFEl.textContent = totalprice;

  thFEl.textContent = `the total price is ${totalprice}`;
  tablefooterEl.appendChild(thFEl);

}







// function carItemsRender() {
//   let tableEl = document.getElementById('tablebody');
//   let tablefooterEl= document.getElementById('tablef');


//   tableEl.innerHTML = '';
//   tablefooterEl.innerHTML='';

//   let totalprice=0;
//   for (let i = 0; i < cart.length; i++) {
// trEl = document.createElement('tr');
//     let thEl1 = document.createElement('td');
//     let thEl2 = document.createElement('td');
//     let thEl3 = document.createElement('td');
//     let thEl5=document.createElement('td');
//     let thEl4 = document.createElement('td');
//     let imageEl = document.createElement('img');
//     let aEl = document.createElement('a');



//     imageEl.setAttribute('src', cart[i].image);
//     thEl2.textContent = cart[i].bookName;
//     let cartPrice=cart[i].price*cart[i].quantity
//     thEl3.textContent = cartPrice;
//     totalprice+=cartPrice;
//     thEl5.textContent=cart[i].quantity;

//     aEl.setAttribute('href', '');
//     aEl.setAttribute('id', i);
//     aEl.textContent = 'remove';
//     aEl.addEventListener('click', RemoveItem);



//     trEl.appendChild(thEl1);
//     trEl.appendChild(thEl2);
//     trEl.appendChild(thEl5);
//     trEl.appendChild(thEl3);
//     trEl.appendChild(thEl4);
//     thEl1.appendChild(imageEl);

//     thEl4.appendChild(aEl);
//     tableEl.appendChild(trEl);
//   }
// let thFEl= document.createElement('th');
// thFEl.textContent=totalprice;

// thFEl.textContent=`the total price is ${totalprice}`
// tablefooterEl.appendChild(thFEl);


// }
function RemoveItem(event) {
  event.preventDefault();
  cart.splice(event.target.id, 1);
  cartIndex.splice(event.target.id, 1);
  // tableEl.innerHTML = '';
  // tablefooterEl= '';
  // totalprice=0;

  // console.log(event.target.id);
  // for (let i = 0; i < cart.length; i++) {
  //  cart[i].carItemsRender();
  //   totalprice+=cart[i].price;
  // }

  overallPrice();
  renderAllItems();




  counter--;
  settingToLocalStorage();
  renderCartCount();

}

function settingToLocalStorage() {

  let data = JSON.stringify(cart);
  localStorage.setItem('cart', data);

  let dataIndex = JSON.stringify(cartIndex);
  localStorage.setItem('cartIndexnumbers', dataIndex);

  let dataCount = JSON.stringify(counter);
  localStorage.setItem('count', dataCount);

}

function renderCartCount() {
  let dataArray = localStorage.getItem('cart');
  let normalObj = JSON.parse(dataArray);
  // If localStorage was null NO need to render.
  // Which mean we Dont have localStorage yet.
  if (normalObj != null) {
    // If cart was 0(localStorage was empty) JUST render countEl AS empty.
    // Which mean we have localStorage but We remove the Cart from localStorage.
    if (normalObj.length !== 0) {
      // Otherwise render countEl(How much cart do we have).
      // Which mean if we choice 5 book to buy, it should render in countEl [ Cart ( 5 ) ].
      let dataCount = localStorage.getItem('count');
      let normalObjcount = JSON.parse(dataCount);

      let cartContainer = document.getElementById('cartA');
      let countEl = document.getElementById('itemCount');
      countEl.textContent = " ( " + normalObjcount + " )";
      cartContainer.appendChild(countEl);
    } else {
      let cartContainer = document.getElementById('cartA');
      let countEl = document.getElementById('itemCount');
      countEl.textContent = "";
      cartContainer.appendChild(countEl);
    }

  }
}

renderCartCount();


let load = function () {
  tableEl.innerHTML = '';

  let dataArray = localStorage.getItem('cart');
  let normalObj = JSON.parse(dataArray);
  let dataIndexnumbers = localStorage.getItem('cartIndexnumbers');
  let normalObjIndex = JSON.parse(dataIndexnumbers);

  let dataCount = localStorage.getItem('count');
  let normalObjcount = JSON.parse(dataCount);
  counter = normalObjcount;
  // console.log("-------------------------------");
  // console.log(dataArray);
  console.log('-------------------------------');
  console.log(normalObj);
  // console.log('dataindexnumbers',dataIndexnumbers);
  // console.log('normalObjIndex',normalObjIndex.length);
  if (dataIndexnumbers !== null) {
    cartIndex = normalObjIndex;
    console.log('this is the data index numbers', cartIndex);
  }
  // console.log(dataIndexnumbers);
  if (normalObj !== null) {
    for (let i = 0; i < normalObjIndex.length; i++) {
      cart[i] = books[normalObjIndex[i]];

      cart[i].quantity = normalObj[i].quantity;
      settingToLocalStorage();
      cart[i].carItemsRender();
    }
    console.log(books);
    console.log(cart);

  }
  overallPrice();



};

// load();




generatebooks();

// for (let i = 0; i < books.length; i++) {
//     books[i].renderbook();

// }

function generatebooks() {
  new Book('images/The Water Knife.png', 'The Water Knife', 'Fiction', `Paolo Bacigalupi, New York Times best-selling author of The Windup Girl and National Book Award finalist, delivers a near-future thriller that casts new light on how we live today and what may be in store for us tomorrow.
    `, 15);
  new Book('images/The Bees.png', 'The Bees', 'Fiction', 'Flora 717 is a sanitation worker, a member of the lowest caste in her orchard hive where work and sacrifice are the highest virtues and worship of the beloved Queen the only religion. But Flora is not like other bees. With circumstances threatening the hive’s survival, her curiosity is regarded as a dangerous flaw but her courage and strength are an asset. She is allowed to feed the newborns in the royal nursery and then to become a forager, flying alone and free to collect pollen. She also finds her way into the Queen’s inner sanctum, where she discovers mysteries about the hive that are both profound and ominous.', 30);

  new Book('images/Only What\'s Necessary.png', 'Only What\'s Necessary', 'Art', 'For Only What’s Necessary: Charles M. Schulz and the Art of Peanuts, renowned designer Chip Kidd was granted unprecedented access to the extraordinary archives of the Charles M. Schulz Museum and Research Center in Santa Rosa, California. Reproducing the best of the Peanuts newspaper strip, all shot from the original art by award-winning photographer Geoff Spear, Only What’s Necessary also features exclusive, rare, and unpublished original art and developmental work, much of which has never been seen before.', 60);


  new Book('images/The Book of Stone.png', 'The Book of Stone', 'Fiction', 'Matthew Stone has inherited a troubling legacy: a gangster grandfather and a distant father who is also a disgraced judge. After his father’s death, Matthew is a young man alone. He turns to his father’s beloved books for comfort, perceiving within them guidance that leads him to connect with a group of religious extremists. As Matthew immerses himself in this unfamiliar world, the FBI seeks his assistance to foil the group’s violent plot. Caught between these powerful forces, haunted by losses past and present, and desperate for redemption, Matthew charts a course of increasing peril for himself and for everyone around him.', 3);

  new Book('images/The Revenant.png', 'The Revenant', 'Fiction', 'The year is 1823, and the trappers of the Rocky Mountain Fur Company live a brutal frontier life. Trapping beaver, they contend daily with the threat of Indian tribes turned warlike over the white men\'s encroachment on their land, and other prairie foes, like the unforgiving landscape and its creatures. Hugh Glass is among the Company\'s finest men, an experienced frontiersman and an expert tracker. But when a scouting mission puts him face-to-face with a grizzly bear, he is viciously mauled and not expected to survive.', 15);
  new Book('images/The House of Journalists.png', 'The House of Journalists', 'Fiction', 'Who are you and what is your story? These are the questions that confront newcomers to the House of Journalists, the internationally renowned refuge for writers in exile at the center of this haunting Orwellian novel. Home to a select group of fellows, the House is located in a fashionable London terrace. But just how stable is this hallowed institution? Julian Snowman, the obsessive founder and chair, sees the threat of dissolution at every turn.', 14);


  new Book('images/The Art of the Con.png', 'The Art of the Con', 'Art', 'Art scams are today so numerous that the specter of a lawsuit arising from a mistaken attribution has scared a number of experts away from the business of authentication and forgery, and with good reason. Art scams are increasingly convincing and involve incredible sums of money. The cons perpetrated by unscrupulous art dealers and their accomplices are proportionately elaborate.', 24);

  new Book('images/Here.png', 'Here', 'Art', 'From one of the great comic innovators, the long-awaited fulfillment of a pioneering comic vision. Richard McGuire’s Here is the story of a corner of a room and of the events that have occurred in that space over the course of hundreds of thousands of years.', 103);
  new Book('images/Sharpie Art Workshop.png', 'Sharpie Art Workshop', 'Art', 'Designer, artist, and art director Timothy Goodman explores Sharpie writing products, the materials and supplies that can be used to enhance or modify them, and the range of creative techniques and effects that can be achieved. Through a series of examples and exercises, Goodman demonstrates how to make different kinds of marks, patterns, and images on a variety of surfaces. Inspiring works by noted artists from all over the world who use Sharpie in interesting and innovative ways are also included.', 66);
  new Book('images/The Principles of Uncertainty.png', 'The Principles of Uncertainty', 'Art', 'An irresistible invitation to experience life through a beloved artist?s psyche, The Principles of Uncertainty is a compilation of Maira Kalman?s New York Times columns. Part personal narrative, part documentary, part travelogue, part chapbook, and all Kalman, these brilliant, whimsical paintings, ideas, and images?which initially appear random?ultimately form an intricately interconnected worldview, an idiosyncratic inner monologue.', 15);

  new Book('images/Pedigree.png', 'Pedigree', 'Business', 'Americans are taught to believe that upward mobility is possible for anyone who is willing to work hard, regardless of their social status, yet it is often those from affluent backgrounds who land the best jobs. Pedigree takes readers behind the closed doors of top-tier investment banks, consulting firms, and law firms to reveal the truth about who really gets hired for the nation\'s highest-paying entry-level jobs, who doesn\'t, and why.', 18);

  new Book('images/House of Debt.png', 'House of Debt', 'Business', 'The Great American Recession resulted in the loss of eight million jobs between 2007 and 2009. More than four million homes were lost to foreclosures. Is it a coincidence that the United States witnessed a dramatic rise in household debt in the years before the recession—that the total amount of debt for American households doubled between 2000 and 2007 to $14 trillion? Definitely not.', 32);

  new Book('images/Wealth Secrets of the One Percent.png', 'Wealth Secrets of the One Percent', 'Business', 'From the richest Romans to the robber barons to today\'s bankers and tech billionaires, Sam Wilkin offers Freakonomics-esque insights into what it really takes to make a fortune. These stories of larger-than-life characters, strategies, and sacrifices reveal how the wealthiest did it, usually by a passion for finding loopholes, working around bureaucratic systems, and creating obstacles to competitors.', 52);

  new Book('images/Sacred Economics.png', 'Sacred Economics', 'Business', 'Sacred Economics traces the history of money from ancient gift economies to modern capitalism, revealing how the money system has contributed to alienation, competition, and scarcity, destroyed community, and necessitated endless growth. Today, these trends have reached their extreme but in the wake of their collapse, we may find great opportunity to transition to a more connected, ecological, and sustainable way of being.', 42);

  new Book('images/The Misfit Economy.png', 'The Misfit Economy', 'Business', 'Who are the greatest innovators in the world? You\'re probably thinking Steve Jobs, Thomas Edison, Henry Ford. The usual suspects. This book isn\'t about them. It\'s about people you\'ve never heard of. It\'s about people who are just as innovative, entrepreneurial, and visionary as the Jobses, Edisons, and Fords of the world. They’re in the crowded streets of Shenzhen, the prisons of Somalia, the flooded coastal towns of Thailand. They are pirates, computer hackers, pranksters, and former gang leaders.', 10);

  new Book('images/The Black Rabbit.png', 'The Black Rabbit', 'Children', 'Rabbit has a problem. There’s a large black rabbit chasing him. No matter where he runs, behind a tree, over the river the shadowy rabbit follows. Finally in the deep, dark wood, Rabbit loses his nemesis only to encounter a real foe! Kids who like to be in on the secret will revel in this humorous look at shadows and friendship, brought to light by a talented animator.', 20);

  new Book('images/Zen Shorts.png', 'Zen Shorts', 'Children', `Michael, said Karl. There's a really big bear in the backyard. This is how three children meet Stillwater, a giant panda who moves into the neighborhood and tells amazing tales. To Addy he tells a story about the value of material goods. To Michael he pushes the boundaries of good and bad. And to Karl he demonstrates what it means to hold on to frustration.
    // `, 45);
  new Book('images/The Adventures of Beekle.png', 'The Adventures of Beekle', 'Children', 'This magical story begins on an island far away where an imaginary friend is born. He patiently waits his turn to be chosen by a real child, but when he is overlooked time and again, he sets off on an incredible journey to the bustling city, where he finally meets his perfect match and at long last is given his special name: Beekle.', 33);

  new Book('images/Sam and Dave Dig a Hole.png', 'Sam and Dave Dig a Hole', 'Children', 'Sam and Dave are on a mission. A mission to find something spectacular. So they dig a hole. And they keep digging. And they find . . . nothing. Yet the day turns out to be pretty spectacular after all. Attentive readers will be rewarded with a rare treasure in this witty story of looking for the extraordinary and finding it in a manner you’d never expect.', 65);

  new Book('images/Red.png', 'Red', 'Children', 'Red has a bright red label, but he is, in fact, blue. His teacher tries to help him be red (let\'s draw strawberries!), his mother tries to help him be red by sending him out on a playdate with a yellow classmate (go draw a nice orange!), and the scissors try to help him be red by snipping his label so that he has room to breathe. But Red is miserable. He just can\'t be red, no matter how hard he tries! Finally, a brand-new friend offers a brand-new perspective, and Red discovers what readers have known all along. He\'s blue!', 16);

  new Book('images/Good-Bye to All That.png', 'Good-Bye to All That', 'Biography', 'In this autobiography, first published in 1929, poet Robert Graves traces the monumental and universal loss of innocence that occurred as a result of the First World War. Written after the war and as he was leaving his birthplace, he thought, forever, Good-Bye to All That bids farewell not only to England and his English family and friends, but also to a way of life. Tracing his upbringing from his solidly middle-class Victorian childhood through his entry into the war at age twenty-one as a patriotic captain in the Royal Welsh Fusiliers.', 40);

  new Book('images/Experience.png', 'Experience', 'Biography', 'Martin Amis is one of the most gifted and innovative writers of our time. With Experience, he discloses a private life every bit as unique and fascinating as his bestselling novels. The son of the great comic novelist Kingsley Amis, Martin Amis explores his relationship with this father and writes about the various crises of Kingsley\'s life. He also examines the life and legacy of his cousin, Lucy Partington, who was abducted and murdered by one of Britain\'s most notorious serial killers.', 12);

  new Book('images/Elon Musk.png', 'Elon Musk', 'Biography', 'Vance uses Musk\'s story to explore one of the pressing questions of our time: can the nation of inventors and creators which led the modern world for a century still compete in an age of fierce global competition? He argues that Musk--one of the most unusual and striking figures in American business history, is a contemporary amalgam of legendary inventors and industrialists like Thomas Edison, Henry Ford, Howard Hughes, and Steve Jobs.', 18);

  new Book('images/The Mayor of MacDougal Street.png', 'The Mayor of MacDougal Street', 'Biography', 'Dave Van Ronk (1936-2002) was one of the founding figures of the 1960s folk revival, but he was far more than that. A pioneer of modern acoustic blues, a fine songwriter and arranger, a powerful singer, and one of the most influential guitarists of the \'60s, he was also a marvelous storyteller, a peerless musical historian, and one of the most quotable figures on the Village scene. The Mayor of MacDougal Street is a first-hand account by a major player in the social and musical history of the \'50s and \'60s.', 25);
  new Book('images/I Work At A Public Library.png', 'I Work At A Public Library', 'Biography', 'From a patron\'s missing wetsuit to the scent of crab cakes wafting through the stacks, I Work at a Public Library showcases the oddities that have come across Gina Sheridan\'s circulation desk. Whether she\'s helping someone scan his face onto an online dating site or explaining why the library doesn\'t have any dragon autobiographies, Sheridan\'s bizarre tales prove that she\'s truly seen it all.', 21);

}


// let storeAEl = document.getElementById('storeA');
// storeAEl.addEventListener('click', ff);

// function ff() {
//   location.reload();
// }