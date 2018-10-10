import React from "react";
import { connect } from "react-redux";
import { NavBar } from "antd-mobile";
import NavLinkBar from "../navLinkBar/navLinkBar";
import Boss from "../boss/boss";
import User from "../../containers/user/user"
import Genius from "../genius/genius";
import { Route } from 'react-router-dom'
function Msg() {
    return <h2>消息列表</h2>
}
// function User() {
//     return <h2>个人中心</h2>
// }

@connect(
    state => state
)
class Dashboard extends React.Component{
        
    render() {
        const user = this.props.user;
        const { pathname } = this.props.location;
        const navList = [
            {
                path: '/boss',
                text: '牛人',
                icon: 'genius',
                title: '牛人列表',
                component: Boss,
                hide:user.type === 'genius'
            },{
                path: '/genius',
                text: 'Boss',
                icon: 'boss',
                title: 'Boss列表',
                component: Genius,
                hide:user.type === 'boss'
            },{
                path: '/msg',
                text: '消息',
                icon: 'msg',
                title: '消息列表',
                component: Msg,
            },{
                path: '/me',
                text: '我',
                icon: 'me',
                title: '个人中心',
                component: User,
            }
        ];
        return (
            <div>
                <NavBar className="fixed-header" mode="dark">{navList.find(v => v.path === pathname).title}</NavBar>
                <Route path="/boss" component={Boss}></Route>
                <Route path="/genius" component={Genius}></Route>
                <Route path="/me" component={User}></Route>
                <NavLinkBar data={navList}></NavLinkBar>
            </div>
        )
    }
}

export default Dashboard;