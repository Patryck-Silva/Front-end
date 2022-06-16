import React, { useEffect, useState } from 'react';
import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import Temas from '../../../models/Temas';
import { buscaId, deleteId } from '../../../services/Service';
import './DeletarTemas.css'
import { toast } from 'react-toastify';


function DeletarTemas() {

    let navigate = useNavigate();

    const { id } = useParams<{ id: string }>();

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    )

    const [temas, setTemas] = useState<Temas>()

    useEffect(() => {
        if (token === '') {
            navigate('/login')
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            findById(id)
        }

    }, [id])

    async function findById(id: string) {
        await buscaId(`/temas/${id}`, setTemas, {
            headers: {
                'Authorization': token
            }
        })

    }
    function sim() {
        navigate('/temas')

        try {

            deleteId(`/temas/${id}`, {
                headers: {
                    'Authorization': token
                }
            });
            toast.error('Tema deletado com sucesso', {
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
            toast.error('Erro ao deletar o Tema', {
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
    function nao() {
        navigate('/temas')
    }

    return (
        <>
            <Box m={2}>
                <Card variant="outlined">
                    <CardContent>
                        <Box justifyContent="center">
                            <Typography color="textSecondary" gutterBottom>
                                Deseja deletar o Tema:
                            </Typography>
                            <Typography color="textSecondary">
                                {temas?.descricao}
                            </Typography>
                        </Box>
                    </CardContent>
                    <CardActions>
                        <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
                            <Box mx={2}>
                                <Button onClick={sim} variant="outlined" className="marginLeft" size='large' >
                                    Sim
                                </Button>
                            </Box>
                            <Box mx={2}>
                                <Button onClick={nao} variant="outlined" size='large' color="secondary">
                                    Não
                                </Button>
                            </Box>
                        </Box>
                    </CardActions>
                </Card>
            </Box>
        </>
    )


}
export default DeletarTemas;