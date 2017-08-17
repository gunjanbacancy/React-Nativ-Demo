import { FETCHING_PEOPLE, FETCHING_PEOPLE_SUCCESS, FETCHING_PEOPLE_FAILURE } from '../constants/constants'

export function fetchPeopleFromAPI() {
  return (dispatch) => {
    dispatch(getPeople())
    fetch('http://192.168.1.111/acd/index.php/welcome/user_list_react')
    .then(data => data.json())
    .then(json => {
      console.log('json:', json)
      //console.warn("result",json.user_details)
      dispatch(getPeopleSuccess(json.user_details))
    })
    .catch(err => dispatch(getPeopleFailure(err)))
  }
}

export function getPeople() {
  return {
    type: FETCHING_PEOPLE
  }
}

export function getPeopleSuccess(data) {
  return {
    type: FETCHING_PEOPLE_SUCCESS,
    data,
  }
}

export function getPeopleFailure() {
  return {
    type: FETCHING_PEOPLE_FAILURE
  }
}
