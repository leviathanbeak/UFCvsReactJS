import React, {Component} from 'react';
import Time from 'react-time'

class Event extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      showDetails: false
    };
  }

  toggleDetails() {
    this.setState({showDetails: !this.state.showDetails});
  }

  render() {
    let eventDetails;
    if(this.state.showDetails) {
      eventDetails = (
        <div onClick={this.toggleDetails.bind(this)}>
          <div><img src={this.props.img}/></div>
          <div className="text-primary">{this.props.desc}</div>
        </div>
      );
    }

    return(
      <div className="event">
        <div className="event_details" onClick={this.toggleDetails.bind(this)}>
          Arena: <strong>{this.props.arena}</strong>
          <p>Date: <Time value={this.props.event_date} format="YYYY/MM/DD" /></p>
        </div>
        {eventDetails}
      </div>
    );
  }
}

export default Event;
