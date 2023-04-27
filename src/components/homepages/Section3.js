import React, { useEffect } from 'react'
import Box from '@mui/material/Box';
import {Grid, Typography } from '@mui/material';
import './Section2.css';
import "aos/dist/aos.css";
import Aos from 'aos';
import { useContext, useState } from "react"
import { ThemeContext } from '../../App';
import DataStory from '../mock/StoryData'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const Section2 = () => {
    const { theme } = useContext(ThemeContext)
    const [current, setCurrent] = useState(0)
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])

    const PrevSlide = () => {
        current === 0 ? setCurrent(4) : setCurrent(current - 1)
    }
    const NextSlide = () => {
        current === 4 ? setCurrent(0) : setCurrent(current + 1)
    }
    console.log(current)
    return (
        <Box className={theme === "dark" ? "dark" : "light"} >
            <Box className="SpacePadding">
                <Box className="Head-Story" >
                    <Typography variant='h2'>New Characters</Typography>
                    <Typography variant='h3'>Blue Protocol Story Characters</Typography>
                </Box>
                <Box className="Box-Character" data-aos="fade-up" >
                    {DataStory.map((data, index) => {
                        return (
                            <Box className="style-inside-box">
                                {index === current && (
                                    <Grid container spacing={2}>
                                        <Grid item md={6} sm={6} xs={12}>
                                            <Typography variant='h2'>{data.name}</Typography>
                                            <Typography variant='h5'>{data.story}</Typography>
                                        </Grid>
                                        <Grid item md={6} sm={6} xs={12}>
                                            <img src={data.image} />
                                        </Grid>
                                    </Grid>

                                )}
                            </Box>
                        )
                    })}
                    <Box className="arrow">
                        <ArrowBackIcon sx={{ fontSize: '45px' }} className='leftArrow' onClick={PrevSlide} />
                        <ArrowForwardIcon sx={{ fontSize: '45px' }} className='rightArrow' onClick={NextSlide} />
                    </Box>
                </Box>
            </Box>
        </Box>

    )
}

export default Section2