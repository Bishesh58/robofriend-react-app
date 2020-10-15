import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from './actionTypes'


export const setSearchField = (text) =>({
    type: 'CHANGE_SEARCH_FIELD',
    payload: text
})


export const requestRobots = () => (dispatch) =>{
  dispatch({type: REQUEST_ROBOTS_PENDING});
  fetch('https://api.mockaroo.com/api/4705b0c0?count=200&key=c1210f40')
    .then(response => response.json())
    .then( data => dispatch({type: REQUEST_ROBOTS_SUCCESS, payload: data}))
    .catch((e)=> dispatch({type: REQUEST_ROBOTS_FAILED, payload: e}))
}