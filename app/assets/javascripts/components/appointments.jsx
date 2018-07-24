var Appointments = createReactClass({
  getInitialState: function() {
    return {
      appointments: this.props.appointments,
      input_title: 'Team standup meeting',
      input_appt_time: 'Tomorrow at 9 am'
    }
  },

  handleUserInput: function(obj) {
    this.setState(obj);
  },

  render: function() {
    return (
      <div>
        <AppointmentForm input_title={this.state.title}
          input_appt_time={this.state.appt_time}
          onUserInput={this.handleUserInput} />
        <AppointmentList appointments={this.state.appointments} />
      </div>
    )
  }
});
