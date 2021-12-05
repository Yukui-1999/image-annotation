import React , { useState }from "react";
import cookie from 'react-cookies'
import './VideoSet.css'
import {Image,Form, Input, Button, message,Upload} from 'antd'
import saveAs from 'file-saver'
import JSZip from 'jszip';
import {DownloadOutlined} from '@ant-design/icons'
export default class VideoSet extends React.Component {
    state={
      videourl:'',
      pictureurl:[],
      username:cookie.load('username'),
    }
     upload= ()=> {
        const video = document.getElementById('video');
        const inputElement = document.getElementById('videoInput');
      console.log(inputElement)
      let fileList = inputElement.files;
      if(fileList.length > 0) {
        video.src = URL.createObjectURL(fileList[0]);
        this.setState({
            videourl:video.src,
            filelist:fileList,
        })      
      }
      console.log(video)
    }
         drawFrame=()=> {
            const canvas = document.getElementById('canvas');
            const ctx = canvas.getContext('2d');
            const frames=this.state.pictureurl;
            const video = document.getElementById('video');
          if(!video.paused && !video.ended) {
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
            let img = canvas.toDataURL("image/png");
            frames.push(img);
            this.setState({
                pictureurl:frames
            })
          }
        }
       downloadFrames=()=> {
        // const url = "https://api.cloudinary.com/v1_1/yukui/image/upload";
        // const formData = new FormData();
        let videoName;
        const frames=this.state.pictureurl;
        const video = document.getElementById('video');
        video.pause();
        if(frames && frames.length > 0) {
        console.log(frames.length + ' frames captured');
        let zip = new JSZip();
        let zipFilename = videoName + "Frames.zip";
        for(let i = 0; i < frames.length; i ++) {
            zip.file(i + ".png", frames[i].split(',')[1], {base64: true});
        //  let file =
        //   console.log(file)
        //     formData.append("file", file);
        //     formData.append("upload_preset", "sjl8ryfd");
        
        //     fetch(url, {
        //       method: "POST",
        //       body: formData
        //     })
        //       .then((response) => {
        //         console.log(response)
        //         return response.text();
                
        //       })
        }
        zip.generateAsync({ type: 'blob' }).then(function (content) {
            saveAs(content, zipFilename);
        });
      }
    }
    clear = ()=>{
        this.setState({
            pictureurl:[]
        })
    }

    
    render(){
       
    const Fromm = () => {
      const onFinish = (values) => {
        console.log(values.require);
        console.log(this.state.pictureurl)
      };
      return (
        <Form  style={{textAlign:"center"}} name="nest-messages" onFinish={onFinish} >

          <div style={{fontSize:"18px"}}>截取图片预览</div>
          <br/>
          <App/>
          <br/>
          <Button onClick={this.downloadFrames}icon={<DownloadOutlined />} type="primary">下载视频帧</Button> 
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
        
          
        return(
          <div>
            <br/><br/><br/>
            <div style={{textAlign:"center",fontSize:30}}>上传视频,提取图片<br/>
            <Input style={{width:200,border: "antiquewhite"}} id="videoInput" type="file" accept="video/*" onChange={this.upload} />
            <Button onClick={this.drawFrame}>截取图片</Button>
             <span>&nbsp;&nbsp;</span>
              
              <span>&nbsp;&nbsp;</span>
              <Button onClick={this.clear} type="warning">清空视频帧</Button> 
            </div>
            <br/><br/>
            {/* onClick={()=>{myWidget.open();}} */}
             {/* <Button icon={<UploadOutlined />} id="upload_widget" >点击上传视频</Button> */}
            <div className="dashboard-container" >
                
                <div >
                <video id="video" width="426" height="240"  controls></video>
                </div>
                <br />
                <div>
                <canvas id="canvas" width="426" height="240"></canvas>
                </div>
            </div>
                    <br /><br />
            <div> 
              <div style={{display:'flex',justifyContent:'space-around'}}>
                  <Fromm/>
                  </div>
            </div>
            <br/>
            <div >
            </div>
          </div>
        )
    }
    }