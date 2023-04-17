
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  // Here we can return only one tag (This is JSX)
  return (
    <>
    <Navbar title="TextUtils"/>
    <div className="container my-3">
      <TextForm heading="Enter the text to analyze below"/>
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
