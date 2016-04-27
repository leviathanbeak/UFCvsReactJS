import React, {Component, PropTypes} from 'react';
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
        <div className={this.state.showDetails ? "glyphicon glyphicon-chevron-up" : "glyphicon glyphicon-chevron-down" }>
        </div>  Arena: <strong>{this.props.arena}</strong>
          <p>Date: <Time value={this.props.event_date} format="YYYY/MM/DD" /></p>
        </div>
        {eventDetails}
      </div>
    );
  }
}

Event.propTypes = {
  arena: PropTypes.string,
  img: PropTypes.string,
  event_date: PropTypes.instanceOf(Date),
  desc: PropTypes.string
};

export default Event;
