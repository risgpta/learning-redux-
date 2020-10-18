import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';

import {Provider} from 'react-redux';
import { ThemeProvider } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from '@material-ui/core/CssBaseline';
import { Paper } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import blue from '@material-ui/core/colors/blue';


import store from './store';

import View from './view';
import Header from './header';
import Counter from './counter';



function App() {

  const [mode,Setmode] = useState(true);

  const over = {
    // Style sheet name ⚛️
    MuiButton: {
      // Name of the rule
      text: {
        // Some CSS
        background: mode ? 'black' : 'white',
          borderRadius: 3,
          border: 0,
          color: 'white',
          height: 48,
          padding: '0 30px',
          boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      },
    },
  }

  const themeLight = {
    palette: {
      type: "light",
      primary: {
        main: '#35a4c5',
      },
      secondary: {
        main: '#0044ff',
      },
      mycolor: { backgroundColor: "black", color: '#FFF' },
      mycolor2 : {backgroundColor: "grey" , color: '#FFF'}
    },
   
  }
  
  const themeDark = {
    palette: {
      type: "dark",
      primary: {
        main: '#fbff16',
      },
      secondary: {
        main: '#dd8b78',
      },
      mycolor: { backgroundColor: "white", color: '#000' },
      mycolor2 : {backgroundColor: "green" ,color: '#000'}
    }
  }

  const handleToggle = () => {
    Setmode(!mode)
  }

 const theme = createMuiTheme(mode ? themeLight : themeDark)

  return (
    <ThemeProvider theme={theme}>
    <CssBaseline/>
    <Provider store={store}>
    <Button style={theme.palette.mycolor} onClick={handleToggle}>{!mode ? 'Light Mode' : 'Dark Mode'} </Button>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Header theme={theme}/>
        <Button variant="contained" color="primary" >CLICK HERE</Button>
        <br/>
        <Counter/>
        <Button variant="contained" color="secondary">
        Secondary
    </Button>
    <br/>
   <Button style={theme.palette.mycolor}>My click </Button>
   <br/>
        <View theme={theme}/>
      </header>
    </div>
    </Provider>
    </ThemeProvider>
  );
}

export default App;

