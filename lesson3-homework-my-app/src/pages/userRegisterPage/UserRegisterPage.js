import React, { useState } from 'react';
import { Container, Form, Row, Col, Button, Alert } from 'react-bootstrap';
import { useDispatch } from "react-redux";
import { addUsersAction } from "../../redux/actions";

const UserRegisterPage = () => {

    const dispatch = useDispatch();

    const [user, setUser] = useState({
        name: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [error, setError] = useState('');

    const formValue = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        });
    };

    const addUser = (event) => {
        event.preventDefault();

        // Проверка на пустое поле
        if (!user.name || !user.username || !user.email || !user.password || !user.confirmPassword) {
            setError('Все поля должны быть заполнены!');
            return;
        }

        // Проверка совпадения паролей
        if (user.password !== user.confirmPassword) {
            setError('Пароли не совпадают!');
            return;
        }

        setError(''); // Очистить сообщение об ошибке, если пароли совпадают
        dispatch(addUsersAction(user));
    };

    return (
        <Container>
            <Form onSubmit={addUser}>
                <Row>
                    <Col lg={4}>
                        <Form.Group className="mb-3" controlId="name">
                            <Form.Control
                                type="text"
                                placeholder="Name"
                                name="name"
                                onChange={formValue}
                            />
                        </Form.Group>
                    </Col>
                    <Col lg={4}>
                        <Form.Group className="mb-3" controlId="username">
                            <Form.Control
                                type="text"
                                placeholder="Username"
                                name="username"
                                onChange={formValue}
                            />
                        </Form.Group>
                    </Col>
                    <Col lg={4}>
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Control
                                type="text"
                                placeholder="Email"
                                name="email"
                                onChange={formValue}
                            />
                        </Form.Group>
                    </Col>
                    <Col lg={4}>
                        <Form.Group className="mb-3" controlId="password">
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                name="password"
                                onChange={formValue}
                            />
                        </Form.Group>
                    </Col>
                    <Col lg={4}>
                        <Form.Group className="mb-3" controlId="confirmPassword">
                            <Form.Control
                                type="password"
                                placeholder="Confirm Password"
                                name="confirmPassword"
                                onChange={formValue}
                            />
                        </Form.Group>
                    </Col>
                    <Col lg={4}>
                        <Button type="submit" variant="success" className="w-100">
                            Register User
                        </Button>
                    </Col>
                </Row>
                {error && <Alert variant="danger">{error}</Alert>}
            </Form>
        </Container>
    );
}

export default UserRegisterPage;
