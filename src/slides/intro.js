import React from 'react';
import { SlideSet, Slide, Link, Image } from 'spectacle';

import { Heading, Text } from 'components';
import images from 'images';

export const introSlides = (
  <SlideSet>
    <Slide>
      <Heading f="headline" margin="0">
        Programming 📐✏️<br />Design Systems
      </Heading>
    </Slide>
    <Slide>
      <Heading margin="0 0 1rem 0">
        Varun Vachhar{' '}
        <span role="img" aria-label="wave">
          👋🏽
        </span>
      </Heading>

      <Text f={2} margin="0 0 4rem 0">
        Tech Lead at League Inc.
      </Text>
      <Text f={2} margin="0" fw={4}>
        @winkerVSbecks
      </Text>
      <Text f={2} fw={4}>
        <Link margin="0" textAlign="left">
          varun.ca
        </Link>
      </Text>
    </Slide>
    <Slide bgColor="secondary">
      <Image src={images.airbnb} />
    </Slide>
    <Slide>
      <Text margin="0 0 1rem 0">+ Polar Coordinates</Text>
      <Text margin="0 0 1rem 0">+ Oscillations</Text>
      <Text margin="0 0 1rem 0">+ Solving Triangles</Text>
    </Slide>
  </SlideSet>
);
