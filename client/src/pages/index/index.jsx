import React from "react";
import { Layout, Menu,Button,message } from 'antd';
import {Route, Switch, Redirect, Link} from 'react-router-dom';
import {PieChartOutlined,FileOutlined,UserOutlined,} from '@ant-design/icons';
import PictureSet from "../PictureSet/PictureSet";
import "./Index.css"
import 'antd/dist/antd.css';
import cookie from 'react-cookies'
import Alljobs from "../Alljobs/Alljobs";
import VideoSet from '../VideoSet/VideoSet'
import Myrelease from '../Myrelease/Myrelease'
import Myreceive from '../Myreceive/Myreceive'
import Workbench from "../Workbench/Workbench";
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
class Index extends React.Component {
  state = {
    collapsed: false,
    username:cookie.load('username'),
    
  
  };
  componentDidMount () {
    const success = cookie.load('loginSuccess')
    if (success !== undefined) {
        message.success('登陆成功。欢迎您，' + this.state.username, 10)
            .then(value => console.log(value), reason => console.log(reason))
        cookie.remove('loginSuccess',{ path: '/' })
    }
    
   
  
  
}
  constructor (props) {
      super (props);
      const username = cookie.load('username');
      console.log(username)
      if(username === undefined) {
          window.location.href = '/login'
      }
  }
  
  handleLoginOut = () => {
      cookie.remove('username', { path: '/' })
      cookie.remove('loginSuccess', { path: '/' })
      cookie.remove('email', {path:'/'})
      window.location.href = '/login'
  }
  changePage = name => {
      this.setState({currentPage:name});
  }
  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  
  render() {
    const { collapsed } = this.state;
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
          <div className="logo">图像标注系统</div>
          <Menu theme="dark"  mode="inline" selectedKeys={this.props.location.pathname}
          >
            <Menu.Item key="/index/alljobs" icon={<PieChartOutlined />}>
                <Link to="/index/alljobs">
                标注市场
                </Link>
            </Menu.Item>
            <SubMenu key="sub2" icon={<UserOutlined />} title="发布任务">
              <Menu.Item key="/index/picture">
                <Link to="/index/picture">
                发布图片任务
                </Link>
              </Menu.Item>
              <Menu.Item key="/index/video">
              <Link to="/index/video">
                视频提取图片工具
              </Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" icon={<UserOutlined />} title="我的">
              <Menu.Item key="/index/myrelease">
                <Link to="/index/myrelease">
                我的发布
                </Link>
              </Menu.Item>
              <Menu.Item key="/index/myreceive">
              <Link to="/index/myreceive">
                我的领取
              </Link>
              </Menu.Item>
            </SubMenu>
            <Menu.Item key="/index/workbench" icon={<PieChartOutlined />} >
                
                标注工作台
             
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background"  >
            
            <span id='username' style={{color:'white'}}>username : {this.state.username}</span>
          <Button type="primary" id="exitBtn" onClick = {this.handleLoginOut}>退出登录</Button>
            
            
          </Header>
          <Content style={{ margin: '0 16px' }} >
            <div className="content-layout-background" style={{ padding: 0, minHeight: 650}}>
              <Switch>
                <Route  path="/index/picture" component={PictureSet}/>
                <Route  path="/index/video" component={VideoSet}/>
                <Route  path="/index/alljobs" component={Alljobs}/>
                <Route  path="/index/myrelease" component={Myrelease}/>
                <Route  path="/index/myreceive" component={Myreceive}/>
                <Route path="/index/workbench" component={Workbench}/>
                <Redirect to= "/index/alljobs" />                
              </Switch>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Image data annotation ©2021 Created by dzy</Footer>
        </Layout>
      </Layout>
    );
  }
}
export default Index;
