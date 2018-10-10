import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { loadData } from "../../redux/user.redux";
import { connect } from "react-redux";

@withRouter
@connect(
    null, { loadData }
)
class AuthRoute extends React.Component {
    componentDidMount() {
        //获取用户数据
        // 现在的url地址 如果在login，不需要跳转
        //用户的type,boss还是牛人
        //用户信息是否完善
        const publicList = ['/login', '/register'];
        const pathname = this.props.location.pathname
        // console.log(pathname);
        if (publicList.indexOf(pathname) > -1) {
            return null;
        }
        axios.get('/user/info').then(resp => {
            if (resp.status === 200) {
                console.log(resp.data)
                if (resp.data.code === 0) {
                    //有登陆信息
                    this.props.loadData(resp.data.data);
                } else {
                    this.props.history.push('/login')
                }
            }
        }).catch(e => {
            throw (e.resopnse.data.message)
        })
    }

    render() {
        return null
    }
}

export default AuthRoute;