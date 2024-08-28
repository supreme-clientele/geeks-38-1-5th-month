import React from 'react';
import { Provider } from 'react-redux';
import RegistrationPage from './components/registrationPage/RegistrationPage';
import store from './redux/store';

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <RegistrationPage />
            </div>
        </Provider>
    );
}

export default App;
