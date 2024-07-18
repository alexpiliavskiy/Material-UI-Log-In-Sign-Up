import React, {useState} from 'react';
import {
    AppBar,
    Box,
    Button,
    Container,
    IconButton,
    Toolbar,
    Typography
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LogIn from "./LogIn";
import SignUp from "./SignUp";

const Header = () => {
    const [logInOpen, setLogInOpen] = useState(false);
    const [signUpOpen, setSignUpOpen] = useState(false);

    const handleLogInOpen = () => {
        setLogInOpen(true);
    }
    const handleSignUpOpen = () => {
        setSignUpOpen(true);
    }

    const handleClose = () => {
        setLogInOpen(false);
        setSignUpOpen(false);
    }

    return (
        <AppBar position="fixed" sx={{ backgroundColor: '#3c3c3c' }}>
            <Container fixed>
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 1 }}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>Material-UI Lessons</Typography>
                    <Box sx={{ mr: 3 }}>
                        <Button color="inherit" variant="outlined"  sx={{
                            transition: 'all 0.3s ease-in-out',
                            '&:hover': {
                                backgroundColor: '#191a19'
                            },
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
                        }} onClick={handleLogInOpen}>Log In</Button>
                        <LogIn open={logInOpen} handleClose={handleClose} />
                    </Box>
                    <Button variant="contained"  sx={{
                        transition: 'all 0.3s ease-in-out',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                        backgroundColor: '#121212',
                        '&:hover': {
                            backgroundColor: '#191a19'
                        },
                    }} onClick={handleSignUpOpen}>Sign Up</Button>
                    <SignUp open={signUpOpen} handleClose={handleClose} />
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;