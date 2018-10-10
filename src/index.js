import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom'

import thunk from 'redux-thunk'
import reducers from './redux/reducer'
import './style/index.css';
import Login from "./containers/login/login";
import Register from "./containers/register/register";
import BossInfo from "./containers/bossInfo/bossInfo";
import GeniusInfo from "./containers/geniusInfo/geniusInfo";
import AuthRoute from "./components/authRoute/authRoute";
import Dashboard from "./components/dashboard/dashboard";

const store = createStore(reducers,compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : () =>{}
));

//登陆验证权限，没权限跳到login
//导航 + 展示 + 注销

//boss genius me msg 4个页面

ReactDOM.render(
    (<Provider store={store}>
        <BrowserRouter>
            <div>
                <AuthRoute></AuthRoute>
                <Switch>  
                    <Route path="/login" component={Login}></Route>
                    {/* <Route path="/" component={Login}></Route> */}
                    <Route path="/register" component={Register}></Route>
                    <Route path="/bossinfo" component={BossInfo}></Route>
                    <Route path="/geniusinfo" component={GeniusInfo}></Route>
                    
                    <Route component={Dashboard}/>  
                </Switch>
                
            </div>
        </BrowserRouter>
    </Provider>),
    document.getElementById('root'));

