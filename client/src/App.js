import React,{Component} from 'react'
import axios from 'axios'
import Login from "./pages/login/login.jsx";
import Register from './pages/Register/register.jsx';
import ForgetPwd from './pages/ForgetPwd/ForgetPwd'
import Index from './pages/index/index.jsx';
import './App.css';
import {message} from 'antd';
import cookie from 'react-cookies';
import {Route, Switch, Redirect} from 'react-router-dom';
import 'antd/dist/antd.css';

class App extends Component{
  state = {
    // username: cookie.load('username')
    username:null,
}

//从cookie中判断是否是第一次进入首页
componentDidMount () {
    const success = cookie.load('loginSuccess')
    if (success !== undefined) {
        message.success('登陆成功。欢迎您，' + this.state.username, 10)
            .then(value => console.log(value), reason => console.log(reason))
        cookie.remove('loginSuccess',{ path: '/' })
    }
}

  // async callAPI() {
  //     const res=await axios.get('http://localhost:9000/testAPI/api')
  //     const data=await res.data
  //     this.setState({
  //       apiResponse:data,
  //     })

  // }

  // componentWillMount() {
  //     this.callAPI();
  // }

  render(){
    return (
      <div>
                
                <Switch>
                    <Route path="/index" component={Index} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/forgetpwd" component={ForgetPwd} />
                    <Redirect to= "/login" />
                </Switch>
            </div>
    );
  }
}
  


export default App;
