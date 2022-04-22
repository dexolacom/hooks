import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 1em;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  max-width: fit-content;
  position: relative;
  background-color:  #282c34;
`

export const Content = styled.div`
  padding-top: 10px;
`

export const RunButton = styled.button`
  background: darkgrey;
  color: slategrey;
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
    background-color: springgreen;
    color: #000;
  }
`

export const Result = styled.span`
  font-size: 16px;
  color: springgreen;
`