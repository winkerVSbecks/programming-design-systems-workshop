import React from 'react';
import { SlideSet, Slide, Image } from 'spectacle';
import classNames from 'classnames';
import styled from 'tachyons-components';

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
        lh="copy"
        f={1}
      >
        Building A<br />Component Based Design System<br />With Tachyons
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
      <Text margin="0 0 4rem 0">
        Customize with<br />
        <Link
          target="_blank"
          textColor="gold"
          href="https://github.com/tachyons-css/generator"
        >
          tachyons-css/generator
        </Link>
      </Text>
      <Text>
        Extend with<br />
        <Link
          target="_blank"
          textColor="green"
          href="https://tachyons-tldr.now.sh/#/tools"
        >
          tachyons-tldr.now.sh/#/tools
        </Link>
      </Text>
    </Slide>
    <Slide>
      <Heading f={1}>Tachyons Design Constraints API</Heading>
      <List>
        <ListItem>
          Typographic Scale <Inline green>.f1 – .f7</Inline>
        </ListItem>
        <ListItem>
          Spacing Scale <Inline gold>.ma0 – .ma7</Inline>
        </ListItem>
        <ListItem>
          Composition <Inline blue>className="f2 mt4 mb2"</Inline>
        </ListItem>
      </List>
    </Slide>
    <Slide>
      <AsymmetricComponentPlayground
        theme="dark"
        code={codeSamples.tachyonsComponent}
      />
    </Slide>
    <Slide>
      <ImageCard src={images.formUi} width={800} />
    </Slide>
    <Slide>
      <Heading f={1} margin="0 0 4rem 0">
        Tachyons<br />Design System Components
      </Heading>

      <Text>
        Props <Emoji v="🔀" /> Design System <Emoji v="➡️" /> className
      </Text>
    </Slide>
    <Slide
      notes={`
    Change the button colours to lightest-blue and navy
    add classNames to make it b ttu and tracked
    then decrease font size ✅
    increase font size 🚫
    add a  f prop
    `}
    >
      <AsymmetricComponentPlayground
        theme="dark"
        scope={{ classNames }}
        code={codeSamples.tachyonsClassNameComponent}
      />
    </Slide>
    <Slide>
      <Text f={3}>Component With Design System As Props</Text>
      <CodePane
        margin="0 0 2rem 0"
        textSize="1.4rem"
        source={codeSamples.heading}
      />
      <Text f={3}>Rendered Output</Text>
      <CodePane textSize="1.4rem" source={codeSamples.headingRender} />
    </Slide>
    <Slide>
      <CodePane textSize="1.4rem" source={codeSamples.curvedBox} />
    </Slide>
    <Slide>
      <Heading f={1}>
        Somewhat <Emoji v="⚠️" /> Experimental Tools
      </Heading>
      <List marker="+ ">
        <ListItem>
          <Link
            target="_blank"
            f={2}
            href="https://github.com/jxnblk/tachyons-components"
          >
            tachyons-components{' '}
            <span className="f4">(probably the best option)</span>
          </Link>
        </ListItem>
        <ListItem>
          <Link
            target="_blank"
            f={2}
            href="https://github.com/jamesmcallister/styled-components-tachyons"
          >
            styled-components-tachyons
          </Link>
        </ListItem>
        <ListItem>
          <Link
            target="_blank"
            f={2}
            href="https://github.com/rangle/rubbr-installer/tree/master/src/styles/with-style-props/with-style-props.hoc.js"
          >
            rangle/rubbr-installer/with-style-props
          </Link>
        </ListItem>
        <ListItem>
          <Link
            target="_blank"
            f={2}
            href="https://github.com/winkerVSbecks/tachyons-measured"
          >
            tachyons-measured
          </Link>{' '}
          <span className="f4">(not maintained, only for reference)</span>
        </ListItem>
      </List>
    </Slide>
    <Slide>
      <Heading>
        <Link
          target="_blank"
          f={3}
          href="https://github.com/jxnblk/tachyons-components"
        >
          tachyons-components
        </Link>
      </Heading>
      <AsymmetricComponentPlayground
        theme="dark"
        scope={{ styled }}
        code={codeSamples.tachyonsComponentButton}
      />
    </Slide>
  </SlideSet>
);
