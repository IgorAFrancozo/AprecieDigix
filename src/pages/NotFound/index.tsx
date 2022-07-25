import { Box } from '@mui/material';
import { ReactComponent as NotFoundImage } from '../../assets/icone-404.svg';

export default function NotFound() {
  return (
    <Box sx={{ backgroundColor: 'hsl(265, 89.5%, 30%)', alignItems: 'center', widith: '100%' }}>
      <NotFoundImage />
      <h2>Not Found - 404</h2></Box>
  );
}