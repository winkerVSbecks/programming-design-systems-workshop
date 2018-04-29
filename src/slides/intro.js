import React from 'react';
import { SlideSet, Slide, Image } from 'spectacle';

import { Heading, Text, List, ListItem, Emoji } from 'components';
import images from 'images';

export const introSlides = (
  <SlideSet>
    <Slide>
      <Heading f="headline" margin="0">
        Programming <Emoji v="📐✏️" />
        <br />Design Systems
      </Heading>
    </Slide>
    <Slide>
      <Heading f={1}>Overview</Heading>
      <List marker="+ ">
        <ListItem>Design Constraints</ListItem>
        <ListItem>Design System Components</ListItem>
        <ListItem>Slicing Components</ListItem>
      </List>
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
