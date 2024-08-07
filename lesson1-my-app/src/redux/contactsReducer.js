const initialState = {
    contactsTitle: 'dasfsdfsf'
}

export default function contactsReducer(state = initialState, action)  {
    if (action.type === 'WITH_PARAMS') {
        return {...state, title: 'GEEKS!'}
    } else if (action.type === 'FROM_INPUT') {
        return {...state, contactsTitle: action.payload}
    }

    return state
}