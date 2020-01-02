import React from 'react';
import { makeStyles, CardContent, Avatar } from '@material-ui/core';
import { Typography, Grid } from '@material-ui/core';

import {
  CardsContainer,
  StyledCard
} from '../styles/StyledComponents.jsx';

const styles = makeStyles(theme => ({
  avatar: {
    display: 'flex',
    justifyContent: 'center'
  },
  large: {
    width: theme.spacing(9),
    height: theme.spacing(9),
  },
}));

const MemberCard = ({ attendees }) => {
  const classes = styles()

  return (
    <CardsContainer>
      {attendees.map((member, i) => {
        return <StyledCard elevation={0} key={i}>
          <CardContent>
            <Grid className={classes.avatar}>
              <Avatar src={member.avatar} className={classes.large} />
            </Grid>
          </CardContent>
        </StyledCard>
      })}
    </CardsContainer>
  )
}

export default MemberCard;