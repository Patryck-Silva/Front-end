import React from 'react';
import { Typography, Box, Grid, Button } from '@material-ui/core';
import './Home.css';
import { Link } from 'react-router-dom';
function Home() {
  return (



    <>


      <Grid className='homePrincipal '>
        <Grid item xs={4} className="fundoHome"></Grid>

        <Grid item xs={8}>

          <div className="conteudo-direita">

            <h1 className="titulo-Home">PINTOU MUDANÇA!</h1>

            <h4 className="texto-Home">Uma rede social para compartilhar projetos de arquitetura colaborativo entre comunidade e profissionais, voltado para a reforma da paisagem urbana através de intervenção artística e gráfica com o objetivo de construir assentamentos urbanos mais agradáveis e seguros.
              O intuito é fornecer um espaço voltado para organizar, construir e executar ideias e por fim, incentivar e inspirar pessoas com os resultados apresentados.</h4>
            <div className='botao-Home'>
              <Link to='/cadastro'>
              <Button variant="outlined" className="botaoHome1"> FAZER CADASTRO </Button>
              </Link>
              <Link to='/login'>
              <Button variant="outlined" className="botaoHome2"> LOGIN </Button>
              </Link>
            </div>
          </div>

        </Grid>
      </Grid>
    </>
  );
}

export default Home;