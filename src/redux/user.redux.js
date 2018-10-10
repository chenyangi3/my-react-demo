// import { userInfo } from "os";
import axios from "axios";
import { getDirectPath } from "../util";

const AUTH_SUCCESS = 'AUTH_SUCCESS'
const ERROR_MSG = 'ERROR_MSG';
const LOAD_DATA = 'LOAD_DATA';
const initState = {
    user: '',
    type: '',
    msg: '',
    redirectTo: ''
}

//reducer
export function user(state = initState, action) {
    switch (action.type) {
        case AUTH_SUCCESS:
            return {...state, redirectTo: getDirectPath(action.payLoad), msg: '', ...action.payLoad }
        case LOAD_DATA:
            return {...state, ...action.payLoad }
        case ERROR_MSG:
            return {...state, isAuth: false, msg: action.msg }
        default:
            return state;
    }
}


function authSuccess(data) {
    return { type: AUTH_SUCCESS, payLoad: data }
}

export function update(data) {
    return dispatch => {
        axios.post('/user/update',data).then(resp => {
            if (resp.status === 200 && resp.data.code === 0) {
                dispatch(authSuccess(resp.data.data))
            } else {
                dispatch(errorMsg(resp.data.msg))
            }
        })
    }
}

function errorMsg(msg) {
    return { msg, type: ERROR_MSG }
}

export function loadData(userInfo) {
    return { type: LOAD_DATA, payLoad: userInfo }
}

export function login({ user, password }) {
    if (!user || !password) {
        return errorMsg('用户名密码必须输入')
    }
    return dispatch => {
        axios.post('/user/login', { user, password }).then(resp => {
            if (resp.status === 200 && resp.data.code === 0) {
                dispatch(authSuccess(resp.data.data))
            } else {
                dispatch(errorMsg(resp.data.msg))
            }
        })
    }
}

export function register({ user, password, repeatPassword, type }) {
    if (!user || !password || !type) {
        return errorMsg('用户名密码必须输入')
    }
    if (password !== repeatPassword) {
        return errorMsg('两次密码须一致')
    }
    return dispatch => {
        axios.post('/user/register', { user, password, type }).then(resp => {
            if (resp.status === 200 && resp.data.code === 0) {
                dispatch(authSuccess({ user, password, type }))
            } else {
                dispatch(errorMsg(resp.data.msg))
            }
        })
    }
}