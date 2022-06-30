import SaveAsIcon from '@mui/icons-material/SaveAs';
import { Box, Button, Grid, TextField } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import IColaborador from '../../types/IColaborador';

const data = {
  colaboradores: [] as IColaborador[]
};

interface Props {
  token: any
}

export default function FormularioCadastroColaborador({ token }: Props) {

  const [colaborador, setColaborador] = useState<IColaborador>({
    id: 0,
    nome: '',
    cpf: '',
    data_de_nascimento: '',
    usuario_id_do_chat: ''
  });

  const cadastrar = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    data.colaboradores.push(colaborador);
    //  colaborador.data_de_nascimento = inverterData()

    axios.post('http://127.0.0.1:8000/login/colaborador/', JSON.stringify(data), { headers: { 'Authorization': token.token } }).then(resposta => { console.log(resposta); }).catch(erro => { console.log(erro); });
  };
  const navegar = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <h2>Cadastro De Colaboradores</h2>
      <form onSubmit={cadastrar} method="POST">
        <Grid container spacing={2}>
          <Grid item xs={7}>
            <TextField
              fullWidth
              color="secondary"
              label='Nome Completo'
              onChange={evento => setColaborador({ ...colaborador, nome: evento.target.value })}
              variant="outlined"
              type="text"
              name="nome"
              id="nome"
              value={colaborador.nome}
              required
            />
          </Grid>
          <Grid item xs={5}>
            <TextField
              fullWidth
              color="secondary"
              label='CPF'
              onChange={evento => setColaborador({ ...colaborador, cpf: evento.target.value })}
              variant="outlined"
              id="cpf"
              type="text"
              value={colaborador.cpf}
              required
            />
          </Grid>
          <Grid item xs={5}>
            <TextField
              fullWidth
              color="secondary"
              label='ID de Usuário do Chat'
              onChange={evento => setColaborador({ ...colaborador, usuario_id_do_chat: evento.target.value })}
              variant="outlined"
              id='usuario_id_do_chat'
              type="text"
              value={colaborador.usuario_id_do_chat}
              required
            />
          </Grid>
          <Grid item xs={7}>
            <TextField
              fullWidth
              color="secondary"
              label='Data De Nascimento'
              type='date'
              variant='outlined'
              id="data_de_nascimento"
              value={colaborador.data_de_nascimento}
              onChange={evento => setColaborador({ ...colaborador, data_de_nascimento: evento.target.value })}
              required
            />
          </Grid>
        </Grid>
      </form>

      <Grid item xs={12}>
        <Button
          sx={{ mt: 2 }}
          variant='contained'
          type='submit'
          color="secondary"
          endIcon={<SaveAsIcon />}>
          Cadastrar Usuário
        </Button>
      </Grid>
    </Box >
  );
}
