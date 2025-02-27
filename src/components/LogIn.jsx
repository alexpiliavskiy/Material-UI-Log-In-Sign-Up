import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import Snack from "./Snack";

const LogIn = ({ open, handleClose }) => {
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

    const handleSignIn = () => {
        validateEmail(email);
        validatePassword(password);

        if (!emailError && !passwordError) {
            console.log("Log In with:", {
                Email: email,
                Password: password
            });
            setEmail("");
            setPassword("");

            handleClose();
            setSnackbarOpen(true);
            // window.location.reload(); // для перезагрузки оставил временно
        }
    }

    const canSignIn = !emailError && !passwordError && email.trim() !== '' && password.trim() !== '';

    return (
        <>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Log In</DialogTitle>
                    <DialogContent>
                        <Typography variant="h6">Log In to see posts</Typography>
                        <TextField
                            autoFocus
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
                            id="password"
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
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="inherit" variant="outlined">
                            Cancel
                        </Button>
                        <Button onClick={handleSignIn} color="inherit" variant="outlined" disabled={!canSignIn}>
                            Log In
                        </Button>
                    </DialogActions>
            </Dialog>
            <Snack open={snackbarOpen} handleClose={() => setSnackbarOpen(false)} />
        </>
    );
};

export default LogIn;
