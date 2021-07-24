creartabla(partidos.matches);

function creartabla() {
  let cuerpotabla = document.getElementById("tb1");
  for (let i = 0; i < partidos.matches.length; i++) {
    const fila = document.createElement("tr");

    let local = document.createElement("p");
    local.innerHTML = partidos.matches[i].homeTeam.name;
    

    let visitante = document.createElement("p");
    visitante.innerHTML = partidos.matches[i].awayTeam.name;
    
    let fecha = new Date(partidos.matches[i].utcDate);
    
    
    let jornada = partidos.matches[i].matchday;
    
    let resultado = document.createElement("p");
    resultado.innerHTML = partidos.matches[i].score.fullTime.homeTeam + "-" + partidos.matches[i].score.fullTime.awayTeam;

    let resultadopartido = [local, visitante, fecha.toLocaleString(), jornada, resultado];
    for (let j = 0; j < resultadopartido.length ; j++) {
        const columna = document.createElement("td");
        columna.append(resultadopartido[j]);
        fila.appendChild(columna);
    }
     cuerpotabla.appendChild(fila);
  }
}
    
