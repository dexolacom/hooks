import {Result, RunButton, Wrapper} from './styles'
import {atomOneDark} from 'react-syntax-highlighter/src/styles/hljs';
import SyntaxHighlighter from 'react-syntax-highlighter';

const CodeContainer = ({codeString, codeResult, callback}) => {
  return (
    <Wrapper>
      <SyntaxHighlighter language="javascript" style={atomOneDark}>
        {codeString}
      </SyntaxHighlighter>
      <RunButton onClick={() => callback()}>run</RunButton>
      <Result>result: {codeResult}</Result>
    </Wrapper>
  );
};

export default CodeContainer;