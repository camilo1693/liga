creartabla(tab1.standings[0].table);

function creartabla(juegos1) {
  let cuerpotabla = document.getElementById("tb2");
  for (let i = 0; i < juegos1.length; i++) {
    const fila = document.createElement("tr");

    let name = document.createElement("p");
    name.innerHTML = juegos1[i].team.name;

    let image = document.createElement("img");
    image.src = juegos1[i].team.crestUrl;
    image.classList.add("escu");

    let par = document.createElement("p");
    par.innerHTML = juegos1[i].playedGames;

    let v = document.createElement("p");
    v.innerHTML = juegos1[i].won;
    
    let e = document.createElement("p");
    e.innerHTML = juegos1[i].draw;

    let lost = document.createElement("p");
    lost.innerHTML = juegos1[i].lost;

    let gf = document.createElement("p");
    gf.innerHTML = juegos1[i].goalsFor;

    let gc = document.createElement("p");
    gc.innerHTML = juegos1[i].goalsAgainst;

    let dg = document.createElement("p");
    dg.innerHTML = juegos1[i].goalDifference;

    let pts = document.createElement("p");
    pts.innerHTML = juegos1[i].points;

    let resultadosclasi = [name, image, par, v, e, lost, gf, gc, dg, pts];
    for (let j = 0; j < resultadosclasi.length ; j++) {
        const columna = document.createElement("td")
        columna.append(resultadosclasi[j]);
        fila.appendChild(columna);
    }
     cuerpotabla.appendChild(fila);
  }
}