import { Typography, Box } from '@mui/material';
export default function SubContent({ heading, children, id }) {
  return (
    <>
      <Typography
        variant='h5'
        sx={{ fontWeight: 'bold', color: '#76bed0' }}
        id={id}
      >
        {heading}
      </Typography>

      <Typography
        component={Box}
        textAlign='justify'
        sx={{ pb: 5, width: '100%', fontSize: '.8rem' }}
      >
        {children}{' '}
      </Typography>
    </>
  );
}
