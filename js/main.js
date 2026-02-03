import Estagiario from "./classes/Estagiario.js";


let estag = new Estagiario("Henrique", "Física", ["7:25", "12:00", "13:00", "15:15"]);


console.log(estag.calcula_total_horas() / 60);