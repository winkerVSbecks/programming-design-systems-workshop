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
export const theme = {
  breakpoints: [32, 48, 64],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [12, 14, 16, 20, 24, 36, 48, 80, 96],
  fontWeights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  lineHeights: {
    solid: 1,
    title: 1.25,
    copy: 1.5,
  },
  letterSpacings: {
    normal: 'normal',
    tracked: '0.1em',
    tight: '-0.05em',
    mega: '0.25em',
  },
  fonts: {
    serif: 'athelas, georgia, times, serif',
    sansSerif:
      '-apple-system, BlinkMacSystemFont, "avenir next", avenir, "helvetica neue", helvetica, ubuntu, roboto, noto, "segoe ui", arial, sans-serif',
  },
  borders: [
    0,
    '1px solid',
    '2px solid',
    '4px solid',
    '8px solid',
    '16px solid',
    '32px solid',
  ],
  radii: [0, 2, 4, 16, 9999, '100%'],
  width: [16, 32, 64, 128, 256],
  heights: [16, 32, 64, 128, 256],
  maxWidths: [16, 32, 64, 128, 256, 512, 768, 1024, 1536],
  colors: {
    black: '#000',
    'near-black': '#111',
    'dark-gray': '#333',
    'mid-gray': '#555',
    gray: ' #777',
    silver: '#999',
    'light-silver': '#aaa',
    'moon-gray': '#ccc',
    'light-gray': '#eee',
    'near-white': '#f4f4f4',
    white: '#fff',
    transparent: 'transparent',
    black: [
      'rgba(0,0,0,.0125)',
      'rgba(0,0,0,.025)',
      'rgba(0,0,0,.05)',
      'rgba(0,0,0,.1)',
      'rgba(0,0,0,.2)',
      'rgba(0,0,0,.3)',
      'rgba(0,0,0,.4)',
      'rgba(0,0,0,.5)',
      'rgba(0,0,0,.6)',
      'rgba(0,0,0,.7)',
      'rgba(0,0,0,.8)',
      'rgba(0,0,0,.9)',
    ],
    white: [
      'rgba(255,255,255,.0125)',
      'rgba(255,255,255,.025)',
      'rgba(255,255,255,.05)',
      'rgba(255,255,255,.1)',
      'rgba(255,255,255,.2)',
      'rgba(255,255,255,.3)',
      'rgba(255,255,255,.4)',
      'rgba(255,255,255,.5)',
      'rgba(255,255,255,.6)',
      'rgba(255,255,255,.7)',
      'rgba(255,255,255,.8)',
      'rgba(255,255,255,.9)',
    ],
    'dark-red': '#e7040f',
    red: '#ff4136',
    'light-red': '#ff725c',
    orange: '#ff6300',
    gold: '#ffb700',
    yellow: '#ffd700',
    'light-yellow': '#fbf1a9',
    purple: '#5e2ca5',
    'light-purple': '#a463f2',
    'dark-pink': '#d5008f',
    'hot-pink': ' #ff41b4',
    pink: '#ff80cc',
    'light-pink': '#ffa3d7',
    'dark-green': '#137752',
    green: '#19a974',
    'light-green': '#9eebcf',
    navy: '#001b44',
    'dark-blue': '#00449e',
    blue: '#357edd',
    'light-blue': '#96ccff',
    'lightest-blue': '#cdecff',
    'washed-blue': '#f6fffe',
    'washed-green': '#e8fdf5',
    'washed-yellow': '#fffceb',
    'washed-red': '#ffdfdf',
  },
};




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
