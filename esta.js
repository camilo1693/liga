let partido = partidos.matches;

function estadisticas(partidos) {
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
    estadistica.forEach( (idencontrada) =>  {
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
  for (let i= 0; i < estadistica.length; i++){
    for (let j= 0; j < partido.length; j++){
      if (estadistica[i].id == partido[j].homeTeam.id){
        estadistica[i].goals += partido[j].score.fullTime.homeTeam;
        estadistica[i].matches++;
      }else if (estadistica[i].id == partido[j].awayTeam.id){
        estadistica[i].goals += partido[j].score.fullTime.awayTeam;
        estadistica[i].matches++;
      }
    }
  } 
  console.log(estadistica);

  for (let i = 0; i<estadistica.length; i++){
   let avg;
  avg = estadistica[i].goals / estadistica[i].matches
  /*avg.push({
    avg: goals,
  });*/
  console.log(avg)
 }
 
}



estadisticas(partido);