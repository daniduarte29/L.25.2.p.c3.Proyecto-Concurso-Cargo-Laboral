/*1. CONTEXTO Y OBJETIVO
Global Innovators Corp. requiere desarrollar un sistema automatizado para gestionar sus procesos de selección internacional del cargo "Analista de Innovación". El sistema debe calcular automáticamente las calificaciones de los candidatos basándose en tres pruebas estandarizadas y emitir veredictos finales según criterios predefinidos.
Objetivo Principal: Automatizar el cálculo de resultados y generación de actas finales del proceso de selección.

2. DESCRIPCIÓN DEL PROCESO ACTUAL
El proceso de selección consta de TRES PRUEBAS OBLIGATORIAS con ponderaciones específicas:
PRUEBA 1: EVALUACIÓN DE CREDENCIALES (10%)
Componentes:
Estudios de Postgrado (0-35 puntos)
Estudios de Pregrado (0-30 puntos)
Producción Científica (0-15 puntos)
Méritos y Experiencia (0-20 puntos)
Fórmula: (P1 + P2 + P3 + P4) ÷ 5 = Nota (0-20)
PRUEBA 2: EVALUACIÓN DE CONOCIMIENTOS (60%)
Componentes:
Examen Escrito (0-20 puntos)
Examen Oral/Práctico (0-20 puntos)
Fórmula: (Escrito + Oral) ÷ 2 = Nota (0-20)
PRUEBA 3: EVALUACIÓN DE APTITUDES PARA EL CARGO (30%)
Método: Matriz con 12 criterios (escala 1-5 puntos)
Fórmula: Suma de 12 criterios ÷ 9 = Nota (0-20)
NOTA DEFINITIVA = (Credenciales × 0.10) + (Conocimientos × 0.60) + (Aptitudes × 0.30)

3. REQUISITOS FUNCIONALES
3.1 Gestión de Candidatos
Registrar múltiples candidatos con documento de identidad
Verificar cumplimiento de requisitos iniciales
Gestionar estado de participación (presente/ausente)

3.2 Sistema de Evaluación
Calcular automáticamente las tres pruebas con fórmulas específicas
Aplicar ponderaciones exactas (10%, 60%, 30%)
Validar rangos de puntuación (0-20 puntos por prueba)

3.3 Algoritmo de Veredictos
Asignar automáticamente uno de los 6 veredictos posibles:
Seleccionado por mayor calificación (mejor nota)
Seleccionado (nota ≥ 16)
No seleccionado (nota < 16)
No seleccionado en Prueba de Conocimiento (nota < 15 en esa prueba)
No cumple requisitos
No se presento
PROCESO DESIERTO: Se declara cuando ningún aspirante alcanza los veredictos 1 o 2.

Nota.

*/

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
    public modelo: Cl_mConcurso;
    public vistaActaFinal: Cl_vActaFinal; 
    
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
        const controlador = new Cl_controlador(
            modelo,
            vistaActaFinal,
            vistaGestionarParticipantes,
            vistaEvaluacionCredenciales,
            vistaEvaluacionConocimientos,
            vistaEvaluacionAptitudes,
            vistaDetalleEvaluaciones
        );

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