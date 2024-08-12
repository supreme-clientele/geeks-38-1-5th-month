import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./pages/mainPage/MainPage";
import UsersPage from "./pages/usersPage/UsersPage";
import AboutPage from "./pages/aboutPage/AboutPage";
import ContactsPage from "./pages/contactsPage/ContactsPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<MainPage />} />
                <Route path='/users' element={<UsersPage />} />
                <Route path='/about' element={<AboutPage />} />
                <Route path='/contacts' element={<ContactsPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
