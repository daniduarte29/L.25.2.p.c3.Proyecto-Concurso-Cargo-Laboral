import iCriterioPuntaje from "./iCriterioPuntaje";
export default class Cl_mParticipante {
    constructor({ id = null, creadoEl = null, alias = null, cedula = "", nombre = "", cumpleRequisitos = false, presente = false, FCO_5_DetallePostgrado = [], FCO_5_1DetallePregrado = [], FCO_5_2DetalleProduccion = [], FCO_5_3DetalleMeritos = [], FCO_8_Escrito = 0, FCO_8_1_Oral = 0, FCO_10_PuntajesJuradoA = [], FCO_10_PuntajesJuradoB = [], FCO_10_PuntajesJuradoC = [], notaCredenciales = 0, notaConocimientos = 0, notaAptitudes = 0, ponderacionFinalCredenciales = 0, ponderacionFinalConocimientos = 0, ponderacionFinalAptitudes = 0, notaFinal = 0, veredicto = "", }) {
        this._id = null;
        this._creadoEl = null;
        this._alias = null;
        this._cedula = "";
        this._nombre = "";
        this._cumpleRequisitos = false;
        this._presente = false;
        this._FCO_5_DetallePostgrado = [];
        this._FCO_5_1DetallePregrado = [];
        this._FCO_5_2DetalleProduccion = [];
        this._FCO_5_3DetalleMeritos = [];
        this._FCO_8_Escrito = 0;
        this._FCO_8_1_Oral = 0;
        this._FCO_10_PuntajesJuradoA = [];
        this._FCO_10_PuntajesJuradoB = [];
        this._FCO_10_PuntajesJuradoC = [];
        this._notaCredenciales = 0;
        this._notaConocimientos = 0;
        this._notaAptitudes = 0;
        this._ponderacionFinalCredenciales = 0;
        this._ponderacionFinalConocimientos = 0;
        this._ponderacionFinalAptitudes = 0;
        this._notaFinal = 0;
        this._veredicto = "";
        this._id = id;
        this._creadoEl = creadoEl;
        this._alias = alias;
        this._cedula = cedula;
        this._nombre = nombre;
        this._cumpleRequisitos = cumpleRequisitos;
        this._presente = presente;
        this._FCO_5_DetallePostgrado = FCO_5_DetallePostgrado;
        this._FCO_5_1DetallePregrado = FCO_5_1DetallePregrado;
        this._FCO_5_2DetalleProduccion = FCO_5_2DetalleProduccion;
        this._FCO_5_3DetalleMeritos = FCO_5_3DetalleMeritos;
        this._FCO_8_Escrito = FCO_8_Escrito;
        this._FCO_8_1_Oral = FCO_8_1_Oral;
        this._FCO_10_PuntajesJuradoA = FCO_10_PuntajesJuradoA;
        this._FCO_10_PuntajesJuradoB = FCO_10_PuntajesJuradoB;
        this._FCO_10_PuntajesJuradoC = FCO_10_PuntajesJuradoC;
        this._notaCredenciales = notaCredenciales;
        this._notaConocimientos = notaConocimientos;
        this._notaAptitudes = notaAptitudes;
        this._ponderacionFinalCredenciales = ponderacionFinalCredenciales;
        this._ponderacionFinalConocimientos = ponderacionFinalConocimientos;
        this._ponderacionFinalAptitudes = ponderacionFinalAptitudes;
        this._notaFinal = notaFinal;
        this._veredicto = veredicto;
    }
    set id(id) {
        this._id = id;
    }
    get id() {
        return this._id;
    }
    set creadoEl(creadoEl) {
        this._creadoEl = creadoEl;
    }
    get creadoEl() {
        return this._creadoEl;
    }
    set alias(alias) {
        this._alias = alias;
    }
    get alias() {
        return this._alias;
    }
    set cedula(cedula) {
        this._cedula = cedula;
    }
    get cedula() {
        return this._cedula;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    get nombre() {
        return this._nombre;
    }
    set cumpleRequisitos(cumpleRequisitos) {
        this._cumpleRequisitos = cumpleRequisitos;
    }
    get cumpleRequisitos() {
        return this._cumpleRequisitos;
    }
    set presente(presente) {
        this._presente = presente;
    }
    get presente() {
        return this._presente;
    }
    // Getters y Setters para datos de pruebas
    set FCO_5_DetallePostgrado(FCO_5_DetallePostgrado) {
        this._FCO_5_DetallePostgrado = FCO_5_DetallePostgrado;
    }
    get FCO_5_DetallePostgrado() {
        return this._FCO_5_DetallePostgrado;
    }
    set FCO_5_1DetallePregrado(FCO_5_1DetallePregrado) {
        this._FCO_5_1DetallePregrado = FCO_5_1DetallePregrado;
    }
    get FCO_5_1DetallePregrado() {
        return this._FCO_5_1DetallePregrado;
    }
    set FCO_5_2DetalleProduccion(FCO_5_2DetalleProduccion) {
        this._FCO_5_2DetalleProduccion = FCO_5_2DetalleProduccion;
    }
    get FCO_5_2DetalleProduccion() {
        return this._FCO_5_2DetalleProduccion;
    }
    set FCO_5_3DetalleMeritos(FCO_5_3DetalleMeritos) {
        this._FCO_5_3DetalleMeritos = FCO_5_3DetalleMeritos;
    }
    get FCO_5_3DetalleMeritos() {
        return this._FCO_5_3DetalleMeritos;
    }
    set FCO_8_Escrito(FCO_8_Escrito) {
        this._FCO_8_Escrito = FCO_8_Escrito;
    }
    get FCO_8_Escrito() {
        return this._FCO_8_Escrito;
    }
    set FCO_8_1_Oral(FCO_8_1_Oral) {
        this._FCO_8_1_Oral = FCO_8_1_Oral;
    }
    get FCO_8_1_Oral() {
        return this._FCO_8_1_Oral;
    }
    set FCO_10_PuntajesJuradoA(FCO_10_PuntajesJuradoA) {
        this._FCO_10_PuntajesJuradoA = FCO_10_PuntajesJuradoA;
    }
    get FCO_10_PuntajesJuradoA() {
        return this._FCO_10_PuntajesJuradoA;
    }
    set FCO_10_PuntajesJuradoB(FCO_10_PuntajesJuradoB) {
        this._FCO_10_PuntajesJuradoB = FCO_10_PuntajesJuradoB;
    }
    get FCO_10_PuntajesJuradoB() {
        return this._FCO_10_PuntajesJuradoB;
    }
    set FCO_10_PuntajesJuradoC(FCO_10_PuntajesJuradoC) {
        this._FCO_10_PuntajesJuradoC = FCO_10_PuntajesJuradoC;
    }
    get FCO_10_PuntajesJuradoC() {
        return this._FCO_10_PuntajesJuradoC;
    }
    // Getters y Setters para resultados
    set notaCredenciales(notaCredenciales) {
        this._notaCredenciales = notaCredenciales;
    }
    get notaCredenciales() {
        return this._notaCredenciales;
    }
    set notaConocimientos(notaConocimientos) {
        this._notaConocimientos = notaConocimientos;
    }
    get notaConocimientos() {
        return this._notaConocimientos;
    }
    set notaAptitudes(notaAptitudes) {
        this._notaAptitudes = notaAptitudes;
    }
    get notaAptitudes() {
        return this._notaAptitudes;
    }
    set ponderacionFinalCredenciales(ponderacionFinalCredenciales) {
        this._ponderacionFinalCredenciales = ponderacionFinalCredenciales;
    }
    get ponderacionFinalCredenciales() {
        return this._ponderacionFinalCredenciales;
    }
    set ponderacionFinalConocimientos(ponderacionFinalConocimientos) {
        this._ponderacionFinalConocimientos = ponderacionFinalConocimientos;
    }
    get ponderacionFinalConocimientos() {
        return this._ponderacionFinalConocimientos;
    }
    set ponderacionFinalAptitudes(ponderacionFinalAptitudes) {
        this._ponderacionFinalAptitudes = ponderacionFinalAptitudes;
    }
    get ponderacionFinalAptitudes() {
        return this._ponderacionFinalAptitudes;
    }
    set notaFinal(notaFinal) {
        this._notaFinal = notaFinal;
    }
    get notaFinal() {
        return this._notaFinal;
    }
    set veredicto(veredicto) {
        this._veredicto = veredicto;
    }
    get veredicto() {
        return this._veredicto;
    }
    // Métodos de validación
    get cedulaOk() {
        return this.cedula.length > 0;
    }
    get nombreOk() {
        return this.nombre.length > 0;
    }
    get participanteOk() {
        if (!this.cedulaOk)
            return "cedula";
        if (!this.nombreOk)
            return "nombre";
        return true;
    }
    // Métodos de cálculo
    calcularNotaCredenciales() {
        const sumaPostgrado = this.sumarPuntajes(this.FCO_5_DetallePostgrado);
        const sumaPregrado = this.sumarPuntajes(this.FCO_5_1DetallePregrado);
        const sumaProduccion = this.sumarPuntajes(this.FCO_5_2DetalleProduccion);
        const sumaMeritos = this.sumarPuntajes(this.FCO_5_3DetalleMeritos);
        this.notaCredenciales = (sumaPostgrado + sumaPregrado + sumaProduccion + sumaMeritos) / 5;
        return this.notaCredenciales;
    }
    calcularNotaConocimientos() {
        this.notaConocimientos = (this.FCO_8_Escrito + this.FCO_8_1_Oral) / 2;
        return this.notaConocimientos;
    }
    calcularNotaAptitudes() {
        const sumaJuradoA = this.sumarArray(this.FCO_10_PuntajesJuradoA);
        const sumaJuradoB = this.sumarArray(this.FCO_10_PuntajesJuradoB);
        const sumaJuradoC = this.sumarArray(this.FCO_10_PuntajesJuradoC);
        this.notaAptitudes = (sumaJuradoA + sumaJuradoB + sumaJuradoC) / 9;
        return this.notaAptitudes;
    }
    PonderacionFinalCredenciales() {
        this.ponderacionFinalCredenciales = this.notaCredenciales * 0.10;
        return this.ponderacionFinalCredenciales;
    }
    PonderacionFinalConocimientos() {
        this.ponderacionFinalConocimientos = this.notaConocimientos * 0.60;
        return this.ponderacionFinalConocimientos;
    }
    PonderacionFinalAptitudes() {
        this.ponderacionFinalAptitudes = this.notaAptitudes * 0.30;
        return this.ponderacionFinalAptitudes;
    }
    calcularNotaFinal() {
        this.calcularNotaCredenciales();
        this.calcularNotaConocimientos();
        this.calcularNotaAptitudes();
        this.PonderacionFinalCredenciales();
        this.PonderacionFinalConocimientos();
        this.PonderacionFinalAptitudes();
        this.notaFinal = this.ponderacionFinalCredenciales +
            this.ponderacionFinalConocimientos +
            this.ponderacionFinalAptitudes;
        return this.notaFinal;
    }
    obtenerVeredicto(posicion) {
        if (!this.presente) {
            this.veredicto = "No se presentó";
        }
        else if (!this.cumpleRequisitos) {
            this.veredicto = "No cumple requisitos";
        }
        else if (this.notaConocimientos < 15) {
            this.veredicto = "No seleccionado en Prueba de Conocimiento";
        }
        else if (this.notaFinal >= 16) {
            this.veredicto = (posicion === 1)
                ? "Seleccionado por mayor calificación"
                : "Seleccionado";
        }
        else {
            this.veredicto = "No seleccionado";
        }
        return this.veredicto;
    }
    // Métodos auxiliares privados
    sumarPuntajes(criterios) {
        return criterios.reduce((suma, criterio) => suma + criterio.puntaje, 0);
    }
    sumarArray(numeros) {
        return numeros.reduce((suma, numero) => suma + numero, 0);
    }
    toJSON() {
        return {
            id: this._id,
            creadoEl: this._creadoEl,
            alias: this._alias,
            cedula: this._cedula,
            nombre: this._nombre,
            cumpleRequisitos: this._cumpleRequisitos,
            presente: this._presente,
            FCO_5_DetallePostgrado: this._FCO_5_DetallePostgrado,
            FCO_5_1DetallePregrado: this._FCO_5_1DetallePregrado,
            FCO_5_2DetalleProduccion: this._FCO_5_2DetalleProduccion,
            FCO_5_3DetalleMeritos: this._FCO_5_3DetalleMeritos,
            FCO_8_Escrito: this._FCO_8_Escrito,
            FCO_8_1_Oral: this._FCO_8_1_Oral,
            FCO_10_PuntajesJuradoA: this._FCO_10_PuntajesJuradoA,
            FCO_10_PuntajesJuradoB: this._FCO_10_PuntajesJuradoB,
            FCO_10_PuntajesJuradoC: this._FCO_10_PuntajesJuradoC,
            notaCredenciales: this._notaCredenciales,
            notaConocimientos: this._notaConocimientos,
            notaAptitudes: this._notaAptitudes,
            ponderacionFinalCredenciales: this._ponderacionFinalCredenciales,
            ponderacionFinalConocimientos: this._ponderacionFinalConocimientos,
            ponderacionFinalAptitudes: this._ponderacionFinalAptitudes,
            notaFinal: this._notaFinal,
            veredicto: this._veredicto
        };
    }
}
