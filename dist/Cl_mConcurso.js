import Cl_mParticipante from "./Cl_mParticipante.js";
export default class Cl_mConcurso {
    constructor() {
        this.listaAspirantes = [];
        this.listaAspirantes = [];
    }
    // Registrar un nuevo aspirante en el concurso
    registrarAspirante(participante) {
        this.listaAspirantes.push(participante);
    }
    // Obtener toda la lista de aspirantes del concurso
    obtenerListaAspirantes() {
        return this.listaAspirantes;
    }
    // Buscar aspirante por ID en el concurso
    obtenerAspirantePorId(id) {
        const aspirante = this.listaAspirantes.find(asp => asp.id === id);
        return aspirante || null;
    }
    // Calcular resultados finales del concurso
    calcularResultadosFinales() {
        // Recorre la lista y llama a los métodos de cálculo de cada aspirante
        this.listaAspirantes.forEach(aspirante => {
            // Calcular la nota final del aspirante
            aspirante.calcularNotaFinal();
        });
        // Ordenar aspirantes por nota final (de mayor a menor)
        const aspirantesOrdenados = this.listaAspirantes.sort((a, b) => b.notaFinal - a.notaFinal);
        // Asignar veredictos considerando la posición en el concurso
        aspirantesOrdenados.forEach((aspirante, index) => {
            const posicion = index + 1;
            aspirante.obtenerVeredicto(posicion);
        });
        return aspirantesOrdenados;
    }
    // Métodos adicionales para gestión del concurso:
    // Obtener cantidad total de aspirantes en el concurso
    get cantidadAspirantes() {
        return this.listaAspirantes.length;
    }
    // Obtener aspirantes presentes en el concurso
    obtenerAspirantesPresentes() {
        return this.listaAspirantes.filter(asp => asp.presente);
    }
    // Obtener aspirantes ausentes en el concurso
    obtenerAspirantesAusentes() {
        return this.listaAspirantes.filter(asp => !asp.presente);
    }
    // Obtener aspirantes que cumplen requisitos en el concurso
    obtenerAspirantesCumplenRequisitos() {
        return this.listaAspirantes.filter(asp => asp.cumpleRequisitos);
    }
    // Obtener los seleccionados del concurso
    obtenerSeleccionadosConcurso() {
        return this.listaAspirantes.filter(asp => asp.veredicto === "Seleccionado" ||
            asp.veredicto === "Seleccionado por mayor calificación");
    }
    // Verificar si el concurso está desierto (sin seleccionados)
    get concursoDesierto() {
        const seleccionados = this.obtenerSeleccionadosConcurso();
        return seleccionados.length === 0;
    }
    // Obtener el ganador del concurso (primer lugar)
    obtenerGanadorConcurso() {
        if (this.listaAspirantes.length === 0)
            return null;
        const resultados = this.calcularResultadosFinales();
        const ganador = resultados[0];
        return (ganador.veredicto.includes("Seleccionado")) ? ganador : null;
    }
    // Limpiar lista de aspirantes del concurso
    limpiarConcurso() {
        this.listaAspirantes = [];
    }
    // Eliminar aspirante del concurso por ID
    eliminarAspiranteConcurso(id) {
        const indice = this.listaAspirantes.findIndex(asp => asp.id === id);
        if (indice !== -1) {
            this.listaAspirantes.splice(indice, 1);
            return true;
        }
        return false;
    }
    // Obtener estadísticas del concurso
    obtenerEstadisticasConcurso() {
        return {
            total: this.cantidadAspirantes,
            presentes: this.obtenerAspirantesPresentes().length,
            ausentes: this.obtenerAspirantesAusentes().length,
            cumplenRequisitos: this.obtenerAspirantesCumplenRequisitos().length,
            seleccionados: this.obtenerSeleccionadosConcurso().length,
            desierto: this.concursoDesierto
        };
    }
}
