import React from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button, Grid } from '@mui/material';
import './Section4.css'
import { useContext} from "react"
import { ThemeContext } from '../../App';
import img1 from '../../images/blue_protocol_key_art_540.jpg';
import img2 from '../../images/ps_press_kit_screenshots_bahamarhighlands_f_580x330.jpg';
import img3 from '../../images/ps_press_kit_screenshots_combat_classlineup_580x330.jpg';
const Section4 = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <Box className={theme === "dark" ? "dark" : "light"}>
      <Box className="news">
        <Typography variant='h2' sx={{fontSize:{md:'55px',sm:'55',xs:'40px'}}}>NEWS</Typography>
        <Grid container spacing={2}>
          <Grid item md={4} sm={4} xs={12}>
            <Box className="news-item">
              <img src={img1} width='100%' />
              <Box className="box-text">
                <Typography variant='h5'>GENERAL</Typography>
                <Typography variant='h3'>Announcing Blue Protocol</Typography>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                <Button>READ MORE</Button>
              </Box>
            </Box>
          </Grid>
          <Grid item md={4} sm={4} xs={12}>
            <Box className="news-item">
              <img src={img2} width='100%' />
              <Box className="box-text">
                <Typography variant='h5'>ANNOUNCEMENT</Typography>
                <Typography variant='h3'>Announcing Blue Protocol</Typography>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                <Button>READ MORE</Button>
              </Box>
            </Box>
          </Grid>
          <Grid item md={4} sm={4} xs={12}>
            <Box className="news-item">
              <img src={img3} width='100%' />
              <Box className="box-text">
                <Typography variant='h5'>ANNOUNCEMENT</Typography>
                <Typography variant='h3'>Announcing Blue Protocol</Typography>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                <Button>READ MORE</Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Box className='allnews'>
          <Button>ALL NEWS</Button>
        </Box>
      </Box>
    </Box>
  )
}

export default Section4