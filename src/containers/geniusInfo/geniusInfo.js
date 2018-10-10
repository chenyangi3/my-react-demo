/**
 * Created by Allen on 2018/4/19.
 */
import React from 'react'
import { Redirect } from "react-router-dom";
import { WingBlank, TextareaItem, Button, List, InputItem, NavBar  } from 'antd-mobile'
import { connect } from 'react-redux';
import { update } from "../../redux/user.redux";
import AvtorSelector from "../../components/avtorSelector/avtorSelector";

@connect(
    state => state.user,
    { update }
)
class GeniusInfo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: '',
            desc: ''
        }
    }

    componentWillMount() {
        console.log(this.props);
    }

    handleChange = (key,val) => {
        this.setState({
            [key]: val
        })
    }

    render() {
        const path = this.props.location.pathname;
        const redirect = this.props.redirectTo;
        return(
            <div>
                {redirect && redirect !== path ? <Redirect to={redirect}></Redirect> : null }
                <NavBar mode="dark">牛人完善信息页面</NavBar>
                <AvtorSelector selectAvtor={imgName => this.setState({avtor: imgName})}></AvtorSelector>
                <WingBlank>
                    <List>
                        <InputItem
                            onChange={val => this.handleChange('title', val)}>求职岗位</InputItem>
                        <TextareaItem  
                            title="个人简介"
                            rows={3}
                            autoHeight
                            onChange={val => this.handleChange('desc', val)}></TextareaItem >
                    </List>
                    <Button type="primary" onClick={() =>this.props.update(this.state)}>保存</Button>
                </WingBlank>
            </div>
        )
    }
}

export default GeniusInfo;