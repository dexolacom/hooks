import {Result, RunButton, Wrapper, Content} from './styles'
import {atomOneDark} from 'react-syntax-highlighter/src/styles/hljs';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {ReactComponent as FuncIcon} from '../../icons/lighthing.svg';
import {useState} from 'react';


const CodeContainer = ({codeString, callback, callbackWithReturn, callbackWithMultipleReturn, funcName}) => {
  const [result, setResult] = useState()

  const funcChecker = () => {
    if (callback) return callback()
    if (callbackWithMultipleReturn) {
      const {...rest} = callbackWithMultipleReturn()
      const arr = []
      Object.keys(rest).forEach(key => arr.push(` ${key}`))
      return setResult(arr.toString())
    }
    setResult(callbackWithReturn)
  };

  return (
    <>
      <h4 className='subtitle'>
        {funcName &&
          <>
            <FuncIcon heigth={20} width={20}/> {funcName} ( )
          </>
        }
      </h4>
      <Wrapper>
        <Content>
          <SyntaxHighlighter language="js" style={atomOneDark}>
            {codeString}
          </SyntaxHighlighter>
          <RunButton onClick={() => funcChecker()}>run</RunButton>
          {result &&
            <>
              <Result>result:</Result> {result}
            </>
          }
        </Content>
      </Wrapper>
    </>
  );
};

export default CodeContainer;