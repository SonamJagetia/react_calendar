var AppointmentList = createReactClass({
  render: function() {
    return (
      <div>
        {this.props.appointments.map(function(appointment){
          return (
            <Appointment appointment={appointment} />
          )
        })}
      </div>
    )
  }

});
