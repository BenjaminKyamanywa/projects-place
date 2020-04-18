import React, {useState} from 'react';
import Particles from 'react-particles-js';
import './App.css';
import Navigation from './components/navigation/Navigation';
import Rank from './components/rank/Rank';
import ImageLinkForm from './components/imagelinkform/ImageLinkForm';
import Logo from './components/logo/Logo';

const particlesOptions = {
  particles: {
    number: {
      value: 95,
      density: {
        enable: true,
        value_area: 900
      }
    }
  }
}

const App = (onInputChange, onButtonSubmit) => {
  // Declaring state 
  const [input, setInput] = useState('');

  onInputChange = (event) => {
    console.log(event.target.value)
  }

  onButtonSubmit = () => {
    console.log('Click');
  }

  return (
    <div className="App">
      <Particles className="particles"
        params={particlesOptions} />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm  onInputChange= { onInputChange } onButtonSubmit={ onButtonSubmit } />

      {/*  
      
      <faceRecognition /> */}
      
    </div>
  );
}

export default App;
