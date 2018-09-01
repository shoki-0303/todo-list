import {connect} from 'react-redux'
import EventsNew from '../components/EventsNew'
import {postEvent} from '../actions'

const mapDispatchToProps = dispatch => {
  return {
    postEvent: (values) => {
      dispatch(postEvent(values))
    }
  }
}

export default connect(null, mapDispatchToProps)(EventsNew)
