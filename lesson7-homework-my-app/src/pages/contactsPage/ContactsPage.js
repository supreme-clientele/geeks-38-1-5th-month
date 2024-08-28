import { Container, TextField, Button, List, ListItem, ListItemText, IconButton, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact, deleteContact, editContact } from "../../store/ContactsSlice";
import BrushIcon from '@mui/icons-material/Brush';
import DeleteForever from "@mui/icons-material/DeleteForever";

const ContactsPage = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [editId, setEditId] = useState(null);
    const [editName, setEditName] = useState('');
    const [editEmail, setEditEmail] = useState('');
    const [open, setOpen] = useState(false);
    const [filterMethod, setFilterMethod] = useState('id');

    const dispatch = useDispatch();
    const contacts = useSelector(state => state.contactsReducer.contacts);

    const handleAddContact = () => {
        if (name && email) {
            dispatch(addContact({ name, email }));
            setName('');
            setEmail('');
        }
    };

    const handleEditContact = (contact) => {
        setEditId(contact.id);
        setEditName(contact.name);
        setEditEmail(contact.email);
        setOpen(true);
    };

    const handleSaveEdit = () => {
        dispatch(editContact({ id: editId, name: editName, email: editEmail }));
        setOpen(false);
    };

    const filteredContacts = contacts.slice().sort((a, b) => {
        switch (filterMethod) {
            case 'id':
                return a.id - b.id;
            case 'name':
                return a.name.localeCompare(b.name);
            case 'date':
                return new Date(a.date) - new Date(b.date); // assuming `date` field exists
            default:
                return 0;
        }
    });

    return (
        <Container>
            <h1>Contacts</h1>
            <TextField
                label="Name"
                variant="outlined"
                required
                value={name}
                onChange={e => setName(e.target.value)}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Email"
                variant="outlined"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                fullWidth
                margin="normal"
            />
            <Button variant="outlined" color="primary" onClick={handleAddContact}>
                Add Contact
            </Button>
            <div>
                <Button onClick={() => setFilterMethod('id')}>Sort by ID</Button>
                <Button onClick={() => setFilterMethod('name')}>Sort by Name</Button>
                <Button onClick={() => setFilterMethod('date')}>Sort by Date</Button>
            </div>
            <List>
                {filteredContacts.map(contact => (
                    <ListItem key={contact.id}>
                        <ListItemText primary={contact.name} secondary={contact.email} />
                        <IconButton edge="end" onClick={() => handleEditContact(contact)} >
                            <BrushIcon />
                        </IconButton>
                        <IconButton edge="end" onClick={() => dispatch(deleteContact(contact.id))} >
                            <DeleteForever />
                        </IconButton>
                    </ListItem>
                ))}
            </List>
            <Dialog open={open} onClose={() => setOpen(false)}>
                <DialogTitle>Edit Contact</DialogTitle>
                <DialogContent>
                    <TextField
                        label="Name"
                        variant="outlined"
                        required
                        value={editName}
                        onChange={e => setEditName(e.target.value)}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Email"
                        variant="outlined"
                        required
                        value={editEmail}
                        onChange={e => setEditEmail(e.target.value)}
                        fullWidth
                        margin="normal"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false)} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleSaveEdit} color="primary">
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </Container>
    );
};

export default ContactsPage;
