import React from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {Container, Grid } from '@mui/material';
import './Section5.css';
import { ThemeContext } from '../../App';
import { useContext, useState } from "react"
import ClassesData from '../mock/CharacterData'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const Section5 = () => {
  const { theme } = useContext(ThemeContext)
  const [current, setCurrent] = useState(0)

  const PrevSlide = () => {
    current === 0 ? setCurrent(3) : setCurrent(current - 1)
  }
  const NextSlide = () => {
    current === 3 ? setCurrent(0) : setCurrent(current + 1)
  }
  return (
   
      <Box className={theme === "dark" ? "dark" : "light"} >
         <Container maxWidth='lg'>
        <Box className="bg-Classes" sx={{height:{md:'800px',sm:'800px',xs:'100%'}}}>
          <Typography variant='h2'>Blue Protocol </Typography>
          <Typography variant='h6'> CLASSES</Typography>
          <Box className="arrow-character">
            <ArrowBackIcon className='arrow-left' onClick={PrevSlide} />
            <ArrowForwardIcon className='arrow-right' onClick={NextSlide} />
          </Box>
          {ClassesData.map((data, index) => {
            return (
              <Box className="classes-text">
                {index === current && (
                  <Grid container spacing={2}>
                    <Grid item md={6} sm={6} xs={12}>
                      <Box >
                        <img src={data.image} width="70%"/>
                      </Box>
                    </Grid>
                    <Grid item md={6} sm={6} xs={12}>
                      <Typography variant='h3'>{data.classes}</Typography>
                      <Typography variant='h5'>{data.story}</Typography>
                      <iframe src={data.gameplay} width="100%" height='300px' className='vdo'></iframe>
                    </Grid>
                  </Grid>
                )}
              </Box>
            )
          })}
        </Box>
        </Container>
      </Box>

  )
}

export default Section5