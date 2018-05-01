import React from 'react';
import { Appear, SlideSet, Slide, BlockQuote, Cite, Image } from 'spectacle';
import classNames from 'classnames';
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
  ImageCard,
  AsymmetricComponentPlayground,
  CodePane,
  Quote,
} from 'components';
import images from 'images';
import * as codeSamples from 'code-samples';

export const systemComponentsSlides = (
  <SlideSet>
    <Slide>
      <Heading f={1} margin="0 0 4rem 0">
        What Even Is A Component?
      </Heading>
      <Appear>
        <div>
          <Text>
            Everything!<br />Start as small as a single HTML tag.
          </Text>
        </div>
      </Appear>
    </Slide>
    <Slide>
      <Text>
        <Link href="http://jxnblk.com/rebass/components" textColor="green">
          rebass/components
        </Link>{' '}
        is a great example of the type of components you should build & good
        APIs for design system components.
      </Text>
    </Slide>
    <Slide>
      <Heading f={1}>Basic Components</Heading>
      <List>
        <ListItem>
          Box <Inline f={2}>(general purpose layout component)</Inline>
        </ListItem>
        <ListItem>Text</ListItem>
        <ListItem>Heading</ListItem>
        <ListItem>Card</ListItem>
        <ListItem>
          Avatar <Inline f={2}>(circle image)</Inline>
        </ListItem>
        <ListItem>Button</ListItem>
      </List>
    </Slide>
    <Slide bgColor="#F4F4F4">
      <Heading f={3} textColor="primary" margin="0 0 2rem 0">
        Exercise #1: Profile Card
      </Heading>
      <Image src={images.tachyonsCard} width={256} style={{ marginLeft: 0 }} />
    </Slide>
    <Slide bgColor="#F4F4F4">
      <div className="flex items-center overflow-hidden">
        <Image
          src={images.tachyonsCardSlices}
          width={256}
          style={{
            border: '1px solid #036cdb',
          }}
        />
        <Appear>
          <div>
            <CodePane
              margin="0 0 2rem 2rem"
              textSize="1.4rem"
              source={codeSamples.tachyonsCard}
            />
          </div>
        </Appear>
      </div>
    </Slide>
    <Slide>
      <Heading f={3} margin="0 0 1rem 0">
        Exercise #2: Aldo Product Card
      </Heading>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 222px)',
          gridTemplateRows: 'repeat(2, 281.25px)',
          gridGap: '1rem',
          gridAutoFlow: 'dense',
        }}
      >
        <img src={images.aldoProductCard_1} />
        <img src={images.aldoProductCard_2} />
        <img src={images.aldoProductCard_3} />
        <img src={images.aldoProductCard_4} />
        <img src={images.aldoProductCard_5} />
        <img src={images.aldoProductCard_6} />
      </div>
    </Slide>
    <Slide>
      <Heading f={1}>Responsive Props</Heading>
      <CodePane textSize="1.5rem" source={codeSamples.responsiveProps} />
    </Slide>
  </SlideSet>
);
