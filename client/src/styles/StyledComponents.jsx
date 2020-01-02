import React from 'react';
import {
  withStyles,
  Grid,
  Typography,
  Link,
  Card
} from '@material-ui/core';

const Roboto = 'Roboto, sans-serif';

export const Container = withStyles(() => ({
  root: {
    maxWidth: 600,
    height: 530,
    backgroundColor: '#f6f7f8'
  }

}))(Grid);

export const TextLinkContainer = withStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 20
  }

}))(Grid);

export const StyledLargeText = withStyles(() => ({
  root: {
    fontFamily: Roboto,
    fontSize: 20,
    fontWeight: 600,
  }

}))(Typography);

export const StyledLink = withStyles(() => ({
  root: {
    color: '#00a2c7',
    fontFamily: Roboto,
    fontSize: 16,
    cursor: 'pointer'
  }

}))(Link);

export const StyledSmallText = withStyles(() => ({
  root: {
    fontFamily: Roboto,
    fontSize: 14,
    fontWeight: 400,
  }

}))(Typography);

export const CardsContainer = withStyles(() => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: 5,
    justifyContent: 'space-around'
  }

}))(Grid);
export const StyledCard = withStyles(() => ({
  root: {
    width: 133,
    height: 202,
    '&:hover': {
      boxShadow: '0 0 4px 0 rgba(46,62,72,.12), 0 4px 12px 0 rgba(46,62,72,.12)'
    },
    cursor: 'pointer',
    marginBottom: 16
  }

}))(Card);
