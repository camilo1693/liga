
let url = "https://api.football-data.org/v2/competitions/2014/matches?season=2020";
let token = "c471bfdf98ae44b892901ab81aaea626";

const getData = async () => {
  let info = await fetch(url, {
    method: "GET",
    headers: {
      "X-Auth-Token": token,
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then((data) => {
      console.log(data)
      let juegos = data.matches;
      return juegos
    })
    .catch(function (error) {
      console.log(error);
    });
  return info;
};

const init = async () => {
  let matches = await getData();
  console.log(matches);
  estadisticas(matches); 
 
};

init();

function estadisticas(partidos) {
  console.log(partidos)
  let estadistica = [];

  for (let i = 0; i < partidos.length; i++) {
    let final = partidos[i].status;
    if (final !== "FINISHED") {
      continue;
    }
    let home = partidos[i].homeTeam.name;
    let id = partidos[i].homeTeam.id;
    let goles = partidos[i].score.fullTime.homeTeam;
    if (estadistica.length == 0) {
      estadistica.push({
        id: id,
        name: home,
        goals: goles,
        matches: 0,
      });
    }
    let red = false;
    estadistica.forEach((idencontrada) => {
      if (idencontrada.id == id) {
        red = true;
      }
    });

    if (red == false) {
      estadistica.push({
        id: id,
        name: home,
        goals: goles,
        matches: 0,
      });
    }
  }
  for (let i = 0; i < estadistica.length; i++) {
    for (let j = 0; j < partidos.length; j++) {
      if (estadistica[i].id == partidos[j].homeTeam.id) {
        estadistica[i].goals += partidos[j].score.fullTime.homeTeam;
        estadistica[i].matches++;
      } else if (estadistica[i].id == partidos[j].awayTeam.id) {
        estadistica[i].goals += partidos[j].score.fullTime.awayTeam;
        estadistica[i].matches++;
      }
    }
  }

  for (let i = 0; i < estadistica.length; i++) {
    let mediaGoles = estadistica[i].goals / estadistica[i].matches;
    estadistica[i].avg = mediaGoles.toFixed(2);
  }
  estadistica.sort((a, b) => b.avg - a.avg);
  crearTabla(estadistica);
}

function crearTabla(estadistica) {
  let top5 = estadistica.slice(0, 5);
  console.log(top5);

  let cuerpotabla = document.getElementById("tb3");

  for (let i = 0; i < top5.length; i++) {
    const fila = document.createElement("tr");

    let imagenClub = document.createElement("img");
    imagenClub.src = "https://crests.football-data.org/" + top5[i].id + ".svg";
    imagenClub.classList.add("escu");

    let club = document.createElement("p");
    club.innerHTML = top5[i].name;

    let gols = document.createElement("p");
    gols.innerHTML = top5[i].goals;

    let partidos = document.createElement("p");
    partidos.innerHTML = top5[i].matches;

    let media = document.createElement("p");
    media.innerHTML = top5[i].avg;

    let resultadopartido = [imagenClub, club, gols, partidos, media];
    for (let j = 0; j < resultadopartido.length; j++) {
      const columna = document.createElement("td");
      columna.append(resultadopartido[j]);
      fila.appendChild(columna);
    }
    cuerpotabla.appendChild(fila);
  }
}
