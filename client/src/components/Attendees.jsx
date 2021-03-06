import React from 'react';
import axios from 'axios';
import queryString from 'query-string';

import Grid from '@material-ui/core/Grid';

import '../styles/styles.css';

import {
  TextLinkContainer,
  StyledLargeText,
  StyledLink,
  StyledSmallText
} from '../styles/StyledComponents.jsx';

import MemberCard from './MemberCard.jsx';

class Attendees extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      attendees: [],
      waitlist: []
    }
  }

  componentDidMount() {
    const value = queryString.parse(window.location.search)
    const id = value.event_id

    axios.get(`http://ec2-13-58-208-149.us-east-2.compute.amazonaws.com/rsvp/${id}`)
      .then((members) => {
        this.setState({
          attendees: members.data.attendees,
          waitlist: members.data.waitlist
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }


  render() {
    const attendees = this.state.attendees;
    const waitlist = this.state.waitlist;

    return (
      <Grid className="attendees-container">
        <TextLinkContainer>
          <StyledLargeText>{`Attendees (${attendees.length})`}</StyledLargeText>
          <StyledLink>See all</StyledLink>
        </TextLinkContainer>
        {waitlist ? <StyledSmallText>{`${waitlist.length} on waitlist`}</StyledSmallText> : null}
        <MemberCard attendees={attendees.splice(0, 8)} />
      </Grid>
    )
  }
}

export default Attendees;
