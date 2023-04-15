
import './App.css';

function App() {
  // Here we can return only one tag (This is JSX)
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Textutils</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">About</a>
        </li>

      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
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
