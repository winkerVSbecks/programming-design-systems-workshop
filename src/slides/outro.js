import React from 'react';
import { Slide, SlideSet } from 'spectacle';

import { Text, Heading, Link, List, ListItem } from 'components';

export const outroSlides = (
  <SlideSet>
    <Slide>
      <Heading f={1}>Other Frameworks</Heading>
      <List>
        <ListItem margin="0 0 2rem 0">
          <Link href="https://github.com/c8r/vue-styled-system">
            vue-styled-system
          </Link>{' '}
          for Vue.JS
        </ListItem>
        <ListItem>
          <Link href="http://fela.js.org/docs/guides/UsageWithAngular2.html">
            Fela
          </Link>{' '}
          + styled-system for Angular
        </ListItem>
      </List>
    </Slide>
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
      <Text margin="4rem 0 2rem 0" f={2}>
        <Link href="http://tiny.cc/design-systems">tiny.cc/design-systems</Link>
      </Text>
      <Text f={2}>
        <Link href="https://github.com/winkerVSbecks/programming-design-systems-workshop">
          github.com/winkerVSbecks/programming-design-systems-workshop
        </Link>
      </Text>
    </Slide>
    <Slide>
      <Heading f={2} margin="0 0 2rem 0">
        Attributions
      </Heading>
      <List marker="+ ">
        <ListItem margin="0 0 2rem 0" f={2}>
          Building a Visual Language image by{' '}
          <Link
            textColor="blue"
            margin="0"
            href="https://airbnb.design/building-a-visual-language"
          >
            airbnb.design
          </Link>
        </ListItem>
        <ListItem margin="0 0 2rem 0" f={2}>
          Design System image by{' '}
          <Link
            textColor="blue"
            margin="0"
            href="https://dribbble.com/shots/3813751-Design-System"
          >
            Greg Dlubacz
          </Link>
        </ListItem>
        <ListItem margin="0 0 2rem 0" f={2}>
          Workflow illustrations by{' '}
          <Link
            textColor="blue"
            margin="0"
            href="http://notebook.hongkonggong.com/2016/04/21/is-tachyons-the-right-css-framework-for-me/"
          >
            Jason Li
          </Link>
        </ListItem>
        <ListItem margin="0 0 2rem 0" f={2}>
          Components animation by{' '}
          <Link
            textColor="blue"
            margin="0"
            href="https://blog.figma.com/components-in-figma-e7e80fcf6fd2"
          >
            Figma
          </Link>
        </ListItem>
      </List>
    </Slide>
  </SlideSet>
);

// https://dribbble.com/shots/3813751-Design-System
// notebook.hongkonggong.com
