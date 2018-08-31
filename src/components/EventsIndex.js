import React from 'react'

class EventsIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {events} = this.props
    const event = events.map((event, index)=>{
      return (
        <tr key={index}>
          <td>{event.id}</td>
          <td>{event.title}</td>
          <td>{event.body}</td>
        </tr>
        );
    })

    return(
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>body</th>
          </tr>
        </thead>
        <tbody>
          {event}
        </tbody>
      </table>
      );
  }
}

export default EventsIndex
