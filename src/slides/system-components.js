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
  OrderedList,
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
      <Heading f={1}>Component Best Practices</Heading>
      <OrderedList>
        <ListItem f={2}>Small Components</ListItem>
        <ListItem f={2}>Compose Variations</ListItem>
        <ListItem f={2}>Compose Complexity</ListItem>
        <ListItem f={2}>
          Use{' '}
          <Inline green f={2}>
            {'{children}'}
          </Inline>,{' '}
          <Inline blue f={2}>
            slots
          </Inline>{' '}
          or{' '}
          <Inline gold f={2}>
            projection
          </Inline>
        </ListItem>
        <ListItem f={2}>Avoid recreating the platform</ListItem>
      </OrderedList>
    </Slide>
    <Slide>
      <Heading f={1}>Core Components</Heading>
      <List>
        <ListItem>
          Box <Inline f={2}>(general purpose layout component)</Inline>
        </ListItem>
        <ListItem>Text & Heading</ListItem>
        <ListItem>
          Card &{' '}
          <Link href="http://jxnblk.com/rebass/components/Panel">Panel</Link>
        </ListItem>
        <ListItem>
          Image & Avatar <Inline f={2}>(circle image)</Inline>
        </ListItem>
        <ListItem>Button & Link</ListItem>
        <ListItem>Input, TextArea & Label</ListItem>
      </List>
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
      <Heading f={1} margin="0 0 4rem 0">
        My Process
      </Heading>
      <List marker="''">
        <ListItem f={2} margin="0 0 2rem 0">
          ✂️ Slice
        </ListItem>
        <ListItem f={2} margin="0 0 2rem 0">
          🔖 Assign{' '}
          <Inline f={3}>(system-component, an extension or custom)</Inline>
        </ListItem>
        <ListItem f={2} margin="0 0 2rem 0">
          👨🏽‍🏭 Compose
        </ListItem>
      </List>
    </Slide>
    <Slide bgColor="#F4F4F4">
      <Heading f={3} textColor="primary" margin="0 0 2rem 0">
        Exercise #1: Profile Card
      </Heading>
      <div className="flex items-center">
        <Image
          src={images.tachyonsCard}
          width={256}
          style={{ marginLeft: 0 }}
        />
        <Appear>
          <div>
            <Image
              src={images.tachyonsCardSlices}
              width={256}
              style={{
                border: '1px solid #036cdb',
              }}
            />
          </div>
        </Appear>
      </div>
    </Slide>
    <Slide>
      <Heading f={3}>Exercise #1: Profile Card (solution)</Heading>
      <iframe
        src="https://codesandbox.io/embed/v86m4zkyy0"
        style={{
          width: '100%',
          height: 500,
          border: 0,
          borderRadius: 4,
          overflow: 'hidden',
        }}
        sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
      />
    </Slide>
    <Slide>
      <Heading f={1}>Responsive Props</Heading>
      <CodePane textSize="1.5rem" source={codeSamples.responsiveProps} />
    </Slide>
    <Slide>
      <Heading f={1}>Extending Components</Heading>
      <CodePane textSize="1.5rem" source={codeSamples.extendingComponents} />
    </Slide>
    <Slide
      notes="https://react.semantic-ui.com/maximize/input-example-icon-position
      https://reactstrap.github.io/components/input-group"
    >
      <Heading f={3}>Exercise #2: Input With Adornment</Heading>
      <iframe
        src="https://codesandbox.io/embed/myoj1yzwmx"
        style={{
          width: '100%',
          height: 500,
          border: 0,
          borderRadius: 4,
          overflow: 'hidden',
        }}
        sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
      />
    </Slide>
    <Slide>
      <Heading f={3} margin="0 0 1rem 0">
        Exercise #3: Aldo Product Card
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
      <Heading f={3} margin="0 0 1rem 0">
        Exercise #3: Aldo Product Card
      </Heading>
      <iframe
        src="https://codesandbox.io/embed/q391k8rqm4"
        style={{
          width: '100%',
          height: 500,
          border: 0,
          borderRadius: 4,
          overflow: 'hidden',
        }}
        sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
      />
    </Slide>
    <Slide>
      <Heading f={3} margin="0 0 1rem 0">
        Exercise #3: Aldo Product Card (solution)
      </Heading>
      <iframe
        src="https://codesandbox.io/embed/woy5w424zl"
        style={{
          width: '100%',
          height: 500,
          border: 0,
          borderRadius: 4,
          overflow: 'hidden',
        }}
        sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
      />
    </Slide>
    <Slide>
      <Heading f={1}>Complex Styles</Heading>
      <Text>
        <Link
          textColor="blue"
          href="https://github.com/jxnblk/styled-system#complex-styles"
        >
          styled-system#complex-styles
        </Link>{' '}
        allow you to define reusable style objects in your theme for things like
        text styles and color combinations.
      </Text>
    </Slide>
  </SlideSet>
);
