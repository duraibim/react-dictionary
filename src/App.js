import images from "./images.gif";
import Dictionary from "./Dictionary";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={images} className="images img-fluid" alt="images"/>     
        </header>

        <Dictionary />

        <footer className="App-footer">Coded by Manal</footer>
      </div>
    </div>
  );
}

export default App;
