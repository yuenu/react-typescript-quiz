import styled, { createGlobalStyle } from 'styled-components'

import BGImage from './images/bg.jpg'

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  html {
    height: 100%;
    box-sizing: border-box;
    font-family: 'Itim', cursive;
  }

  body {
    background-image: url(${BGImage});
    background-size: cover;
    
    padding: 0 20px;
    display: flex;
    justify-content: center;
  }
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  margin-top:10vh;

  > p {
    color: #fff;
  }

  .score {
    color: #fff;
    font-size: 2rem;
  }

  h1 {
    background-image: linear-gradient(180deg, #fff, #87f1ff);
    font-weight: 400;
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    filter: drop-shadow(2px 2px #0085a3);
    font-size: 70px;
    text-align: center;
    margin: 20px;
  }

  .start,
  .next {
    cursor: pointer;
    background: linear-gradient(180deg, #ffffff, #ffcc91);
    border: 2px solid #d38558;
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.15);
    border-radius: 100px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
  }

`
