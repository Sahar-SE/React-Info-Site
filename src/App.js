import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
    <header>
      <nav>
        <img src={logo} alt="react-log" width="60px"/>
      </nav>
      <h1>Reasons I am excited to learn react</h1>
    </header>
      <ol>
        <li>React is the most popular framework!</li>
        <li>React is too easy for learning</li>
        <li>It is very famous in software industry</li>
        <li>Many job opportunity</li>
      </ol>
      <footer>
        <p>c 2022 Amiri copy right reserved</p>
      </footer>
    </div>
  );
}

export default App;
