import { Box } from '@mui/material';
import { ReactComponent as NotFoundImage } from '../../assets/icone-404.svg';

export default function NotFound() {
  return (
    <Box sx={{ backgroundColor: 'purple', alignItems: 'center', widith: '100%' }}>
      <NotFoundImage />
      <h2>Not Found - 404</h2></Box>
  );
}