import {connect} from 'react-redux'
import EventsIndex from '../components/EventsIndex'

const mapStateToProps = state => {
  return {
    events: state.events
  }
}

export default connect(mapStateToProps, null)(EventsIndex)
