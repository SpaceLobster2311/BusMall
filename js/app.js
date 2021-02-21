// initializing Variables
let totalClicks = 0;
let clicksAllowed = 25;
let allItems = [];
let container = document.getElementById('imgContainer');
let indexArray = [];
let uniqueImgCount = 6;
let firstImage = document.querySelector('section img:first-child');
let secondImage = document.querySelector('section img:nth-child(2)');
let thirdImage = document.querySelector('section img:nth-child(3)');

// let theButton = document.querySelector('div');


function Bus(name, fileExtenstion = 'jpg') {
  this.name = name;
  this.src = `img/${name}.${fileExtenstion}`;
  this.views = 0;
  this.clicks = 0;
  allItems.push(this);
}
let retrieveBus = localStorage.getItem('products');

if (retrieveBus) {
  let parsedBus = JSON.parse(retrieveBus);
  allItems = parsedBus;
} else {
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
}

function getRandomIndex() {
  return Math.floor(Math.random() * allItems.length);
}

function populateIndexArray() {
  while (indexArray.length < uniqueImgCount) {
    let randomIndex = getRandomIndex();
    while (!indexArray.includes(randomIndex)) {
      indexArray.push(randomIndex);
    }
  }
  // console.log(indexArray);
}







function renderBus() {

  populateIndexArray();
  let firstBusIndex = indexArray.shift();
  let secondBusIndex = indexArray.shift();
  let thirdBusIndex = indexArray.shift();

  firstImage.src = allItems[firstBusIndex].src;
  firstImage.title = allItems[firstBusIndex].name;
  allItems[firstBusIndex].views++;
  secondImage.src = allItems[secondBusIndex].src;
  secondImage.title = allItems[secondBusIndex].name;
  allItems[secondBusIndex].views++;
  thirdImage.src = allItems[thirdBusIndex].src;
  thirdImage.title = allItems[thirdBusIndex].name;
  allItems[thirdBusIndex].views++;
  //repeat for 2 and 3. Then write event handler

}

// function renderResult() {
//   let theList = document.querySelector('ul');
//   for (let i = 0; i < allItems.length; i++) {
//     let li = document.createElement('li');
//     li.textContent = `${allItems[i].name} had ${allItems[i].clicks} votes. It was shown ${allItems[i].views} times`;
//     theList.appendChild(li);
//   }
// }

function handleClick(event) {
  if (event.target === container) {
    alert('Click an image');
  }
  totalClicks++;
  let busClicked = event.target.title;

  for (let i = 0; i < allItems.length; i++) {
    if (busClicked === allItems[i].name) {
      allItems[i].clicks++;
    }
  }
  renderBus();
  if (totalClicks === clicksAllowed) {
    container.removeEventListener('click', handleClick);
    renderChart();
    let stringifiedBus = JSON.stringify(allItems);
    // console.log(stringifiedBus);
    localStorage.setItem('products', stringifiedBus);
  }

}


// function handleBtnClick(event) {
//   if (totalClicks === clicksAllowed) {
//     renderResult();
//   }
// }


renderBus();

function renderChart() {
  let busNames = [];
  let busViews = [];
  let busClicks = [];
  for (let i = 0; i < allItems.length; i++) {
    busNames.push(allItems[i].name);
    busViews.push(allItems[i].views);
    busClicks.push(allItems[i].clicks);
  }


  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: busNames,
      datasets: [{
        label: '# of Views',
        data: busViews,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1
      },
      {
        label: '# of Clicks',
        data: busClicks,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}
container.addEventListener('click', handleClick);
// theButton.addEventListener('click', handleBtnClick);



