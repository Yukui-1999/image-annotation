import React, {Component} from 'react';
import {Button, message, Form, Input} from "antd";
import {LockOutlined, MailOutlined, UserOutlined} from "@ant-design/icons";
import axios from 'axios';
import cookie from 'react-cookies'
import "./AlterPwd.css"

class AlterPwd extends Component {

    state = {
        oldPassword: '',
        newPassword:'',
        email:'',
        username:'',
    }
    handleEmail = e => {
        this.setState({email: e.target.value})
    }

    repeatPwd = (rule, value) => {
        if (value && value !== this.state.newPassword) return Promise.reject('两次密码不一致')
        return Promise.resolve()
    }

    handleOldPassword = e => {
        this.setState({oldPassword: e.target.value})
    }
    handleNewPassword = e => {
        this.setState({newPassword: e.target.value})
    }
    handlehandleusername = e => {
        this.setState({username: e.target.value})
    }
    handleSubmit = () => {
        const {newPassword, email} = this.state
        const reg1 =/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/
        const reg2 = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/
        if (newPassword === '' || email === ''  || !reg1.test(newPassword) || !reg2.test(email) ) {
            return message.error("数据格式非法")
        }
        else{
            axios.post('http://localhost:9000/forgetpwd', {
                newPassword: newPassword,
                email: email
            })
                .then(response => {
                    console.log(response)
                    const data = response.data;
                    if(data.status === 'success'){
                        cookie.save('successalter', true, { path: '/' })
                        window.location.href = '/login'
                    }
                    else if(data.status === 'unRegister'){
                        message.warning('不存在该账号', 10);
                    }
                    else{
                        message.warning('服务器繁忙，请稍后再试', 10);
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }

    render () {
        return (
            <Form  className={'trueForm'}>
                <Form.Item
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: '请输入用户名',
                            }
                        ]}
                    >
                        <Input
                            prefix={<UserOutlined className="site-form-item-icon" />}
                            placeholder="用户名"
                            onChange={this.handleusername}
                        />
                    </Form.Item>
                    <Form.Item
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: '请输入您的邮箱地址',
                                trigger: 'blur'
                            },
                            {
                                pattern:/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/,
                                message:'请输入正确的邮箱格式'
                            }
                        ]}
                    >
                        <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="邮箱" onChange={this.handleEmail}/>
                    </Form.Item>

                    <Form.Item
                        name="newPassword"
                        rules={[
                            {
                                required: true,
                                message: '请输入您的密码',
                            },
                            {
                                min: 6,
                                max: 24,
                                message: '密码长度应为8-16个字符',
                                trigger: 'blur'
                            },
                            {
                                pattern:/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/,
                                message: '密码应包含数字和字母，不能有特殊字符'
                            }
                        ]}
                    >
                        <Input.Password
                            prefix={<LockOutlined className="site-form-item-icon"/>}
                            type="password"
                            placeholder="新密码"
                            onChange={this.handleNewPassword}
                        />
                    </Form.Item>

                    <Form.Item
                        name="password2"
                        rules={[
                            {
                                required: true,
                                message: '请再次确认密码',
                            },
                            {
                                validator: this.repeatPwd
                            }
                        ]}
                    >
                        <Input.Password
                            prefix={<LockOutlined className="site-form-item-icon"/>}
                            type="password"
                            placeholder="确认新密码"
                            onChange={e => this.verifyPwd = e.target.value}
                        />
                    </Form.Item>

                    


                    <Form.Item id='buttons'>
                        <div className='myBtn'>
                            

                            <Button type="primary" htmlType="submit" className="login-form-button" onClick={this.handleSubmit}>
                                修改密码
                            </Button>
                        </div>
                    </Form.Item>
                </Form>
        )
        
    }
}

export default AlterPwd;