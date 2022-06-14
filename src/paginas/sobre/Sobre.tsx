import React from 'react'
import './Sobre.css'
import { Grid, Box, Typography, Button } from '@material-ui/core'
import Cards from '../../components/cards/Cards'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


function Sobre() {

let history = useNavigate();

function contatoEnviar(){

    toast.success('Mensagem Enviada!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "colored",

      });
    history('/home')
}

    return (

        <>
            <main className="pagina-sobre" id='gh-sobre'>

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

                <section className='sobre-devs' id='sobre-devs'>
                    <h2 className='sobre-devs-titulo'>CONHEÇA OS DEVS</h2>
                    <Cards />


                </section>

                <section className='sobre-contato' id='sobre-contato'>

                    <section className='sobre-contato-bloco'>

                        <div className='sobre-contato-conversar'>
                            <h2 className='sobre-contato-titulo'>VAMOS CONVERSAR.</h2>
                            <p>Deixe-nos saber quem você é e quais são seus pensamentos sobre nossa rede.</p>
                            <p>Para entrar em contato com os criadores,  </p>
                            <a href='#sobre-devs'>Confira nossos cards</a>
                        </div>

                        <img className='gif-contato' src='https://i.pinimg.com/originals/d0/d7/f6/d0d7f6c5ff1e0850fad3a19c441931ab.gif' />

                    </section>

                    <section className='sobre-contato-bloco'>

                        <div className='sobre-contato-quem'>
                            <h2 className='sobre-contato-titulo'>QUEM É VOCÊ?</h2>
                            <p>Quanto mais detalhes você incluir, mais fácil ficará para nós respondermos a sua mensagem</p>
                        </div>

                        <div className='bloco2-inputs'>

                            <div className='bloco2-inputs-coluna'>
                                <label className='bloco2-labels'>
                                    <span>Meu nome é:</span>
                                    <input type='text' name='nome' className='sobre-input-linha' />
                                </label>

                                <label className='bloco2-labels'>
                                    <span>Meu e-mail é:</span>
                                    <input type='email' name='email' className='sobre-input-linha' />
                                </label>
                            </div>


                            <div>
                                <label className='bloco2-labels'>
                                    <span>O que eu faço:</span>
                                    <input type='text' name='ocupacao' className='sobre-input-linha' />
                                </label>

                                <label className='bloco2-labels'>
                                    <span>Meu interesse é:</span>
                                    <input type='text' name='assunto' className='sobre-input-linha' />
                                </label>
                            </div>

                        </div>
                    </section>

                    <section className='sobre-contato-bloco'>

                        <div className='sobre-contato-pensamentos'>
                            <h2 className='sobre-contato-titulo'>QUAIS SEUS PENSAMENTOS?</h2>
                        </div>

                        <label className='bloco3-labels'>
                            <span>Digite a sua mensagem</span>
                            <textarea name='mensagem' className='sobre-input-texto' />
                        </label>

                    </section>

                    <section className='sobre-contato-bloco4'>
                        <a href='#gh-sobre'>voltar para o começo da página</a>
                        <Button variant="outlined" className="botao-contato" onClick={contatoEnviar}> ENVIAR </Button>
                    </section>

                </section>

            </main >
        </>
    )
}

export default Sobre