const BASE_URL = "https://superheroapi.com/api.php/";
const API_KEY = "";
//var url = BASE_URL + "/731";

var powerstats1 = {};
var powerstats2 = {};
var nome1 = "";
var nome2 = "";

var carta1 = Math.floor(Math.random() * 731) + 1;
var carta2 = Math.floor(Math.random() * 731) + 1;

window.onload = function () {
  getAndShowHero(carta1);
  getAndShowHero(carta2);
};

function mostrarVencedor() {
  let ponto1 = 0;
  let ponto2 = 0;

  if (powerstats1.intelligence > powerstats2.intelligence) {
    ponto1++;
  } else {
    ponto2++;
  }

  if (powerstats1.strength > powerstats2.strength) {
    ponto1++;
  } else {
    ponto2++;
  }

  if (powerstats1.speed > powerstats2.speed) {
    ponto1++;
  } else {
    ponto2++;
  }

  if (powerstats1.durability > powerstats2.durability) {
    ponto1++;
  } else {
    ponto2++;
  }

  if (powerstats1.power > powerstats2.power) {
    ponto1++;
  } else {
    ponto2++;
  }

  if (powerstats1.combat > powerstats2.combat) {
    ponto1++;
  } else {
    ponto2++;
  }

  if (ponto1 > ponto2) {
    alert("O vencedor é " + nome1);
  } else if (ponto2 > ponto1) {
    alert("O vencedor é " + nome2);
  } else {
    alert("Empate");
  }
  console.log(ponto1);
  console.log(ponto2);
}

function getAndShowHero(id) {
  var url = BASE_URL + "/" + API_KEY + "/" + id;

  callAPI(url, function (status, data) {
    let name = data.name;
    let intelligence = data.powerstats.intelligence;
    let strength = data.powerstats.strength;
    let speed = data.powerstats.speed;
    let durability = data.powerstats.durability;
    let power = data.powerstats.power;
    let combat = data.powerstats.combat;
    let image = data.image.url;

    if (id == carta1) {
      powerstats1 = data.powerstats;
      nome1 = data.name;
    } else {
      powerstats2 = data.powerstats;
      nome2 = data.name;
    }

    document.getElementById("content").innerHTML +=
      "<article> <img src='" +
      image +
      "'/>" +
      "<h1>" +
      name +
      "</h1>" +
      "<p>Intelligence: <span style='width:" +
      intelligence +
      "%; background-color: #F9B32F'></span><p>" +
      "<p>Strength: <span style='width:" +
      strength +
      "%; background-color: #FF7C6C'></span><p>" +
      "<p>Speed: <span style='width:" +
      speed +
      "%; background-color: #22A7F0'></span><p>" +
      "<p>Durability: <span style='width:" +
      durability +
      "%; background-color: #3EDC81'></span><p>" +
      "<p>Power: <span style='width:" +
      power +
      "%; background-color: #AB69C6'></span><p>" +
      "<p>Combat: <span style='width:" +
      combat +
      "%; background-color: #9CAAB9'></span><p>" +
      "</article>";
  });
}

function callAPI(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.responseType = "json";
  xhr.onload = function () {
    var status = xhr.status;
    if (xhr.status === 200) {
      callback(xhr.status, xhr.response);
    } else {
      alert("Problema ao conectar com o servidor");
    }
  };
  xhr.send();
}
