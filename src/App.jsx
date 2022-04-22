import logo from './logo.svg';
import CodeContainer from './components/codeContainer/codeContainer';
import { networkSwitcher, addTokenToMetamask, removeEFromNumber, createNewWallet } from 'tech-mask-utils';

function App() {
  const codeStringSwitcher = `networkSwitcher(56)`
  const codeStringAddToken = `addTokenToMetamask("0x1D2F0da169ceB9fC7B3144628dB156f3F6c60dBE", "XRP", 18)}`
  const codeStringRemoveE = `removeEFromNumber(0.2323e+18)`
  const codeStringNewWallet = `createNewWallet(56)`

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main className='wrapper'>
        <div className='section'>
          <h2 className='title'>Metamask functions:</h2>
          <CodeContainer codeString={codeStringSwitcher} callback={() => networkSwitcher(56)} funcName={'networkSwitcher'}/>
          <CodeContainer
            codeString={codeStringAddToken}
            callback={() => addTokenToMetamask('0x1D2F0da169ceB9fC7B3144628dB156f3F6c60dBE', 'XRP', 18)} funcName={'addTokenToMetamask'}
          />
        </div>
        <div className='section'>
          <h2 className='title'>Common functions:</h2>
          <CodeContainer
            codeString={codeStringRemoveE}
            callbackWithReturn={() => removeEFromNumber(0.2323e+18)} funcName={'removeEFromNumber'}
          />
          <CodeContainer
            codeString={codeStringNewWallet}
            callbackWithMultipleReturn={() => createNewWallet(56)} funcName={'createNewWallet'}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
