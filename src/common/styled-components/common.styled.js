import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';


import HeeboFont from './../../assets/fonts/Heebo/static/Heebo-Medium.ttf';

export default createGlobalStyle`
    @font-face {
        font-family: 'Heebo';
        url(${HeeboFont}) format('ttf'),
        font-weight: 300;
        font-style: normal;
    }
`;

export const ColorBar = styled.div`
  width: 100%;
  height: 5px;
  max-height: 5px;
  background-image: linear-gradient(to right, #1671ff 10%, #00b7ff 82%);
  position: absolute;
  top: 0;
`;


