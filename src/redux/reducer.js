/**
 * Created by Allen on 2018/5/3.
 */

//合并所以reducer并返回
import { combineReducers } from 'redux'
import { user } from "./user.redux";
import { chatUser } from './chatuser.redux'

export default combineReducers({user, chatUser})