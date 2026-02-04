import Estagiario from "./classes/Estagiario.js";
import { DIAS, PERIODOS } from "./classes/Dados.js";

// const btn_calcular = document.getElementById("btn_calcular");
// const container = document.getElementById("container");
// const resultado = document.getElementById("resultado");

// btn_calcular.addEventListener("click", retorno_dados);

// function retorno_dados() {
//   let horarios = [];
//   for (let i = 1; i < container.children.length; i++) {
//     let dia = [];
//     for (let j = 1; j < container.children[i].children.length; j++) {
//       dia.push(container.children[i].children[j].value);
//     }

//     horarios.push(dia);
//   }

//   const estagiario = new Estagiario(horarios);
//   estagiario.calcula_total_horas();

//   resultado.textContent = estagiario.get_total_horas();
// }