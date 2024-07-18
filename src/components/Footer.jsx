import React, {useState} from 'react';
import {BottomNavigation, BottomNavigationAction, Typography} from "@mui/material";
import {Favorite, Folder, LocationOn, Restore} from "@mui/icons-material";

const Footer = () => {
    const [value, setValue]=useState("recents");

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    return (
        <footer>
            <Typography variant="h5" align="center" gutterBottom sx={{ mb: 2 }}>About Us</Typography>
            <BottomNavigation value={value} onChange={handleChange} sx={{ backgroundColor: "#d1d1d1", flexGrow: 1, mb: 0, height: "6rem" }}>
                <BottomNavigationAction
                    label="Recents"
                    value="recents"
                    icon={<Restore />}
                />
                <BottomNavigationAction
                    label="Favorites"
                    value="favorites"
                    icon={<Favorite />}
                />
                <BottomNavigationAction
                    label="Nearby"
                    value="nearby"
                    icon={<LocationOn />}
                />
                <BottomNavigationAction
                    label="Folder"
                    value="folder"
                    icon={<Folder />}
                />
            </BottomNavigation>
        </footer>
    );
};

export default Footer;