export interface iParticipante {
  id: number | null;
  creadoEl: string | null;
  alias: string | null;
  cedula: string;
  nombre: string;
  cumpleRequisitos: boolean;
  presente: boolean;
  FCO_5_DetallePostgrado: iCriterioPuntaje[];
  FCO_5_1DetallePregrado: iCriterioPuntaje[];
  FCO_5_2DetalleProduccion: iCriterioPuntaje[];
  FCO_5_3DetalleMeritos: iCriterioPuntaje[];
  FCO_8_Escrito: number;
  FCO_8_1_Oral: number;
  FCO_10_PuntajesJuradoA: number[];
  FCO_10_PuntajesJuradoB: number[];
  FCO_10_PuntajesJuradoC: number[];
  notaCredenciales: number;
  notaConocimientos: number;
  notaAptitudes: number;
  ponderacionFinalCredenciales: number;
  ponderacionFinalConocimientos: number;
  ponderacionFinalAptitudes: number;
  notaFinal: number;
  veredicto: string;
}

export default class Cl_mParticipante {
  private _id: number | null = null;
  private _creadoEl: string | null = null;
  private _alias: string | null = null;
  private _cedula: string = "";
  private _nombre: string = "";
  private _cumpleRequisitos: boolean = false;
  private _presente: boolean = false;
  private _FCO_5_DetallePostgrado: iCriterioPuntaje[] = [];
  private _FCO_5_1DetallePregrado: iCriterioPuntaje[] = [];
  private _FCO_5_2DetalleProduccion: iCriterioPuntaje[] = [];
  private _FCO_5_3DetalleMeritos: iCriterioPuntaje[] = [];
  private _FCO_8_Escrito: number = 0;
  private _FCO_8_1_Oral: number = 0;
  private _FCO_10_PuntajesJuradoA: number[] = [];
  private _FCO_10_PuntajesJuradoB: number[] = [];
  private _FCO_10_PuntajesJuradoC: number[] = [];
  private _notaCredenciales: number = 0;
  private _notaConocimientos: number = 0;
  private _notaAptitudes: number = 0;
  private _ponderacionFinalCredenciales: number = 0;
  private _ponderacionFinalConocimientos: number = 0;
  private _ponderacionFinalAptitudes: number = 0;
  private _notaFinal: number = 0;
  private _veredicto: string = "";

  constructor({
    id = null,
    creadoEl = null,
    alias = null,
    cedula = "",
    nombre = "",
    cumpleRequisitos = false,
    presente = false,
    FCO_5_DetallePostgrado = [],
    FCO_5_1DetallePregrado = [],
    FCO_5_2DetalleProduccion = [],
    FCO_5_3DetalleMeritos = [],
    FCO_8_Escrito = 0,
    FCO_8_1_Oral = 0,
    FCO_10_PuntajesJuradoA = [],
    FCO_10_PuntajesJuradoB = [],
    FCO_10_PuntajesJuradoC = [],
    notaCredenciales = 0,
    notaConocimientos = 0,
    notaAptitudes = 0,
    ponderacionFinalCredenciales = 0,
    ponderacionFinalConocimientos = 0,
    ponderacionFinalAptitudes = 0,
    notaFinal = 0,
    veredicto = "", }: iParticipante) {
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

    if (this._FCO_10_PuntajesJuradoA.length === 0) {
      this._FCO_10_PuntajesJuradoA.push(0);
      this._FCO_10_PuntajesJuradoB.push(0);
      this._FCO_10_PuntajesJuradoC.push(0);
    } 
  }

 
  set id(id: number | null) {
    this._id = id;
  }
  get id(): number | null {
    return this._id;
  }

  set creadoEl(creadoEl: string | null) {
    this._creadoEl = creadoEl;
  }
  get creadoEl(): string | null {
    return this._creadoEl;
  }

  set alias(alias: string | null) {
    this._alias = alias;
  }
  get alias(): string | null {
    return this._alias;
  }

  set cedula(cedula: string) {
    this._cedula = cedula;
  }
  get cedula(): string {
    return this._cedula;
  }

  set nombre(nombre: string) {
    this._nombre = nombre;
  }
  get nombre(): string {
    return this._nombre;
  }

  set cumpleRequisitos(cumpleRequisitos: boolean) {
    this._cumpleRequisitos = cumpleRequisitos;
  }
  get cumpleRequisitos(): boolean {
    return this._cumpleRequisitos;
  }

  set presente(presente: boolean) {
    this._presente = presente;
  }
  get presente(): boolean {
    return this._presente;
  }

  // Getters y Setters para datos de pruebas
  set FCO_5_DetallePostgrado(FCO_5_DetallePostgrado: iCriterioPuntaje[]) {
    this._FCO_5_DetallePostgrado = FCO_5_DetallePostgrado;
  }
  get FCO_5_DetallePostgrado(): iCriterioPuntaje[] {
    return this._FCO_5_DetallePostgrado;
  }

  set FCO_5_1DetallePregrado(FCO_5_1DetallePregrado: iCriterioPuntaje[]) {
    this._FCO_5_1DetallePregrado = FCO_5_1DetallePregrado;
  }
  get FCO_5_1DetallePregrado(): iCriterioPuntaje[] {
    return this._FCO_5_1DetallePregrado;
  }

  set FCO_5_2DetalleProduccion(FCO_5_2DetalleProduccion: iCriterioPuntaje[]) {
    this._FCO_5_2DetalleProduccion = FCO_5_2DetalleProduccion;
  }
  get FCO_5_2DetalleProduccion(): iCriterioPuntaje[] {
    return this._FCO_5_2DetalleProduccion;
  }

  set FCO_5_3DetalleMeritos(FCO_5_3DetalleMeritos: iCriterioPuntaje[]) {
    this._FCO_5_3DetalleMeritos = FCO_5_3DetalleMeritos;
  }
  get FCO_5_3DetalleMeritos(): iCriterioPuntaje[] {
    return this._FCO_5_3DetalleMeritos;
  }

  set FCO_8_Escrito(FCO_8_Escrito: number) {
    this._FCO_8_Escrito = FCO_8_Escrito;
  }
  get FCO_8_Escrito(): number {
    return this._FCO_8_Escrito;
  }

  set FCO_8_1_Oral(FCO_8_1_Oral: number) {
    this._FCO_8_1_Oral = FCO_8_1_Oral;
  }
  get FCO_8_1_Oral(): number {
    return this._FCO_8_1_Oral;
  }

  set FCO_10_PuntajesJuradoA(FCO_10_PuntajesJuradoA: number[]) {
    this._FCO_10_PuntajesJuradoA = FCO_10_PuntajesJuradoA;
  }
  get FCO_10_PuntajesJuradoA(): number[] {
    return this._FCO_10_PuntajesJuradoA;
  }

  set FCO_10_PuntajesJuradoB(FCO_10_PuntajesJuradoB: number[]) {
    this._FCO_10_PuntajesJuradoB = FCO_10_PuntajesJuradoB;
  }
  get FCO_10_PuntajesJuradoB(): number[] {
    return this._FCO_10_PuntajesJuradoB;
  }

  set FCO_10_PuntajesJuradoC(FCO_10_PuntajesJuradoC: number[]) {
    this._FCO_10_PuntajesJuradoC = FCO_10_PuntajesJuradoC;
  }
  get FCO_10_PuntajesJuradoC(): number[] {
    return this._FCO_10_PuntajesJuradoC;
  }

  // Getters y Setters para resultados
  set notaCredenciales(notaCredenciales: number) {
    this._notaCredenciales = notaCredenciales;
  }
  get notaCredenciales(): number {
    return this._notaCredenciales;
  }

  set notaConocimientos(notaConocimientos: number) {
    this._notaConocimientos = notaConocimientos;
  }
  get notaConocimientos(): number {
    return this._notaConocimientos;
  }

  set notaAptitudes(notaAptitudes: number) {
    this._notaAptitudes = notaAptitudes;
  }
  get notaAptitudes(): number {
    return this._notaAptitudes;
  }

  set ponderacionFinalCredenciales(ponderacionFinalCredenciales: number) {
    this._ponderacionFinalCredenciales = ponderacionFinalCredenciales;
  }
  get ponderacionFinalCredenciales(): number {
    return this._ponderacionFinalCredenciales;
  }

  set ponderacionFinalConocimientos(ponderacionFinalConocimientos: number) {
    this._ponderacionFinalConocimientos = ponderacionFinalConocimientos;
  }
  get ponderacionFinalConocimientos(): number {
    return this._ponderacionFinalConocimientos;
  }

  set ponderacionFinalAptitudes(ponderacionFinalAptitudes: number) {
    this._ponderacionFinalAptitudes = ponderacionFinalAptitudes;
  }
  get ponderacionFinalAptitudes(): number {
    return this._ponderacionFinalAptitudes;
  }

  set notaFinal(notaFinal: number) {
    this._notaFinal = notaFinal;
  }
  get notaFinal(): number {
    return this._notaFinal;
  }

  set veredicto(veredicto: string) {
    this._veredicto = veredicto;
  }
  get veredicto(): string {
    return this._veredicto;
  }

  // Métodos de validación
  get cedulaOk(): boolean {
    return this.cedula.length > 0;
  }

  get nombreOk(): boolean {
    return this.nombre.length > 0;
  }

  get participanteOk(): string | true {
    if (!this.cedulaOk) return "cedula";
    if (!this.nombreOk) return "nombre";
    return true;
  }

  // Métodos de cálculo
  calcularNotaCredenciales(): number {
    const sumaPostgrado = this.sumarPuntajes(this.FCO_5_DetallePostgrado);
    const sumaPregrado = this.sumarPuntajes(this.FCO_5_1DetallePregrado);
    const sumaProduccion = this.sumarPuntajes(this.FCO_5_2DetalleProduccion);
    const sumaMeritos = this.sumarPuntajes(this.FCO_5_3DetalleMeritos);
    
    this.notaCredenciales = (sumaPostgrado + sumaPregrado + sumaProduccion + sumaMeritos) / 5;
    return this.notaCredenciales;
  }

  calcularNotaConocimientos(): number {
    this.notaConocimientos = (this.FCO_8_Escrito + this.FCO_8_1_Oral) / 2;
    return this.notaConocimientos;
  }

  calcularNotaAptitudes(): number {
    const sumaJuradoA = this.sumarArray(this.FCO_10_PuntajesJuradoA);
    const sumaJuradoB = this.sumarArray(this.FCO_10_PuntajesJuradoB);
    const sumaJuradoC = this.sumarArray(this.FCO_10_PuntajesJuradoC);
    
    this.notaAptitudes = (sumaJuradoA + sumaJuradoB + sumaJuradoC) / 9;
    return this.notaAptitudes;
  }

  PonderacionFinalCredenciales(): number {
    this.ponderacionFinalCredenciales = this.notaCredenciales * 0.10;
    return this.ponderacionFinalCredenciales;
  }

  PonderacionFinalConocimientos(): number {
    this.ponderacionFinalConocimientos = this.notaConocimientos * 0.60;
    return this.ponderacionFinalConocimientos;
  }

  PonderacionFinalAptitudes(): number {
    this.ponderacionFinalAptitudes = this.notaAptitudes * 0.30;
    return this.ponderacionFinalAptitudes;
  }

  calcularNotaFinal(): number {
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

  obtenerVeredicto(posicion: number): string {
    if (!this.presente) {
      this.veredicto = "No se presentó";
    } else if (!this.cumpleRequisitos) {
      this.veredicto = "No cumple requisitos";
    } else if (this.notaConocimientos < 15) {
      this.veredicto = "No seleccionado en Prueba de Conocimiento";
    } else if (this.notaFinal >= 16) {
      this.veredicto = (posicion === 1) 
        ? "Seleccionado por mayor calificación" 
        : "Seleccionado";
    } else {
      this.veredicto = "No seleccionado";
    }
    return this.veredicto;
  }

  // Métodos auxiliares privados
  private sumarPuntajes(criterios: iCriterioPuntaje[]): number {
    return criterios.reduce((suma, criterio) => suma + criterio.puntaje, 0);
  }

  private sumarArray(numeros: number[]): number {
    return numeros.reduce((suma, numero) => suma + numero, 0);
  }

  toJSON(): iParticipante {
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