var Appointments = createReactClass({
  render: function() {
    return (
      <div>
        <AppointmentForm />
        <AppointmentList appointments={this.props.appointments} />
      </div>
    )
  }
});
