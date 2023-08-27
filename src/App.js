import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Banner from './component/Banner';
import About from './component/About';
import Service from './component/Service';
import Contact from './component/Contact';
// import Toch from './component/Toch';
function App() {
  return (
    <div>
      
     <Header/>

     <Banner/>

      <About/>
     
     <div style={{marginTop:'8%'}}>
     <Service/>
     </div>

     <div style={{marginTop:'8%'}}>
     <Contact/>
     </div>

    </div>
  );
}

export default App;
