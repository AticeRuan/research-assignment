import { Box, Typography } from '@mui/material';
import Link from 'next/link';
export default function TableOfContent({ tableHeadings }) {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'left',
        p: 4,
        flexDirection: 'column',
        border: '1px solid #63B0CD',
        mb: 8,
      }}
    >
      <Typography variant='h6' sx={{ color: '#63B0CD' }}>
        Table of content
      </Typography>
      <Typography component={Box}>
        <ul>
          {tableHeadings.map((heading, index) => (
            <li
              key={heading}
              style={{ listStyleType: 'none', textDecoration: 'none' }}
            >
              <Link
                href={`#${index + 1}`}
                style={{ textDecoration: 'none', color: '#0d81a1' }}
              >
                - {heading}
              </Link>
            </li>
          ))}
        </ul>
      </Typography>
    </Box>
  );
}
