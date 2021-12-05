import React,{useState} from "react";
import cookie from 'react-cookies'
import { Table,Space,Image,message,Tag, Button} from "antd";
import axios from "axios";

export default class Myrelease extends React.Component{
    state = {
        username:cookie.load('username'),
        sourcedata:[],
    }
    
    componentDidMount(){
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
                        <Tag color={record.state==='accept'?'gold':record.state==='noaccept'?'red':'green'}>{record.state}</Tag>
                    </Space>
                )
            },
            {
                title:"认领人",
                dataIndex:"accepter",
                key:"accepter",
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