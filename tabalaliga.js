creartabla(tab1.standings[0].table);

function creartabla() {
  let cuerpotabla = document.getElementById("tb2");
  for (let i = 0; i < tab1.standings[0].table.length; i++) {
    const fila = document.createElement("tr");

    let name = document.createElement("p");
    name.innerHTML = tab1.standings[0].table[i].team.name;

    let image = document.createElement("img");
    image.src = tab1.standings[0].table[i].team.crestUrl;

    let par = document.createElement("p");
    par.innerHTML = tab1.standings[0].table[i].playedGames;

    let v = document.createElement("p");
    v.innerHTML = tab1.standings[0].table[i].won;
    
    let e = document.createElement("p");
    e.innerHTML = tab1.standings[0].table[i].draw;

    let lost = document.createElement("p");
    lost.innerHTML = tab1.standings[0].table[i].lost;

    let gf = document.createElement("p");
    gf.innerHTML = tab1.standings[0].table[i].goalsFor;

    let gc = document.createElement("p");
    gc.innerHTML = tab1.standings[0].table[i].goalsAgainst;

    let dg = document.createElement("p");
    dg.innerHTML = tab1.standings[0].table[i].goalDifference;

    let pts = document.createElement("p");
    pts.innerHTML = tab1.standings[0].table[i].points;

    let resultadosclasi = [name, image, par, v, e, lost, gf, gc, dg, pts];
    for (let j = 0; j < resultadosclasi.length ; j++) {
        const columna = document.createElement("td")
        columna.append(resultadosclasi[j]);
        fila.appendChild(columna);
    }
     cuerpotabla.appendChild(fila);
  }
}