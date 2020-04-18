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

const App = (onInputChange, onButtonSubmit, calculateFaceLocation) => {
  // Declaring state variables
  const [input, setInput] = useState('');
  const [imageurl, setImageUrl] = useState('');
  const [box] = useState();

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('input-image')
  }

  onInputChange = (event) => {
    setInput (event.target.value)
  }

  onButtonSubmit = () => {
    setImageUrl (input); 
    app.models.predict(Clarifai.FACE_DETECT_MODEL, input)
    .then(response => calculateFaceLocation(response))
    .catch(err => console.log(err));
  }

  return (
    <div className="App">
      <Particles className="particles"
        params={particlesOptions} />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm  onInputChange= { onInputChange } onButtonSubmit={ onButtonSubmit } />
      <FaceRecognition imageUrl = { imageurl }/>
    </div>
  );
}

export default App;
