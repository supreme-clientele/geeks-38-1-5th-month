import { createSlice } from "@reduxjs/toolkit";


const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        contacts: []
    },
    reducers: {
        addContact: (state, action) => {
            state.contacts.push({id: Date.now(), name: action.payload.name, email: action.payload.email})
        },
        editContact: (state, action) => {
            const contact = state.contacts.find(contact => contact.id === action.payload.id);
            if (contact) {
                contact.name = action.payload.name;
                contact.email = action.payload.email;
            }
        },
        deleteContact: (state, action) => {
            state.contacts = state.contacts.filter(contact => contact.id !== action.payload)
        }
    }
})

export const { addContact, editContact, deleteContact } = contactsSlice.actions;

export default contactsSlice.reducer;