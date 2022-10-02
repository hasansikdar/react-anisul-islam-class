import logo from './logo.svg';
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { HiCamera,HiArrowSmRight } from "react-icons/hi";
import { IoLogoFacebook } from "react-icons/io5";
import './App.css';
import Card1 from './component/Cards/Card1';
function App() {
  
  return (
    <div className="App">
        <Card1></Card1>
        <span><FaFacebookF /></span>
        <span><FaYoutube /></span>
        <span><HiCamera /></span>
        <button>Read More <HiArrowSmRight /></button>
        <span><IoLogoFacebook/></span>
    </div>
  );
}

export default App;
