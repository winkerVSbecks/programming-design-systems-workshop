import React from 'react';
import { SlideSet, Slide } from 'spectacle';
import classNames from 'classnames';

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
} from 'components';
import images from 'images';
import * as codeSamples from 'code-samples';

export const styledSystemSlides = (
  <SlideSet>
    <Slide>
      <Heading
        textColor="primary"
        bgColor="secondary"
        padding="2rem"
        margin="0"
        lh="solid"
      >
        CSS-in-JS
      </Heading>
    </Slide>
    <Slide bgColor="secondary" margin={0.1}>
      <div className="flex items-center">
        <ImageCard
          src={images.tachyonsDesignSystem}
          style={{ margin: '0 4rem 0 0' }}
          width={650}
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
