import React, {useState} from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import './App.css';
import Navigation from './components/navigation/Navigation';
import Signin from './components/signin/Signin';
import Register from './components/register/Register';
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

const App = (onInputChange, onButtonSubmit, calculateFaceLocation, displayFaceBox, onRouteChange, loadUser) => {
  // Declaring state variables
  const [input, setInput] = useState('');
  const [imageurl, setImageUrl] = useState('');
  const [box, setBox] = useState({});
  const [route, setRoute] = useState('signIn');
  const [isSignedIn, setisSignedIn] = useState(false);
  const [user, setUser] = useState({
            user: {
                    id: '',
                    name: '',
                    email: '',
                    entries: 0,
                    joined: ''
            }
  });

  loadUser = (data) => {
    setUser({ 
      user: {
            id: data.id,
            name: data.name,
            email: data.email,
            entries: data.entries,
            joined: data.joined
            }
    })
  }
 
  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('input-image');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }
  
  displayFaceBox = (box) => {
    setBox(box)
  }

  onInputChange = (event) => {
    setInput (event.target.value)
  }

  onButtonSubmit = () => {
    setImageUrl (input); 
    app.models.predict(Clarifai.FACE_DETECT_MODEL, input)
    .then(response => {
      if(response){
        fetch('http://localhost:4000/image', {
          method: 'PUT',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            id: user.user.id
          })
        })
          .then(response => response.json())
          .then(count => {
            setUser(Object.assign(user, {entries: count}))
          })
      }
      displayFaceBox(calculateFaceLocation(response))
    })
    .catch(err => console.log(err));
  }

  onRouteChange = (route) => {
    if (route === 'signOut') {
      setisSignedIn(false)
    } else if (route === 'home') {
      setisSignedIn(true)
    }
    setRoute(route);
  }

  return (
    <div className="App">
      <Particles className="particles"
        params={ particlesOptions } />
      <Navigation isSignedIn = { isSignedIn } onRouteChange= { onRouteChange }/>
      { route === 'home'
        ? <div>
            <Logo />
            <Rank name={ user.user.name} entries={ user.user.entries }/>
            {console.log(user.user.entries)}
            <ImageLinkForm  onInputChange= { onInputChange } onButtonSubmit={ onButtonSubmit } />
            <FaceRecognition box={ box } imageUrl = { imageurl }/>
          </div>
          : (
              route === 'signIn'
              ? <Signin loadUser={ loadUser } onRouteChange={ onRouteChange }/>
              : <Register onRouteChange={ onRouteChange } loadUser={ loadUser }/>
            )
      }
    </div>
  );
}

export default App;
