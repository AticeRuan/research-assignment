'use client';
import { Quicksand, Abril_Fatface, Josefin_Sans } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const quicksand = Quicksand({
  weight: ['500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const abrilfatface = Abril_Fatface({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
});

const josefinsans = Josefin_Sans({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  palette: {
    type: 'light',

    divider: '#0B4F6C',
  },
  typography: {
    fontFamily: quicksand.style.fontFamily,
    h3: {
      fontFamily: abrilfatface.style.fontFamily,
    },
    h5: {
      fontFamily: josefinsans.style.fontFamily,
    },
  },
});

export default theme;
