"use client"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';
import { Link as MuiLiink } from '@mui/material';
import { usePathname } from 'next/navigation';
import { Monofett,Montserrat } from 'next/font/google';

export const pages = [
    { name: 'Client-Server Computing', href: '/client-server' },
    { name: 'SPAs', href: '/spas' },
    { name: 'Rest APIs', href: '/rest-api' },
    { name: 'Document Databases', href: '/nosql' },
    { name: 'Frameworks', href: '/frameworks' },

];

const monofett=Monofett({
    weight: ['400'],
    subsets: ['latin'],
    display: 'swap'
})

const montserrat=Montserrat({
    weight: ['400','500','600'],
    subsets: ['latin'],
    display: 'swap'
})

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
const pathName =usePathname();
 


  return (
    <AppBar position="fixed"  sx={{bgcolor:"#63B0CD",boxShadow:"none"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
         <Box sx={{  mr: 2, display: { xs: 'none', md: 'flex' },flexDirection:"column",textDecoration: 'none',}} component="a" href="/" 
         >
             <Typography
            variant="h6" 
             sx={{   fontWeight: 700,
              letterSpacing: '.1rem',
              color: '#0B4F6C',}}
            className={monofett.className}
          >
            COMP.
          </Typography>
          <Typography 
           variant="h6" 
           sx={{   fontWeight: 700,
            letterSpacing: '.1rem',
            color: '#0B4F6C',mt:-2}}
          className={monofett.className}>
            7214</Typography>
         </Box>
         

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                 <MuiLiink component={Link} key={page.name} href={page.href} underline='none'>
                    <MenuItem >
                     <Typography textAlign="center" sx={{fontSize:".9rem"}}>{page.name}
                     </Typography>
                    
                     </MenuItem>
                 </MuiLiink>
              ))}
            </Menu>
          </Box>
      
          <Typography
            variant="h5"
            noWrap
            component="a"
        
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            COMP.7214 
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' },justifyContent: 'right', mr:2 }}>
            {pages.map((page) =>{
                const isActive=pathName.startsWith(page.href);
                return(
               
                <MuiLiink component={Link} key={page.name   } href={page.href} underline='none'>
              <Button
                key={page.name}
                onClick={handleCloseNavMenu}
                className={montserrat.className}
                sx={isActive?{ my: 2, color: 'white', display: 'block',fontWeight:"bold",fontSize:"0.8rem",}:{my:2, color:'#ECEBE4', display:'block',fontSize:"0.8rem"}}
              >
                {page.name}
              </Button>
              </MuiLiink>
            )})}
          </Box>


        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
