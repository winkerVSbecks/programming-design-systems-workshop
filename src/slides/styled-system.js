import React from 'react';
import { SlideSet, Slide, BlockQuote, Cite } from 'spectacle';
import classNames from 'classnames';
import styled, { css } from 'styled-components';
import * as styledSystem from 'styled-system';

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

const gradient = 'linear-gradient(20deg, #db7093, #daa357)';

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
    <Slide>
      <Heading f={1}>styled-system</Heading>

      <Text f={2} margin="0 0 4rem 0">
        Design system utilities for styled-components and other css-in-js
        libraries
      </Text>
      <Text f={2}>
        Props <Emoji v="🔀" /> Design System <Emoji v="➡️" /> CSS
      </Text>
    </Slide>
    <Slide>
      <div className="f3 pa3 bg-white black">JSX</div>
      <div className="pv4">
        <Emoji v="⬇️" />
      </div>
      <div className="f3 pa3 bg-white black">styled-system</div>
      <div className="pv4">
        <Emoji v="⬇️" />
      </div>
      <div className="f3 pa3 bg-white black lh-copy">
        styled-component, emotion, glamor, glamorous, cxs, fela (supports
        angular too), VueJS, etc.
      </div>
      <div className="pv4">
        <Emoji v="⬇️" />
      </div>
      <div className="f3 pa3 bg-white black">CSS</div>
    </Slide>
    <Slide>
      <Heading f={1}>Styled Components</Heading>
      <AsymmetricComponentPlayground
        theme="dark"
        right={1.5}
        previewBackgroundColor={gradient}
        scope={{ styled, css }}
        code={codeSamples.styledComponentsLink}
      />
    </Slide>
    <Slide>
      <Heading f={1}>Styled System</Heading>
      <AsymmetricComponentPlayground
        theme="dark"
        right={1.5}
        previewBackgroundColor={gradient}
        scope={{ styled, styledSystem }}
        code={codeSamples.systemBox}
      />
    </Slide>
  </SlideSet>
);
