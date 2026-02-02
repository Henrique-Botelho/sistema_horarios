import Estagiario from "./classes/Estagiario.js";


let estag = new Estagiario("Henrique", "Física", ["7:25", "13:00", "14:00", "15:30"]);


console.log(estag.calcula_total_horas() / 60);