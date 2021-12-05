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
            if(err || result.length === 0){
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
            db.query(sqlStatement.insertorder1,[orderid,username,length,require,pictureurl[0]],(err)=>{
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
            db.query(sqlStatement.insertorder2,[orderid,username,length,require,pictureurl[0],pictureurl[1]],(err)=>{
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
            db.query(sqlStatement.insertorder3,[orderid,username,length,require,pictureurl[0],pictureurl[1],pictureurl[2]],(err)=>{
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
            db.query(sqlStatement.insertorder4,[orderid,username,length,require,pictureurl[0],pictureurl[1],pictureurl[2],pictureurl[3]],(err)=>{
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
            db.query(sqlStatement.insertorder5,[orderid,username,length,require,pictureurl[0],pictureurl[1],pictureurl[2],pictureurl[3],pictureurl[4]],(err)=>{
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
            db.query(sqlStatement.insertorder6,[orderid,username,length,require,pictureurl[0],pictureurl[1],pictureurl[2],pictureurl[3],pictureurl[4],pictureurl[5]],(err)=>{
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
            db.query(sqlStatement.insertorder7,[orderid,username,length,require,pictureurl[0],pictureurl[1],pictureurl[2],pictureurl[3],pictureurl[4],pictureurl[5],pictureurl[6]],(err)=>{
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
            db.query(sqlStatement.insertorder8,[orderid,username,length,require,pictureurl[0],pictureurl[1],pictureurl[2],pictureurl[3],pictureurl[4],pictureurl[5],pictureurl[6],pictureurl[7]],(err)=>{
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
            db.query(sqlStatement.insertorder9,[orderid,username,length,require,pictureurl[0],pictureurl[1],pictureurl[2],pictureurl[3],pictureurl[4],pictureurl[5],pictureurl[6],pictureurl[7],pictureurl[8]],(err)=>{
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
            db.query(sqlStatement.insertorder10,[orderid,username,length,require,pictureurl[0],pictureurl[1],pictureurl[2],pictureurl[3],pictureurl[4],pictureurl[5],pictureurl[6],pictureurl[7],pictureurl[8],pictureurl[9]],(err)=>{
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
           
            

        // pool.getConnection ((err, connection) => {
        //     let queryContent = ''
        //     let queryType = 0
        //     if (param.username !== undefined) {
        //         queryContent = param.username
        //         queryType = 1
        //     }
        //     else {
        //         queryContent = param.email
        //         queryType = 2
        //     }
        //     connection.query ((queryType === 1 ? sqlStatement.queryByUsername : sqlStatement.queryByEmail), queryContent, (err, result) => {
        //         if (err || result.length === 0){
        //             if (param.username !== undefined && param.email !== undefined){
        //                 connection.query (sqlStatement.insertUser, [param.username, param.password, param.email], (err) => {
        //                     if (!err) res.send(JSON.stringify({status:'success'}))
        //                     else res.send(JSON.stringify({status:'failed'}))
        //                 })
        //             }
        //             else res.send(JSON.stringify({status:'noRepeated'}))
        //         }
        //         else res.send(JSON.stringify({status:'repeated'}))
        //     })
        //     connection.release();
        // })
    },
    // alterPwd : (param, res) => {
    //     const {newPassword, oldPassword, email} = param

    //     pool.getConnection ((err, connection) => {
    //         connection.query (sqlStatement.queryByEmail, email, (err, result) => {
    //             if (err || result.length === 0) res.send(JSON.stringify({status:'failed'}))
    //             else{
    //                 if (result[0].password === oldPassword){
    //                     connection.query(sqlStatement.updatePassword, [newPassword, email], err => {
    //                         if (err) res.send(JSON.stringify({status:'failed'}))
    //                         else res.send(JSON.stringify({status:'success'}))
    //                     })
    //                 }
    //                 else {
    //                     res.send(JSON.stringify({status:'failed'}))
    //                 }
    //             }
    //         })
    //         connection.release();
    //     })
    // },
    getInfo: (param, res) => {
        const username = param.username;
        pool.getConnection ((err, connection) => {
            connection.query (sqlStatement.queryDevice, username, (err, result) => {
                if (err){
                    const r = {code:'failed'}
                    res.send(JSON.stringify(r))

                }
                else{
                    const r = {code:'success', deviceArray:result};
                    res.send(JSON.stringify(r));
                }
            })
            connection.release();
        })
    },
    sendSecurityCode: (param, res) => {
        const userEmail = param.email;
        const code = generateRandom(6);
        this.rand = code;
        const server = new email.SMTPClient ({
            user: "xxxxxxxxx",      // 你的QQ用户
            password: "xxxxxxxx",           // 注意，不是QQ密码，而是刚才生成的授权码
            host: "smtp.qq.com",         // 主机，不改
            ssl: true                   // 使用ssl
        });
        //开始发送邮件
        server.send({
            text:    `您的验证码为：${code}，60秒后过期。`,       //邮件内容
            from:    "xxxxxxx",        //谁发送的
            to:      userEmail,       //发送给谁的
            subject: "【浙联智慧平台】验证码"          //邮件主题
        }, function(err, message) {
            //回调函数
            console.log(err || message);
            if (err){
                res.send(JSON.stringify({status:'failed'}));
            }
            else{
                res.send(JSON.stringify({status:'success'}));
            }
        });
    },
    forgetPwd : (param, res) => {
        const {newPassword, email} = param;
        // if(securityCode !== this.rand) {
        //     res.send(JSON.stringify({status:'wrong'}));
        //     return;
        // }
        // this.rand = generateRandom(6);
        
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