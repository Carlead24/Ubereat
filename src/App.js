import './App.css';
import Landing from './Components/Landing';
import Nav from './Components/Nav';
import Map from './Components/Map';
import Cities from './Components/Cities';
import Countries from './Components/Countries';
import Contact from './Components/Contact';
import Newlanding from './Components/Newlanding';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <Nav/>
      <Newlanding/>
      <Landing/>
      <Map/>
      <Cities/>
      <Countries/>
      <Contact/>
      <Footer/>
      
    </div>
  );
}

export default App;
