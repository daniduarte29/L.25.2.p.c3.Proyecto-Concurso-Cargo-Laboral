import Cl_mParticipante, { iParticipante } from "./Cl_mParticipante";
import Cl_mConcurso from "./Cl_mConcurso";
import Cl_vConcurso from "./Cl_vConcurso";


export default class Cl_controlador {
  public modelo: Cl_mConcurso;
  public vista: Cl_vConcurso;
  
  constructor(modelo: Cl_mConcurso, vista: Cl_vConcurso) {
    this.modelo = modelo;
    this.vista = vista;
  }

  addAspirante({
    dtAspirante,
    callback,
  }: {
    dtAspirante: iParticipante;
    callback: (error: string | false) => void;
  }): void {
    try {
      const nuevoAspirante = new Cl_mParticipante(dtAspirante);
      
      // Validar que el aspirante cumple con los requisitos básicos
      const validacion = nuevoAspirante.participanteOk;
      if (validacion !== true) {
        callback(`Error en ${validacion}`);
        return;
      }

      this.modelo.registrarAspirante(nuevoAspirante);
      callback(false); // Sin error
    } catch (error) {
      callback("Error al agregar aspirante");
    }
  }

  // Editar un aspirante existente
  editAspirante({
    dtAspirante,
    callback,
  }: {
    dtAspirante: iParticipante;
    callback: (error: string | boolean) => void;
  }): void {
    try {
      if (!dtAspirante.id) {
        callback("ID de aspirante requerido");
        return;
      }

      // Eliminar el antiguo y agregar el nuevo
      this.modelo.eliminarAspiranteConcurso(dtAspirante.id);
      
      const aspiranteEditado = new Cl_mParticipante(dtAspirante);
      this.modelo.registrarAspirante(aspiranteEditado);
      
      callback(true); // Éxito
    } catch (error) {
      callback("Error al editar aspirante");
    }
  }

  // Eliminar un aspirante por ID
  deleteAspirante({
    id,
    callback,
  }: {
    id: number;
    callback: (error: string | boolean) => void;
  }): void {
    try {
      const eliminado = this.modelo.eliminarAspiranteConcurso(id);
      callback(eliminado); // true si se eliminó, false si no existía
    } catch (error) {
      callback("Error al eliminar aspirante");
    }
  }

  // Obtener un aspirante por ID
  aspirante(id: number): Cl_mParticipante | null {
    try {
      const aspirante = this.modelo.obtenerAspirantePorId(id);
      if (aspirante) {
        return new Cl_mParticipante(aspirante.toJSON());
      }
      return null;
    } catch (error) {
      return null;
    }
  }

  // ========== MÉTODOS PARA OBTENER DATOS ==========

  // Obtener lista de todos los aspirantes ordenados
  get dtAspirantes(): iParticipante[] {
    try {
      let dtAspirantes = this.modelo.obtenerListaAspirantes()
        .map(asp => asp.toJSON());
      
      // Ordenar por cédula
      dtAspirantes.sort((a, b) => a.cedula.localeCompare(b.cedula));
      return dtAspirantes;
    } catch (error) {
      return [];
    }
  }

  // Obtener lista de aspirantes con resultados calculados
  get dtResultados(): iParticipante[] {
    try {
      const resultados = this.modelo.calcularResultadosFinales();
      return resultados.map(asp => asp.toJSON());
    } catch (error) {
      return [];
    }
  }

  // Obtener solo los seleccionados
  get dtSeleccionados(): iParticipante[] {
    try {
      const seleccionados = this.modelo.obtenerSeleccionadosConcurso();
      return seleccionados.map(asp => asp.toJSON());
    } catch (error) {
      return [];
    }
  }

  // ========== MÉTODOS PARA CÁLCULOS Y OPERACIONES ==========

  // Calcular resultados finales del concurso
  calcularResultados(): iParticipante[] {
    try {
      return this.dtResultados;
    } catch (error) {
      return [];
    }
  }

  // Obtener estadísticas del concurso
  get estadisticasConcurso(): {
    total: number,
    presentes: number,
    ausentes: number,
    cumplenRequisitos: number,
    seleccionados: number,
    desierto: boolean
  } {
    try {
      return this.modelo.obtenerEstadisticasConcurso();
    } catch (error) {
      return {
        total: 0,
        presentes: 0,
        ausentes: 0,
        cumplenRequisitos: 0,
        seleccionados: 0,
        desierto: true
      };
    }
  }

  // Obtener el ganador del concurso
  get ganadorConcurso(): iParticipante | null {
    try {
      const ganador = this.modelo.obtenerGanadorConcurso();
      return ganador ? ganador.toJSON() : null;
    } catch (error) {
      return null;
    }
  }

  // Verificar si el concurso está desierto
  get concursoDesierto(): boolean {
    return this.modelo.concursoDesierto;
  }

  // ========== MÉTODOS PARA LA VISTA ==========

  // Activar diferentes vistas de la aplicación
  activarVista({
    vista,
    opcion,
    objeto,
  }: {
    vista: string;
    opcion?: any;
    objeto?: Cl_mParticipante;
  }): void {
    this.vista.activarVista({ vista, opcion, objeto });
  }

  // Limpiar todo el concurso
  limpiarConcurso(): void {
    this.modelo.limpiarConcurso();
  }

  // ========== MÉTODOS DE VALIDACIÓN ==========

  // Verificar si una cédula ya existe
  cedulaExiste(cedula: string): boolean {
    return this.modelo.obtenerListaAspirantes()
      .some(asp => asp.cedula === cedula);
  }

  // Validar datos completos de un aspirante
  validarAspirante(dtAspirante: iParticipante): string | true {
    try {
      const aspirante = new Cl_mParticipante(dtAspirante);
      return aspirante.participanteOk;
    } catch (error) {
      return "Error en validación";
    }
  }
}
