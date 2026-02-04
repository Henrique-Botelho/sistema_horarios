import { DIAS, PERIODOS } from "./Dados.js";

export default class Horarios {
  constructor() {
    this.#criar_horarios();
  }

  #criar_horarios() {
    const container = document.getElementById("container");

    container.style.display = "flex";
    container.style.gap = "12px" 
    container.style.flexDirection = "row";

    for (let i = 0; i < 6; i++) {
      const sub_div = document.createElement("div");
      const titulo =  document.createElement("span");
      
      titulo.textContent = DIAS[i];
      sub_div.id = `dia_${i}`;
      sub_div.style.gap = "20px";
      sub_div.appendChild(titulo);


      sub_div.style.display = "flex";
      sub_div.style.flexDirection = "column";
      
      const fragment = document.createDocumentFragment();
      
      for (let j = 0; j < 4; j++) {
        if (i == 0 ) {
          const texto = document.createElement("span");
          texto.textContent = PERIODOS[j];
          texto.style.height = "25px"
          fragment.appendChild(texto);
        } else {
          const input = document.createElement("input");
          input.type = "time";
          input.id = `horario_${i}${j}`
          input.style.height = "20px"
          
          fragment.appendChild(input);
        }
      }

      sub_div.appendChild(fragment);
      
      container.appendChild(sub_div);
    }    
  }
}