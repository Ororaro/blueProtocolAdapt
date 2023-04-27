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
import dark from '../../images/blue-protocol-logo-1.png';
import light from '../../images/LOGO.png';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
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
            <Box className="btn-signIn-mb" sx={{ textAlign: 'center' }} >
                <Typography>SIGN IN</Typography>
            </Box>
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
                    sx={{ mr: 2, ml: 1, display: { md: 'none' } }}
                >
                    <MenuIcon />
                </IconButton>
                <Box className="logo" sx={{ ml: 1, display: { xs: 'none',sm:'none', md: 'flex' } }}>
                    <img src={theme === 'dark' ? dark : light} width={100} />
                </Box>
                <Box className="menu-list" sx={{ display: { md: 'flex',sm:'none', xs: 'none' } }} >
                    {pages.map((page) => (
                        <Button
                            sx={{ my: 2, display: 'block', ml: 5, mr: 2, fontSize: 22, fontWeight: '700 !important', fontFamily: 'initial', letterSpacing: 3 }}
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
                            display: { xs: 'block', sm: 'block',md:'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Box>
                <Box sx={{display:'flex',alignItems:'center',textAlign:'center'}}>
                    <Box sx={{position:'absolute',right:{md:'7%',sm:'13%',xs:'5%'},
                             display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Box sx={{ marginLeft: '10px' }}>
                            <Typography sx={{ fontFamily: 'initial',fontWeight:700, fontSize: '20px', marginRight: '10px', letterSpacing: '1px' }}>{theme === 'light' ? 'Light Mode' : 'Dark Mode'}</Typography>
                        </Box>
                        <Switch
                            onChange={toggleSwitch}
                            checked={theme === "dark"}
                            uncheckedIcon={false}
                            checkedIcon={false}
                            onColor={'#ffa500'}
                        />
                        <Box sx={{ margin: '0 15px' }}>
                            {theme === 'light' ? <LightModeIcon sx={{ fontSize: '40px', color: 'gold' }} /> : <DarkModeIcon sx={{ fontSize: '40px' }} />}
                        </Box>
                    </Box>
                    <Box className="btn-signIn" sx={{ display: { md: 'flex', sm: 'flex', xs: 'none' } }}>
                        <Typography>SIGN IN</Typography>
                    </Box>
                </Box>
            </Toolbar>
        </Box>
    );
}
export default ResponsiveAppBar 
