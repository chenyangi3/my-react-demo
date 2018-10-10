/**
 * Created by Allen on 2018/4/19.
 */
import React from 'react'
import Logo from '../../components/logo/logo'
import { WingBlank, WhiteSpace, Button, List, InputItem, Radio } from 'antd-mobile'
import { connect } from "react-redux";
import { register } from "../../redux/user.redux";
import { Redirect } from "react-router-dom";
const RadioItem = Radio.RadioItem;
// const typeList = [
//     { label: 'genius', value: 'genius' },
//     { label: 'boss', value: 'boss' }
// ]

@connect(
    state => state.user,
    {register}
)
class Register extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            type: 'genius',  //注册类型（genius牛人，boss老板）
            user: '',
            password: '',
            repeatPassword: '',
        }
    }
    handleChange = (key,val) => {
        this.setState({
            [key]: val
        })
    }

    handleRegister = () => {
        this.props.register(this.state);
    }
    render(){
        const { type } = this.state;
        return(
            <div>
                <Logo></Logo>
                {this.props.redirectTo ? <Redirect to={this.props.redirectTo}></Redirect> : null }
                <WingBlank>
                    {this.props.msg ? <p style={{color: 'red'}}>{this.props.msg}</p> : null}
                    <List>
                        <InputItem
                            onChange={val => this.handleChange('user', val)}>用户名</InputItem>
                        {/* <WhiteSpace/> */}
                        <InputItem type="password"
                            onChange={val => this.handleChange('password',val)}>密码</InputItem>
                        {/* <WhiteSpace/> */}
                        <InputItem type="password"
                            onChange={val => this.handleChange('repeatPassword',val)}>确认密码</InputItem>
                        {/* <WhiteSpace/> */}
                        {/* {typeList.map(item => 
                            <RadioItem key={item.label} value={item.value} checked={value === item.value}
                                onChange={() => this.handleChange('type', item.value)}>
                                {item.label}
                            </RadioItem>
                        )} */}
                        <RadioItem checked={type === 'genius'}
                            onChange={() => this.handleChange('type', 'genius')}>
                            牛人
                        </RadioItem>
                        <RadioItem checked={type === 'boss'}
                            onChange={() => this.handleChange('type', 'boss')}>
                            Boss
                        </RadioItem>
                    </List>
                    <WhiteSpace/>
                    <Button type="primary" onClick={this.handleRegister}>注册</Button>
                </WingBlank>
            </div>
        )
    }
}



export default Register;