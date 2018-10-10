import React from "react";
import { Grid, List } from "antd-mobile";


class AvtorSelector extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
           icon: ''
        }
    }

    render() {
        const avtorList = 'boy,girl,man,woman,bull,chick,koala,pig,tiger,whale,zebra,lemur'
            .split(',')
            .map(v => ({
                icon: require(`../../img/${v}.png`),
                text: v
            }))
        const girdHeader = this.state.ele ?
            (<div>已选择 <img style={{width: '20px'}} src={this.state.ele.icon} alt="" /></div>) :
            '请选择头像'
        return (
            <div>
                <List renderHeader={() => girdHeader}>
                    <Grid
                    data={avtorList}
                    columnNum={4}
                        onClick={ele => {
                        this.setState({ ele });
                        this.props.selectAvtor(ele.text)
                    }}
                    />
                </List>
            </div>     
        )
    }

}

export default AvtorSelector;