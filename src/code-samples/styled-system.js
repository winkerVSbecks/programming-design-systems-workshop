export const styledComponentsLink = `
const Link = styled.a\`
  display: inline-block;
  line-height: 2;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 12rem;
  background: papayawhip;
  color: #061329;
  font-weight: bold;

  \${props =>
    props.inverted &&
    css\`
      background-color: #061329;
      color: papayawhip;
    \`};
\`;

render(
  <div>
    <Link>Documentation</Link>
    <Link inverted>GitHub</Link>
  </div>
)`;

export const styledSystemBox = `
const Box = styled.div\`
  \${space}
  \${width}
  \${fontSize}
  \${color}
  \${flex}
  \${alignSelf}
\`;

render(
  <Box bg="white" p={3} color="palevioletred">
    This is a Box
  </Box>
);`;

export const theme = `// theme.js
// breakpoint values
// any array length works with styled-system
const breakpoints = ['40em', '52em', '64em'];

const colors = {
  text: '#024',
  blue: '#07c',
  dark: {
    blue: '#058',
  },
  gray: ['#666', '#999', '#ccc', '#eee'],
};

const space = [0, 4, 8, 16, 32, 64, 128, 256, 512];


const fontSizes = [
  12, 14, 16, 20, 24, 32, 48, 64, 96, 128
];

const lineHeights = [1, 1.125, 1.25, 1.5];

const fontWeights = {
  normal: 500,
  bold: 700,
};

const letterSpacings = {
  normal: 'normal',
  caps: '0.25em',
};




// border-radius
const radii = [0, 2, 4, 8];

const borders = [0, '1px solid', '2px solid'];



const shadows = [
  \`0 1px 2px 0 \${colors.text}\`,
  \`0 1px 4px 0 \${colors.text}\`,
];



const theme = {
  breakpoints,
  colors,
  space,
  fontSizes,
  lineHeights,
  fontWeights,
  letterSpacings,
  radii,
  borders,
  shadows,
};

export default theme;




// app.js
import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './theme';

const App = props => (
  <ThemeProvider theme={theme}>
    {/* ... */}
  </ThemeProvider>
);




`;

export const systemComponentBox = `const Box = system(
  {
    bg: 'white',
    p: 2,
    color: 'palevioletred',
  },
  'space',
  'width',
  'fontSize',
  'color',
  'flex',
  'alignSelf',
);

render(<Box p={3}>This is a Box</Box>);
`;

export const systemComponentCore = `
const Box = system(
  'space',
  'width',
  'fontSize',
  'color',
  'flex',
  'alignSelf',
);
Box.displayName = 'Box';

const Text = system(
  {
    is: 'p',
    fontSize: 2,
    color: 'black',
  },
  'space',
  'color',
  'width',
  'fontSize',
  'fontWeight',
  'textAlign',
  'lineHeight',
);
Text.displayName = 'Text';

const Heading = system(
  {
    is: 'h1',
    m: 0,
    fontSize: 6,
    color: 'black',
  },
  'space',
  'color',
  'width',
  'fontSize',
  'fontWeight',
  'textAlign',
  'lineHeight',
);
Heading.displayName = 'Heading';

render(
  <Box p={3}>
    <Heading mb={4}>Title</Heading>

    <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</Text>

    <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</Text>
  </Box>
);`;
