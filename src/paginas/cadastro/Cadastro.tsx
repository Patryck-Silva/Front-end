
import React, { useState, useEffect, ChangeEvent } from 'react';
import { Typography, Button, Box, Grid } from '@material-ui/core';
import { TextField } from "@mui/material";
import { Link, useNavigate } from 'react-router-dom';
import User from '../../models/User';
import { cadastroUsuario } from '../../services/Service';
import { toast } from 'react-toastify';





import './Cadastro.css';

function Cadastro() {

    let navigate = useNavigate();

    const [confirmarSenha, setConfirmarSenha] = useState<String>('')



    const [user, setUser] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: '',
            foto: '',
            bio: '',
            dataNascimento: '',
            tipo: ''


        })

    const [userResult, setUserResult] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: '',
            foto: '',
            bio: '',
            dataNascimento: '',
            tipo: ''

        })

    useEffect(() => {
        if (userResult.id != 0) {
            navigate("/login")
        }
    }, [userResult])


    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(e.target.value)
    }


    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUser({
            ...user,
            [e.target.name]: e.target.value
        })

    }

    // criando o calculo da idade para fazer a verificação
    let dataAtual = new Date()
    let nascimento = new Date(user.dataNascimento)
    let idade = dataAtual.getFullYear() - nascimento.getFullYear()

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        if (idade >= 18) {
            if (confirmarSenha === user.senha && user.senha.length >= 8) {

                try {
                    await cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult)
                    toast.success('Usuário cadastrado com sucesso', {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: false,
                        theme: "colored",
                        progress: undefined,
                    });


                } catch (error) {
                    console.log(`Error: ${error}`)

                    toast.error('Dados incorretos, por favor, verifique', {
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

                toast.error('Por favor verifique os dados inseridos', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    theme: "colored",
                    progress: undefined,
                });

                setUser({ ...user, senha: "" })
                setConfirmarSenha("")
            }
        } else {

            toast.error(`Idade menor que 18 anos (${idade})`, {
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

    }




    return (

        <>
            <Grid container direction='row' justifyContent='center' alignItems='center' className='containerPrinc'>

                <Grid item xs={6} className='imagem1'></Grid>
                <Grid item xs={6} alignItems='center'>
                    <Box paddingX={10}  >

                        <form onSubmit={onSubmit} >
                            <Typography variant="h3" gutterBottom color="textPrimary" component='h3' align='center'
                                className='cadastro-titulo' >CADASTRO
                            </Typography>

                            <TextField className=' input'
                                value={user.nome}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                                id='nome'
                                label='Nome'
                                placeholder='Digite seu nome'
                                variant='outlined'
                                name='nome'
                                margin='normal'


                                fullWidth required />

                            <TextField className=' input'
                                value={user.usuario}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                                id='usuario'
                                label='Email'
                                variant='outlined'
                                placeholder='Digite seu email'
                                name='usuario'
                                margin='normal'
                                type='email'

                                fullWidth required />

                            <TextField className=' input'
                                value={user.foto}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                                id='foto'
                                label='Foto'
                                variant='outlined'
                                placeholder='Digite o link da foto'
                                name='foto'
                                margin='normal'
                                fullWidth />

                            <TextField className=' input'
                                value={user.bio}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                                id='bio'
                                label='Bio'
                                placeholder='Digite a bio'
                                variant='outlined'
                                name='bio'
                                margin='normal'
                                type='bio'

                                fullWidth />

                            <TextField className=' input'
                                value={user.tipo}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                                id='tipo'
                                label='Tipo'
                                variant='outlined'
                                name='tipo'
                                margin='normal'
                                placeholder='Digite o tipo'

                                fullWidth required />


                            <TextField className=' input'
                                value={user.dataNascimento}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                                id='dataNascimento'
                                label='Data de nascimento'
                                placeholder='Digite sua Data de nascimento'
                                variant='outlined'
                                name='dataNascimento'
                                margin='normal'
                                type="date"

                                InputLabelProps={{
                                    shrink: true,
                                }}
                                fullWidth required />

                            <TextField className=' input'
                                value={user.senha}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                                id='senha'
                                label='Senha'
                                variant='outlined'
                                name='senha'
                                margin='normal'
                                type='password'
                                placeholder='Digite sua senha'

                                fullWidth required />

                            <TextField className=' input'
                                value={confirmarSenha}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)}
                                id='confirmarSenha'
                                label='Confirmar a senha'
                                variant='outlined'
                                name='confirmarSenha'
                                placeholder='Confirme sua senha'
                                margin='normal'
                                type='password'

                                fullWidth required />


                            <Box marginTop={2} textAlign='center'>

                                <Link to='/login' className="text-decorator-none">
                                    <Button type="submit" variant="outlined" className='botao-cancelar'>Cancelar</Button>
                                </Link>

                                <Button type="submit" variant="outlined" className='botao-confirmar'>Confirmar</Button>

                            </Box>


                        </form>

                    </Box>
                </Grid>
            </Grid>
        </>






    )
}

export default Cadastro;