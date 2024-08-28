import React, { useState } from "react";
import { Button, Checkbox, Container, IconButton, List, ListItem, ListItemText, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, toggleTodo } from "../../store/TodoSlice";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const MainPage = () => {

    const dispatch = useDispatch();
    const todos = useSelector(state => state.todoReducer.todos);
    const [text, setText] = useState('');
    const [filterMethod, setFilterMethod] = useState('id');

    const handleButton = () => {
        if (text) {
            dispatch(addTodo(text));
            setText('');
        } else {
            alert('Заполни поле!');
        }
    };

    const filteredTodos = todos.slice().sort((a, b) => {
        switch (filterMethod) {
            case 'id':
                return a.id - b.id;
            case 'text':
                return a.text.localeCompare(b.text);
            case 'date':
                return new Date(a.date) - new Date(b.date); // assuming `date` field exists
            default:
                return 0;
        }
    });

    return (
        <Container>
            <h1>Todo List</h1>
            <TextField
                label="New Todo"
                variant="outlined"
                value={text}
                required
                onChange={e => setText(e.target.value)}
                fullWidth
                margin="normal"
            />
            <Button variant="outlined" color="primary" onClick={handleButton}>
                Add Todo
            </Button>
            <div>
                <Button onClick={() => setFilterMethod('id')}>Sort by ID</Button>
                <Button onClick={() => setFilterMethod('text')}>Sort by Text</Button>
                <Button onClick={() => setFilterMethod('date')}>Sort by Date</Button>
            </div>
            <List>
                {filteredTodos.map(todo => (
                    <ListItem key={todo.id}>
                        <Checkbox
                            checked={todo.completed}
                            onChange={() => dispatch(toggleTodo(todo))}
                        />
                        <ListItemText primary={todo.text} style={{textDecoration: todo.completed ? 'line-through' : 'none' }} />
                        <IconButton edge='end' onClick={() => dispatch(deleteTodo(todo))} >
                            <DeleteForeverIcon />
                        </IconButton>
                    </ListItem>
                ))}
            </List>
        </Container>
    );
};

export default MainPage;
