import React , { useState }from "react";
import './PictureSet.css';
import cookie from 'react-cookies'
import {UploadOutlined} from '@ant-design/icons'
import {Image,Form, Input, Button,message} from 'antd'
import axios from 'axios'
export default class PictureSet extends React.Component {
    state={
      pictureurl:[],
      username:cookie.load('username'),
      orderStyle:'',
      orderrepeated:false,
      orderHelp:null,
    }
    render(){
    const Fromm = () => {
      const onFinish = (values) => {
        console.log(values);
        console.log(this.state.pictureurl)
        console.log(this.state.pictureurl.length)
        axios.post('http://localhost:9000/pictureupload', {
            username:this.state.username,
            require:values.require,
            orderid:values.orderid,
            pictureurl:this.state.pictureurl,
        })
            .then(function (response) {
                const data = response.data
                const result = data.status
                if (result === 'success'){
                    message.success('发布成功',3)
                    setTimeout(()=>{
                      window.location.reload()
                    },2000)
                }
                else if(result === 'failed'){
                    console.log(result)
                    message.warning('发布错误，请联系管理员', 3);
                }
                else if(result === 'over'){
                  message.warning('上传图片超限,请上传小于等于10张图片', 3);
                }
                else if(result === 'repeated'){
                  message.warning('id重复,请选择其他id', 3);
                }
            })
            .catch(function (error) {
                console.log(error);
            });
      };
      return (
        <Form  style={{textAlign:"center"}} name="nest-messages" onFinish={onFinish} 
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 8 }}>
          <Form.Item 
          name={'orderid'}
          label="请创建6位标注ID"
          rules={[
            {
                required: true,
                min: 6,
                max: 6,
                message: '标注ID长度应为6个字符',
            },
        ]}
          >
            <Input onChange={this.test}></Input>
          </Form.Item>
          <Form.Item name={'require'} label="标注需求"
          rules={[
            {
                required: true,
            },
        ]}
          >
            <Input.TextArea />
          </Form.Item>
          <div>图片预览:</div>
          <App/>
          <br/>
            <Button type="primary" htmlType="submit">
              发布任务
            </Button>
        </Form>
      );
    };
      const App = () => {
        const [visible, setVisible] = useState(false);
        let keyid=1;
        return (
          <>
            <Image
              preview={{ visible: false }}
              src={this.state.pictureurl[0]}
              onClick={() => setVisible(true)}
              width={200}
            />
            <div style={{ display: 'none' }}>
              <Image.PreviewGroup preview={{ visible, onVisibleChange: vis => setVisible(vis) }}>
                {
                  this.state.pictureurl.map(function(url){
                    return<Image key={keyid++} src={url}></Image>
                  })
                }
              </Image.PreviewGroup>
            </div>
          </>
        );
      };
        var myWidget = window.cloudinary.createUploadWidget({
            cloudName: 'yukui', 
            uploadPreset: 'sjl8ryfd'}, (error, result) => { 
              if (!error && result && result.event === "success") { 
                console.log('Done! Here is the image info: '); 
                console.log(result)
                console.log(result.info.id)
                console.log(result.info.url)
                const data=this.state.pictureurl;
                data.push(result.info.url)
                console.log(data)
                this.setState({
                  pictureurl:data
                })
                console.log(this.state.pictureurl[0])
              }
            }
          )
        return(
          <div>
            <br/><br/><br/>
            <div style={{textAlign:"center",fontSize:30}}>上传图片,发布任务<br/>
            <Button icon={<UploadOutlined />} id="upload_widget" onClick={()=>{myWidget.open();}}>点击上传图片</Button></div>
            <br/><br/>
            <div>
              <div ><Fromm/></div>
            </div>
            <br/>
            <div >
            </div>
          </div>
        )
    }
}