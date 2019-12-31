import React from 'react';
import axios from 'axios';
import queryString from 'query-string';

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

    axios.get(`http://127.0.0.1:3001/rsvp/${id}`)
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
    console.log(this.state)
    return (
      <div>
        <h1>Attendees</h1>
      </div>
    )
  }
}

export default Attendees;
