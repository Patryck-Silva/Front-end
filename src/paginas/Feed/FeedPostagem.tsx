import { Grid, Typography, Box, Button } from '@material-ui/core'
import React from 'react'
import CadastroPostagem from '../../components/postagem/cadastroPostagem/CadastroPostagem'
import ListaPostagem from '../../components/postagem/listaPostagem/ListaPostagem'
import './FeedPostagem.css'
import Perfil from '../perfil/Perfil'
import { useNavigate } from 'react-router-dom'


function FeedPostagem() {
    let navigate = useNavigate()

    function edit() {
        navigate('/atualizarusuario')
    }

    return (
        <>
            <Grid container xs={12} className='gridContainer'>
                <Grid xs={1} item className='MenuTemas'>
                    <a href="" className="BotaoTema">TEMA 01</a>
                    <a href="" className="BotaoTema">TEMA 02</a>
                    <a href="" className="BotaoTema">TEMA 03</a>
                    <a href="" className="BotaoTema">TEMA 04</a>
                    <a href="" className="BotaoTema">TEMA 05</a>
                    <a href="" className="BotaoTema">TEMA 06</a>
                </Grid>
                <Grid xs={8} className='gridPostagens'>

                    <Box marginTop={2}>
                        <CadastroPostagem />
                    </Box>
                    <h4 className='h4FeedPosts'>Feed de postagens</h4>
                    <ListaPostagem />
                </Grid>
                <Grid xs={3} className='gridPerfil'>
                    <Box className='boxPerfil'>
                        <Perfil />
                    </Box>

                    <Box className='boxEditarPerfil'>
                        <Button onClick={edit} className='botaoEditarPerfil'>
                            Editar perfil
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default FeedPostagem