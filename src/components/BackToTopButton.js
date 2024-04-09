'use client';
import React, { useState, useEffect } from 'react';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Box, Tooltip, Typography } from '@mui/material';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;

    // Set visibility based on scroll position
    setIsVisible(scrollTop > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    // Attach the scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Fab
      color='#63B0CD'
      variant='extended'
      aria-label='back-to-top'
      onClick={scrollToTop}
      style={{
        position: 'fixed',
        bottom: 50,
        right: 16,
        display: isVisible ?'block':'none',
      }}
    >
      <Box
        sx={{
          flexDirection: 'column',
          alignItems: 'center',
          display: 'flex',
        }}
      >
        <KeyboardArrowUpIcon />
        <Typography variant='caption' sx={{ fontSize: '.5rem', mt: -0.5 }}>
          Back to Top
        </Typography>
      </Box>
    </Fab>
  );
};

export default BackToTopButton;
