import React from 'react';
import { SlideSet, Slide, Image, Link, CodePane } from 'spectacle';

import { Heading, Text, List, ListItem, Emoji } from 'components';
import images from 'images';

export const introSlides = (
  <SlideSet>
    <Slide>
      <Heading f="headline" margin={0}>
        Programming <Emoji v="📐✏️" />
        <br />Design Systems
      </Heading>
    </Slide>
    <Slide>
      <Heading f={1}>Slides</Heading>
      <Text margin="4rem 0 0 0" textSize="2.25rem">
        <Link href="https://tiny.cc/animation-math" textColor="secondary">
          tiny.cc/programming-design-systems
        </Link>
      </Text>
      <Text margin="4rem 0 0 0" textSize="2.25rem">
        <Link
          href="https://github.com/winkerVSbecks/programming-design-systems-workshop"
          textColor="secondary"
        >
          github.com/winkerVSbecks/programming-design-systems-workshop
        </Link>
      </Text>
    </Slide>
    <Slide>
      <Heading f={1}>Overview</Heading>
      <List>
        <ListItem>Design Constraints</ListItem>
        <ListItem>Design System Components</ListItem>
        <ListItem>Slicing Components</ListItem>
      </List>
    </Slide>
    <Slide bgColor="secondary">
      <Heading f={2} textColor="primary" margin="0 0 4rem 0">
        Design Constraints<br />aka Design System Variables
      </Heading>
      <Image src={images.airbnb} />
    </Slide>
    <Slide>
      <Heading f={1}>Design Constraints</Heading>
      <List marker="+ ">
        <ListItem>Colours</ListItem>
        <ListItem>Spacing: padding & margin</ListItem>
        <ListItem>Sizing: width & height</ListItem>
        <ListItem>Border: colour, size & radius</ListItem>
        <ListItem>Type-Scale, Line Height & Weight</ListItem>
        <ListItem italic>and…?</ListItem>
      </List>
    </Slide>
    <Slide margin={0}>
      <div className="flex items-center">
        <Image
          src="https://cdn.dribbble.com/users/104117/screenshots/3813751/ds3.png"
          margin="0 4rem 0 0"
          width={400}
        />
        <List>
          <ListItem>Design System</ListItem>
          <ListItem>Style Guide</ListItem>
          <ListItem>Pattern Lab</ListItem>
        </List>
      </div>
      <Text textAlign="center">Sketch, Figma & Illustrator</Text>
    </Slide>
    <Slide>
      <Heading f={1} margin="0 0 4rem 0">
        CSS Based Design System
      </Heading>
      <CodePane
        textSize="1.75rem"
        lang="css"
        source={`.Card {/* */}

.Card__Header {/* */}

.Card__Body {/* */}

.Card__Action--primary {/* */}

.Card__Action--secondary {/* */}
`}
      />
    </Slide>
  </SlideSet>
);
