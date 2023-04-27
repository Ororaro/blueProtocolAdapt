import React from 'react'
import Box from '@mui/material/Box';
import { ThemeContext } from '../../App';
import { useContext, useState } from "react"
import img1 from '../../images/maxresdefault.png'
const Section6 = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <Box sx={{ paddingTop: '4rem', }} className={theme === "dark" ? "dark" : "light"} >
      <img src={img1} height="400px" width="100%" style={{ objectFit: 'cover' }} />
    </Box>

  )
}

export default Section6