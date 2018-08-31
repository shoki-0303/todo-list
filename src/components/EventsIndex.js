import React from 'react'

class EventsIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
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
          <tr>
            <td>1</td>
            <td>title1</td>
            <td>body1</td>
          </tr>
        </tbody>
      </table>
      );
  }
}

export default EventsIndex
