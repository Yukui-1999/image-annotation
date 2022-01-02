const mysql = require ('mysql');
const mysqlConfig = require ('./mysql.js');
const email   = require("emailjs");
const sqlStatement = require('./sql').user;
const { param } = require('../routes/index.js');
const db=mysql.createConnection(mysqlConfig);



const userData = {
    //rand:generateRandom(6),
    login:(param, res) => {
        console.log(param)
            db.query (sqlStatement.queryByUsername, param.username, (err, result) => {
                
                if (err || result.length === 0){
                    const result = {status:'failed'}
                    res.send(JSON.stringify(result))
                }
                else{
                    if (result[0].password === param.password){
                        const r = {status:'success', username:result[0].username, email:result[0].email}
                        res.send(JSON.stringify(r))
                    }
                    else{
                        const result = {status:'failed'}
                        res.send(JSON.stringify(result))
                    }
                }
            })
    },
    alljobs:(param,res)=>{
        db.query(sqlStatement.queryjobs,(err,result)=>{
            console.log(result)
            const jieguo=result
            if(err ){
                const result = {status:'failed'}
                res.send(JSON.stringify(result))
            }
            else{
                const result = {status:'success',arrays:jieguo}
                res.send(JSON.stringify(result))
            }
        })
    },
    myrelease:(param,res)=>{
        let username = param.username
        console.log(username)
        db.query(sqlStatement.querymyrelease,username,(err,result)=>{
            console.log(result)
            const jieguo=result
            if(err){
                const result = {status:'failed'}
                res.send(JSON.stringify(result))
            }
            else{
                const result = {status:'success',arrays:jieguo}
                res.send(JSON.stringify(result))
            }
        })
    },
    claimtask:(param,res)=>{
        let username = param.username
        let orderid = param.orderid
        let state = 'accept'
        console.log(username,orderid)
        db.query(sqlStatement.claimtask,[state,username,orderid],(err,result)=>{
            console.log(result)
            if(err){
                const result = {status:'failed'}
                res.send(JSON.stringify(result))
            }
            else{
                const result = {status:'success'}
                res.send(JSON.stringify(result))
            }
        })
    },
    pass:(param,res)=>{
        let orderid = param.orderid
        let state = param.state
        console.log(orderid,state)
        db.query(sqlStatement.pass,[state,orderid],(err,result)=>{
            if(err){
                const result = {status:'failed'}
                res.send(JSON.stringify(result))
            }
            else{
                const result = {status:'success'}
                res.send(JSON.stringify(result))
            } 
        })
    },
    uploaddata:(param,res)=>{
        let orderid = param.orderid
        let data = param.data
        let state = 'done'
        console.log(data)
        db.query(sqlStatement.uploaddata,[state,data,orderid],(err,result)=>{
            console.log(result)
            if(err){
                const result = {status:'failed'}
                res.send(JSON.stringify(result))
            }
            else{
                const result = {status:'success'}
                res.send(JSON.stringify(result))
            }
        })

    },
    getdata:(param ,res)=>{
        let orderid = param.orderid
        console.log(orderid)
        db.query(sqlStatement.getdata,orderid,(err,result)=>{
            console.log(result)
            const data=result
            if(err){
                const result = {status:'failed'}
                res.send(JSON.stringify(result))
            }
            else{
                const result = {status:'success',data:data}
                res.send(JSON.stringify(result))
            }
        })

    },
    myreceive:(param,res)=>{
        let username = param.username
        console.log(username)
        db.query(sqlStatement.querymyreceive,username,(err,result)=>{
            console.log(result)
            const jieguo=result
            if(err){
                const result = {status:'failed'}
                res.send(JSON.stringify(result))
            }
            else{
                const result = {status:'success',arrays:jieguo}
                res.send(JSON.stringify(result))
            }
        })
    },
    pictureupload:(param,res) =>{
        let username = param.username
        let require = param.require
        let orderid = param.orderid
        let pictureurl = param.pictureurl
        let length = pictureurl.length
        let state = 'noaccept'
        console.log(username,require,orderid,pictureurl,length)
        if(username!==null&&require!==null&&orderid!==null&&pictureurl!==null&&length>10){
            res.send(JSON.stringify({status:'over'}))
        }
        if(username===null&&require===null&&orderid!==null&&pictureurl===null){
            db.query(sqlStatement.queryorderid,param.orderid,(err,result)=>{
                if (err || result.length === 0){
                    res.send(JSON.stringify({status:'norepeated'}))
                }
                else {res.send(JSON.stringify({status:'repeated'}))
                console.log(result)
                }
            })
        }
        if(username!==null&&require!==null&&orderid!==null&&pictureurl!==null&&length===1){
            db.query(sqlStatement.insertorder1,[orderid,username,length,require,pictureurl[0],state],(err)=>{
                if (!err){
                    res.send(JSON.stringify({status:'success'}))
                }
                else if(err.errno===1062){
                    console.log(err)
                    res.send(JSON.stringify({status:'repeated'}))
                }
                else{
                    console.log(err)
                    res.send(JSON.stringify({status:'failed'}))
                }
            })
        }
        if(username!==null&&require!==null&&orderid!==null&&pictureurl!==null&&length===2){
            db.query(sqlStatement.insertorder2,[orderid,username,length,require,pictureurl[0],pictureurl[1],state],(err)=>{
                if (!err){
                    res.send(JSON.stringify({status:'success'}))
                }
                else if(err.errno===1062){
                    console.log(err)
                    res.send(JSON.stringify({status:'repeated'}))
                }
                else{
                    console.log(err)
                    res.send(JSON.stringify({status:'failed'}))
                }
            })
        }
        if(username!==null&&require!==null&&orderid!==null&&pictureurl!==null&&length===3){
            db.query(sqlStatement.insertorder3,[orderid,username,length,require,pictureurl[0],pictureurl[1],pictureurl[2],state],(err)=>{
                if (!err){
                    res.send(JSON.stringify({status:'success'}))
                }
                else if(err.errno===1062){
                    console.log(err)
                    res.send(JSON.stringify({status:'repeated'}))
                }
                else{
                    console.log(err)
                    res.send(JSON.stringify({status:'failed'}))
                }
            })
        }
        if(username!==null&&require!==null&&orderid!==null&&pictureurl!==null&&length===4){
            db.query(sqlStatement.insertorder4,[orderid,username,length,require,pictureurl[0],pictureurl[1],pictureurl[2],pictureurl[3],state],(err)=>{
                if (!err){
                    res.send(JSON.stringify({status:'success'}))
                }
                else if(err.errno===1062){
                    console.log(err)
                    res.send(JSON.stringify({status:'repeated'}))
                }
                else{
                    console.log(err)
                    res.send(JSON.stringify({status:'failed'}))
                }
            })
        }
        if(username!==null&&require!==null&&orderid!==null&&pictureurl!==null&&length===5){
            db.query(sqlStatement.insertorder5,[orderid,username,length,require,pictureurl[0],pictureurl[1],pictureurl[2],pictureurl[3],pictureurl[4],state],(err)=>{
                if (!err){
                    res.send(JSON.stringify({status:'success'}))
                }
                else if(err.errno===1062){
                    console.log(err)
                    res.send(JSON.stringify({status:'repeated'}))
                }
                else{
                    console.log(err)
                    res.send(JSON.stringify({status:'failed'}))
                }
            })
        }
        if(username!==null&&require!==null&&orderid!==null&&pictureurl!==null&&length===6){
            db.query(sqlStatement.insertorder6,[orderid,username,length,require,pictureurl[0],pictureurl[1],pictureurl[2],pictureurl[3],pictureurl[4],pictureurl[5],state],(err)=>{
                if (!err){
                    res.send(JSON.stringify({status:'success'}))
                }
                else if(err.errno===1062){
                    console.log(err)
                    res.send(JSON.stringify({status:'repeated'}))
                }
                else{
                    console.log(err)
                    res.send(JSON.stringify({status:'failed'}))
                }
            })
        }
        if(username!==null&&require!==null&&orderid!==null&&pictureurl!==null&&length===7){
            db.query(sqlStatement.insertorder7,[orderid,username,length,require,pictureurl[0],pictureurl[1],pictureurl[2],pictureurl[3],pictureurl[4],pictureurl[5],pictureurl[6],state],(err)=>{
                if (!err){
                    res.send(JSON.stringify({status:'success'}))
                }
                else if(err.errno===1062){
                    console.log(err)
                    res.send(JSON.stringify({status:'repeated'}))
                }
                else{
                    console.log(err)
                    res.send(JSON.stringify({status:'failed'}))
                }
            })
        }
        if(username!==null&&require!==null&&orderid!==null&&pictureurl!==null&&length===8){
            db.query(sqlStatement.insertorder8,[orderid,username,length,require,pictureurl[0],pictureurl[1],pictureurl[2],pictureurl[3],pictureurl[4],pictureurl[5],pictureurl[6],pictureurl[7],state],(err)=>{
                if (!err){
                    res.send(JSON.stringify({status:'success'}))
                }
                else if(err.errno===1062){
                    console.log(err)
                    res.send(JSON.stringify({status:'repeated'}))
                }
                else{
                    console.log(err)
                    res.send(JSON.stringify({status:'failed'}))
                }
            })
        }
        if(username!==null&&require!==null&&orderid!==null&&pictureurl!==null&&length===9){
            db.query(sqlStatement.insertorder9,[orderid,username,length,require,pictureurl[0],pictureurl[1],pictureurl[2],pictureurl[3],pictureurl[4],pictureurl[5],pictureurl[6],pictureurl[7],pictureurl[8],state],(err)=>{
                if (!err){
                    res.send(JSON.stringify({status:'success'}))
                }
                else if(err.errno===1062){
                    console.log(err)
                    res.send(JSON.stringify({status:'repeated'}))
                }
                else{
                    console.log(err)
                    res.send(JSON.stringify({status:'failed'}))
                }
            })
        }
        if(username!==null&&require!==null&&orderid!==null&&pictureurl!==null&&length===10){
            db.query(sqlStatement.insertorder10,[orderid,username,length,require,pictureurl[0],pictureurl[1],pictureurl[2],pictureurl[3],pictureurl[4],pictureurl[5],pictureurl[6],pictureurl[7],pictureurl[8],pictureurl[9],state],(err)=>{
                if (!err){
                    res.send(JSON.stringify({status:'success'}))
                }
                else if(err.errno===1062){
                    console.log(err)
                    res.send(JSON.stringify({status:'repeated'}))
                }
                else{
                    console.log(err)
                    res.send(JSON.stringify({status:'failed'}))
                }
            })
        }
    },
    register:(param, res) => {
        
        let queryContent = ''
             if (param.username !== undefined&&param.email===undefined) {
                
                console.log(111)
                console.log(param.username)
                queryContent = param.username
                db.query(sqlStatement.queryByUsername, queryContent, (err, result) => {
                    if (err|| result.length === 0 ){
                        res.send(JSON.stringify({status:'noRepeated'}))
                    }
                    else {
                        res.send(JSON.stringify({status:'repeated'}))
                        console.log(result)
                    }
                })
             }
            if(param.username === undefined&&param.email!==undefined) {
               
                queryContent = param.email
                db.query( sqlStatement.queryByEmail, queryContent, (err, result) => {
                    if (err || result.length === 0){
                        res.send(JSON.stringify({status:'noRepeated'}))
                    }
                    else {res.send(JSON.stringify({status:'repeated'}))
                    console.log(result)
                    }
                })
            }
            if(param.username !== undefined&&param.email!==undefined){
                db.query (sqlStatement.insertUser, [param.username, param.password, param.email], (err) => {
                    if (!err){
                        res.send(JSON.stringify({status:'success'}))
                    }
                    else{
                        console.log(err)
                        res.send(JSON.stringify({status:'failed'}))
                    } 
                })
            }
           
            


    },
    
    
    
    forgetPwd : (param, res) => {
        const {newPassword, email} = param;
      
        
            db.query (sqlStatement.queryByEmail, email, (err, result) => {
                if (err) {
                    console.log(err);
                    res.send(JSON.stringify({status:'failed'}));
                }
                else if(result.length === 0){
                    res.send(JSON.stringify({status:'unRegister'}));
                }
                else{
                    db.query(sqlStatement.updatePassword, [newPassword, email], err => {
                        if (err) {
                            console.log(err);
                            res.send(JSON.stringify({status:'failed'}))
                        }
                        else res.send(JSON.stringify({status:'success'}))
                    })
                }
            })
          
        
    }
};
module.exports = userData;