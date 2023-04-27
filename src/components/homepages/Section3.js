import * as React from 'react';
import Box from '@mui/material/Box';
import './Section3.css'
import { useContext, useState,useEffect } from "react"
import { ThemeContext } from '../../App';
import img1 from "../../images/blue-protocol8.jpg";
import img2 from "../../images/HD-wallpaper-blue-protocol-when-will-video-game-release-date.jpg";
import img3 from "../../images/415165.jpg";
import { Button, Container, Grid, Typography } from '@mui/material';
import "aos/dist/aos.css";
import Aos from 'aos';
export default function Section3() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
}, [])

  const { theme } = useContext(ThemeContext)
  return (
    <Box className={theme === "dark" ? "dark" : "light"} sx={{ width: '100%' }}>
      <Container maxWidth='lg'>
        <Box className="header-mapView">
        <Typography variant='h2'>Map View</Typography>
        </Box>
        <Grid container spacing={2}>
          <Grid item md={12} sm={6} xs={12} data-aos="fade-down" >
            <img src={img1} width='100%' />
          </Grid>
          <Grid item md={6} sm={6} xs={12} data-aos="flip-left">
            <img src={img2} width='100%' />
          </Grid>
          <Grid item md={6} sm={6} xs={12} data-aos="flip-right">
            <img src={img3} width='100%' />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}