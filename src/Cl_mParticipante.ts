export interface iParticipante {
    id: string;
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
    id: string = "";
    nombre: string = "";
    cumpleRequisitos: boolean = false;
    presente: boolean = false;
    FCO_5_DetallePostgrado: iCriterioPuntaje[] = [];
    FCO_5_1DetallePregrado: iCriterioPuntaje[] = [];
    FCO_5_2DetalleProduccion: iCriterioPuntaje[] = [];
    FCO_5_3DetalleMeritos: iCriterioPuntaje[] = [];
    FCO_8_Escrito: number = 0;
    FCO_8_1_Oral: number = 0;
    FCO_10_PuntajesJuradoA: number[] = [];
    FCO_10_PuntajesJuradoB: number[] = [];
    FCO_10_PuntajesJuradoC: number[] = [];
    notaCredenciales: number = 0;
    notaConocimientos: number = 0;
    notaAptitudes: number = 0;
    ponderacionFinalCredenciales: number = 0;
    ponderacionFinalConocimientos: number = 0;
    ponderacionFinalAptitudes: number = 0;
    notaFinal: number = 0;
    veredicto: string = "";

    constructor({
        id = "", 
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
        FCO_10_PuntajesJuradoC = [],}:
        {
            id: string, 
            nombre: string,
            cumpleRequisitos: boolean,
            presente: boolean,
            FCO_5_DetallePostgrado: iCriterioPuntaje[],
            FCO_5_1DetallePregrado: iCriterioPuntaje[], 
            FCO_5_2DetalleProduccion: iCriterioPuntaje[],
            FCO_5_3DetalleMeritos: iCriterioPuntaje[],
            FCO_8_Escrito: number,
            FCO_8_1_Oral: number,
            FCO_10_PuntajesJuradoA: number[],
            FCO_10_PuntajesJuradoB: number[],
            FCO_10_PuntajesJuradoC: number[],
        }) {

        set id (id: string) {
        this.id = id;
        get id (): string {
        return this.id;

        set nombre (nombre: string) {
        this.nombre = nombre;   
        get nombre (): string {
        return this.nombre;

        set cumpleRequisitos (cumpleRequisitos: boolean) {
        this.cumpleRequisitos = cumpleRequisitos;
        }
        get cumpleRequisitos (): boolean {
        return this.cumpleRequisitos;
        }   

        set presente (presente: boolean) {
        this.presente = presente;
        }   
        get presente (): boolean {
        return this.presente;
        }

        set FCO_5_DetallePostgrado (FCO_5_DetallePostgrado: iCriterioPuntaje[]) {
        this.FCO_5_DetallePostgrado = FCO_5_DetallePostgrado;
        }   
        get FCO_5_DetallePostgrado (): iCriterioPuntaje[] {
        return this.FCO_5_DetallePostgrado;
        }

        set FCO_5_1DetallePregrado (FCO_5_1DetallePregrado: iCriterioPuntaje[]) {
        this.FCO_5_1DetallePregrado = FCO_5_1DetallePregrado;
        }   
        get FCO_5_1DetallePregrado (): iCriterioPuntaje[] {
        return this.FCO_5_1DetallePregrado;
        }
        set FCO_5_2DetalleProduccion (FCO_5_2DetalleProduccion: iCriterioPuntaje[]) {
        this.FCO_5_2DetalleProduccion = FCO_5_2DetalleProduccion;
        }
        get FCO_5_2DetalleProduccion (): iCriterioPuntaje[] {
        return this.FCO_5_2DetalleProduccion;
        }

        set FCO_5_3DetalleMeritos (FCO_5_3DetalleMeritos: iCriterioPuntaje[]) {
        this.FCO_5_3DetalleMeritos = FCO_5_3DetalleMeritos;
        }   
        get FCO_5_3DetalleMeritos (): iCriterioPuntaje[] {
        return this.FCO_5_3DetalleMeritos;
        }

        set FCO_8_Escrito (FCO_8_Escrito: number) {
        this.FCO_8_Escrito = FCO_8_Escrito;
        }
        get FCO_8_Escrito (): number {
        return this.FCO_8_Escrito;
        }   

        set FCO_8_1_Oral (FCO_8_1_Oral: number) {
        this.FCO_8_1_Oral = FCO_8_1_Oral;
        }   
        get FCO_8_1_Oral (): number {
        return this.FCO_8_1_Oral;
        }   


        set FCO_10_PuntajesJuradoA (FCO_10_PuntajesJuradoA: number[]) {
        this.FCO_10_PuntajesJuradoA = FCO_10_PuntajesJuradoA;
        }   
        get FCO_10_PuntajesJuradoA (): number[] {
        return this.FCO_10_PuntajesJuradoA;

        }
        set FCO_10_PuntajesJuradoB (FCO_10_PuntajesJuradoB: number[]) {
        this.FCO_10_PuntajesJuradoB = FCO_10_PuntajesJuradoB;
        }
        get FCO_10_PuntajesJuradoB (): number[] {
        return this.FCO_10_PuntajesJuradoB;
        }

        set FCO_10_PuntajesJuradoC (FCO_10_PuntajesJuradoC: number[]) {
        this.FCO_10_PuntajesJuradoC = FCO_10_PuntajesJuradoC;
        }
        get FCO_10_PuntajesJuradoC (): number[] {
        return this.FCO_10_PuntajesJuradoC;
        }

        set notaCredenciales (notaCredenciales: number) {
        this.notaCredenciales = notaCredenciales;
        }
        get notaCredenciales (): number {
        return this.notaCredenciales;   
        }

        set notaConocimientos (notaConocimientos: number) {
        this.notaConocimientos = notaConocimientos;
        }   

        get notaConocimientos (): number {
        return this.notaConocimientos;
        }
        set notaAptitudes (notaAptitudes: number) {
        this.notaAptitudes = notaAptitudes;
        }       
        get notaAptitudes (): number {
        return this.notaAptitudes;
        }

        set ponderacionFinalCredenciales (ponderacionFinalCredenciales: number) {
        this.ponderacionFinalCredenciales = ponderacionFinalCredenciales;
        }   
        get ponderacionFinalCredenciales (): number {
        return this.ponderacionFinalCredenciales;
        }   

        set ponderacionFinalConocimientos (ponderacionFinalConocimientos: number) {
        this.ponderacionFinalConocimientos = ponderacionFinalConocimientos;
        }
        get ponderacionFinalConocimientos (): number {
        return this.ponderacionFinalConocimientos;
        }   

        set ponderacionFinalAptitudes (ponderacionFinalAptitudes: number) {
        this.ponderacionFinalAptitudes = ponderacionFinalAptitudes;
        }   
        get ponderacionFinalAptitudes (): number {
        return this.ponderacionFinalAptitudes;
        }   

        set notaFinal (notaFinal: number) {
        this.notaFinal = notaFinal;
        }
        get notaFinal (): number {
        return this.notaFinal;
        }   

        set veredicto (veredicto: string) {
        this.veredicto = veredicto;
        }   
        get veredicto (): string {
        return this.veredicto;  
        }





    }}
