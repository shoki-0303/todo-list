import React from 'react'
import {Link} from 'react-router-dom'

class EventsShow extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <React.Fragment>
        <form>
          <div><input type="text" label="title" placeholder="title"/></div>
          <div><input type="text" label="body" placeholder="body"/></div>
        </form>
        <input type="submit" value="submit" />
        <Link to="/">Cancel</Link>
      </React.Fragment>
      );
  }
}

export default EventsShow
