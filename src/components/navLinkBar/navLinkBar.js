import React from "react";
import PropTypes from "prop-types";
import { TabBar } from "antd-mobile";
import { withRouter } from "react-router-dom";

@withRouter
class NavLinkBar extends React.Component{
    static propTypes = {
        data: PropTypes.array.isRequired
    }

    render() {
        const navList = this.props.data.filter(v => !v.hide);
        const { pathname } = this.props.location;
        return (
            <TabBar>
                {navList.map(item => (
                    <TabBar.Item key={item.path}
                        title={item.text}
                        icon={{uri: require(`./navimg/${item.icon}.png`)}}
                        selected={item.path === pathname}
                        selectedIcon={{uri: require(`./navimg/${item.icon}-active.png`)}}
                        onPress={() => this.props.history.push(item.path)}> 
                        {/* {item.component} */}
                    </TabBar.Item>      
                ))}
            </TabBar>  
        )
    }
}

export default NavLinkBar;