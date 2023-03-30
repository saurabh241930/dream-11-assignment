import React from 'react';
import logo from './logo.svg';
import './App.css';
import { getCelebrities } from './redux/celebritySlice';
import { AppDispatch } from './redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import List from './components/List';


function App() {


  return (
    <>
      <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <List />
      </Grid>
      </Box>

    </>
  );
}

export default App;
