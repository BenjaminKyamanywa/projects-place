import React from 'react';
import './App.css';
import Navigation from './components/navigation/Navigation';
import Logo from './components/navigation/Logo';

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <Logo />
      {/*  
      <ImageLinkForm />
      <faceRecognition /> */}
      
    </div>
  );
}

export default App;
