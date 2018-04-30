import React from 'react';
import { Deck } from 'spectacle';
import 'tachyons';
import 'prismjs/components/prism-css';

import createTheme from 'spectacle/lib/themes/default';
import { colours, fontFamilies } from 'theme';
import {
  introSlides,
  tachyonsSlides,
  styledSystemSlides,
  outroSlides,
} from './slides';

const theme = createTheme(colours, fontFamilies);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={[]}
        progress="bar"
        transitionDuration={500}
        theme={theme}
      >
        {introSlides}
        {tachyonsSlides}
        {styledSystemSlides}
        {outroSlides}
      </Deck>
    );
  }
}
