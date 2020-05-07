import { createStore } from 'redux'

 let log = {
  username: '',
  id: 0,  
  loggedin: false
 }

function aboutUser(state = log, action) {
  switch (action.type) {
    case 'LOGGEDIN':
      return Object.assign({}, state, {
        loggedin: true,
        id: action.id,
        username: action.username
      });
    case 'LOGGEDOUT':
      return Object.assign({}, state, {
        loggedin: false,
        id: 0,
        username: ''
      });
    default:
      return state;
  }
}

export const LOGGEDIN = 'LOGGEDIN';
export const LOGGEDOUT = 'LOGGEDOUT';

let store = createStore(aboutUser)


export const boundCounter = (log) => {
  store.dispatch({ type: log});
}

store.subscribe(() => console.log(store.getState()))

export default store;