import React from 'react';
import { SlideSet, Slide, Image, CodePane, Appear } from 'spectacle';
import classNames from 'classnames';

import {
  Heading,
  Text,
  List,
  ListItem,
  Emoji,
  Link,
  Inline,
  OrderedList,
  ImageCard,
  AsymmetricComponentPlayground,
} from 'components';
import images from 'images';

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
      <AsymmetricComponentPlayground
        theme="dark"
        code={`
const Button = ({ className, ...props }) => {

  const cx =
    'bn f6 dim br2 pv3 ph4 white bg-light-purple ' +
    className;

  return <button className={cx} {...props} />;
};

render(<Button>Save</Button>);
      `}
      />
    </Slide>
    <Slide>
      <ImageCard src={images.formUi} width={800} />
    </Slide>
    <Slide>
      <AsymmetricComponentPlayground
        theme="dark"
        scope={{ classNames }}
        code={`
const Button = ({
  className,
  color = "white",
  bg = "light-purple",
  ...props
}) => {
  const cx = classNames(
    'bn f6 dim br2 pv3 ph4',
    color,
    \`bg-\${bg}\`,
    className
  );

  return <button className={cx} {...props} />;
};

render(
  <div className="flex flex-column">
    <Button className="mb3">
      Save
    </Button>

    <Button bg="moon-gray" color="dark-gray">
      Cancel
    </Button>
  </div>
);`}
      />
    </Slide>
  </SlideSet>
);
