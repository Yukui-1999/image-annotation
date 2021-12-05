import React from "react";
import { Layout, Menu,Button } from 'antd';
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
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
class Index extends React.Component {
  state = {
    collapsed: false,
    currentPage:"", 
    username:cookie.load('username')
  };

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
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            
            <Menu.Item key="1" icon={<PieChartOutlined />}>
                <Link to="/index/alljobs">
                标注市场
                </Link>
            </Menu.Item>
            <SubMenu key="sub2" icon={<UserOutlined />} title="发布任务">
              <Menu.Item key="2">
                <Link to="/index/picture">
                发布图片任务
                </Link>
              </Menu.Item>
              <Menu.Item key="3">
              <Link to="/index/video">
                视频提取图片工具
              </Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" icon={<UserOutlined />} title="我的">
              <Menu.Item key="4">
                <Link to="/index/myrelease">
                我的发布
                </Link>
              </Menu.Item>
              <Menu.Item key="5">
              <Link to="/index/myreceive">
                我的领取
              </Link>
              </Menu.Item>
            </SubMenu>
            <Menu.Item key="6" icon={<PieChartOutlined />}>
                <Link to="/index/alljobs">
                标注工作台
                </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background"  >
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
