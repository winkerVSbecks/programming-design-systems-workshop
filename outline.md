#Programming 📐✏️<br />Design Systems

---

* Design Constraints
* Design System Components
* Slicing Components

---

# Design Constraints Or Design System Variables

![](airbnb-dls.png)

---

# Design Constraints

* Colours
* Spacing: Padding & Margin
* Sizing: Width & Height
* Border: Colour, Width & Radius
* Type-Scale, Line Height & Font Weight
* and…?

---

* Style Guides
* Pattern Lab
* Design System (sketch, figma & illustrator)

---

CSS Based Design Systems

BEM/Modular CSS/etc.

```css
.Card {
}
.Card__Header {
}
.Card__Body {
}
.Card__Action--primary {
}
.Card__Action--secondary {
}
```

---

# 🚨🚨 Strong Opinions Ahead 🚨🚨

---

# CSS Is A Bad API For Design Systems

✨ Individual magic numbers
😕 "Why is this here?"
️⁉ "Can I change this without breaking the product?"
😰 "Why is this affecting other things on the page?"

---

> If you have to write CSS to prototype new UI, you've already lost.

---

Two abstractions that have to be mapped and kept in sync

---

> We've been trying OOCSS at @kickstarter (thx to @jxnblk) and it now means I can prototype new pages without writing a single line of CSS.
> — [Jessica Harlee](https://twitter.com/harllee/status/403175957089222656)

> If you have to write CSS to prototype new UI, you’ve already lost. Tool support must be flexible. Some will use Sketch, some Figma, some photoshop. think of these in the same way you think about tech choices.
>
> This is part of why CSS is a bad API for DS. Every single individual magic number, every single "why is this here", "can I change this without breaking the product", "why is this affecting other things on the page".
> One-offs are deadly and CSS first-classes one-offs by default
> — [Chris Biscardi](https://twitter.com/chrisbiscardi/status/976363118656831489)

---

You are the design system author. Your users are other developers.
Don't make your _users_ write CSS. Let them compose components.

---

# Component Based Design System

Example: https://cloudflare.github.io/cf-ui/#cf-builder-table

---

# Tachyons

> Tachyons' main-purpose is not abbreviating inline-styles, but providing the developer with a consistent and scalable system for spacing, color, sizing and typography, which, at the end, is what arrives at the user.

https://news.ycombinator.com/item?id=12700523

---

# Tachyons Design Constraints

![](https://cdn.dribbble.com/users/71021/screenshots/3463541/tachyons-tldr.gif)

[scales](https://tachyons-tldr.now.sh/#/scales)

---

# Tachyons Design Constraints

* Typographic Scale `h1 – h6`
* Spacing Scale `m0 – m4`
* Composition `className='h2 mt4 mb2'`

---

# Workflow

![](http://notebook.hongkonggong.com/content/images/2016/04/TachyonsExplanationBefore.png)
![](http://notebook.hongkonggong.com/content/images/2016/04/TachyonsExplanationNow.png)

---

Change Allocation Details example to explain why having DS props is 🙌🏽

---

# Components 🙌🏽

> You have access to a more powerful styling construct than CSS class names. You have components!
> — [Michael Chan](https://medium.learnreact.com/scale-fud-and-style-components-c0ce87ec9772)

---

# Tachyons Components

Props ➡️ className

---

```js
<Heading
  level={2}
  f={5}
  lh="solid"
  color="navy"
  bg="light-purple"
  mt={0}
  className="flex-auto"
>
  Section Heading
</Heading>
```

➡️

```html
<h2 class="f5 f4-m f3-ns lh-solid navy bg-light-purple mt0">Section Heading<h2/>
```

---

```js
<CurvedBlock w={100} bg="white" topLeft>
  <Block pa={4} bg="transparent" style={[s.flx_i, s.aic, s.jcc]}>
    <Heading3 mb={2}>good morning, matt</Heading3>

    <Text lh="copy" f={5} mb={3}>
      Here is your schedule for today.
    </Text>

    <Stats
      jobs={jobsCount}
      items={items}
      onPressInventory={onPressInventory}
      isInventoryLoaded={isInventoryLoaded}
    />
  </Block>
  {children}
</CurvedBlock>
```

---

⚠️ Experimental

* https://github.com/jxnblk/tachyons-components
* https://github.com/jamesmcallister/styled-components-tachyons
* https://github.com/rangle/rubbr-installer/tree/master/src/styles/with-style-props/with-style-props.hoc.js

---

# Custom Tachyons

## [tachyons-css/generator](https://github.com/tachyons-css/generator)

---

https://cloudflare.github.io/cf-ui/#cf-component-box

---

# CSS-in-JS Based Approach

---

# styled-system

Design system utilities for styled-components and other css-in-js libraries

---

Props 🔀 Design System ➡️ CSS

---

```
JSX
 ️⬇️
styled-system
 ⬇️
styled-component / emotion / fela / glamorous / Vue / etc.
 ⬇️
CSS
```

---

# Styled Components

<!-- bg #D9926E -->

```js
const Button = styled.a`
  display: inline-block;
  line-height: 2;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 12rem;
  background: papayawhip;
  color: #061329;
  font-weight: bold;

  ${props =>
    props.inverted &&
    css`
      background-color: #061329;
      color: papayawhip;
    `};
`;
```

---

# Styled System

```js
import styled from 'styled-components';
import { space, width, fontSize, color, flex, alignSelf } from 'styled-system';

const Box = styled.div`
  ${space}
  ${width}
  ${fontSize}
  ${color}
  ${flex},
  ${alignSelf}
`;
```

---

# Styled System Setup

```js
import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './theme';

const App = props => <ThemeProvider theme={theme}>{/* ... */}</ThemeProvider>;
```

---

# Styled System Theme

theme.json

---

---


```js
<Text bold fontSize={4}>
  Hello 👋🏽
</Text>
```

---

```js
<Box m={2} p={3} color="white" bg="blue" />
```

---

```js
const ProductCard = props => (
  <Card width={256}>
    <BackgroundImage src={props.image} />
    <Box p={2}>
      <Subhead>{props.title}</Subhead>
      <Small>{props.text}</Small>
    </Box>
  </Card>
);
```

---

![](tachyons-card.png)

```js
const ProfileCard = props => (
  <Flex width={256} borderRadius={2}>
    <Image w={3} h={3} borderRadius="100%" src={props.image} />
    <Box p={2}>
      <Subhead>{props.name}</Subhead>
      <Small>{props.title}</Small>
    </Box>
  </Flex>
);
```

---

# Styled System First Component

* Heading
* Text
* Box
* Absolute

---

# Styled System Box

```js
// Example of a general purpose Box layout component
export const Box = styled.div`
  ${space}
  ${color}
  ${width}
  ${fontSize}
`;
```

---

# System Components

```
                     +--+
                     | clean-tag, clean-element, etc.
system-components ---+ styled-system
                     | styled-components
                     +--+
```

---

# System Component Box

```js
const Box = system('space', 'width', 'color', 'fontSize');
```

---

# Side By Side Of

* styled component
* styled-system
* system-components

---

# Styled System Text

```js
export const Text = system(
  'space',
  'color',
  'fontSize',
  'fontWeight',
  'textAlign',
  'lineHeight',
);
```

---

# Styled System Text

```js
export const Text = system(
  'space',
  'color',
  'fontSize',
  'fontWeight',
  'textAlign',
  'lineHeight',
);
```

---

# Styled System Absolute

```js
export const Absolute = system(
  'space',
  'color',
  'width',
  'fontSize',
  'position',
);
```

---

# Composing (Aldo card)

---

https://codesandbox.io/s/3kp4mqwk41

```js
const ImageCard = ({ tl, tr, br, bl, img, title, ratio, ...props }) => (
  <Box position="relative" {...props}>
    <BackgroundImage ratio={ratio} alt={title} src={img} />
    <Absolute top={0} left={0}>
      {tl}
    </Absolute>
    <Absolute top={0} right={0}>
      {tr}
    </Absolute>
    <Absolute bottom={0} right={0}>
      {br}
    </Absolute>
    <Absolute bottom={0} left={0}>
      {bl}
    </Absolute>
  </Box>
);
```

---

# Composing variations

---

Slicing components exercise (group)

---

Slicing components exercise (small groups)

---

# Macro Components

---

# Rebass

```
          +--+
          |  React
Rebass ---+  clean-tag
          |  styled-system
          |  styled-components
          +--+
```

---

## attributes

---

## Extending!

```js
import styled from 'styled-components';
import { Button } from 'rebass';

const CustomButton = styled(Button)`
  border: 1px solid rgba(0, 0, 0, 0.25);
  background-image: linear-gradient(transparent, rgba(0, 0, 0, 0.125));
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
`;
```

---

# Other Frameworks

* Vue https://github.com/c8r/vue-styled-system
* Angular 🤷🏽‍♂️
