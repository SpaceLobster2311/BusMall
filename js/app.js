let totalClicks = 0;
let clicksAllowed = 25;
let allItems = [];

let firstImage = document.querySelector('section img:first-child');
let secondImage = document.querySelector('section img:nth-child(2)');
let thirdImage = document.querySelector('section img:nth-child(3)');


function Bus(name, fileExtenstion = 'jpg') {
  this.name = name;
  this.src = `img/${name}.${fileExtenstion}`;
  this.views = 0;
  this.clicks = 0;
  allItems.push(this);
}

