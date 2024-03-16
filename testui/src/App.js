import logo from './logo.svg';
import './App.css';
// import './ProductList.css'
// import ProductList from './ProductList'
// import StatePrep from './components/StatePrep';
// import Embededdd from './components/StatePrep';
// import Buttons from './components/StatePrep';
// import EvenCounter from './components/EvenCounter';
// import OddCounter from './components/OddCounter';
// import StopWatch from './components/StopWatch';
// import "./components/StopWatch.css";
// import Headings from './components/Headings';
// import StateChange from './components/StateChange';
// import FunctionState from './components/FunctionlState';
// import Age from './components/Age';
import FunctionlState from './components/FunctionalState';
function App() {
  return <>
    {/* <ProductList/> */}
    {/* <StatePrep/> */}
    {/* <Embededdd/> */}
    {/* <Buttons/> */}
    {/* <EvenCounter/> */}
    {/* <OddCounter/> */}
    {/* <StopWatch /> */}
    {/* <StateChange /> */}
    {/* <Headings/> */}
    {/* <FunctionState/> */}
    {/* <Age/> */}
    <FunctionlState age="25" name = {{hello:"kya hua"}} data={{ name: "devendra-vishvakarma", ages: 18, collage: "prestige institute of enginnering managment and reaserch" }}/>
  </>
}

export default App;
