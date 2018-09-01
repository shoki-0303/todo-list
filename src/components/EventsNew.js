import React from 'react'
import {Link} from 'react-router-dom'

class EventsNew extends React.Component {
  constructor(props) {
    super(props)
    this.state = {title: "", body: ""}
  }
  handleTitleChange = (e) => {
    const title = e.target.value
    this.setState({title: title})
  }
  handleBodyChange = (e) => {
    const body = e.target.value
    this.setState({body: body})
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const title = this.state.title
    const body = this.state.body
    const values = {title: title, body: body}
    this.props.postEvent(values)
    this.props.history.push("/")
  }

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <div><input type="text" label="title" placeholder="title" value={this.state.title} onChange={this.handleTitleChange} /></div>
          <div><input type="text" label="body" placeholder="body" value={this.state.body} onChange={this.handleBodyChange} /></div>
          <input type="submit" value="submit" />
          <Link to="/">Cancel</Link>
        </form>
      </React.Fragment>
      );
  }
}

export default EventsNew
