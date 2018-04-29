import React from 'react';
import { Slide, SlideSet, Link } from 'spectacle';

import { Text, Heading } from 'components';

export const outroSlides = (
  <SlideSet>
    <Slide>
      <Heading
        bgColor="white"
        textColor="primary"
        fw={5}
        margin="0 0 4rem 0"
        padding="1rem"
      >
        Thank You!
      </Heading>
      <Text textSize="2.25rem">@winkerVSbecks</Text>
      <Text textSize="2.25rem">varun.ca</Text>
      <Text margin="4rem 0 0 0" textSize="2.25rem">
        <Link href="https://tiny.cc/animation-math" textColor="secondary">
          tiny.cc/animation-math
        </Link>
      </Text>
    </Slide>
    <Slide>
      <Text margin="0 0 2rem 0">Attributions</Text>
      <Text f={2}>
        + Building a Visual Language image by{' '}
        <Link
          textColor="blue"
          margin="0"
          href="https://airbnb.design/building-a-visual-language"
        >
          airbnb.design
        </Link>
      </Text>
      <Text f={2}>
        +{' '}
        <Link
          href="https://commons.wikimedia.org/wiki/File:Triangle_with_notations_2.svg"
          textColor="blue"
        >
          Law Of Cosines
        </Link>{' '}
        image by David Weisman
      </Text>
      <Text f={2}>
        +{' '}
        <Link
          href="https://commons.wikimedia.org/wiki/File:Rtriangle.svg"
          textColor="blue"
        >
          Right Triangle
        </Link>{' '}
        image by A Malik
      </Text>
      <Text f={2}>
        +{' '}
        <Link href="http://www.generative-gestaltung.de/2/" textColor="blue">
          Generative Gestaltung
        </Link>
      </Text>
      <Text f={2}>
        +{' '}
        <Link
          href="https://github.com/winkerVSbecks/mathematics-of-animation"
          textColor="blue"
        >
          Slides source-code
        </Link>
      </Text>
    </Slide>
  </SlideSet>
);

// https://dribbble.com/shots/3813751-Design-System
// notebook.hongkonggong.com
