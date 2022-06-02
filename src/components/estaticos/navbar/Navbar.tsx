import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import {Link} from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <>
            <AppBar position="static" className='back'>
                <Toolbar variant="dense">
                <Link to='/blog' className='text-decorator-none'> 
                    <Box className= 'cursor' >
                        <Typography variant="h5" color="inherit">
                        <img src="https://i.imgur.com/7g7YSsV.png" width="150px" alt="" />
                        </Typography>
                    </Box>
                    </Link>
                    
                    <Box display="flex" justifyContent="start">
                    <Link to='/home' className='text-decorator-none'> 
                        <Box mx={1}  className= 'cursor'>
                            <Typography variant="h6" color="inherit">
                                home
                            </Typography>
                        </Box>
                        </Link>
                        <Link to='/postagem' className='text-decorator-none'> 
                        <Box mx={1} className= 'cursor'>
                            <Typography variant="h6" color="inherit">
                                postagens
                            </Typography>
                        </Box>
                        </Link>
                        <Link to='/temas' className='text-decorator-none'> 
                        <Box mx={1} className= 'cursor'>
                            <Typography variant="h6" color="inherit">
                                temas 
                            </Typography>
                        </Box>
                        </Link>
                        <Link to='/cadastrar' className='text-decorator-none'> 
                        <Box mx={1} className= 'cursor'>
                            <Typography variant="h6" color="inherit">
                                cadastrar tema
                            </Typography>
                        </Box>
                        </Link>
                        <Link to='/login' className='text-decorator-none'> 
                        <Box mx={1} className= 'cursor'>
                        <Typography variant="h6" color="inherit">
                                logout
                            </Typography>
                        </Box>
                        </Link>
                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;