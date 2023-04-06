import React from 'react'
import Box from '@mui/material/Box';
import './Section1.css';
import { Button, Typography } from '@mui/material';
import VDO from "../../images/BAVDO.mp4";
const Section1 = () => {
  return (
    <Box className="Control-1">
      <video className='videoTag' autoPlay loop muted>
        <source src={VDO} type='video/mp4' />
      </video>
      <Box className="btn-watch"
        sx={{
          display: 'absolute',
          left: { md: '45%', sm: '38%', xs: '30%' }, top: { xs: '70%' }
        }}
      >
        <Button>WATCH TRAILER</Button>
      </Box>
    </Box>
  )
}

export default Section1