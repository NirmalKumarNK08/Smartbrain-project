import './App.css';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/logo';
import ImageLinkForm from './components/ImageLinkForm/imagelinkform';
import Rank from './components/Rank/rank';

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
function App() {
  return (
    <div className="App">
      <Particles className='particles' 
        params={particlesOptions}/>
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
      {/*<FaceRecognition /> */}
    </div>
  );
}

export default App;
