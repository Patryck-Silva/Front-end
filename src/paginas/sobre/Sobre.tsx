import React from 'react'
import './Sobre.css'
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import { Grid, Box, Typography, Button } from '@material-ui/core'

function Sobre() {

    return (

        <>
            <main className="pagina-sobre">

                <section className="sobre-introducao">

                    <div className='sobre-introducao-cabecalho'>

                        <div className='sobre-introducao-cabecalho-textos'>

                            <h6 className='sobre-introducao-cabecalho-texto1'>
                                faça a diferença.
                            </h6>

                            <h2 className='sobre-introducao-cabecalho-texto2'>
                                <p>UMA PLATAFORMA</p>
                                <p>PARA TRANSFORMAR.</p>
                            </h2>

                        </div>

                    </div>

                    <div className="introducao-textos-secundarios">

                        <p className="introducao-textos-secundarios-p">
                            Uma rede social, criada alinhada com os objetivos de desenvolvimento sustentável da ONU, para
                            compartilhar projetos de arquitetura colaborativo entre comunidade e profissionais, voltado para a
                            reforma da paisagem urbana através de intervenção artística e gráfica com o objetivo de construir
                            assentamentos urbanos mais agradáveis e seguros.
                        </p>

                        <p className="introducao-textos-secundarios-p">
                            O intuito é fornecer um espaço onde os usuários possam organizar, construir e executar ideias e, por fim,
                            incentivar e inspirar pessoas com os resultados apresentados.
                        </p>


                    </div>

                </section>



                <section className='sobre-devs'>
                    <h2 className='sobre-devs-titulo'>CONHEÇA OS DEVS</h2>

                    <div className='sobre-devs-cards'>

                        <div className="card card1">

                            <div className="border">
                                <h2 className="cardTitulo">Beatriz Alves</h2>

                                <div className="icons">

                                    <a href="https://www.facebook.com/jonathasouzabrasil/" target="_blank">
                                        <InstagramIcon className='icone' />
                                    </a>
                                    <a href="https://github.com/BiaWhetumori" target="_blank">
                                        <GitHubIcon className='icone' />
                                    </a>
                                    <a href="https://www.linkedin.com/in/ant%C3%B4niabeatriz" target="_blank">
                                        <LinkedInIcon className='icone' />
                                    </a>

                                </div>

                            </div>

                        </div>

                        <div className="card card2">

                            <div className="border">
                                <h2 className="cardTitulo">Cipriana </h2>

                                <div className="icons">

                                    <a href="https://www.facebook.com/jonathasouzabrasil/" target="_blank">
                                        <InstagramIcon className='icone' />
                                    </a>
                                    <a href="https://www.instagram.com/_jonathanbrasil/" target="_blank">
                                        <GitHubIcon className='icone' />
                                    </a>
                                    <a href="https://www.linkedin.com/in/jonathanbrasil" target="_blank">
                                        <LinkedInIcon className='icone' />
                                    </a>

                                </div>

                            </div>

                        </div>

                        <div className="card card3">

                            <div className="border">
                                <h2 className="cardTitulo">Jonathan Brasil</h2>

                                <div className="icons">
                                    <a href="https://www.facebook.com/jonathasouzabrasil/" target="_blank">
                                        <InstagramIcon className='icone' />
                                    </a>
                                    <a href="https://www.instagram.com/_jonathanbrasil/" target="_blank">
                                        <GitHubIcon className='icone' />
                                    </a>
                                    <a href="https://www.linkedin.com/in/jonathanbrasil" target="_blank">
                                        <LinkedInIcon className='icone' />
                                    </a>
                                </div>

                            </div>

                        </div>

                    </div>

                    <div className='sobre-devs-cards2'>

                        <div className="card card4">

                            <div className="border">
                                <h2 className="cardTitulo">Patryck Silva</h2>

                                <div className="icons">
                                    <a href="https://www.instagram.com/tyckupnext/" target="_blank">
                                        <InstagramIcon className='icone' />
                                    </a>
                                    <a href="https://github.com/Patryck-Silva" target="_blank">
                                        <GitHubIcon className='icone' />
                                    </a>
                                    <a href="https://www.linkedin.com/in/patryck-silva/" target="_blank">
                                        <LinkedInIcon className='icone' />
                                    </a>
                                </div>

                            </div>

                        </div>

                        <div className="card card5">

                            <div className="border">
                                <h2 className="cardTitulo">Pedro Henrique</h2>

                                <div className="icons">
                                    <a href="https://www.instagram.com/pedrojapasp/" target="_blank">
                                        <InstagramIcon className='icone' />
                                    </a>
                                    <a href="https://github.com/Pedrobrsp" target="_blank">
                                        <GitHubIcon className='icone' />
                                    </a>
                                    <a href="https://www.linkedin.com/in/pedro-henrique-dsg/" target="_blank">
                                        <LinkedInIcon className='icone' />
                                    </a>
                                </div>

                            </div>

                        </div>

                        <div className="card card6">

                            <div className="border">
                                <h2 className="cardTitulo">Viviane Emelie</h2>

                                <div className="icons">
                                    <a href="https://www.facebook.com/jonathasouzabrasil/" target="_blank">
                                        <InstagramIcon className='icone' />
                                    </a>
                                    <a href="https://github.com/vivi29-emi" target="_blank">
                                        <GitHubIcon className='icone' />
                                    </a>
                                    <a href="https://www.linkedin.com/in/viviane-geraldo-626130238/" target="_blank">
                                        <LinkedInIcon className='icone' />
                                    </a>
                                </div>

                            </div>

                        </div>

                    </div>

                </section>

                <section className='sobre-contato'>

                    <div className='sobre-contato-cabecalho'>
                        <h2>bloco 01</h2>
                    </div>

                    <div className='sobre-contato-quem'>
                        <h2>bloco 02</h2>
                    </div>

                    <div className='sobre-contato-oque'>
                        <h2>bloco 03</h2>
                    </div>


                </section>

            </main>
        </>
    )
}

export default Sobre