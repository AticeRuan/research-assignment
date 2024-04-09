import { Box, Typography } from '@mui/material';
export default function Footer() {
  return (
    <footer>
      <Box
        sx={{
          bgcolor: '#63B0CD',
          width: '100vw',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Box sx={{ p: 1.5 }} textAlign='left'>
          {' '}
          <Typography variant='body2' color='white'>
            Student Name: Rain Ruan
          </Typography>
          <Typography variant='body2' color='white'>
            Student ID: 27037902
          </Typography>
        </Box>
      </Box>
    </footer>
  );
}
