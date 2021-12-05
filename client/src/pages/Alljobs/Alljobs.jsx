import React,{ useState } from "react";
import cookie from 'react-cookies'
import { Table, Image, Space ,Popconfirm, Button,message} from 'antd';
import axios from 'axios'

class Alljobs extends React.Component{
    state = {
        username:cookie.load('username'),
        sourcedata:[],
    }
    
     confirm=(e)=> {
        console.log(e);
        message.success('领取成功');
      }
      componentDidMount () {
        
        let data
        axios.post('http://localhost:9000/alljobs')
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
                  orderer:data.arrays[i].orderer,
                  numofimage:data.arrays[i].numofimage,
                  require:data.arrays[i].requires,
                  image:[data.arrays[i].imageurl1]
                })
                if(data.arrays[i].numofimage===2)
                alterarray.push({
                  key:i,
                  orderid:data.arrays[i].orderid,
                  orderer:data.arrays[i].orderer,
                  numofimage:data.arrays[i].numofimage,
                  require:data.arrays[i].requires,
                  image:[data.arrays[i].imageurl1,data.arrays[i].imageurl2]
                })
                if(data.arrays[i].numofimage===3)
                alterarray.push({
                  key:i,
                  orderid:data.arrays[i].orderid,
                  orderer:data.arrays[i].orderer,
                  numofimage:data.arrays[i].numofimage,
                  require:data.arrays[i].requires,
                  image:[data.arrays[i].imageurl1,data.arrays[i].imageurl2,data.arrays[i].imageurl3]
                })
                if(data.arrays[i].numofimage===4)
                alterarray.push({
                  key:i,
                  orderid:data.arrays[i].orderid,
                  orderer:data.arrays[i].orderer,
                  numofimage:data.arrays[i].numofimage,
                  require:data.arrays[i].requires,
                  image:[data.arrays[i].imageurl1,data.arrays[i].imageurl2,data.arrays[i].imageurl3,data.arrays.imageurl4]
                })
                if(data.arrays[i].numofimage===5)
                alterarray.push({
                  key:i,
                  orderid:data.arrays[i].orderid,
                  orderer:data.arrays[i].orderer,
                  numofimage:data.arrays[i].numofimage,
                  require:data.arrays[i].requires,
                  image:[data.arrays[i].imageurl1,data.arrays[i].imageurl2,data.arrays[i].imageurl3,
                    data.arrays[i].imageurl4,data.arrays[i].imageurl5
                  ]
                })
                if(data.arrays[i].numofimage===6)
                alterarray.push({
                  key:i,
                  orderid:data.arrays[i].orderid,
                  orderer:data.arrays[i].orderer,
                  numofimage:data.arrays[i].numofimage,
                  require:data.arrays[i].requires,
                  image:[data.arrays[i].imageurl1,data.arrays[i].imageurl2,data.arrays[i].imageurl3,
                    data.arrays[i].imageurl4,data.arrays[i].imageurl5,data.arrays[i].imageurl6]
                })
                if(data.arrays[i].numofimage===7)
                alterarray.push({
                  key:i,
                  orderid:data.arrays[i].orderid,
                  orderer:data.arrays[i].orderer,
                  numofimage:data.arrays[i].numofimage,
                  require:data.arrays[i].requires,
                  image:[data.arrays[i].imageurl1,data.arrays[i].imageurl2,data.arrays[i].imageurl3,
                  data.arrays[i].imageurl4,data.arrays[i].imageurl5,data.arrays[i].imageurl6,data.arrays[i].imageurl7]
                })
                if(data.arrays[i].numofimage===8)
                alterarray.push({
                  key:i,
                  orderid:data.arrays[i].orderid,
                  orderer:data.arrays[i].orderer,
                  numofimage:data.arrays[i].numofimage,
                  require:data.arrays[i].requires,
                  image:[data.arrays[i].imageurl1,data.arrays[i].imageurl2,data.arrays[i].imageurl3,
                  data.arrays[i].imageurl4,data.arrays[i].imageurl5,data.arrays[i].imageurl6,data.arrays[i].imageurl7,
                    data.arrays[i].imageurl8]
                })
                if(data.arrays[i].numofimage===9)
                alterarray.push({
                  key:i,
                  orderid:data.arrays[i].orderid,
                  orderer:data.arrays[i].orderer,
                  numofimage:data.arrays[i].numofimage,
                  require:data.arrays[i].requires,
                  image:[data.arrays[i].imageurl1,data.arrays[i].imageurl2,data.arrays[i].imageurl3,
                  data.arrays[i].imageurl4,data.arrays[i].imageurl5,data.arrays[i].imageurl6,data.arrays[i].imageurl7,
                    data.arrays[i].imageurl8,data.arrays[i].imageurl9]
                })
                if(data.arrays[i].numofimage===10)
                alterarray.push({
                  key:i,
                  orderid:data.arrays[i].orderid,
                  orderer:data.arrays[i].orderer,
                  numofimage:data.arrays[i].numofimage,
                  require:data.arrays[i].requires,
                  image:[data.arrays[i].imageurl1,data.arrays[i].imageurl2,data.arrays[i].imageurl3,
                  data.arrays[i].imageurl4,data.arrays[i].imageurl5,data.arrays[i].imageurl6,data.arrays[i].imageurl7,
                    data.arrays[i].imageurl8,data.arrays[i].imageurl9,data.arrays[i].imageurl10]
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
      componentWillUnmount(){
        
      }
   
    
    render(){
        const columns = [
            {
                title: '任务id',
                dataIndex: 'orderid',
                key: 'orderid',
            },
            {
              title: '发布人',
              dataIndex: 'orderer',
              key: 'orderer',
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
                title:'领取任务',
                key:'accept',
                render:(text, record) =>(
                    <Space size="middle">
                  <Popconfirm
                    title="您确定要领取该标注任务吗?"
                    onConfirm={() => this.confirm(record.orderid)}
                    okText="Yes"
                    cancelText="No"
                >
                    <Button>领取</Button>
                </Popconfirm>
                </Space>
                )
            }
          ];
          
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
                <div style={{textAlign:"center",fontSize:"30px"}}>标注任务</div>
                <br/>
                <Table columns={columns} dataSource={data} bordered={true}
                pagination={{ // 具体配置可看antd官网文档Pagination的API部分
                  　　defaultPageSize:5
                  }}
                 />
            </div>
        )
    }
}
export default Alljobs