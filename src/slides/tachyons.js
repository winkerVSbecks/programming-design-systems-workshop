import React from 'react';
import {
  SlideSet,
  Slide,
  Image,
  CodePane,
  Appear,
  BlockQuote,
  Quote,
  Cite,
} from 'spectacle';

import { Heading, Text, List, ListItem, Emoji, Link } from 'components';
import images from 'images';

export const tachyonsSlides = (
  <SlideSet>
    <Slide>
      <Heading f={1}>Tachyons</Heading>
      <Image
        src="https://1.bp.blogspot.com/-BeSaHFwrWys/VwnGCJsdTCI/AAAAAAAALeY/Rcg79tbKIBIPEHI_II39YaOzonrlXW21A/s1600/watch%2Bthis6.jpg"
        width={700}
        style={{ margin: 0 }}
      />
    </Slide>
    <Slide bgColor="secondary">
      <div className="flex items-center">
        <Image
          src="https://cdn.dribbble.com/users/71021/screenshots/3463541/tachyons-tldr.gif"
          style={{ margin: '0 4rem 0 0' }}
          width={400}
        />
        <Text>
          <Link
            textColor="primary"
            href="https://tachyons-tldr.now.sh/#/scales"
          >
            Tachyons<br />Design<br />Constraints
          </Link>
        </Text>
      </div>
    </Slide>
  </SlideSet>
);
