import { NUM_MIN_ALTERADO, NUM_MAX_ALTERADO } from './actionTypes';

//Action Creactor
export function alterarNumeroMininmo(novoNumero) {
    return { 
        type: NUM_MIN_ALTERADO,
        payload: novoNumero
    }
}

//Action Creactor
export function alterarNumeroMaximo(novoNumero) {
    return { 
        type: NUM_MAX_ALTERADO,
        payload: novoNumero
    }
}