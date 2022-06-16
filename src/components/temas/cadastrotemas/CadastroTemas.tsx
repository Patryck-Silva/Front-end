import React, { ChangeEvent, useEffect, useState } from 'react'
import { Box, Button, Container, Grid, TextField, Typography } from '@material-ui/core'
import { useNavigate, useParams } from 'react-router-dom'
import './CadastroTemas.css'
import Temas from '../../../models/Temas';
import { buscaId, post, put } from '../../../services/Service'
import { useSelector } from 'react-redux'
import { TokenState } from '../../../store/tokens/tokensReducer'
import { toast } from 'react-toastify';
// import { toast } from 'react-toastify'
function CadastroTemas() {
  let history = useNavigate()

  const { id } = useParams<{ id: string }>()

  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  )

  const [tema, setTema] = useState<Temas>({
    id: 0,
    descricao: '',
    nome: ''
  })

  //Hook para verificar se o usuário está logado
  useEffect(() => {
    if (token === "") {
      toast.error('Você precisa estar logado! ', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "colored",
      });
      history("/login")
    }
  }, [token])

  //Criando função assícrona para buscar o id
  async function findById(id: string) {
    await buscaId(`/temas/${id}`, setTema, {
      headers: {
        'Authorization': token
      }
    })
  }

  //Hook para verificar se o id é undefined
  useEffect(() => {
    if (id !== undefined) {
      findById(id)
    }
  }, [id])

  //Criando função de atualizar a tabela por meio do ChangeEvent
  function updateModel(e: ChangeEvent<HTMLInputElement>) {
    setTema({
      ...tema,
      [e.target.name]: e.target.value
    })
  }

  //Criando a funçãoque fara toda a verificação se o id é diferente de indefinido e também atualizar o tema ou criar um novo tema caso o id seja indefinido
  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()
    // se o id for diferente de undefined tente atualizar
    if (id !== undefined) {
      // TRY: Tenta executar a atualização
      try {
        await put(`/temas`, tema, setTema, {
          headers: {
            'Authorization': token
          }
        })
        toast.success('Tema atualizado com sucesso! ', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: "colored",
        });
      } catch (error) {// CATCH: Caso tenha algum erro, pegue esse erro e mande uma msg para o usuário
        console.log(`Error:${error}`);
        toast.error('Erro na atualização do tema, verifique os campos e tente novamente.', {
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
    } else { // Se o ID for indefinido, tente Cadastrar
      // TRY: Tenta executar o cadastro
      try {
        await post(`/temas`, tema, setTema, {
          headers: {
            'Authorization': token
          }
        })
        toast.error('Tema criado com sucesso! ', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: "colored",
        });
      } catch (error) {// CATCH: Caso tenha algum erro, pegue esse erro e mande uma msg para o usuário
        console.log(`Error: ${error}`)
        toast.error('Erro na criação do tema,verifique os campos e tente novamente.', {
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

  //Criando função de voltar para a pagina /temas independente se atualiza ou cria um tema novo
  function back() {
    history('/temas')
  }

  return (

    <Grid container >
      <Grid xs={12} className='GridBackground' >
        <Container maxWidth="sm" className='containerStyleTema' >
          <form onSubmit={onSubmit} className='formCadastroTema'>
            <Typography variant="h3" align="center" >Formulário de cadastro tema</Typography>
            <TextField
              value={tema.nome}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)}
              id="nome"
              label="nome"
              variant="outlined"
              name="nome"
              margin="normal"
              fullWidth
            />
            <TextField
              value={tema.descricao}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)}
              id="descricao"
              label="descrição"
              variant="outlined"
              name="descricao"
              margin="normal"
              fullWidth
            />
            <Button type="submit" variant="contained" className='buttonCadastroTema'>
              Finalizar
            </Button>
          </form>
        </Container>
      </Grid>
    </Grid>
  )
}

export default CadastroTemas