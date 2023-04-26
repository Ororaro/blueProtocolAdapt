import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import './Footer.css'
import TextField from '@mui/material/TextField';
import footerlogo from '../../images/BP_logo_TM.svg'
const Footer = () => {
  return (
    <Box className="bg-footer">
      <Grid container spacing={2}>
        <Grid item md={4} sm={4} xs={12}>
          <Box className="footer-bandai">
            <img src={footerlogo} />
          </Box>
        </Grid>
        <Grid item md={4} sm={4} xs={12}>
          <Box className="footer-bandai">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
            </p>
          </Box>
        </Grid>
        <Grid item md={4} sm={4} xs={12}>
          <Box className='control-sub'>
            <Typography variant='h4'>ENTER YOUR EMAIL</Typography>
            <Box className="sub">
              <TextField label="ENTER YOUR EMAIL"
                variant="filled"
                className='input-style' InputLabelProps={{ className: 'textfield__label' }} />
              <Button sx={{ color: 'gray' }}>SUBMIT</Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Footer