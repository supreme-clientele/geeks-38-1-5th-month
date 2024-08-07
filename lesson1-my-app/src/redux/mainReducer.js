const initialState = {
    title: 'GeekTech',
    contactsTitle: 'sdfsdfdfsfdsf'
}

export default function mainReducer(state = initialState, action)  {
    if(action.type === 'CHANGE_TITLE') {
        return {...state, title: 'GEEKS!'}
    } else if (action.type === 'WITH_PARAMS') {
        return {...state, contactsTitle: action.payload}
    } else if (action.type === 'FROM_INPUT') {
        return {...state, contactsTitle: action.payload}
    }

    return state
}