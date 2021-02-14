// initializing Variables
let totalClicks = 0;
let clicksAllowed = 25;
let allItems = [];
// let indexArray = [];

let firstImage = document.querySelector('section img:first-child');
let secondImage = document.querySelector('section img:nth-child(2)');
let thirdImage = document.querySelector('section img:nth-child(3)');


function Bus(name, fileExtenstion = 'jpg') {
  this.name = name;
  this.src = `../img/${name}.${fileExtenstion}`;
  this.views = 0;
  this.clicks = 0;
  allItems.push(this);
}

new Bus('bag');
new Bus('banana');
new Bus('bathroom');
new Bus('boots');
new Bus('breakfast');
new Bus('bubblegum');
new Bus('chair');
new Bus('cthulhu');
new Bus('dog-duck');
new Bus('dragon');
new Bus('pen');
new Bus('pet-sweep');
new Bus('scissors');
new Bus('shark');
new Bus('sweep', 'png');
new Bus('tauntaun');
new Bus('unicorn');
new Bus('usb', 'gif');
new Bus('water-can');
new Bus('wine-glass');

function getRandomIndex() {
  let btn = document.getElementById('btn');
  btn.addEventListener('click', renderBus());
}
function renderBus() {
  alert('Hello');
  let itemArray = [];
  for (let i = 0; i < 3; i++) {
    let num = Math.floor(Math.random() * allItems.length);
    let item = allItems[num];
    itemArray.push(item);
    // use array to check for repeats later
    console.log(allItems[num].src);

    let container = document.getElementById('imgContainer');
    let img = document.createElement('img');
    img.setAttribute('src', `${allItems[num].src}`);
    img.addEventListener('click', function(){
      // function above needs to cycle the pics and store the votes in a list
      alert('hey');
    });
    container.appendChild(img);
  }
  // let firstBusIndex = getRandomIndex();
  // let secondBusIndex = getRandomIndex();
  // let thirdBusIndex = getRandomIndex();
  
}

getRandomIndex();

