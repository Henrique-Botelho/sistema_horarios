import { HORARIOS } from "./Dados.js";

export default class Estagiario {
  /**
   * @type {string[][]}
   */
  #horario;
  /**
   * @type {number}
   */
  #total_horas = 0;
  
  /**
   * @param {string[][]} horario Lista com os quatro horários de entrada e saída dos estagiários.
   */
  constructor(horario) {
    this.#horario = horario;
  }

  /**
   * Função para pegar o total de horas do estagiário.
   * @param {string} formato Formato de retorno do total de horas. Padrão "horas".
   * @returns Total de horas
   */
  get_total_horas(formato = "horas") {
    if (formato === "horas") {
      return (this.#total_horas / 60).toFixed(2);
    } else if (formato === "minutos") {
      return this.#total_horas.toString();
    }
  }

  /**
   * 
   * @param {string} formato "horas" ou "minutos".
   * @returns 
   */
  total_horas(formato) {
    if (formato == "horas") {
      return this.#total_horas / 60;
    } else if (formato == "minutos") {
      return this.#total_horas;
    }
  }


  /**
   * 
   * @returns {number} Número total de tempo do estagiário na escola em minutos.
   */
  calcula_total_horas() {
    this.#horario.map(item => {
      let [ manha_inicio, manha_fim, tarde_inicio, tarde_fim ] = item.map(String);
      let horarios = HORARIOS.filter(item => this.#calcula_intervalo(manha_inicio,item.FIM) > 0 );
      let horario_inicial;
      let horario_final;
      let contador = 0;

      // Parte da manhã
      for (let x = 0; x < horarios.length; x++) {
        if (x == 0) {
          horario_inicial = manha_inicio;
        } else {
          horario_inicial = horarios[x].INICIO
        }
        horario_final = horarios[x].FIM;

        if(this.#calcula_intervalo(horario_final, manha_fim) <= 0) {
          this.#total_horas += this.#calcula_intervalo(horario_inicial, manha_fim);
          break;
        }

        this.#total_horas += this.#calcula_intervalo(horario_inicial, horario_final);
      }

      // Parte da tarde
      this.#total_horas += this.#calcula_intervalo(tarde_inicio, tarde_fim);
    });
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