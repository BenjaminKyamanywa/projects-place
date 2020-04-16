import React from 'react';
import './App.css';
import Navigation from './components/navigation/Navigation';
import Rank from './components/rank/Rank';
import ImageLinkForm from './components/imagelinkform/ImageLinkForm';

import Logo from './components/logo/Logo';

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />

      {/*  
      
      <faceRecognition /> */}
      
    </div>
  );
}

export default App;
