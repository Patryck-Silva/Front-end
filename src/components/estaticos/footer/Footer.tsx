import React from 'react'
import "./Footer.css"
import { Box, Typography, Grid } from '@material-ui/core'
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';

function Footer() {
  return (
    <>

        <Grid alignItems="center" item xs={12} className='footer'>

          <Box className='rodape'>

            <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
              <Typography align="center" gutterBottom className='textoFooter'>Siga a GrapHome</Typography>
            </Box>

            <Box display="flex" alignItems="center" justifyContent="center">
              <a href="https://www.facebook.com/jonathasouzabrasil/" target="_blank">
                <FacebookIcon className='icone' />
              </a>
              <a href="https://www.instagram.com/_jonathanbrasil/" target="_blank">
                <InstagramIcon className='icone' />
              </a>
              <a href="https://www.linkedin.com/in/jonathanbrasil" target="_blank">
                <LinkedInIcon className='icone' />
              </a>
            </Box>

          </Box>


        </Grid>

    </>
  )
}

export default Footer;