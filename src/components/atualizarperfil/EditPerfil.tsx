import { Grid } from '@material-ui/core'
import React from 'react'
import Perfil from '../../paginas/perfil/Perfil'
import AtualizarUsuario from '../usuarios/atualizarUsuario/AtualizarUsuario'

function EditPerfil() {
  return (
    <Grid container xs={12}>
        <Grid xs={3}>
            <Perfil/>
        </Grid>

        <Grid xs={9}>
            <AtualizarUsuario/>
        </Grid>

        
    </Grid>
  )
}

export default EditPerfil