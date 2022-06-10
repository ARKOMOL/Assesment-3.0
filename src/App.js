import './App.css';
import logo from './asserts/logo.png'
import Body from './Body';
import Footer from './Footer';
import Machine from './Machine';
function App() {
  return (
    <div className="App">
        
        <h1>Hello world</h1>
        <img className='w-20' width={250} src={logo} alt="" />
       <Body/>
       <Machine/>
        <Footer/>
    </div>
  );
}

export default App;
