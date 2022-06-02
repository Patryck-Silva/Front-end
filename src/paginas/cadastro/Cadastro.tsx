import React, { useState, useEffect, ChangeEvent } from 'react';
import { Typography, Button, Box } from '@material-ui/core';
import { TextField } from "@mui/material";
import { Link, useNavigate } from 'react-router-dom';
import User from '../../models/User';
import { cadastroUsuario } from '../../services/Service';


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
                    alert('Usuário cadastrado com sucesso')

                } catch (error) {
                    console.log(`Error: ${error}`)

                    alert("Dados incorretos, por favor, verifique")

                }

            } else {
                alert('Por favor, verifique os dados.')
                setUser({ ...user, senha: "" })
                setConfirmarSenha("")
            }
        } else {
            alert(`Idade menor que 18 anos (${idade})`)
        }

    }




    return (

        <>

            <form onSubmit={onSubmit}>
                <Typography variant="h3" gutterBottom color="textPrimary" component='h3' align='center'
                    className='cadastro-titulo' >CADASTRO
                </Typography>

                <TextField
                    value={user.nome}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                    id='nome'
                    label='nome'
                    variant='outlined'
                    name='nome'
                    margin='normal'
                    fullWidth required />

                <TextField
                    value={user.usuario}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                    id='usuario'
                    label='email'
                    variant='outlined'
                    name='usuario'
                    margin='normal'
                    type='email'
                    fullWidth required />

                <TextField
                    value={user.foto}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                    id='foto'
                    label='foto'
                    variant='outlined'
                    name='foto'
                    margin='normal'
                    fullWidth />

                <TextField
                    value={user.bio}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                    id='bio'
                    label='bio'
                    variant='outlined'
                    name='bio'
                    margin='normal'
                    fullWidth />

                <TextField
                    value={user.tipo}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                    id='tipo'
                    label='tipo de usuário'
                    variant='outlined'
                    name='tipo'
                    margin='normal'
                    fullWidth required />

                <TextField
                    value={user.dataNascimento}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                    id='dataNascimento'
                    label='data de nascimento'
                    placeholder='qualquer coisa'
                    variant='outlined'
                    name='dataNascimento'
                    margin='normal'
                    type="date"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    fullWidth required />

                <TextField
                    value={user.senha}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                    id='senha'
                    label='senha'
                    variant='outlined'
                    name='senha'
                    margin='normal'
                    type='password'
                    fullWidth required />

                <TextField
                    value={confirmarSenha}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)}
                    id='confirmarSenha'
                    label='confirmar senha'
                    variant='outlined'
                    name='confirmarSenha'
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



        </>






    )
}

export default Cadastro