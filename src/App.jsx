import logo from './logo.svg';
import CodeContainer from './components/codeContainer/codeContainer';
import {networkSwitcher} from 'tech-mask-utils';

function App() {
  const codeString = `const hello = () => {
    console.log('boo')
  }`;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main className='wrapper'>
        <CodeContainer codeString={codeString}/>
      </main>
      <button onClick={() => networkSwitcher()}></button>
    </div>
  );
}

export default App;
