import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Contact from './Components/Contact';
import About from './Components/About';
import Help from './Components/Help';
import Header from './Components/Header';
import Test, { Test2, Test3 } from './Components/Test';

function App() {
  return <>
    {/* <Test/> */}
    <Routes>
      <Route path="/" element={<Header />} />
      <Route path="/Home" element={<Home />} />
      <Route path='/About' element={<About />} />
      <Route path='/Contact' element={<Contact />} />
      <Route path='/Help' element={<Help />} />
    </Routes>
    {/* <Routes>
      <Route path="/" element={<Test />} />
      <Route path="/t2" element={<Test2/>} />
      <Route path='/t3' element={<Test3 />} />
    </Routes> */}
  </>
}

export default App;
