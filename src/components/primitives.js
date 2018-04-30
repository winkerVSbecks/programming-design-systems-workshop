import React from 'react';
import * as Spectacle from 'spectacle';
import styled from 'react-emotion';
import { compose, defaultProps, withProps } from 'recompose';
import { colours } from 'theme';
import withType from './with-type';

export const Heading = compose(
  defaultProps({
    lh: 'title',
    margin: '0 0 2rem 0',
    size: 3,
    textColor: 'secondary',
    textAlign: 'left',
  }),
  withType,
)(Spectacle.Heading);

export const Text = compose(
  defaultProps({
    lh: 'copy',
    textColor: 'secondary',
    textAlign: 'left',
    fw: 5,
  }),
  withType,
)(Spectacle.Text);

export const Inline = compose(
  defaultProps({
    lh: 'copy',
    textColor: 'secondary',
    textAlign: 'left',
    fw: 5,
    style: { display: 'inline-block' },
  }),
  withProps(props => {
    const textColor = Object.keys(props).find(p => colours[p]);
    return textColor ? { textColor } : {};
  }),
  withType,
)(Spectacle.Text);

export const Link = compose(
  defaultProps({
    lh: 'copy',
    textColor: 'secondary',
    textAlign: 'left',
    fw: 5,
  }),
  withType,
)(Spectacle.Link);

export const List = styled(Spectacle.List)`
  list-style: none;

  & li:before {
    content: ${props => (props.marker ? `'${props.marker}'` : '"- "')};
    font-weight: 500;
  }
`;

export const OrderedList = withProps({
  ordered: true,
})(Spectacle.List);

export const ListItem = compose(
  defaultProps({
    lh: 'copy',
    textColor: 'secondary',
    textAlign: 'left',
    fw: 4,
  }),
  withType,
)(Spectacle.ListItem);

export const Emoji = ({ v, ...props }) => (
  <span aria-hidden="true" {...props}>
    {v}
  </span>
);

export const ImageCard = styled(Spectacle.Image)`
  border-radius: 3px;
  box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.2);
`;

export const PlaygroundRatio = styled('div')`
  .react-live-preview {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-live > div > div:nth-child(2) {
    flex: ${({ right = 3 }) => right};
  }

  .react-live pre {
    padding: 1rem 2rem;
  }
`;

export const AsymmetricComponentPlayground = ({ right, ...props }) => (
  <PlaygroundRatio right={right}>
    <Spectacle.ComponentPlayground {...props} />
  </PlaygroundRatio>
);
