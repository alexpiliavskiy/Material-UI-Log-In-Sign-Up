import React from 'react';
import {Box, Button, Container, Grid, Paper, Typography} from "@mui/material";

const MainContent = () => {
    return (
        <main>
            <Paper sx={{
                backgroundColor: "#f4f4f4",
                position: 'relative',
                color: '#000000',
                mb: 4,

                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center'
            }}>
                <Container fixed>
                    <Grid container>
                        <Grid item md={6}>
                            <Box sx={{
                                position: 'relative',
                                mt: "5rem",
                                padding: 3,
                            }}>
                                <Typography
                                    component="h1"
                                    variant="h3"
                                    color="inherit"
                                    gutterBottom
                                >
                                    Lorem ipsum dolor sit amet.
                                </Typography>
                                <Typography
                                    variant="h5"
                                    color="inherit"
                                    paragraph
                                >
                                    Lorem ipsum dolor sit amet, c
                                    onsectetur adipisicing elit.
                                    Accusantium aspernatur beatae
                                    delectus dolorum excepturi fuga illo,
                                    minus nostrum optio quaerat quasi rem temporibus,
                                    totam voluptatum.
                                </Typography>
                                <Button variant="contained" color="secondary" sx={{ transition: 'all 0.3s ease-in-out',
                                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                                    backgroundColor: '#121212',
                                    '&:hover': {
                                        backgroundColor: '#262726'
                                    } }}>Learn more</Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Paper>
        </main>
    );
};

export default MainContent;