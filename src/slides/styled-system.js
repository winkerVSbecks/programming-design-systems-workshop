import React from 'react';
import { SlideSet, Slide, BlockQuote, Cite } from 'spectacle';
import styledSystem from 'styled-system';
import styled, { css } from 'styled-components';
import CodeSlide from 'spectacle-code-slide';
import system from 'system-components';

import {
  Emoji,
  Heading,
  Text,
  List,
  ListItem,
  Link,
  Inline,
  AsymmetricComponentPlayground,
  Quote,
} from 'components';
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
      <div className="f3 pa3 bg-white black">JSX / Template</div>
      <div className="pv4">
        <Emoji v="⬇️" />
      </div>
      <div className="f3 pa3 bg-white black">styled-system</div>
      <div className="pv4">
        <Emoji v="⬇️" />
      </div>
      <div className="f3 pa3 bg-white black lh-copy">
        styled-components, emotion, glamor, glamorous, cxs, fela (supports
        angular too), VueJS, etc.
      </div>
      <div className="pv4">
        <Emoji v="⬇️" />
      </div>
      <div className="f3 pa3 bg-white black">CSS</div>
    </Slide>
    <Slide note="demo const Text = props => <p {...props} />;">
      <Heading f={1}>
        Styled Components{' '}
        <Link
          f={3}
          target="_blank"
          textColor="blue"
          lh="solid"
          href="https://www.styled-components.com/docs/basics#getting-started"
          className="inline-flex items-center"
        >
          API <img alt="link" src="https://icon.now.sh/exit_to_app/20/2175FF" />
        </Link>
      </Heading>
      <AsymmetricComponentPlayground
        theme="dark"
        right={1.5}
        previewBackgroundColor={gradient}
        scope={{ styled, css }}
        code={codeSamples.styledComponentsLink}
      />
    </Slide>
    <Slide>
      <Heading f={1}>
        Styled System{' '}
        <Link
          f={3}
          target="_blank"
          textColor="blue"
          lh="solid"
          href="https://github.com/jxnblk/styled-system#api"
          className="inline-flex items-center"
        >
          API <img alt="link" src="https://icon.now.sh/exit_to_app/20/2175FF" />
        </Link>
      </Heading>
      <AsymmetricComponentPlayground
        theme="dark"
        right={1.5}
        previewBackgroundColor={gradient}
        scope={{ styled, ...styledSystem }}
        code={codeSamples.styledSystemBox}
      />
    </Slide>
    <Slide>
      <div className="flex items-center">
        <div>system-components</div>
        <div className="flex-auto self-stretch br bw3 mr3" />
        <div>
          <div className="f3 pa3 bg-white black mb3">
            clean-tag, defaults, etc.
          </div>
          <div className="f3 pa3 bg-white black mb3">styled-system</div>
          <div className="f3 pa3 bg-white black">styled-components</div>
        </div>
      </div>
    </Slide>
    <Slide>
      <Heading f={1}>
        System Components{' '}
        <Link
          f={3}
          target="_blank"
          textColor="blue"
          lh="solid"
          href="https://github.com/jxnblk/styled-system#system-components"
          className="inline-flex items-center"
        >
          API <img alt="link" src="https://icon.now.sh/exit_to_app/20/2175FF" />
        </Link>
      </Heading>
      <AsymmetricComponentPlayground
        theme="dark"
        right={1.5}
        previewBackgroundColor={gradient}
        scope={{ styled, system }}
        code={codeSamples.systemComponentBox}
      />
    </Slide>
    <Slide>
      <Heading f={1} margin="0 0 4rem 0">
        Styled System Ecosystem
      </Heading>
      <List>
        <ListItem f={2} margin="0 0 3rem 0">
          <Inline blue>system-components</Inline> simpler authoring experience
          when using styled-system
        </ListItem>
        <ListItem f={2} margin="0 0 3rem 0">
          <Inline green>styled-system</Inline> design system utilities to build
          design system components
        </ListItem>
        <ListItem f={2} margin="0 0 3rem 0">
          <Inline pink>styled-components</Inline> css-in-js library
        </ListItem>
      </List>
    </Slide>
    <CodeSlide
      transition={[]}
      lang="js"
      textSize="1.75rem"
      code={codeSamples.theme}
      ranges={[
        { loc: [0, 270], title: 'Design Constraints' },
        { loc: [0, 1], note: 'theme.js' },
        { loc: [1, 4], note: 'breakpoints' },
        {
          loc: [5, 16],
          note: (
            <div>
              colours
              <p>
                nested objects work as well<br />
                arrays can be used for scales of colors
              </p>
            </div>
          ),
        },
        {
          loc: [14, 17],
          note: (
            <div>
              <p>space is used for margin and padding scales.</p>
              <p>
                It's recommended to use powers of two to ensure alignment when
                used in nested elements.
              </p>
              <p>Numbers are converted to px</p>
            </div>
          ),
        },
        { loc: [17, 36], note: 'typographic scales' },
        { loc: [36, 40], note: 'border styles' },
        { loc: [43, 47], note: 'miscellaneous' },
        { loc: [50, 66], note: 'Your Design System Constraints' },
        { loc: [67, 78], note: 'Apply the theme' },
      ]}
    />
    <Slide>
      <div>
        <AsymmetricComponentPlayground
          theme="dark"
          right={1.5}
          align="left"
          scope={{ styled, system }}
          code={codeSamples.systemComponentCore}
        />
      </div>
    </Slide>
  </SlideSet>
);
