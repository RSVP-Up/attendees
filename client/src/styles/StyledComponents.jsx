import React from 'react';
import {
  withStyles,
  Grid,
  Typography,
  Link
} from '@material-ui/core';

const Roboto = 'Roboto, sans-serif';

export const Container = withStyles(() => ({
  root: {
    border: '#000 solid 1px',
    maxWidth: 600,
    height: 572,
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
