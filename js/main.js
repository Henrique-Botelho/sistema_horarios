import Estagiario from "./classes/Estagiario.js";
import Horarios from "./classes/Horarios.js";

const container = document.getElementById("container");

container.style.display = "flex";
container.style.gap = "12px" 
container.style.flexDirection = "row";

for (let i = 0; i < 5; i++) {
  const sub_div = document.createElement("div");
  sub_div.id = `dia ${i}`;

  sub_div.style.display = "flex";
  sub_div.style.flexDirection = "column";
  
  const fragment = document.createDocumentFragment();
  
  for (let j = 0; j < 4; j++) {
    const input = document.createElement("input");
    input.type = "time";
    input.id = `horario_${i}${j}`
    
    fragment.appendChild(input);
  }

  sub_div.appendChild(fragment);
  
  container.appendChild(sub_div);
}
