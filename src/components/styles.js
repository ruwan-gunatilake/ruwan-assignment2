import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
    padding: 0;
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;
    background-color: #fafafa;
    box-sizing: border-box;
    min-width:480px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
`;
export const SelectCurrency = styled.select`
  font-size: 1rem;
  height: 2.9rem;
  width: 15rem;
  background-color: #fff;
  border-radius: 5px;
  border: 1px solid #dbe2e8;
  padding-left:10px;
  padding-right:10px;
  :focus {
    outline: none;
  }
`;
export const AppWrapper = styled.div`
  text-align: center;
  background-color: #fff;
  max-width: 800px;
  margin: 3rem auto 0 auto;
  border-radius: 8px;
  padding: 0.75rem 1rem;
  position: relative;
`;

export const CurrencyInfo = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
  & > h4 {
    margin: 0 1.2rem 0 0;
    font-size: 1.2rem;
    color: #4b4897;
  }
`;
export const CurrencyConverter = styled.div`
  display: flex;
  margin-bottom: 1rem;
  justify-content: center;
`;


export const Input = styled.input`
  width: 14rem;
  padding: 0.7em;
  border: 1px solid #dbe2e8;
  color: #2e3d49;
  max-width: 50rem;
  margin-right: 2.5rem;
  outline: none;
  height: 3rem;
  font-size: 0.9rem;
  border-radius: 5px;
`;

export const Error = styled.div`
  color: red;
  font-size: 1rem;
  margin-top: 1rem;
  text-align: center;
`;

export const Loading = styled.div`
  text-align: center;
  padding: 1rem;
`;
