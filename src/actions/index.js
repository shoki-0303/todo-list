import axios from 'axios'

const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1'
const QUERY_STRIMG = '?token=token123'

export const getEvents = () => {
  return dispatch => {
    const response = axios.get(`${ROOT_URL}/events/${QUERY_STRIMG}`)
    response.then((res)=>{
      const events = res.data
      dispatch({type: "READ_EVENTS", events})
    })
  }
}


