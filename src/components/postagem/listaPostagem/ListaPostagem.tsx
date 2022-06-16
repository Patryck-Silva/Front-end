import React, { FC, useEffect, useState } from 'react'
import { Box, Button, Card, CardActions, CardContent, Typography } from '@material-ui/core'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

import { Link, useNavigate } from 'react-router-dom'

import { useSelector } from 'react-redux'
import { TokenState } from '../../../store/tokens/tokensReducer';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Postagem from '../../../models/Postagem'
import { put } from '../../../services/Service'
import { toast } from 'react-toastify';
import './ListaPostagem.css'



interface Props {
  getPost: () => void,
  posts: Postagem[]
}
const ListaPostagem: FC<Props> = ({ getPost, posts }): JSX.Element => {
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

  async function curtidas(id: number) {
    await put(`/postagem/curtir/${id}`, post, setPost, {
      headers: {
        'Authorization': token
      }
    }
    );
    getPost()
  }
  return (

    <Box className='testando'>
      {posts.map(post => (


        <Box m={2} >
          <Card variant="outlined">

            <CardContent className='conteudo-card'>



              <Box className='box-tema'>
                <Typography variant="body2" component="p">
                  <h5>TEMA: </h5>{post.tema?.descricao}
                </Typography>
                <Typography variant='body2' component='p'>
                  <h5>Ultima atualização: </h5>{post.data.split("-").reverse().join("-")}
                </Typography>
              </Box>

              <Box className='linha-postagem'>

                <Box className='coluna-postagem'>

                  <Typography variant="h5" component="h2">
                    {post.titulo}
                  </Typography>

                  <Typography variant="body2" component="p">
                    {post.texto}
                  </Typography>



                </Box>

                <img src={post.midia} alt="" className='imgPostagem' />

              </Box>



            </CardContent>

            <CardActions className='botoes-card'>
              <Box display="flex" justifyContent="center" mb={1.5}>

                <Link to={`/formularioPostagem/${post.id}`} className="text-decorator-none" >
                  <Box mx={1}>
                    <Button variant="outlined" className="marginLeft" size='small'>
                      Atualizar
                    </Button>
                  </Box>
                </Link>

                <Link to={`/deletarPostagem/${post.id}`} className="text-decorator-none">
                  <Box mx={1}>
                    <Button variant="outlined" color='secondary' size='small' startIcon={<DeleteIcon />}>
                      Deletar
                    </Button>
                  </Box>
                </Link>
                <Box mx={1}>
                  <Button onClick={() => { curtidas(post.id) }} style={{ marginTop: '-11px' }} ><ThumbUpIcon color='info'></ThumbUpIcon></Button>
                  <Typography style={{ color: 'black' }} align='center' variant="body2" component="p"> {post.curtir}</Typography>
                </Box>
              </Box>
            </CardActions>

          </Card>
        </Box>
      ))}
    </Box>
  )
}

export default ListaPostagem;