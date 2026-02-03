import { HORARIOS } from "./Dados.js";

export default class Estagiario {
  /**
   * @type {string}
   */
  #nome;
  /**
   * @type {string} 
   */
  #materia;
  /**
   * @type {string[]}
   */
  #horario;
  /**
   * @type {number}
   */
  #total_horas;
  
  /**
   * 
   * @param {string} nome Nome do estagiário.
   * @param {string} materia Nome da matéria em que ele atua.
   * @param {string[]} horario Lista com os quatro horários de entrada e saída dos estagiários.
   */
  constructor(nome, materia, horario) {
    this.#nome = nome;
    this.#materia = materia;
    this.#horario = horario;
  }

  /**
   * 
   * @returns {number} Número total de tempo do estagiário na escola em minutos.
   */
  calcula_total_horas() {
    let [ manha_inicio, manha_fim, tarde_inicio, tarde_fim ] = this.#horario.map(String);
    let tempo_total = 0;
    let horario_inicial;
    let horario_final;

    // Parte da manhã
    for (let x = 0; x < HORARIOS.length; x++) {
      if (x == 0) {
        horario_inicial = manha_inicio;
      } else {
        horario_inicial = HORARIOS[x].INICIO
      }
      horario_final = HORARIOS[x].FIM;

      if(this.#calcula_intervalo(horario_final, manha_fim) <= 0) {
        tempo_total += this.#calcula_intervalo(horario_inicial, manha_fim);
        break;
      }

      tempo_total += this.#calcula_intervalo(horario_inicial, horario_final);
    }

    // Parte da tarde
    tempo_total += this.#calcula_intervalo(tarde_inicio, tarde_fim);

    return tempo_total;
  }


  /**
   * 
   * @param {string} horario_inicial Horário inicial no formato 12:00.
   * @param {string} horario_final Horário final no formato 12:00.
   * @returns {number} Número total de minutos transcorridos entre o horário inicial e o horário final.
   */
  #calcula_intervalo(horario_inicial, horario_final) {
    let tempo_total;
    let inicial = horario_inicial.split(":").map(Number);
    let final = horario_final.split(":").map(Number);

    tempo_total = ((final[0] * 60) + final[1]) - ((inicial[0] * 60) + inicial[1]);

    return tempo_total; // Em minutos numérico
  }
}