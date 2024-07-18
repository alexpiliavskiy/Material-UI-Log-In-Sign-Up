import React from 'react';
import {Box, Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography} from "@mui/material";
import image from "../images/01.jpg";
import {Layers, PlayCircleFilled} from "@mui/icons-material";

const cards = [1,2,3,4,5,6];
const GridSection = () => {
    return (
        <Box>
            <Container maxWidth="md">
                <Typography variant="h3" align="center" color="#121212" gutterBottom>Lorem ipsum dolor sit amet.</Typography>
                <Typography variant="h5" align="center" color="inherit" paragraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, eius, esse ex exercitationem fugit laboriosam minima officia pariatur provident quos rerum sint ut voluptate? Atque libero officia pariatur tempora voluptatem?
                </Typography>
                <Box>
                    <Grid container spacing={2} justifyContent="center" >
                        <Grid item>
                            <Button variant="contained" sx={{ transition: 'all 0.3s ease-in-out',
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                                backgroundColor: '#121212',
                                '&:hover': {
                                    backgroundColor: '#262726'
                                } }}>Start now</Button>
                        </Grid>
                        <Grid item>
                            <Button color="inherit" variant="outlined"  sx={{
                                transition: 'all 0.3s ease-in-out',
                                '&:hover': {
                                    backgroundColor: '#191a19',
                                    color: "#fff"
                                },
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
                            }}>Learn more</Button>
                        </Grid>
                    </Grid>
                </Box>
                <Container maxWidth="md">
                    <Grid container spacing={4} sx={{ mt: 5, mb: 10 }}>
                        {cards.map((card)=>(
                            <Grid key={card} item xs={12} sm={6} md={4}>
                                <Card>
                                    <CardMedia image={image} title="Image title" sx={{ pt: "56.25%" }}/>
                                    <CardContent>
                                        <Typography variant="h5" gutterBottom>Blog post</Typography>
                                        <Typography>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur eius facilis id laudantium nisi pariatur placeat quia repellat tenetur voluptatibus?</Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="inherit">View</Button>
                                        <Button size="small" color="inherit">Edit</Button>
                                        <Layers />
                                        <PlayCircleFilled />
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Container>
        </Box>
    );
};

export default GridSection;