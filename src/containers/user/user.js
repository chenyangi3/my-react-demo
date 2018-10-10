import React from 'react'
import { Result, List, WhiteSpace  } from 'antd-mobile'
import { connect } from 'react-redux';

@connect(
  state => state.user
)
class User extends React.Component {
  render() {
    const props = this.props
    const Item = List.Item;
    const Brief = Item.Brief;
    return (
      <div>
        <Result img={<img src={require(`../../img/${props.avtor}.png`)} style={{ width: 50 }} alt="头像" />}
                title={props.user}
                message={props.company ? props.company : null}>
        </Result>
        <List renderHeader={() => '简介'}>
          <Item>
            {props.title}
            {props.desc.split('\n').map(item => <Brief key={item}>{item}</Brief>)}
          </Item>
        </List>
        <WhiteSpace size="lg" />
        <div style={{ width: '100%' ,textAlign: "center", background: 'white', height: 50, lineHeight: '50px' }}>退出登录</div>
      </div>
    )
  }
}

export default User