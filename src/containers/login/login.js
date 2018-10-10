/**
 * Created by Allen on 2018/4/19.
 */
import React from 'react'
import Logo from '../../components/logo/logo'
import { Redirect } from "react-router-dom";
import { WingBlank, WhiteSpace, Button, List, InputItem } from 'antd-mobile'
import { login } from "../../redux/user.redux";
import { connect } from 'react-redux';

@connect(
    state => state.user,
    {login}
)
class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            user: '',
            password: ''
        }
    }

    handleChange = (key,val) => {
        this.setState({
            [key]: val
        })
    }

    goRegister = () => {
        this.props.history.push('/register')
    };

    login = () => {
        this.props.login(this.state)
    }

    render() {
        return(
            <div>
                {this.props.redirectTo ? <Redirect to={this.props.redirectTo}></Redirect> : null}
                <Logo></Logo>
                <WingBlank>
                    {this.props.msg ? <p style={{color: 'red'}}>{this.props.msg}</p> : null}
                    <List>
                        <InputItem
                            onChange={val => this.handleChange('user', val)}>用户</InputItem>
                        <InputItem type="password"
                            onChange={val => this.handleChange('password', val)}>密码</InputItem>
                    </List>
                    <Button type="primary" onClick={this.login}>登录</Button>
                    <WhiteSpace/>
                    <Button type="primary" onClick={this.goRegister}>注册</Button>
                </WingBlank>
            </div>
        )
    }
}

export default Login;