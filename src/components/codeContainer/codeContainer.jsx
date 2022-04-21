import {RunButton, Wrapper} from './styles'
import {atomOneDark} from 'react-syntax-highlighter/src/styles/hljs';
import SyntaxHighlighter from 'react-syntax-highlighter';

const CodeContainer = () => {
  const codeString = `const hello = () => {
    console.log('boo')
  }`;
  return (
    <Wrapper>
      <SyntaxHighlighter language="javascript" style={atomOneDark}>
        {codeString}
      </SyntaxHighlighter>
      <RunButton>run</RunButton>
    </Wrapper>
  );
};

export default CodeContainer;