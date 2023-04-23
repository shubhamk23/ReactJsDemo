import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';

function App() {
  // Here we can return only one tag (This is JSX)
    const [mode, setMode] = useState('light'); //whether Dark Mode Enabled or not

    const toggleMode = ()=>{
      if(mode === "light")
      {
          setMode("dark");
          document.body.style.backgroundColor= '#072044';
      }
      else{
        setMode("light");
        document.body.Style.backgroundColor= 'white';

      }
    }
  return (
    <>
    <Navbar title="TextUtils" mode = {mode} toggleMode={toggleMode}/>
    <div className="container my-3">
      <TextForm heading="Enter the text to analyze below" mode={mode}/>

      {/* <About/> */}
    </div>

{/* <Navbar/> */}
    </>



 // //   if I want to run this tag before starting app then I have to mention this tag inside empty tag.
  // <>
  // <div className="blank">Lovely</div>
  // <nav>
  //   <li>Home</li>
  //   <li>About</li>
  //   <li>Contact</li>
  // </nav>
  // <img src="" alt=""/>
  //   <div className="container">
  //     <h1>Hello {name}</h1>
  //     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis eaque culpa hic sapiente aliquam facere numquam amet cumque molestias quos, esse necessitatibus fugit autem voluptas similique excepturi ut minus dolor repellat. Ducimus, quibusdam impedit!</p>
  //   </div>
  // </> */

  );
}

export default App;
