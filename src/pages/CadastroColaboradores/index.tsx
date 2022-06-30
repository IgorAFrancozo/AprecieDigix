import { useNavigate } from 'react-router-dom';
import FormularioCadastroColaborador from '../../componente/form';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Button } from '@mui/material';
import { Box } from '@mui/system';


interface Props {
  token: any
}
export default function CadastroColaboradores({ token }: Props) {

  const navegar = useNavigate();
  return (
    <Box>
      <FormularioCadastroColaborador token={token} />
      <Button
        sx={{ mt: 2 }}
        variant='contained'
        color='secondary'
        endIcon={<KeyboardBackspaceIcon />}
        onClick={() => navegar('/')}>
        Voltar
      </Button>
    </Box>
  );
}