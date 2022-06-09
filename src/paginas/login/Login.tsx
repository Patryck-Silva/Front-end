import React, { useState, ChangeEvent, useEffect } from 'react';
import { Grid, Box, Typography, TextField, Button } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../services/Service';
import UserLogin from '../../models/UserLogin';
import './Login.css';
import { useDispatch, useSelector } from 'react-redux';
import { addToken } from '../../store/tokens/actions';

function Login() {

  let navigate = useNavigate();

  const dispatch = useDispatch ()

  const [token, setToken] = useState('');

  
  const [UserLogin, setUserLogin] = useState<UserLogin>(
    {
      id: 0,
      nome: '',
      usuario: '',
      senha: '',
      foto: '',
      bio: '',
      dataNascimento: '',
      tipo: '',
      token: ''
    }
  )
  function updatedModel(e: ChangeEvent<HTMLInputElement>) {
    setUserLogin({
      ...UserLogin,
      [e.target.name]: e.target.value
    })
  }
  useEffect(() => {
    if (token != '') {
      dispatch(addToken(token))
      navigate('/home')
    }
  }, [token])
  async function logar(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      await login(`/usuarios/logar`, UserLogin, setToken)

      alert('Usuario logado com sucesso!');
    }
    catch (error) {
      alert('Dados do usuário divergente.Erro ao logar!')
    }
  }

  return (


    // grid da imagem da esquerda
    <Grid container className='gridMaiorLogin'>
      <Grid className='grid1Login' xs={12}>
        <Box className='BoxForm'>
          <form onSubmit={logar}>
            <Typography className='textoLogin'
            >Entrar</Typography>
            <TextField placeholder='Digite o seu e-mail' value={UserLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='usuário' variant='outlined' name='usuario' margin='normal' fullWidth />
            <TextField placeholder='Digite o sua senha' value={UserLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
            {/* box do botao */}
            <Box textAlign='center' >
              <Button className='botaoLogar' type='submit' variant='contained'>
                Logar
              </Button>
            </Box>
          </form>
          <Box marginTop={2} >
            <Typography className='textoSemConta'>Não tem uma conta?</Typography>
          </Box>
          <Link to='/cadastro' className='text-decorator-nome'>
            <Typography align='center' className='textoCadastro' style={{ fontWeight: 'bold' }}>Cadastre-se</Typography>
          </Link>
        </Box>
      </Grid>
    </Grid>
  )
}

export default Login