import './App.css';
import Home from './Components/Home';
import Contact from './Components/Contact';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';



function App() {
  return (
    <>
      <Router> 
        <Routes> 
          <Route path='/' element={<Home/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
