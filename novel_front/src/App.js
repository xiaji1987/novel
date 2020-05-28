import React from 'react';
import './App.scss'
import { BrowserRouter, Route } from 'react-router-dom'
import Initial from './pages/Initial'
import Home from './pages/Home'
import './styles/scssConfig.scss'

function App() {
  return (
    <>
      <BrowserRouter>
        <Route exact component={Initial} path="/"></Route>
        <Route exact component={Home} path="/home"></Route>
      </BrowserRouter>
    </>
  );
}

export default App;
