import React, { Component } from 'react'
import Annotation from 'react-image-annotation'
import { List,Row, Col, Button,message } from 'antd';
import axios from 'axios';
import cookie from 'react-cookies'
//import { Comment,Comments } from 'react-image-annotation/lib/components'
var conststr=""
export default class Simple extends Component {
  constructor(props){
      super(props)
    this.App = this.App.bind(this)
  };
  state = {
    flag:this.props.location.state.annotationss===undefined?"1":"0",
    data:"",
    annotationss:this.props.location.state.annotationss===undefined?{}:this.props.location.state.annotationss,
    annotations: [],
    annotation: {},
    imagelist:this.props.location.state.pictureset,
    imagecur:this.props.location.state.pictureset[0],
    imagenum:this.props.location.state.pictureset.length,
    orderid:this.props.location.state.orderid,
  }

  onChange = (annotation) => {
    this.setState({ annotation })
    
  }

  onSubmit = (annotation) => {
    const { geometry, data } = annotation
    var obj = this.state.annotationss
    var j = this.state.imagelist.findIndex(i=>i===this.state.imagecur)
    obj[j]=this.state.annotations.concat({
      geometry,
      data: {
        ...data,
        id: Math.random()
      }
    });
    this.setState({
      annotation: {},
      activeAnnotations: [],
      annotationss:obj,
      annotations: this.state.annotations.concat({
        geometry,
        data: {
          ...data,
          id: Math.random()
        }
      })
    })
    console.log(this.state.annotations)
    console.log(this.state.imagelist,this.state.imagenum)
      console.log(111)
      console.log(this.state.annotationss)
    
  }
  // onMouseOver = (id) => e => {
  //   this.setState({
  //     activeAnnotations: [
  //       ...this.state.activeAnnotations,
  //       id
  //     ]
  //   })
  // }

  // onMouseOut = (id) => e => {
  //   const index = this.state.activeAnnotations.indexOf(id)

  //   this.setState({
  //     activeAnnotations: [
  //       ...this.state.activeAnnotations.slice(0, index),
  //       ...this.state.activeAnnotations.slice(index + 1)
  //     ]
  //   })
  // }
  uploaddata = () => { 
    console.log("?????")
    var orderid=this.state.orderid
    var ann=this.state.annotationss
    this.setState({
      data:conststr
    })
    console.log(this.state.data)
    axios.post('http://localhost:9000/uploaddata', {
      orderid:this.state.orderid,
      data:conststr,
  }).then(function (response) {
     let res = response.data
       const result = res.status
       if (result === 'failed'){
           message.error('出现问题,请联系管理员',3)
       }
       else{
         message.success('标注完成!',3)
         cookie.save(orderid,ann,{ path: '/' })
         setTimeout(()=>{
           window.location.href='/index/myreceive'
          //this.props.history.push({pathname:'/index/myreceive'})
        },300)
       }
 })
  }
  activeAnnotationComparator = (a, b) => {
    return a.data.id === b
  }
  nextpicture = () =>{
    var j = this.state.imagelist.findIndex(i=>i===this.state.imagecur)
    if(j+1>this.state.imagenum-1){
     return 
    }
    else{
     
      if(this.state.annotationss[j+1]===undefined){

      this.setState({
      
        annotation:{},
        annotations:[],
        imagecur:this.state.imagelist[j+1],
      })
    }
      else{
        this.setState({
        
          annotation:{},
          annotations:this.state.annotationss[j+1],
          imagecur:this.state.imagelist[j+1],
        })
      }
    }
  }
  prepicture = () =>{
    var j = this.state.imagelist.findIndex(i=>i===this.state.imagecur)
    if(j-1<0)
    return
    else{
      if(this.state.annotationss[j-1]===undefined){

        this.setState({
        
          annotation:{},
          annotations:[],
          imagecur:this.state.imagelist[j-1],
        })
      }
      else{
      this.setState({
       
        annotation:{},
        annotations:this.state.annotationss[j-1],
        imagecur:this.state.imagelist[j-1],
      })
    }
    }
  }
  
   App(props) {
    const obj=props.obj
    const keys = Object.keys(obj)
    let str=""
    for(let i=0;i<keys.length;i++){
        const key = keys[i]
        const value=obj[key]
        const len=value.length
        for(let j=0;j<len;j++){
          if(j===len-1&&i===keys.length-1)
          str+="图片序列号:"+key+",标注标签: "+value[j].data.text+" 位置大小: x:"+value[j].geometry.x.toFixed(2)+" y:"+value[j].geometry.y.toFixed(2)+" width:"+value[j].geometry.width.toFixed(2)+" height:"+value[j].geometry.height.toFixed(2)
          else
          str+="图片序列号:"+key+",标注标签: "+value[j].data.text+" 位置大小: x:"+value[j].geometry.x.toFixed(2)+" y:"+value[j].geometry.y.toFixed(2)+" width:"+value[j].geometry.width.toFixed(2)+" height:"+value[j].geometry.height.toFixed(2)+"&"
          //console.log("key:"+key+",标注标签:"+value[j].data.text+"位置大小:"+value[j].geometry.x+" "+value[j].geometry.y+" "+value[j].geometry.width+" "+value[j].geometry.height)
        }
      }
      console.log(str)
      conststr=str
      let strarr=str.split("&")
      console.log(strarr)
      
            return (
              <List bordered={true}>
                    {strarr.map(key => (
                      <List.Item>
                        {key}
                      </List.Item>
                    ))}
                  </List>
            );
          };
      pass = () =>{
        
        let data;
        axios.post('http://localhost:9000/pass', {
          orderid:this.state.orderid,
          state:'pass',
      })
          .then(function (response) {
             data = response.data
                const result = data.status
                if (result === 'failed'){
                    message.error('出现问题,请联系管理员',3)
                }
                else{
                  message.success('审核通过',3);
                  setTimeout(()=>{
                    window.location.href='/index/myrelease'
                  },300)
                }
          })
      }
      nopass =()=>{
        let data;
        axios.post('http://localhost:9000/pass', {
          orderid:this.state.orderid,
          state:'nopass',
      })
          .then(function (response) {
             data = response.data
                const result = data.status
                if (result === 'failed'){
                    message.error('出现问题,请联系管理员',3)
                }
                else{
                  message.success('审核不通过,以通知领取者重新标注',3);
                  setTimeout(()=>{
                    window.location.href='/index/myreceive'
                  },300)
                }
          })
      }
  render () {
   
    return (
      <div>
        <Row>
          <Col span={1}/>
          <Col span={13}>
            <div >
              <br/><br/>
              {this.state.flag==="1"?
               <h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               &nbsp;&nbsp;&nbsp;&nbsp;
                图像标注
               </h2>:
                <h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;
                  图像标注结果
                </h2>}
             
              <br/>
              <div style={{width:'75%'}}>
                {this.state.flag==="1"?
                <Annotation
                src={this.state.imagecur}
                alt='Two pebbles anthropomorphized holding hands'
                annotations={this.state.annotations}
                width={400}
                value={this.state.annotation}
                onChange={this.onChange}
                onSubmit={this.onSubmit}
                allowTouch
                />:
                <Annotation
                src={this.state.imagecur}
                alt='Two pebbles anthropomorphized holding hands'
                annotations={this.state.annotations}
                width={400}
                value={this.state.annotation}
                allowTouch
                />}
             
              </div>
              
              
              <Button onClick={this.prepicture}>上一张</Button>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {this.state.flag==="1"?
              <Button onClick={this.uploaddata}>完成标注</Button>:
              <span>
              <Button type='primary' onClick={this.pass}>审核通过</Button>&nbsp; <Button danger onClick={this.nopass}>审核不通过</Button>
              </span>
              }
             
              &nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Button onClick={this.nextpicture}>下一张</Button>
            </div>
          </Col>
          <Col span={8}>
            <div style={{textAlign:'center'}}>
            <br/><br/> 
            <h2>标注信息</h2>
            <br/>
            <List bordered={true}>
              {this.state.annotations.map(annotation => (
                <List.Item
                  key={annotation.data.id}
                >
                  {annotation.data.text}
                </List.Item>
              ))}
            </List>
            <br/><br/>
            <h2>标注数据</h2>
            {/* <App obj={this.state.annotationss}/> */}
            {/* {()=>{<this.App obj={this.state.annotationss}/>}} */}
            <this.App obj={this.state.annotationss}/>
            
            </div>
          </Col>
          <Col span={2}>
          </Col>
        </Row>
       
    
      </div>
    )
  }
}