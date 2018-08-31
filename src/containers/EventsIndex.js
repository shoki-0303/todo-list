import {connect} from 'react-redux'
import EventsIndex from '../components/EventsIndex'
import {getEvents} from '../actions'

const mapStateToProps = state => {
  return {
    events: state.events
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getEvents: () => {
      dispatch(getEvents())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex)
