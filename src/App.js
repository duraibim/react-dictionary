// import images from "./images.gif";
import Dictionary from "./Dictionary";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1> Dictionary </h1>
        </header>

        <Dictionary />

        <footer className="App-footer">
        This project was coded by Manal Alduraibi🐞 and is Open-sourced on {""} 
          <a
            href="https://github.com/duraibim/react-dictionary" 
            target="_blank"
            rel="noopener noreferrer"
          >  GitHub</a> and hosted on <a
          href="https://flamboyant-visvesvaraya-0043f6.netlify.app" 
          target="_blank"
          rel="noopener noreferrer"
        > Netlify</a> 
          
          
          </footer> 
      </div>
    </div>
  );
}

export default App;
