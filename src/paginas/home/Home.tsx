import React from 'react';
import { Typography, Box, Grid, Button } from '@material-ui/core';
import './Home.css';
import { Link } from 'react-router-dom';
function Home() {
  return (
    <>
      <Grid container className='gridmaior'>
        <Grid item xs={6} className='grid1'>
          <Box className='box1'>
            <Box>
              <Typography className='texto' gutterBottom >Ver postagens</Typography>
              <Typography gutterBottom className='texto' >Criar postagem</Typography>
              <Typography gutterBottom className='texto' >Criar tema</Typography>
              <Link to='/login' className='text-decorator-none'><Typography gutterBottom className='texto' >Logar</Typography></Link>
              <Typography gutterBottom className='texto' >Cadastrar</Typography>
            </Box>
          </Box>

        </Grid>
        <Grid item xs={6}>
          <img src="https://i.imgur.com/7g7YSsV.png" alt=" logo graphome" width='700px' height='700px' />
        </Grid>
      </Grid>
      <Grid container className='gridmaior'>
        <Grid item xs={6} className='grid1'>
          <Box className='box1'>
            <Box>
              <Typography gutterBottom className='texto' >Segundo grid é aqui para conteudo</Typography>
            </Box>
          </Box>

        </Grid>
        <Grid item xs={6}>
          <Typography gutterBottom className='texto' >Segundo grid é aqui para conteudo</Typography>
        </Grid>
      </Grid>
    </>
  );
}

export default Home;