creartabla(partidos.matches);
function creartabla(juegos) {
  let cuerpotabla = document.getElementById("tb1");
  for (let i = 0; i < juegos.length; i++) {
    const fila = document.createElement("tr");

    let local = document.createElement("p");
    local.innerHTML = juegos[i].homeTeam.name;
    
    let imagelocal = document.createElement("img");
    imagelocal.src = "https://crests.football-data.org/"+ juegos[i].homeTeam.id + ".svg";
    imagelocal.classList.add("escu");

    let visitante = document.createElement("p");
    visitante.innerHTML = juegos[i].awayTeam.name;

    let imagevisitante = document.createElement("img");
    imagevisitante.src = "https://crests.football-data.org/"+ juegos[i].awayTeam.id + ".svg";
    imagevisitante.classList.add("escu");

    let fecha = new Date(juegos[i].utcDate);
    
    
    let jornada = juegos[i].matchday;
    
    let resultado = document.createElement("p");
    resultado.innerHTML = juegos[i].score.fullTime.homeTeam + "-" + partidos.matches[i].score.fullTime.awayTeam;

    let resultadopartido = [local, imagelocal, visitante, imagevisitante, fecha.toLocaleString(), jornada, resultado];
    for (let j = 0; j < resultadopartido.length ; j++) {
        const columna = document.createElement("td");
        columna.append(resultadopartido[j]);
        fila.appendChild(columna);
    }
     cuerpotabla.appendChild(fila);
  }
}
    
