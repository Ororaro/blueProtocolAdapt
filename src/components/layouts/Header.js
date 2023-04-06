import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import './Header.css'
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Switch from "react-switch";
import { useContext, useState } from "react"
import { ThemeContext } from '../../App';
import  dark from '../../images/blue-protocol-logo-1.png';
import  light from '../../images/LOGO.png';

const pages = ['GAME', 'NEWS', 'COMMUNITY'];
const drawerWidth = 240;

const ResponsiveAppBar = (props) => {
    const { theme, setTheme } = useContext(ThemeContext)

    const toggleSwitch = (checked) => {
        setTheme(
            theme === "light" ? "dark" : "light"
        )
    }
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };
    const drawer = (

        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                <img src={light} width={100} />
            </Typography>
            <Divider />
            <List>
                {pages.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box position="static" className={theme === "dark" ? "dark" : "light"}>
            <Toolbar disableGutters>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2,ml:1, display: { sm: 'none' } }}
                >
                    <MenuIcon />
                </IconButton>
                <Box className="logo" sx={{ ml:1,display: { xs: 'none', md: 'flex' } }}>
                    <img src={theme==='dark'?dark:light} width={100} />
                </Box>
                <Box sx={{ flexGrow: 1, display: { md: 'flex', xs: 'none' } }} >
                    {pages.map((page) => (
                        <Button
                            sx={{ my: 2, display: 'block', ml: 5, mr: 2, fontSize: 22, fontFamily: 'fantasy', letterSpacing: 3 }}
                        >
                            {page}
                        </Button>
                    ))}
                </Box>
             
                <Box component="nav">
                    <Drawer
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Box>
                <Box sx={{flexGrow:1,textAlign:'center',ml:4}}>
                    <Switch
                        onChange={toggleSwitch}
                        checked={theme === "dark"}
                        uncheckedIcon={false}
                        checkedIcon={false}
                        onColor={'#ffa500'}
                    />
                </Box>
                <Box className="btn-signIn" sx={{ width: { xs: '20%', md: '10%' } }}>
                    <Typography>SIGN IN</Typography>
                </Box>
            </Toolbar>
        </Box>
    );
}
export default ResponsiveAppBar 
