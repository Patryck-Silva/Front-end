import React, { useEffect, useState } from 'react'
import { Box, Button } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import User from '../../models/User'
import { buscaId } from '../../services/Service'

import './Perfil.css'
import { TokenState } from '../../store/tokens/tokensReducer'
import { toast } from 'react-toastify'

function Perfil() {


  let history = useNavigate()

  // Pega o ID guardado no Store
  const id = useSelector<TokenState, TokenState["id"]>(
    (state) => state.id
  );

  // Pega o Token guardado no Store
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  )

  const [user, setUser] = useState<User>({
    id: +id,    // Faz uma conversão de String para Number
    nome: '',
    usuario: '',
    senha: '',
    foto: '',
    bio: "",
    dataNascimento: '',
    tipo: ''
  })

  useEffect(() => {
    if (token === "") {
      toast.error('Você precisa estar logado!', {
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

  // Métedo para pegar os dados de um Usuário especifico pelo ID
  async function findById(id: string) {
    buscaId(`/usuarios/${id}`, setUser, {
      headers: {
        'Authorization': token
      }
    })
  }

  useEffect(() => {
    if (id !== undefined) {
      findById(id)
    }
  }, [id])

  function edit() {
    history('/atualizarusuario')
  }

  return (
    <Box className='card-principal'>

      <Box className='card-perfil'>
        <img className='card-imagem' src={user.foto} />
        <h2 className='perfil-nome'>{user.nome}</h2>
      </Box>

      <Box className='card-dados'>
        <h2>{user.nome}</h2>
        <h4>Data de nascimento: </h4>
        <p>{user.dataNascimento.split("-").reverse().join("-")}</p>
        <h4>Bio:</h4>
        <p>{user.bio}</p>
        <h4>tipo de usuário:</h4>
        <p>{user.tipo}</p>
      </Box>

      {/* CLASSE DO BUTTON TEMPORARIO */}
      <Box className='card-botao'>
        <Button className="botao-contato" onClick={edit}>Editar perfil</Button>
      </Box>


    </Box>
  )
}

export default Perfil