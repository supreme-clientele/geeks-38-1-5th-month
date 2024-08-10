const initialState = {
    contactsTitle: 'dasfsdfsf'
}

export default function contactsReducer(state = initialState, action)  {
    if (action.type === 'WITH_PARAMS') {
        return {...state, contactsTitle: action.payload}
    } else if (action.type === 'FROM_INPUT') {
        return {...state, contactsTitle: action.payload}
    }

    return state
}