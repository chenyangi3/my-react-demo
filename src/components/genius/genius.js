import React from "react";
import {connect} from 'react-redux'
import { getUserList } from '../../redux/chatuser.redux'
import ChatCard from '../chatCard/chatCard'
@connect(
    state => state.chatUser,
    {getUserList}
)
class Genius extends React.Component{
    componentWillMount() {
        this.props.getUserList('boss')
    }

    render() {
        return (
            <div>
                <ChatCard userList={this.props.userList}></ChatCard>    
            </div>
        )
    }
}

export default Genius;