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

export const tachyonsSlides = (
  <SlideSet>
    <Slide>
      <Heading
        textColor="primary"
        bgColor="secondary"
        padding="2rem"
        margin="0"
        lh="solid"
      >
        Tachyons
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
    <Slide>
      <Heading f={1}>Tachyons Design Constraints</Heading>
      <List>
        <ListItem>
          Typographic Scale <Inline green>h1 – h6</Inline>
        </ListItem>
        <ListItem>
          Spacing Scale <Inline gold>m0 – m4</Inline>
        </ListItem>
        <ListItem>
          Composition <Inline blue>className="h2 mt4 mb2"</Inline>
        </ListItem>
      </List>
    </Slide>
    <Slide>
      <Heading f={1} margin="0 0 4rem 0">
        Tachyons<br />Design System Components
      </Heading>

      <Text>
        Props <Emoji v="➡️" /> className
      </Text>
    </Slide>
    <Slide>
      <AsymmetricComponentPlayground
        theme="dark"
        code={codeSamples.tachyonComponent}
      />
    </Slide>
    <Slide>
      <ImageCard src={images.formUi} width={800} />
    </Slide>
    <Slide>
      <AsymmetricComponentPlayground
        theme="dark"
        scope={{ classNames }}
        code={codeSamples.tachyonClassNameComponent}
      />
    </Slide>
    <Slide>
      <Text f={3}>Component</Text>
      <CodePane
        margin="0 0 2rem 0"
        textSize="1.4rem"
        source={codeSamples.heading}
      />
      <Text f={3}>Rendered Output</Text>
      <CodePane textSize="1.4rem" source={codeSamples.headingRender} />
    </Slide>
    <Slide>
      <CodePane textSize="1.4rem" source={codeSamples.curvedBlock} />
    </Slide>
    <Slide>
      <Heading f={1}>
        <Emoji v="⚠️" /> Experimental
      </Heading>
      <List marker="+ ">
        <ListItem>
          <Link f={2} href="https://github.com/jxnblk/tachyons-components">
            tachyons-components
          </Link>
        </ListItem>
        <ListItem>
          <Link
            f={2}
            href="https://github.com/jamesmcallister/styled-components-tachyons"
          >
            styled-components-tachyons
          </Link>
        </ListItem>
        <ListItem>
          <Link
            f={2}
            href="https://github.com/rangle/rubbr-installer/tree/master/src/styles/with-style-props/with-style-props.hoc.js"
          >
            rangle/rubbr-installer/with-style-props
          </Link>
        </ListItem>
        <ListItem>
          <Link f={2} href="https://github.com/tachyons-css/generator">
            tachyons-css/generator
          </Link>
        </ListItem>
      </List>
    </Slide>
  </SlideSet>
);
