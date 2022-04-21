import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 1em;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  max-width: 400px;
  position: relative;
`

export const RunButton = styled.button`
  background: springgreen;
  padding: 5px;
  border: none;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 600;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  
  &:hover {
    color: #fff;
  }
`