import React, { ChangeEvent, FC, useEffect, useState } from 'react'
import { Container, TextField, Button, Select, InputLabel, MenuItem, FormControl, FormHelperText, Box } from "@material-ui/core"
import './CadastroPostagem.css';
import { useNavigate, useParams } from 'react-router-dom';
import Temas from '../../../models/Temas';
import Postagem from '../../../models/Postagem';
import { busca, buscaId, post, put } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';


interface Props {
  setPosts: (value: Postagem[]) => void,
  posts: Postagem[]
}

const CadastroPostagem: FC<Props> = ({ setPosts, posts }): JSX.Element => {
  let navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [temas, setTemas] = useState<Temas[]>([])
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );


  const [tema, setTema] = useState<Temas>(
    {
      id: 0,
      descricao: '',
      nome: ''

    })
  const [postagem, setPostagem] = useState<Postagem>({
    id: 0,
    titulo: '',
    texto: '',
    tema: null,
    curtir: 0,
    data: '',
    midia: ''
  })

  useEffect(() => {
    setPostagem({
      ...postagem,
      tema: tema
    })
  }, [tema])

  useEffect(() => {
    getTemas()
    if (id !== undefined) {
      findByIdPostagem(id)
    }
  }, [id])

  async function getTemas() {
    await busca("/temas", setTemas, {
      headers: {
        'Authorization': token
      }
    })
  }

  async function findByIdPostagem(id: string) {
    await buscaId(`/postagem/${id}`, setPostagem, {
      headers: {
        'Authorization': token
      }
    })
  }

  function updatedPostagem(e: ChangeEvent<HTMLInputElement>) {

    setPostagem({
      ...postagem,
      [e.target.name]: e.target.value,
      tema: tema
    })
  }

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()

    if (id !== undefined) {
      try {
        await put(`/postagem`, postagem, setPostagem, {
          headers: {
            'Authorization': token
          }
        })
        toast.success('Postagem atualizada com sucesso', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: "colored",

        });

      } catch (error) {
        console.log(`Erro: ${error}`);
        toast.error('Ocorreu algum erro ao atualizar a postagem, verifique os campos e tente novamente! ', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: "colored",
        });
      }
    } else {
      try {
        await post(`/postagem`, postagem, setPostagem, {
          headers: {
            'Authorization': token
          }
        })
        toast.success('Postagem criada com sucesso!', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: "colored",

        });
        setPosts([...posts, postagem])
      } catch (error) {
        console.log(`Error: ${error}`);
        toast.error('Ocorreu algum erro ao criar uma postagem, verifique os campos e tente novamente! ', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: "colored",

        });
      }
    }
    back()
  }

  function back() {
    navigate('/feed')
  }
  return (
    <Container className="GridContainer">
      <form onSubmit={onSubmit} className='Forms'>
        <Box className='BoxPositionForm'>
          <Box className='BoxInputs'>
            <TextField value={postagem.titulo} className='inputTitle' onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} id="titulo" label="Título" variant="outlined" name="titulo" margin="normal" placeholder='Insira aqui o título da sua postagem' />
            <TextField value={postagem.midia} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} id="midia" label="Mídia" name="midia" variant="outlined" margin="normal" className='inputTitle' placeholder='Insira aqui o link da imagem' />
          </Box>
          <Box className='BoxMidia'>
            <TextField
              value={postagem.texto}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)}
              id="texto"
              name="texto"
              label="Texto"
              placeholder='Insira aqui o conteúdo da sua postagem'
              variant="outlined"
              multiline
              margin="normal"
              rows={10}
              className='inputTextArea'
            />
          </Box>


        </Box>
        <FormControl className='selectTema' >
          <InputLabel id="demo-simple-select-helper-label">Tema </InputLabel>
          <Select

            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            onChange={(e) => buscaId(`/temas/${e.target.value}`, setTema, {
              headers: {
                'Authorization': token
              }
            })}>
            {
              temas.map(tema => (
                <MenuItem value={tema.id}>{tema.nome}</MenuItem>
              ))
            }
          </Select>
          <FormHelperText>Escolha um tema para a postagem</FormHelperText>
          <Button type="submit" variant="contained" color="primary" className='BotaoForm'>
            <span className="button-content"> Criar postagem</span>
          </Button>
        </FormControl>
      </form>
    </Container>
  )
}

export default CadastroPostagem;

