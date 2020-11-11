import logo from './logo.svg';
import './App.css';
import styles from  './styles/styles.module.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <p className={styles.error}>THIS IS MY CSS MODULE STYLED PARA</p>
      </header>
    </div>
  );
}

export default App;
