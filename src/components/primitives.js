import React from 'react';
import * as Spectacle from 'spectacle';
import styled from 'react-emotion';
import { compose, defaultProps } from 'recompose';
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
