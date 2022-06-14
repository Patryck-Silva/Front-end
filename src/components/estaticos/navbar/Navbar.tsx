import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { addToken } from '../../../store/tokens/actions';
import { toast } from 'react-toastify';



function Navbar() {
    let navigate = useNavigate()

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    )

    let dispatch = useDispatch()

    function deslogar() {
        dispatch(addToken(' '))
        toast.info('Usuário deslogado', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "colored",
        });
        navigate("/login")
    }
    var navbarComponent

    if (token !== "") {
        navbarComponent =
            <AppBar position="static" className='navbar'>
                <Toolbar variant="dense">

                    <Link to='/feed' className='text-decorator-none'>
                        <Box className='graphomeLogo' >
                            <Typography variant="h5" color="inherit">
                                <img src="https://i.imgur.com/ZJJ7Qs3.png" width="130px" alt="" />
                            </Typography>
                        </Box>
                    </Link>
                    <div className='botoesNavbar'>
                        <Box display="flex" justifyContent="start">
                            <Link to='/home' className='text-decorator-none'>
                                <Box mx={1} className='cursor'>
                                    <Typography variant="h6" color="inherit">
                                        home
                                    </Typography>
                                </Box>
                            </Link>
                            <Link to='/postagem' className='text-decorator-none'>
                                <Box mx={1} className='cursor'>
                                    <Typography variant="h6" color="inherit">
                                        postagens
                                    </Typography>
                                </Box>
                            </Link>
                            <Link to='/temas' className='text-decorator-none'>
                                <Box mx={1} className='cursor'>
                                    <Typography variant="h6" color="inherit">
                                        temas
                                    </Typography>
                                </Box>
                            </Link>
                            <Link to='/formularioTema' className='text-decorator-none'>
                                <Box mx={1} className='cursor'>
                                    <Typography variant="h6" color="inherit">
                                        cadastrar tema
                                    </Typography>
                                </Box>
                            </Link>
                            <Link to='/formulariopostagem' className='text-decorator-none'>
                                <Box mx={1} className='cursor'>
                                    <Typography variant="h6" color="inherit">
                                        cadastrar postagem
                                    </Typography>
                                </Box>
                            </Link>
                            <Link to='/feed' className='text-decorator-none'>
                                <Box mx={1} className='cursor'>
                                    <Typography variant="h6" color="inherit">
                                        feed
                                    </Typography>
                                </Box>
                            </Link>
                            <Link to='/login' className='text-decorator-none'>
                                <Box mx={1} className='cursor'>
                                    <Typography variant="h6" color="inherit">
                                        logout
                                    </Typography>
                                </Box>
                            </Link>
                        </Box>
                    </div>
                </Toolbar>
            </AppBar>
    }


    return (
        <>
            {navbarComponent}
        </>
    )
}

export default Navbar;