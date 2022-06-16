import React from 'react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Toolbar, Typography, Box, InputBase, Button, Menu, MenuItem } from '@material-ui/core';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { addToken } from '../../../store/tokens/actions';
import { toast } from 'react-toastify';




function Navbar() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    // criando styled components para searchbar
    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    }));

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                width: '40ch',
                '&:focus': {
                    width: '48ch',
                },
            },
        },
    }));

    // lógica de deslogar e só aparecer navbar se existir token
    let navigate = useNavigate()

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    )

    let dispatch = useDispatch()

    function deslogar() {
        dispatch(addToken(''))
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
            <AppBar position="static" >
                <Toolbar variant="dense" className='navbar'>
                    <div className='divMenuIcon'>
                        <Button id="basic-button" aria-controls={open ? 'basic-menu' : undefined} aria-haspopup="true" aria-expanded={open ? 'true' : undefined} onClick={handleClick}>
                            <IconButton size="large" edge="start" color="inherit" className='iconeMenu' aria-label="menu" sx={{ mr: 2 }}>
                                <MenuIcon />
                            </IconButton>
                        </Button>
                        <Menu id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose} MenuListProps={{ 'aria-labelledby': 'basic-button', }} className='caixaMenu'>
                            <MenuItem onClick={handleClose}> <Link to='/home' className='text-decorator-none'>
                                <Box mx={1} className='cursor'>
                                    <Typography variant="h6" color="inherit">
                                        Home
                                    </Typography>
                                </Box>
                            </Link></MenuItem>
                            <MenuItem onClick={handleClose}><Link to='/temas' className='text-decorator-none'>
                                <Box mx={1} className='cursor'>
                                    <Typography variant="h6" color="inherit">
                                        Categorias
                                    </Typography>
                                </Box>
                            </Link></MenuItem>
                            <MenuItem onClick={handleClose}><Link to='/feed' className='text-decorator-none'>
                                <Box mx={1} className='cursor'>
                                    <Typography variant="h6" color="inherit">
                                        Feed
                                    </Typography>
                                </Box>
                            </Link></MenuItem>
                            <MenuItem onClick={handleClose}><Link to='/perfil' className='text-decorator-none'>
                                <Box mx={1} className='cursor'>
                                    <Typography variant="h6" color="inherit">
                                        Perfil
                                    </Typography>
                                </Box>
                            </Link></MenuItem>
                            <MenuItem onClick={handleClose}>
                                <Box mx={1} className='cursor' onClick={deslogar} >
                                    <Typography variant="h6" color="inherit">
                                        Logout
                                    </Typography>
                                </Box>
                            </MenuItem>
                        </Menu>
                    </div>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>

                    <Link to='/feed' className='text-decorator-none'>
                        <Box className='graphomeLogo' >
                            <Typography variant="h5" color="inherit">
                                <img src="https://i.imgur.com/ZJJ7Qs3.png" width="130px" alt="" />
                            </Typography>
                        </Box>
                    </Link>

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