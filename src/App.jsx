import logo from './logo.svg';
import './App.css';
import CodeContainer from './components/codeContainer/codeContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main className='wrapper'>
        <CodeContainer/>
      </main>
    </div>
  );
}

export default App;
