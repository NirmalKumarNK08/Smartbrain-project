import './App.css';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import Clarifai from 'clarifai';
import Logo from './components/Logo/logo';
import ImageLinkForm from './components/ImageLinkForm/imagelinkform';
import Rank from './components/Rank/rank';
import { Component } from 'react';

const particlesOptions = {
  particles: {
    number: {
      value: 70,
      density: {
        enable: true, 
        value_area: 900
      }
    }
  }
}

const app = new Clarifai.App({
 apiKey: 'f61f9d8eefb14acca59922d6a374f39a'
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: ''
    }
  }

  onInputChange = (e) => {
    console.log(e.target.value)
  }

  onButtonSubmit = () => {
    console.log('clicked!')
    app.models.predict("f61f9d8eefb14acca59922d6a374f39a", "https://images.newindianexpress.com/uploads/user/imagelibrary/2020/9/15/w900X450/rowan_IG.jpg?w=400&dpr=2.6").then(
      function(response) {
        console.log(response);
      },
      function(err) {
        //asdf
      }
    )
  }

  render() {
    return (
    <div className="App">
        <Particles className='particles' 
          params={particlesOptions}/>
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={ this.onInputChange } onButtonSubmit={ this.onButtonSubmit }/>
        {/*<FaceRecognition /> */}
      </div>
    );
  }
}

export default App;
