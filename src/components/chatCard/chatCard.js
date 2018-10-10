import React from "react"
import { Card } from "antd-mobile";
import PropTypes from 'prop-types'

class ChatCard extends React.Component {
  static propTypes = {
    userList: PropTypes.array.isRequired
  }

  render() {
    const Header = Card.Header;
    const Body = Card.Body;
    return (
      <div>
        {this.props.userList.map(item => (
          item.avtor ? (<Card key={item._id}>
                        <Header title={item.user}
                            thumb={require(`../../img/${item.avtor}.png`)}
                            extra={<span>{item.title}</span> }>
                        </Header>
                        <Body>
                          {item.type === 'boss' ? <div>公司：{item.company}</div> : null}
                          {item.desc.split('/n').map(v => (
                              <div key={v}>{v}</div> 
                          ))}
                          {item.type === 'boss' ? <div>薪资：{item.money}</div> : null}
                        </Body>
                    </Card> ) : null
        ))}
      </div>
    )
  } 
}

export default ChatCard;