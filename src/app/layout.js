import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import Navbar, { pages } from '@/components/Navbar';
import { Box, CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material';
import theme from '@/theme';
import icon from './favicon.ico';
import Footer from '@/components/Footer';
import BackToTopButton from '@/components/BackToTopButton';

export const metadata = {
  title: 'Client-Server Web Development',
  description: 'Rearch Assignment',
  icons: {
    favicon: './favicon.ico',
  },
};
export default function RootLayout(props) {
  return (
    <CssBaseline>
      <html lang='en'>
        <body>
          <Navbar />
          <BackToTopButton />
          <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
              <Box
                sx={{
                  mt: 15,
                  mx: { sm: 5, md: 10, lg: 30, xl: 50 },
                  minHeight: '100vh',
                }}
              >
                {props.children}
              </Box>
            </ThemeProvider>
          </AppRouterCacheProvider>
          <Footer />
        </body>
      </html>
    </CssBaseline>
  );
}
