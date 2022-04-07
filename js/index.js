"use strict";

// UI Logic 

const bossesContainer = document.querySelector(".bosses");

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

// UI/API Logic 

const getBossAndLocation = function (boss) {
  fetch(`https://eldenring.fanapis.com/api/bosses?name=${boss}`)
    .then((response) => response.json())
    .then((data) => {
      renderBoss(data.data[0]);
      const bossLocation = data.data[0].location;
      if (!bossLocation) return;
      return fetch(
        `https://eldenring.fanapis.com/api/locations?name=${bossLocation}`
      );
    })
    .then((response) => response.json())
    .then((data) => renderLocation(data.data[0], "bossLocation"));
};

// clearing the region div on click 

$(document).ready(function () {
  $(".limgrave").click(function (event) {
    clearFields();
    $("#limgrave").show();
  });
  $(".weepingPeninsula").click(function (event) {
    clearFields();
    $("#weepingPeninsula").show();
  });
  $(".liurniaOfTheLakes").click(function (event) {
    clearFields();
    $("#liurniaOfTheLakes").show();
  });
  $(".caelid").click(function (event) {
    clearFields();
    $("#caelid").show();
  });
  $(".altusPlateau").click(function (event) {
    clearFields();
    $("#altusPlateau").show();
  });
  $(".mountaintopsOfTheGiants").click(function (event) {
    clearFields();
    $("#mountaintopsOfTheGiants").show();
  });
  $(".allEldenRingBosses").click(function (event) {
    clearFields();
    $("#allEldenRingBosses").show();
  });
});

// clearing the boss/location image on click 

$(document).ready(function () {
  $("#limgrave-bosses").on("change", function (event) {
    clearCards();
    const boss = $("#limgrave-bosses").val();
    getBossAndLocation(boss);
  });
  $("#weepingPeninsula-bosses").on("change", function (event) {
    clearCards();
    const boss = $("#weepingPeninsula-bosses").val();
    getBossAndLocation(boss);
  });
  $("#liurniaOfTheLakes-bosses").on("change", function (event) {
    clearCards();
    const boss = $("#liurniaOfTheLakes-bosses").val();
    getBossAndLocation(boss);
  });
  $("#caelid-bosses").on("change", function (event) {
    clearCards();
    const boss = $("#caelid-bosses").val();
    getBossAndLocation(boss);
  });
  $("#altusPlateau-bosses").on("change", function (event) {
    clearCards();
    const boss = $("#altusPlateau-bosses").val();
    getBossAndLocation(boss);
  });
  $("#mountaintopsOfTheGiants-bosses").on("change", function (event) {
    clearCards();
    const boss = $("#mountaintopsOfTheGiants-bosses").val();
    getBossAndLocation(boss);
  });
});

// Utility Logic 

function clearFields() {
  clearCards();
  $("#limgrave").hide();
  $("#weepingPeninsula").hide();
  $("#liurniaOfTheLakes").hide();
  $("#caelid").hide();
  $("#altusPlateau").hide();
  $("#mountaintopsOfTheGiants").hide();
  $("#allEldenRingBosses").hide();
}

function clearCards() {
  $(".bosses").text("");
  $(".images").text("");
}