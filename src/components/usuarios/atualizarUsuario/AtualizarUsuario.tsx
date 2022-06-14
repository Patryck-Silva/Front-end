import { Button, Container, TextField, Typography } from "@material-ui/core";
import { ChangeEvent, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import User from '../../../models/User';
import { buscaId, put } from '../../../services/Service';
import { TokenState } from '../../../store/tokens/tokensReducer';
import './AtualizarUsuario.css';

function AtualizarUsuario() {
  let history = useNavigate();
  const { id } = useParams<{ id: string }>();

  //const [token, setToken] = useLocalStorage('token');
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  const [user, setUser] = useState<User>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: '',
    bio: '',
    dataNascimento: '',
    tipo: ''
  })

  const [confirmarSenha, setConfirmarSenha] = useState<String>("")

  useEffect(() => {
    if (token === "") {
      //alert("Você precisa estar logado")
      toast.error('Você precisa estar logado', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
      });
      history("/login")

    }
  }, [token])

  useEffect(() => {
    if (id !== undefined) {
      findById(id)
    }
  }, [id])

  async function findById(id: string) {
    buscaId(`/usuarios/${id}`, setUser, {
      headers: {
        'Authorization': token
      }
    })
  }

  function updatedUsuario(e: ChangeEvent<HTMLInputElement>) {

    setUser({
      ...user,

      [e.target.name]: e.target.value,

    })

  }

  function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
    setConfirmarSenha(e.target.value)
  }

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log("usuário " + JSON.stringify(user))

    if (confirmarSenha === user.senha && user.senha.length >= 8) {
      if (id !== undefined) {
        console.log(user)
        put(`/usuarios/atualizar`, user, setUser, {
          headers: {
            'Authorization': token
          }
        })
        //alert('Usuário atualizado com sucesso!');
        toast.success('Usuario atualizado com sucesso', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          theme: "colored",
          progress: undefined,
        });
      }
    } else {
      //alert('Dados inconsistentes. Favor verificar as informações de cadastro.')
      toast.error('Dados inconsistentes. Favor verificar as informações de cadastro.', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
      });
    }

    back()

  }

  function back() {
    history('/feed')
  }


  return (
    <Container maxWidth="sm" className="topo">
      <form onSubmit={onSubmit}>
        <Typography variant="h3" color="textSecondary" component="h1" align="center" >Formulário de atualização usuário</Typography>
        <TextField value={user.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedUsuario(e)} id="nome" label="nome" variant="outlined" name="nome" margin="normal" fullWidth />
        <TextField value={user.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedUsuario(e)} id="usuario" label="usuario" variant="outlined" name="usuario" margin="normal" fullWidth />
        <TextField value={user.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedUsuario(e)} id="senha" label="senha" variant="outlined" name="senha" margin="normal" type='password' fullWidth />
        <TextField value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)} id='confirmarSenha' label='confirmarSenha' variant='outlined' name='confirmarSenha' margin='normal' type='password' fullWidth />
        <TextField value={user.foto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedUsuario(e)} id="foto" label="foto" variant="outlined" name="foto" margin="normal" fullWidth />
        <Link to='/usuarios' className='text-decorator-none'>
          <Button variant='contained' color='secondary' className='btnCancelar'>
            Cancelar
          </Button>
        </Link>
        <Button type="submit" variant="contained" color="primary">
          Finalizar
        </Button>
      </form>
    </Container>
  )
}

export default AtualizarUsuario;