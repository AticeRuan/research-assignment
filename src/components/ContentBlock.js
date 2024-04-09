import { Box, Container, Divider, Paper, Typography } from '@mui/material';
export default function ContentBlock({ heading, children }) {
  return (
    <Container sx={{ mt: 10, width: '100%' }}>
      <Typography
        color='black'
        variant='h3'
        textAlign='left'
        sx={{ mb: 3, ml: 2 }}
      >
        {heading}
      </Typography>
      <Divider sx={{ width: '100%', mt: 5, mb: 4, borderColor: '0B4F6C' }} />
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          px: 3,
          pb: 3,
          borderRadius: 5,
        }}
      >
        {children}
      </Box>
    </Container>
  );
}
