import { Button } from '@mui/material';
import DataGridColaborador from '../../componente/DataGridColaborador';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useNavigate } from 'react-router-dom';

export default function ListagemColaboradoresCadastrados() {
  const navegar = useNavigate();
  return (
    <>
      <DataGridColaborador />
      <Button sx={{ mt: 2 }}
        variant='contained'
        type='submit'
        color="secondary"
        endIcon={<AddCircleOutlineIcon />}
        onClick={() => navegar('/cadastro')}>
        Cadastrar Usuário
      </Button>
    </>
  );
}