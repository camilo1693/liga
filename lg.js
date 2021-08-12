let inputBuscar = document.getElementById("equi");

let url =
  "https://api.football-data.org/v2/competitions/2014/matches?season=2020";
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
      console.log(data);
      let juego = data.matches;
      return juego;
    })
    .catch(function (error) {
      console.log(error);
    });
  return info;
};

const init = async () => {
  let matches = await getData();
  console.log(matches);
  creartabla(matches);
  
  inputBuscar.addEventListener("keyup", function () {
    buscar(matches);
  });
};

init();

function creartabla(juegos) {
  let cuerpotabla = document.getElementById("tb1");
  cuerpotabla.innerText = "";

  for (let i = 0; i < juegos.length; i++) {
    const fila = document.createElement("tr");

    let local = document.createElement("p");
    local.innerHTML = juegos[i].homeTeam.name;

    let imagelocal = document.createElement("img");
    imagelocal.src =
      "https://crests.football-data.org/" + juegos[i].homeTeam.id + ".svg";
    imagelocal.classList.add("escu");

    let visitante = document.createElement("p");
    visitante.innerHTML = juegos[i].awayTeam.name;

    let imagevisitante = document.createElement("img");
    imagevisitante.src =
      "https://crests.football-data.org/" + juegos[i].awayTeam.id + ".svg";
    imagevisitante.classList.add("escu");

    let fecha = new Date(juegos[i].utcDate);

    let jornada = juegos[i].matchday;

    let resultado = document.createElement("p");
    resultado.innerHTML =
      juegos[i].score.fullTime.homeTeam +
      "-" +
      juegos[i].score.fullTime.awayTeam;

    let resultadopartido = [
      local,
      imagelocal,
      visitante,
      imagevisitante,
      fecha.toLocaleString(),
      jornada,
      resultado,
    ];
    for (let j = 0; j < resultadopartido.length; j++) {
      const columna = document.createElement("td");
      columna.append(resultadopartido[j]);
      fila.appendChild(columna);
    }
    cuerpotabla.appendChild(fila);
  }
}

function buscar(partido) {
  if (inputBuscar.value == "") {
    creartabla(partido);
  }
  let filtros = partido.filter((nombres) => {
    return (
      nombres.homeTeam.name
        .toLowerCase()
        .includes(inputBuscar.value.toLowerCase()) ||
      nombres.awayTeam.name
        .toLowerCase()
        .includes(inputBuscar.value.toLowerCase())
    );
  });
  creartabla(filtros);
}

