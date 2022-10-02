import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import HomePage from './Components/Homepage'
import PictureTest from './Components/PictureTest'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './Components/Navbar';



function App() {
  
  const [descriptions, setDescriptions] = useState([])
  const [isStart, setIsStart] = useState(false);
  const [isStart2, setIsStart2] = useState(false);

  
  console.log(descriptions)

  return (
    

    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/*" element={<HomePage isStart={isStart} isStart2={isStart2}/>}/>
        <Route path="/pictures-test" element={<PictureTest descriptions={descriptions}  setDescriptions={setDescriptions} setIsStart={setIsStart}/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
