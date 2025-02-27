import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Typography } from "@mui/material";
import Snack from "./Snack"; // Предполагается, что Snack.js находится в текущем каталоге

const SignUp = ({ open, handleClose }) => {
    const [firstName, setFirstName] = useState("");
    const [secondName, setSecondName] = useState("");
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [snackbarOpen, setSnackbarOpen] = useState(false);

    const validateEmail = (value) => {
        if (value && !value.trim().includes("@")) {
            setEmailError(true);
        } else {
            setEmailError(false);
        }
    }

    const validatePassword = (value) => {
        if (value.trim() && value.trim().length < 6) {
            setPasswordError(true);
        } else {
            setPasswordError(false);
        }
    }

    const handleSignUp = () => {
        validateEmail(email);
        validatePassword(password);

        if (!emailError && !passwordError) {
            console.log("Sign up with:", {
                firstName: firstName,
                secondName: secondName,
                Email: email,
                Password: password
            });
            setFirstName("");
            setSecondName("");
            setEmail("");
            setPassword("");

            handleClose();
            setSnackbarOpen(true);
        }
    }

    const canSignUp = !emailError && !passwordError && email.trim() !== '' && password.trim() !== '';

    return (
        <>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Sign Up</DialogTitle>
                <DialogContent>
                    <Typography variant="h6">Sign Up to see posts</Typography>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="First name"
                        type="text"
                        fullWidth
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <TextField
                        margin="dense"
                        id="surname"
                        label="Second name"
                        type="text"
                        fullWidth
                        value={secondName}
                        onChange={(e) => setSecondName(e.target.value)}
                    />
                    <TextField
                        margin="dense"
                        id="email"
                        label="Email"
                        type="email"
                        fullWidth
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                            validateEmail(e.target.value);
                        }}
                        error={emailError}
                        helperText={emailError ? "Please enter a valid email address" : " "}
                    />
                    <TextField
                        margin="dense"
                        id="pass"
                        label="Password"
                        type="password"
                        fullWidth
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                            validatePassword(e.target.value);
                        }}
                        error={passwordError}
                        helperText={passwordError ? "Password must be at least 6 characters" : " "}
                    />
                    <Typography color="#767676" sx={{  fontSize: "14px", lineHeight: "24px", textAlign: "left" }}>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="inherit" variant="outlined">
                        Cancel
                    </Button>
                    <Button onClick={handleSignUp} color="inherit" variant="outlined" disabled={!canSignUp}>
                        Sign Up
                    </Button>
                </DialogActions>
            </Dialog>
            <Snack open={snackbarOpen} handleClose={() => setSnackbarOpen(false)} />
        </>
    );
};

export default SignUp;
