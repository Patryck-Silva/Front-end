import React from 'react'
import './Sobre.css'
import { Grid, Box, Typography, Button } from '@material-ui/core'

function Sobre() {

    return (

        <>
            {/* GRID PRINCIPAL COM TODO O CONTEÚDO */}
            <Grid container className='principal'>

                <Grid container className='centralizar' item xs={12}>
                    <h1>
                        LOGO CENTRALIZADO NO SITE GRAPHOME
                    </h1>


                </Grid>

                {/* GRID TEXTO ESQUERDA DO SITE DIVIDINDO COM GRID DE IMG */}
                <Grid item xs={6}>

                    <div>

                        <div>
                            <h2>Quem somos?</h2>
                        </div>

                        <div>
                            <h3>Uma rede social, alinhada com os objetivos de desenvolvimento sustentável da Onu, para compartilhar projetos de arquitetura colaborativo entre comunidade e profissionais, voltado para a reforma da paisagem urbana através de intervenção artística e gráfica com o objetivo de construir assentamentos urbanos mais agradáveis e seguros.

                                O intuito é fornecer um espaço voltado para organizar, construir e executar ideias e, por fim, incentivar e inspirar pessoas com os resultados apresentados.
                            </h3>
                        </div>

                    </div>




                </Grid>

                {/* GRID IMG FAZER UM CARROSEL, COM ALGUNS EXEMPLOS DE IMAGENS, DIREITA */}
                <Grid item xs={6}>

                    <div>

                        <h2 className='centralizar'>Carrossel com imagens</h2>

                    </div>


                </Grid>

                {/* GRID PARA CONTEÚDOS SECUNDÁRIOS */}
                <Grid container className='div2principal' item xs={12}>

                    <div className='div2textos'>
                        <h2>TEXTOS SECUNDÁRIOS:</h2>
                    </div>


                    <div className='div2textos'>


                        <div>
                            <img src='https://sme.goiania.go.gov.br/conexaoescola/wp-content/uploads/2020/10/GRAFITTI-1-Imagem-de-NakNakNak-por-Pixabay-e1601907148178.jpg' alt='' width='250px' />
                        </div>

                        <div>
                            <h5>O problema social a ser trabalhado. </h5>
                            <h6> Prevenir danos causados por desastres em infraestruturas críticas, assentamentos precários, assentamentos informais ou domicílios inadequados garantindo à habitação segura e moradia digna e segura.</h6>
                        </div>

                        <div>
                            <h5> Impacto dele na sociedade. </h5>
                            <h6> As transformações devem ter origem na própria comunidade que utiliza o espaço para evitar processos de gentrificação, como também diminuir riscos de desabamentos.

                                Trazer e viabilizar projetos de qualidade a fim de promover melhoria da paisagem urbana, gerando bem estar social e engajamento com a comunidade. Outros benefícios incluem diminuição da violência, fomentação da vida urbana e senso de comunidade e segurança.
                            </h6>
                        </div>


                    </div>


                </Grid>

                {/* GRID PARA CARD DA EQUIPE */}
                <Grid container className='teste3' item xs={12}>

                    <div className='teste2'>
                        <h2>CARDS DA EQUIPE DE DEVS</h2>
                    </div>


                    <div className='teste'>



                        <div> CARD 1</div>
                        <div> CARD 2</div>
                        <div> CARD 3</div>
                        <div> CARD 4</div>
                        <div> CARD 5</div>
                        <div> CARD 6</div>

                    </div>


                </Grid>

                {/* DIV PARA ENTRAR EM CONTATO */}

                <Grid container className='contato' item xs={12}>

                    <Grid item xs={6}>

                        <h2>CONTATO</h2>

                    </Grid>

                    <Grid item xs={6}>

                        <h2>INPUT</h2>

                    </Grid>


                </Grid>


            </Grid>
        </>
    )
}

export default Sobre