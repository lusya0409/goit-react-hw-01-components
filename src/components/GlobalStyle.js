import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
  body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
   font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.67;
  letter-spacing: 0.02em;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
ul {
    margin: 0;
    padding: 0;
    list-style: none;
    
}
img {
    display: block;
    max-width: 100%;
    object-fit: cover;
    height: auto;
}
p {
  margin: 0;
  font-weight: normal;
  color: #cccccc;
}
`;
