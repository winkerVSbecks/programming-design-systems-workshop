import React from 'react';
import { Deck } from 'spectacle';
import 'tachyons';

import createTheme from 'spectacle/lib/themes/default';
import { colours, fontFamilies } from 'theme';
import { introSlides, outroSlides } from './slides';

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
        {outroSlides}
      </Deck>
    );
  }
}
