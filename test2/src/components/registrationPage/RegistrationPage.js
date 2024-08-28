import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../redux/userSlice';
import classes from './RegistrationPage.module.css';

const RegistrationPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const dispatch = useDispatch();
    const isRegistered = useSelector((state) => state.user.isRegistered);
    const registeredUsername = useSelector((state) => state.user.username);

    const handleRegistration = () => {
        if (!username || !password || !confirmPassword) {
            setError('Все поля должны быть заполнены.');
            return;
        }

        if (password !== confirmPassword) {
            setError('Пароли должны совпадать.');
            return;
        }

        if (isRegistered && username === registeredUsername) {
            setError('Такой пользователь уже зарегистрирован.');
            return;
        }

        dispatch(registerUser({ username }));
        setError('');
        alert('Регистрация прошла успешно!');
    };

    return (
        <div className={classes.container}>
            <div className={classes.form}>
                <h2>Регистрация</h2>
                <input
                    type="text"
                    placeholder="Имя пользователя"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Пароль"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Подтвердите пароль"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <button onClick={handleRegistration}>Зарегистрироваться</button>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </div>
        </div>
    );
};

export default RegistrationPage;
