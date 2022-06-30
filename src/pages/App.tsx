import Container from '@mui/material/Container';
import Router from '../routes';

export default function App() {

  return (
    <div>
      <Container maxWidth="md">
        <Router />
      </Container>
    </div>
  );
}