import React from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button, Container, Grid } from '@mui/material';
import './Section6.css';
import { ThemeContext } from '../../App';
import { useContext, useState } from "react"
import ClassesData from '../mock/CharacterData'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import img1 from '../../images/maxresdefault.png'
const Section6 = () => {
  const { theme } = useContext(ThemeContext)
  return (
      <Box sx={{paddingTop:'4rem',}} className={theme === "dark" ? "dark" : "light"} >
          <img src={img1} height="400px" width="100%" style={{objectFit:'cover'}}/>
       
      </Box>

  )
}

export default Section6