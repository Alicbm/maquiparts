import turbocompresor_volvo_d13 from '../images/turbocompresor_volvo_d13.jpg'
import kit_empaques_motor from '../images/kit_empaques_motor.webp'
import piston_anillos_caterpilar from '../images/piston_anillos_caterpilar.webp'
import kit_embrague_volvo from '../images/kit_embrague_volvo.webp'
import caja_transferencia from '../images/caja_transferencia.webp'
import regulador_automático_ABS from '../images/regulador_automático_ABS.webp'
import tambor_freno_trasero from '../images/tambor_freno_trasero.webp'
import bolsa_aire_suspencion from '../images/bolsa_aire_suspencion.png'
import muñon_direccion from '../images/muñon_direccion.webp'
import rodamiento_rueda_delantera from '../images/rodamiento_rueda_delantera.jpg'
import rodamiento_conico_serie_32000 from '../images/rodamiento_conico_serie_32000.webp'
import bomba_hidraulica_excavadora from '../images/bomba_hidraulica_excavadora.webp'
import alternador_24v_cummins from '../images/alternador_24v_cummins.png'
import motor_arranque_caterpillar from '../images/motor_arranque_caterpillar.jpg'
import kit_filtros_caterpillar from '../images/kit_filtros_caterpillar.png'
import filtro_separador_combustible from '../images/filtro_separador_combustible.webp'
import arbol_levas from '../images/arbol_levas.png'
import cilindro_hidraulico_doble_efecto from '../images/cilindro_hidraulico_doble_efecto.webp'
import amortiguador_cabina from '../images/amortiguador_cabina.png'
import cardan_propulsor_universal from '../images/cardan_propulsor_universal.webp'

export const WA_PHONE = '573172823206'

export function buildWaUrl(product) {
  const msg =
    `Hola, me interesa cotizar el siguiente repuesto:\n\n` +
    `*Producto:* ${product.name}\n` +
    `*Referencia:* ${product.ref}\n` +
    `*Marca:* ${product.brand}\n` +
    `*Categoría:* ${product.category}\n\n` +
    `¿Podrían indicarme precio y disponibilidad? Gracias.`
  return `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(msg)}`
}

export const CATEGORIES = ['Motor', 'Transmisión', 'Frenos', 'Suspensión', 'Rodamientos', 'Hidráulica', 'Eléctrico', 'Filtros']

export const BRANDS_LIST = ['Garrett', 'Cummins', 'CAT', 'ZF', 'Mack', 'Bendix', 'Wabco', 'Firestone', 'Volvo', 'SKF', 'Timken', 'Parker', 'Bosch', 'Gates']

export const PRODUCTS = [
  {
    id: 1, category: 'Motor',
    name: 'Turbocompresor Volvo D13',
    brand: 'Garrett', ref: 'GAR-854800-5003S',
    img: turbocompresor_volvo_d13,
    tag: 'Alta demanda', stock: true,
  },
  {
    id: 2, category: 'Motor',
    name: 'Kit de Empaques Motor Cummins ISX',
    brand: 'Cummins', ref: 'CUM-4089966',
    img: kit_empaques_motor,
    tag: null, stock: true,
  },
  {
    id: 3, category: 'Motor',
    name: 'Pistón y Anillos Caterpillar C15',
    brand: 'CAT', ref: 'CAT-2244688',
    img: piston_anillos_caterpilar,
    tag: 'Original', stock: true,
  },
  {
    id: 4, category: 'Transmisión',
    name: 'Kit de Embrague Volvo FH',
    brand: 'ZF', ref: 'ZF-1878000427',
    img: kit_embrague_volvo,
    tag: 'Original', stock: true,
  },
  {
    id: 5, category: 'Transmisión',
    name: 'Caja de Transferencia 4WD',
    brand: 'ZF', ref: 'ZF-6HP26X',
    img: caja_transferencia,
    tag: null, stock: false,
  },
  {
    id: 6, category: 'Frenos',
    name: 'Tambor de Freno Trasero Mack',
    brand: 'Bendix', ref: 'BDX-6089966',
    img: tambor_freno_trasero,
    tag: 'Stock disponible', stock: true,
  },
  {
    id: 7, category: 'Frenos',
    name: 'Regulador Automático ABS',
    brand: 'Wabco', ref: 'WBC-4209000262',
    img: regulador_automático_ABS,
    tag: null, stock: true,
  },
  {
    id: 8, category: 'Suspensión',
    name: 'Bolsa de Aire Suspensión Trasera',
    brand: 'Firestone', ref: 'FIR-W01358-6928',
    img: bolsa_aire_suspencion,
    tag: 'Alta demanda', stock: true,
  },
  {
    id: 9, category: 'Suspensión',
    name: 'Muñón de Dirección Volvo FH16',
    brand: 'Volvo', ref: 'VOL-20517109',
    img: muñon_direccion,
    tag: null, stock: false,
  },
  {
    id: 10, category: 'Rodamientos',
    name: 'Rodamiento Rueda Delantera',
    brand: 'SKF', ref: 'SKF-VKBA3921',
    img: rodamiento_rueda_delantera,
    tag: 'Original', stock: true,
  },
  {
    id: 11, category: 'Rodamientos',
    name: 'Rodamiento Cónico Serie 32000',
    brand: 'Timken', ref: 'TMK-32215',
    img: rodamiento_conico_serie_32000,
    tag: null, stock: true,
  },
  {
    id: 12, category: 'Hidráulica',
    name: 'Bomba Hidráulica Excavadora',
    brand: 'Parker', ref: 'PK-PVH131R01AF30A',
    img: bomba_hidraulica_excavadora,
    tag: null, stock: true,
  },
  {
    id: 13, category: 'Eléctrico',
    name: 'Alternador 24V Cummins',
    brand: 'Bosch', ref: 'BSH-0120685152',
    img: alternador_24v_cummins,
    tag: 'Stock disponible', stock: true,
  },
  {
    id: 14, category: 'Eléctrico',
    name: 'Motor de Arranque Caterpillar',
    brand: 'Bosch', ref: 'BSH-0001416006',
    img: motor_arranque_caterpillar,
    tag: null, stock: true,
  },
  {
    id: 15, category: 'Filtros',
    name: 'Kit de Filtros Caterpillar C15',
    brand: 'CAT', ref: 'CAT-1R-0750',
    img: kit_filtros_caterpillar,
    tag: 'Alta demanda', stock: true,
  },
  {
    id: 16, category: 'Filtros',
    name: 'Filtro Separador de Combustible',
    brand: 'Parker', ref: 'PK-RFB25120MB',
    img: filtro_separador_combustible,
    tag: null, stock: true,
  },
  {
    id: 17, category: 'Motor',
    name: 'Árbol de Levas Cummins N14',
    brand: 'Cummins', ref: 'CUM-3803452',
    img: arbol_levas,
    tag: null, stock: false,
  },
  {
    id: 18, category: 'Hidráulica',
    name: 'Cilindro Hidráulico Doble Efecto',
    brand: 'Parker', ref: 'PK-2H-series',
    img: cilindro_hidraulico_doble_efecto,
    tag: null, stock: true,
  },
  {
    id: 19, category: 'Suspensión',
    name: 'Amortiguador Cabina Mack CH',
    brand: 'Gates', ref: 'GAT-KS3068',
    img: amortiguador_cabina,
    tag: null, stock: true,
  },
  {
    id: 20, category: 'Transmisión',
    name: 'Cardán Propulsor Universal',
    brand: 'Volvo', ref: 'VOL-20701849',
    img: cardan_propulsor_universal,
    tag: 'Original', stock: true,
  },
]
