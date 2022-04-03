"use strict";

const bossesContainer = document.querySelector(".bosses");
// console.log(bossesContainer);

const renderBoss = function (data, className) {
  if (data.healthPoints === "???") {
    data.healthPoints = "This bosses health is unknown.";
  }
  const html = `<article class="boss ${className}">
  <img class="boss__img" src="${data.image}" />
  <div class="boss__data">
    <h3 class="boss__name">${data.name}</h3>
    <h4 class="boss__region">Location: ${data.location}</h4>
    <p class="boss__row_health"> <span>Health</span>: ${data.healthPoints}</p>
    <p class="boss__row_description"> <span>Description:</span> ${data.description}</p>
    <p class="boss__row_reward"><span>Reward: </span> ${data.drops[0]}</p>
  </div>
</article>`;
  bossesContainer.insertAdjacentHTML("beforeend", html);
  bossesContainer.style.opacity = 1;
};

const renderLocation = function (data, className) {
  const html = `<article class="boss ${className}">
  <img class="location__img" src="${data.image}" />
  <div class="location__data">
    <h3 class="location__name">${data.name}</h3>
    <p class="location_description"> <span>Description:</span> ${data.description}</p>
  </div>
</article>`;
bossesContainer.insertAdjacentHTML("beforeend", html);
bossesContainer.style.opacity = 1;
};

const getBossAndLocation = function (boss) {
  // Boss
  fetch(`https://eldenring.fanapis.com/api/bosses?name=${boss}`)
    .then(response => response.json()) // response, transformed to json
    .then(data => {
      renderBoss(data.data[0]); // take data, render the boss to the DOM
      const bossLocation = data.data[0].location;

      if (!bossLocation) return;
  // Location   
      return fetch(`https://eldenring.fanapis.com/api/locations?name=${bossLocation}`);
    })
      .then(response => response.json())
      .then(data => renderLocation(data.data[0], 'bossLocation'))
};




// Bosses with All Data and Location info

getBossAndLocation('Esgar, Priest Of Blood')
// getBossAndLocation('Elemer Of The Briar')
// getBossAndLocation("Scaly Misbegotten");
// getBossAndLocation("Demi-human")
// getBossAndLocation('Ancestor Spirit')
// getBossAndLocation('Beast Of Farum Azula')


// Bosses with no location data

// getBossAndLocation("Grafted Scion"); // Boss image no location data
// getBossAndLocation("Flying Dragon Agheel") // Boss image no location data
// getBossAndLocation("Leonine Misbegotten"); // Boss image no location data
// create an object that contains the regions 

// go to resources images and add the picture of the boss, but the name of the file should be the same of the id as the boss
