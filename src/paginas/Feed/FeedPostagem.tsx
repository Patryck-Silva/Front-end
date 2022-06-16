import { Grid, Box, Button } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import './FeedPostagem.css'
import Perfil from '../perfil/Perfil'
import { useNavigate } from 'react-router-dom'
import Postagem from '../../models/Postagem'
import { useSelector } from 'react-redux'
import { TokenState } from '../../store/tokens/tokensReducer'
import { toast } from 'react-toastify'
import { busca, put } from '../../services/Service'
import CadastroPostagem from '../../components/postagem/cadastroPostagem/CadastroPostagem'
import ListaPostagem from '../../components/postagem/listaPostagem/ListaPostagem'


function FeedPostagem() {
    let navigate = useNavigate()

    function edit() {
        navigate('/atualizarusuario')
    }

    const [posts, setPosts] = useState<Postagem[]>([])


    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    )


    useEffect(() => {
        if (token === "") {
            toast.error('Você precisa estar logado para completar a ação', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                theme: "colored",

            }); navigate("/login")

        }
    }, [token])


    async function getPost() {
        await busca("/postagem", setPosts, {
            headers: {
                'Authorization': token
            }
        })
    }

    useEffect(() => {
        getPost()
    }, [posts.length])

    return (
        <>
            <Grid container xs={12} className='feed-principal'>
                <Grid xs={9} className='feed-postagem'>
                    <Box marginTop={2}>
                        <CadastroPostagem setPosts={setPosts} posts={posts} />
                    </Box>

                    <h4 className='h4FeedPosts'>postagens</h4>

                    <ListaPostagem getPost={getPost} posts={posts} />
                </Grid>

                <Grid xs={3}>
                    <Perfil />
                </Grid>

            </Grid>
        </>
    )
}

export default FeedPostagem