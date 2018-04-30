import React from 'react';
import { SlideSet, Slide, BlockQuote, Cite } from 'spectacle';
import classNames from 'classnames';

import {
  Emoji,
  Heading,
  Text,
  List,
  ListItem,
  Link,
  Inline,
  ImageCard,
  AsymmetricComponentPlayground,
  CodePane,
  Quote,
} from 'components';
import images from 'images';
import * as codeSamples from 'code-samples';

export const styledSystemSlides = (
  <SlideSet>
    <Slide>
      <Heading
        textColor="primary"
        bgColor="secondary"
        padding="2rem"
        margin="0"
        lh="copy"
        f={1}
      >
        Building A<br />Component Based Design System<br />With CSS-in-JS
      </Heading>
    </Slide>
    <Slide>
      <Heading f={1}>CSS-in-JS</Heading>
      <BlockQuote>
        <Quote>
          A pattern where CSS is composed using JavaScript instead of defined in
          external files.
        </Quote>
        <Cite>
          <Link href="https://reactjs.org/docs/faq-styling.html#what-is-css-in-js">
            reactjs.org/docs/faq-styling
          </Link>
        </Cite>
      </BlockQuote>
    </Slide>
  </SlideSet>
);
