import React,{useState} from "react";
import cookie from 'react-cookies'
import { Table,Space,Image,message,Tag, Button} from "antd";
import axios from "axios";
import saveAs from 'file-saver'
import JSZip from 'jszip';
import $ from 'jquery'
export default class Myrelease extends React.Component{
    state = {
        username:cookie.load('username'),
        sourcedata:[],
    }
    
    componentDidMount(){
        //cookie.remove('path',{path:"/"})
        cookie.save('path','/index/myrelease',{path:"/"})
        let data;
        console.log(this.state.username)
        axios.post('http://localhost:9000/myrelease', {
            username:this.state.username,
        })
          .then(function (response) {
             data = response.data
                const result = data.status
                if (result === 'failed'){
                    message.error('出现问题,请联系管理员',3)
                }
                else{
                  console.log(data.arrays)
                }
          }).then(()=>{
            let alterarray=[]
            for(let i=0;i<data.arrays.length;i++){
              if(data.arrays[i].numofimage===1)
              alterarray.push({
                key:i,
                orderid:data.arrays[i].orderid,
                numofimage:data.arrays[i].numofimage,
                require:data.arrays[i].requires,
                image:[data.arrays[i].imageurl1],
                state:data.arrays[i].state,
                accepter:data.arrays[i].accepter,
              })
              if(data.arrays[i].numofimage===2)
              alterarray.push({
                key:i,
                orderid:data.arrays[i].orderid,
                numofimage:data.arrays[i].numofimage,
                require:data.arrays[i].requires,
                image:[data.arrays[i].imageurl1,data.arrays[i].imageurl2],
                state:data.arrays[i].state,
                accepter:data.arrays[i].accepter,
              })
              if(data.arrays[i].numofimage===3)
              alterarray.push({
                key:i,
                orderid:data.arrays[i].orderid,
                numofimage:data.arrays[i].numofimage,
                require:data.arrays[i].requires,
                image:[data.arrays[i].imageurl1,data.arrays[i].imageurl2,data.arrays[i].imageurl3],
                state:data.arrays[i].state,
                accepter:data.arrays[i].accepter,
              })
              if(data.arrays[i].numofimage===4)
              alterarray.push({
                key:i,
                orderid:data.arrays[i].orderid,
                numofimage:data.arrays[i].numofimage,
                require:data.arrays[i].requires,
                image:[data.arrays[i].imageurl1,data.arrays[i].imageurl2,data.arrays[i].imageurl3,data.arrays.imageurl4],
                state:data.arrays[i].state,
                accepter:data.arrays[i].accepter,
              })
              if(data.arrays[i].numofimage===5)
              alterarray.push({
                key:i,
                orderid:data.arrays[i].orderid,
                numofimage:data.arrays[i].numofimage,
                require:data.arrays[i].requires,
                image:[data.arrays[i].imageurl1,data.arrays[i].imageurl2,data.arrays[i].imageurl3,
                  data.arrays[i].imageurl4,data.arrays[i].imageurl5
                ],
                state:data.arrays[i].state,
                accepter:data.arrays[i].accepter,
              })
              if(data.arrays[i].numofimage===6)
              alterarray.push({
                key:i,
                orderid:data.arrays[i].orderid,
                numofimage:data.arrays[i].numofimage,
                require:data.arrays[i].requires,
                image:[data.arrays[i].imageurl1,data.arrays[i].imageurl2,data.arrays[i].imageurl3,
                  data.arrays[i].imageurl4,data.arrays[i].imageurl5,data.arrays[i].imageurl6],
                state:data.arrays[i].state,
                accepter:data.arrays[i].accepter,
              })
              if(data.arrays[i].numofimage===7)
              alterarray.push({
                key:i,
                orderid:data.arrays[i].orderid,
                numofimage:data.arrays[i].numofimage,
                require:data.arrays[i].requires,
                image:[data.arrays[i].imageurl1,data.arrays[i].imageurl2,data.arrays[i].imageurl3,
                data.arrays[i].imageurl4,data.arrays[i].imageurl5,data.arrays[i].imageurl6,data.arrays[i].imageurl7],
                state:data.arrays[i].state,
                accepter:data.arrays[i].accepter,
              })
              if(data.arrays[i].numofimage===8)
              alterarray.push({
                key:i,
                orderid:data.arrays[i].orderid,
                numofimage:data.arrays[i].numofimage,
                require:data.arrays[i].requires,
                image:[data.arrays[i].imageurl1,data.arrays[i].imageurl2,data.arrays[i].imageurl3,
                data.arrays[i].imageurl4,data.arrays[i].imageurl5,data.arrays[i].imageurl6,data.arrays[i].imageurl7,
                  data.arrays[i].imageurl8],
                state:data.arrays[i].state,
                accepter:data.arrays[i].accepter,
              })
              if(data.arrays[i].numofimage===9)
              alterarray.push({
                key:i,
                orderid:data.arrays[i].orderid,
                numofimage:data.arrays[i].numofimage,
                require:data.arrays[i].requires,
                image:[data.arrays[i].imageurl1,data.arrays[i].imageurl2,data.arrays[i].imageurl3,
                data.arrays[i].imageurl4,data.arrays[i].imageurl5,data.arrays[i].imageurl6,data.arrays[i].imageurl7,
                  data.arrays[i].imageurl8,data.arrays[i].imageurl9],
                state:data.arrays[i].state,
                accepter:data.arrays[i].accepter,
              })
              if(data.arrays[i].numofimage===10)
              alterarray.push({
                key:i,
                orderid:data.arrays[i].orderid,
                numofimage:data.arrays[i].numofimage,
                require:data.arrays[i].requires,
                image:[data.arrays[i].imageurl1,data.arrays[i].imageurl2,data.arrays[i].imageurl3,
                data.arrays[i].imageurl4,data.arrays[i].imageurl5,data.arrays[i].imageurl6,data.arrays[i].imageurl7,
                  data.arrays[i].imageurl8,data.arrays[i].imageurl9,data.arrays[i].imageurl10],
                state:data.arrays[i].state,
                accepter:data.arrays[i].accepter,
              })
            }
            
          this.setState({
            sourcedata:alterarray,
          })
          console.log(alterarray)
          })
          .catch(function (error) {
            console.log(error);
        })
    }
     getBase64(img){
      function getBase64Image(img,width,height) {//width、height调用时传入具体像素值，控制大小 ,不传则默认图像大小
        var canvas = document.createElement("canvas");
        canvas.width = width ? width : img.width;
        canvas.height = height ? height : img.height;

        var ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        var dataURL = canvas.toDataURL();
        return dataURL;
      }
      var image=document.createElement('img')
      image.crossOrigin = '*';
      image.src = img;
      var deferred=$.Deferred();
      if(img){
        image.onload =function (){
          deferred.resolve(getBase64Image(image));//将base64传给done上传处理
        }
        return deferred.promise();//问题要让onload完成后再return sessionStorage['imgTest']
      }
    }
    look=(e)=>{
      
        console.log(e)
        var annotationss=cookie.load(e.orderid)
        console.log(annotationss)
        if(e.state==='done'||e.state==='nopass')
        this.props.history.push({pathname:'/index/workbench',state:{pictureset:e.image,orderid:e.orderid,annotationss:annotationss}})
        else if(e.state==='pass')
        message.success("任务已经结束,请下载标注数据查看!")
        else{
          message.error('任务还没有完成')
        }
    }
    downloaddata=(e)=>{
      if(e.state!=='done'&&e.state!=='pass'&&e.state!=='nopass'){
        message.error("任务还没有完成!")
        return
      }
    
      let res
      let data
      let imagearr = e.image
      var zip=new JSZip()
      var imgFolder = zip.folder("images")
      console.log(imagearr)
      let flag=0
      axios.post('http://localhost:9000/getdata',{
        orderid:e.orderid
      })
      .then(function (response) {
         res = response.data
            const result = res.status
            if (result === 'failed'){
                message.error('出现问题,请联系管理员',3)
            }
            else{
              //console.log(res.data[0].annotationdata)
              data=res.data[0].annotationdata
            }
      }).then(()=>{
        console.log(data)
        
          zip.file("标注数据.txt",data)
          for(let i=0;i<imagearr.length;i++){
            this.getBase64(imagearr[i]).then(function (base64) {
             base64 = base64.split('base64,')[1]
             imgFolder.file(i + '.png', base64, { base64: true })
             if (flag === imagearr.length - 1) {
               zip.generateAsync({ type: "blob" }).then((blob) => {
                   saveAs(blob, "标注数据.zip")
               })
             }
             flag++
           },function(err){
                 console.log(err);//打印异常信息
           });
     }
      })
    }
    render(){
        const columns = [
            {
                title: '任务id',
                dataIndex: 'orderid',
                key: 'orderid',
            },
            {
              title: '图片张数',
              dataIndex: 'numofimage',
              key: 'numofimage',
            },
            {
              title: '标注需求',
              dataIndex: 'require',
              key: 'require',
            },
            {
              title: '图片组详情',
              key: 'image',
              render: (text, record) => (
                <Space size="middle">
                  <App image={record.image}/>
                </Space>
              ),
            },
            {
                title:'任务状态',
                key:'state',
                dataIndex:'state',
                render:(text,record)=>(
                    <Space size="middle">
                        <Tag color={record.state==='accept'?'magenta':record.state==='noaccept'?'red':record.state==='done'?'orange':record.state==='nopass'?'cyan':'green'}>{record.state}</Tag>
                    </Space>
                )
            },
            {
                title:"认领人",
                dataIndex:"accepter",
                key:"accepter",
            },
            {
              title:"审核标注结果",
              dataIndex:"look",
              key:"look",
              render:(text,record)=>(
                <Space size="middle">
                    <Button onClick={()=>{this.look(record)}}>审核</Button>
                </Space>
            )
            },
            {
              title:"下载标注数据",
              dataIndex:"download",
              key:"download",
              render:(text,record)=>(
                <Space size="middle">
                    <Button onClick={()=>{this.downloaddata(record)}}>下载数据</Button>
                </Space>
            )
            },
            
          
        ]
        const data = this.state.sourcedata
        function App (props) {
            const image=props.image
            const [visible, setVisible] = useState(false);
            let keyid=1;
            return (
              <>
                <Image width={200}
                  preview={{ visible: false }}
                  src={image[0]}
                  onClick={() => setVisible(true)}
                />
                <div style={{ display: 'none' }}>
                  <Image.PreviewGroup preview={{ visible, onVisibleChange: vis => setVisible(vis) }}>
                    {
                      image.map(function(url){
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
               <br/><br/>
                <div style={{textAlign:"center",fontSize:"30px"}}>我的发布</div>
                <br/>
                <Table columns={columns} dataSource={data} bordered={true}
                pagination={{ 
                  　　defaultPageSize:5
                  }}
                 />
            </div>
        )
    }
}