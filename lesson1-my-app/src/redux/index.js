import { combineReducers } from 'redux';
import mainReducer from "./mainReducer";
import contactsReducer from "./contactsReducer";

export const rootReducer = combineReducers({
    mainReducer,
    contactsReducer,
})