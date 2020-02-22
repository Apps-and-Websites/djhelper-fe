import axios from "axios";

export const SET_NAME = 'SET_NAME';
export const SET_USERNAME = 'SET_USERNAME';

export const REGISTER_USER_START = 'REGISTER_USER_START';
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const REGISTER_USER_ERROR = 'REGISTER_USER_ERROR';

// action creators

export const setName = name => {
    return {type: SET_NAME, payload: name}
}

export const setUsername = username => {
    return {type: SET_USERNAME, payload: username}
}

export const registerUserAction = (infoNeeded, history) => dispatch => {
    dispatch({type: REGISTER_USER_START});
    axios.post('https://business-card-collector.herokuapp.com/api/users/register', infoNeeded)
      .then(response => {
        console.log(response);
        history.push('/login');
        dispatch({type: REGISTER_USER_SUCCESS, payload: response.data});
      })
      .catch(err => {
             console.log(err)
             dispatch({type: REGISTER_USER_ERROR, payload: err})
      });




}
