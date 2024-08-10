import { types } from './types'

export function changeTitleAction() {
    return {
        type: types.CHANGE_TITLE
    }
}

export function changeTitleWithParams(text) {
    return {
        type: types.WITH_PARAMS,
        payload: text
    }
}

export function changeInput(inputValue) {
    return {
        type: types.FROM_INPUT,
        payload: inputValue
    }
}