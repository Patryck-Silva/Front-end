import React, { useEffect, useState } from 'react'
import { Box, Button, Card, CardActions, CardContent, Typography } from '@material-ui/core'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

import { Link, useNavigate } from 'react-router-dom'

import { useSelector } from 'react-redux'
import { TokenState } from '../../../store/tokens/tokensReducer';

import Postagem from '../../../models/Postagem'
import { busca, put } from '../../../services/Service'
import { toast } from 'react-toastify';
import './ListaPostagem.css'

function ListaPostagem() {

  const [posts, setPosts] = useState<Postagem[]>([])

  const [post, setPost] = useState<Postagem>({
    id: 0,
    titulo: "",
    texto: "",
    data: "",
    curtir: 0,
    tema: null,
    midia: ''
  })

  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  )

  let navigate = useNavigate();

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

  async function curtidas(id: number) {
    await put(`/postagem/curtir/${id}`, post, setPost, {
      headers: {
        'Authorization': token
      }
    }
    );
    getPost()
  }

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
      {posts.map(post => (
        <Box m={2} >
          <Card variant="outlined">
            <CardContent>
              <img src={post.midia} alt="" width='500px' height='500px' />
              <Typography color="textSecondary" gutterBottom>
                Postagens
              </Typography>

              <Typography variant="h5" component="h2">
                {post.titulo}
              </Typography>

              <Typography variant="body2" component="p">
                {post.texto}
              </Typography>

              <Typography variant="body2" component="p">
                {post.tema?.descricao}
              </Typography>

              <Typography variant='body2' component='p'>
                {post.data.split("-").reverse().join("-")}
              </Typography>
            </CardContent>

            <CardActions>
              <Box display="flex" justifyContent="center" mb={1.5}>

                <Link to={`/formularioPostagem/${post.id}`} className="text-decorator-none" >
                  <Box mx={1}>
                    <Button variant="contained" className="marginLeft" size='small' color="primary" >
                      Atualizar
                    </Button>
                  </Box>
                </Link>

                <Link to={`/deletarPostagem/${post.id}`} className="text-decorator-none">
                  <Box mx={1}>
                    <Button variant="contained" size='small' color="secondary">
                      Deletar
                    </Button>
                  </Box>
                </Link>
                <Box mx={1}>
                  <Button onClick={() => { curtidas(post.id) }} ><ThumbUpIcon color='primary'></ThumbUpIcon></Button>
                  <Typography style={{ color: 'black' }} align='center' variant="body2" component="p"> {post.curtir}</Typography>
                </Box>
              </Box>
            </CardActions>

          </Card>
        </Box>
      ))}
    </>
  )
}

export default ListaPostagem