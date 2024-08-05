const initialState = {
    title: 'GeekTech',
    contactsTitle: ''
}

export default function reducer(state = initialState, action)  {
    if(action.type === 'CHANGE_TITLE') {
        return {title: 'GEEKS!'}
    } else if (action.type === 'WITH_PARAMS') {
        return {contactsTitle: action.payload}
    } else if (action.type === 'FROM_INPUT') {
        return {contactsTitle: action.payload}
    }

    return state
}