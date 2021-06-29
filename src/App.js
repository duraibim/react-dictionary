import images from "./images.gif";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={images} className="images img-fluid" alt="images"/>     
      </header>
    </div>
  );
}

export default App;
