import React from 'react'
import "./Footer.css"
import { Box, Typography, Grid } from '@material-ui/core'
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>

      <Grid item xs={12} className='footer'>

        <Typography className='footer-texto-principal'>GRAPHOME</Typography>

        <Box className='footer-menus'>
          <Typography className='footer-texto-secundario'>Inicio</Typography>
          <Typography className='footer-texto'>
            <Link to='/home'>Home</Link>
            <Link to='/cadastro'>Cadastro</Link>
            <Link to='/login'>Login</Link>
          </Typography>
        </Box>

        <Box className='footer-menus'>
          <Typography className='footer-texto-secundario'>Sobre Nós</Typography>
          <Typography className='footer-texto'>
            <Link to='/sobre#gh-sobre'>O que é a Graphome</Link>
            <Link to='/sobre#sobre-devs'>Conheça os devs</Link>
            <Link to='/sobre#sobre-contato'>Fale conosco</Link>
          </Typography>
        </Box>

        <Box className='footer-redes'>
          <Typography align="center" gutterBottom className='textoFooter'>Siga a GrapHome</Typography>
          <Box className='footer-redes-icones'>
            <a href="https://github.com/Graphome-Project" target="_blank">
              <FacebookIcon className='icone' />
            </a>
            <a href="https://github.com/Graphome-Project" target="_blank">
              <InstagramIcon className='icone' />
            </a>
            <a href="https://github.com/Graphome-Project" target="_blank">
              <GitHubIcon className='icone' />
            </a>
          </Box>
        </Box>


      </Grid>

    </>
  )
}

export default Footer;
