import React from 'react';
import { Typography, Box, Grid, Button } from '@material-ui/core';
import './Home.css';
import { Link } from 'react-router-dom';
function Home() {
  return (



    <>


      <Grid className='homePrincipal '>
        {/* <Grid item xs={3} className="fundoHome"></Grid> */}

        <Grid item xs={1} className='home-faixa'>
          <Box className="faixa-colorido"></Box>
          {/* <img src='https://i.pinimg.com/originals/dd/56/b4/dd56b44be4cbaa4683a920904d071b6a.png' width='100px'/> */}
          <img src='https://cdn-icons-png.flaticon.com/512/64/64981.png' className='img-faixa' />

        </Grid>


        <Grid item xs={9}>

          <div className="conteudo-direita">

            <h1 className="titulo-Home">PINTOU MUDANÇA!</h1>

            <h4 className="texto-Home">
              Trazendo mais vida nas comunidades, a Graphome vai muito além de uma rede social, focado não somente em cores, mas também na mudança da paisagem e da vida das pessoas através da arte. Compartilhe fotos, trabalhos, cursos, projetos sociais e muito mais!
              Que sua comunidade não seja citada somente por noticias ruins, e sim por sua beleza e união.
            </h4>
            <div className='botao-Home'>
              <Link to='/login'>
                <Typography align='left' className='home-textoCadastro'>
                  clique aqui para começar!
                </Typography>
              </Link>
            </div>
          </div>

        </Grid>
      </Grid>
    </>
  );
}

export default Home;