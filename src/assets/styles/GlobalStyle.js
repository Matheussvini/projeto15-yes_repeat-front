import styled, { createGlobalStyle } from "styled-components";
import "react-circular-progressbar/dist/styles.css";

const GlobalStyle = createGlobalStyle`html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
body{
	font-family: 'Roboto', sans-serif;
	font-weight: 400;
	background-color: #F3F3F3;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
	color: #000;
}
html, body, #root{
  height: 100%;
}
input{
  background: #FFFFFF;
  width: 300px;
  height: 45px;
  border-radius: 5px;
  border: none;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  font-family: 'Raleway', sans-serif;
  font-weight: 400;
  font-size: 20px;
  padding: 0 11px;
  color: #254A38;
  ::placeholder{
    color: #F19620;
  }
  :disabled{
    background-color: #F2F2F2;
    border: 1px solid #D5D5D5;
    color: #AFAFAF;
  }
  @media (max-width: 300px) {
    width: 100%;
  }
}
button{
    background-color: #F19620;
	cursor: pointer;
    text-align: center;
	&:hover{
    opacity: 60%;
  }
}
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  min-height: calc(100vh - 48px);
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  padding: 24px;
  box-sizing: border-box;
`;

export const GreenContainer = styled.div`
  background-color: #254a38;
  position: relative;
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  padding: 24px;
  box-sizing: border-box;
`;

export const Title = styled.h1`
  width: 100%;
  height: 31px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 700;
  font-size: 26px;
  line-height: 30.52px;
  color: #ffffff;
`;

export default GlobalStyle;
