// El sistema gestiona el "PROCESO DE SELECCIÓN - ANALISTA DE INNOVACIÓN", incluyendo registro, evaluación
// de Credenciales, Conocimientos y Aptitudes, y la generación del Acta Final (FCO-11) y Resumen Estadístico.
// PRINCIPIO DE ARQUITECTURA:
// Implementación estricta bajo el patrón MVC. Las Vistas solo manejan UI; el Modelo maneja toda la lógica; el Controlador media el flujo.
// --------------------------------------------------------------------------------------------------------------------
// 1. MODELO DE DATOS Y LÓGICA (Cl_mConcurso, Cl_mParticipante)
// --------------------------------------------------------------------------------------------------------------------
// La clase Cl_mParticipante es la fuente única de verdad para los datos y resultados de evaluación.
// ATRIBUTOS DE ENTRADA (Puntajes Crudos - Usando prefijo FCO_ para consistencia con formularios):
// - Credenciales (Detalle FCO-5): Almacenar puntajes detallados como arreglos de criterios (ICriterioPuntaje[]) para Postgrado (# FCO_5_DetallePostgrado), Pregrado, Producción Científica, y Méritos/Experiencia.
// - Conocimientos (FCO-8): Almacenar las notas de Examen Escrito (# FCO_8_Escrito) y Oral/Práctica (# FCO_8_1_OralPractica).
// - Aptitudes (FCO-10): Almacenar las matrices de puntajes por jurado (# FCO_10_PuntajesJuradoA, B, C).
// ATRIBUTOS DE RESULTADO (Almacenamiento):
// - Guardar la Nota Base 0-20 de cada evaluación (# notaCredenciales, # notaConocimientos, # notaAptitudes).
// - Guardar las ponderaciones finales (10%, 60%, 30%) como atributos separados (# ponderacionFinalCredenciales, etc.).
// - Guardar el resultado consolidado final (# notaFinal, # veredicto).
// MÉTODOS DE CÁLCULO:
// - Todos los métodos de cálculo deben implementarse en Cl_mParticipante (ej: calcularNotaCredenciales(), PonderacionFinalConocimientos(), calcularNotaFinal(), obtenerVeredicto()).
// - La lógica de Cl_mConcurso debe incluir obtenerParticipantePorId() y calcularResultadosFinales() para el reporte.
import Cl_controlador from "../Cl_controlador.js";
import Cl_mConcurso from "../Cl_mConcurso.js";
// Importación de todas las Vistas (Las 6 interfaces de usuario)
import Cl_vActaFinal from "./Cl_vActaFinal.js";
import Cl_vGestionarParticipantes from ".Cl_vGestionarParticipantes.js";
import Cl_vEvaluacionCredenciales from ".Cl_vEvaluacionCredenciales.js";
import Cl_vEvaluacionConocimientos from "../Cl_vEvaluacionConocimientos.js";
import Cl_vEvaluacionAptitudes from "../Cl_vEvaluacionAptitudes.js";
import Cl_vDetalleEvaluaciones from "../Cl_vDetalleEvaluaciones.js";
/**
 * Clase principal que inicializa e interconecta todas las capas del sistema MVC.
 */
export default class Cl_Index {
    constructor() {
        // 1. Inicialización del Modelo
        const modelo = new Cl_mConcurso();
        // 2. Inicialización de las 6 Vistas
        const vistaActaFinal = new Cl_vActaFinal();
        const vistaGestionarParticipantes = new Cl_vGestionarParticipantes();
        const vistaEvaluacionCredenciales = new Cl_vEvaluacionCredenciales();
        const vistaEvaluacionConocimientos = new Cl_vEvaluacionConocimientos();
        const vistaEvaluacionAptitudes = new Cl_vEvaluacionAptitudes();
        const vistaDetalleEvaluaciones = new Cl_vDetalleEvaluaciones();
        // Asignación de propiedades públicas (siguiendo el patrón original)
        this.modelo = modelo;
        this.vistaActaFinal = vistaActaFinal;
        // 3. Inicialización del Controlador (El Ensamblaje Central)
        // Se pasan las 7 dependencias (1 Modelo + 6 Vistas).
        const controlador = new Cl_controlador(modelo, vistaActaFinal, vistaGestionarParticipantes, vistaEvaluacionCredenciales, vistaEvaluacionConocimientos, vistaEvaluacionAptitudes, vistaDetalleEvaluaciones);
        // 4. Conexión Inversa (Vistas -> Controlador)
        // Cada Vista debe poder notificar eventos al Controlador.
        vistaActaFinal.controlador = controlador;
        vistaGestionarParticipantes.controlador = controlador;
        vistaEvaluacionCredenciales.controlador = controlador;
        vistaEvaluacionConocimientos.controlador = controlador;
        vistaEvaluacionAptitudes.controlador = controlador;
        vistaDetalleEvaluaciones.controlador = controlador;
        // 5. Inicio de la Aplicación
        // El Controlador dirige la aplicación a la vista principal.
        controlador.navegarActaFinal();
    }
}
