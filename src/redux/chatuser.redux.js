import axios from 'axios'
const USER_LIST = 'USER_LIST'

const initState = {
  userList: []
}

export function chatUser(state=initState, action) {
  switch (action.type) {
    case USER_LIST:
      return {...state, userList:action.payload}
    default:
      return state
  }
}

function userList(data) {
  return {type: USER_LIST, payload: data}
}

export function getUserList(type) {
  return dispatch => {
    axios.get('/user/list?type='+type).then(resp => {
      if (resp.data.code === 0) {
          dispatch(userList(resp.data.data))
      }
  })
  }
}