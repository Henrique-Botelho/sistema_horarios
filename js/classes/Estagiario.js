import { HORARIOS } from "./Horarios.js";

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

  calcula_total_horas() {
    let [ manha_inicio, manha_fim, tarde_inicio, tarde_fim ] = this.#horario.map(String);
    let horario_inicial = manha_inicio;
    let horario_final = HORARIOS[0][0];
    let total_tempo = 0;
    let contador = 0;

    // Parte da manhã
    while (contador < HORARIOS.length) {
      if (this.#calcula_intervalo(horario_final, manha_fim) <= 0) {
        total_tempo += this.#calcula_intervalo(horario_inicial, horario_final);
        break;
      }

      total_tempo += this.#calcula_intervalo(horario_inicial, horario_final);

      horario_inicial = HORARIOS[contador][0]

      if (contador < HORARIOS.length - 1) {
        horario_final = HORARIOS[contador + 1][1];
      } else {
        horario_final = manha_fim;
      }


      contador += 1;
    }

    // Parte da tarde
    total_tempo += this.#calcula_intervalo(tarde_inicio, tarde_fim);

    return total_tempo;
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

  /**
   * Verifica se o segundo horário passado é maior que o primeiro horário passado.
   * @param {string} horario1 Primeiro horário no formato 12:00.
   * @param {*} horario2 Segundo horário no formato 12:00.
   * @returns {boolean} True, se o horario2 é maior que o horario1, senão false.
   */
  #verifica_horario(horario1, horario2) {
    let hora1 = horario1.split(":").map(Number);
    let hora2 = horario2.split(":").map(Number);

    hora1 = hora1[0] * 60 + hora1[1];
    hora2 = hora2[0] * 60 + hora2[1];

    if (hora2 > hora1 || hora2 === hora1) {
      return true;
    }

    return false;
  }

}