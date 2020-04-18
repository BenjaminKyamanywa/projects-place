import React, {useState} from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import './App.css';
import Navigation from './components/navigation/Navigation';
import FaceRecognition from './components/facerecognition/FaceRecognition';
import Rank from './components/rank/Rank';
import ImageLinkForm from './components/imagelinkform/ImageLinkForm';
import Logo from './components/logo/Logo';

const app = new Clarifai.App({
  apiKey: 'ba2d8090585c4e208d7e59199456ddaf'
 });

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
    app.models.predict("a403429f2ddf4b49b307e318f00e528b", "https://samples.clarifai.com/face-det.jpg").then(
    function(response) {
      // do something with response
      console.log(response)
    },
    function(err) {
      // there was an error
    }
    );
  }

  return (
    <div className="App">
      <Particles className="particles"
        params={particlesOptions} />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm  onInputChange= { onInputChange } onButtonSubmit={ onButtonSubmit } />
      <FaceRecognition />
    </div>
  );
}

export default App;
