import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from "./pages/mainPage/MainPage";
import UserRegisterPage from "./pages/userRegisterPage/UserRegisterPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<MainPage />} />
                <Route path='/users' element={<UserRegisterPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
