import React, {Component} from 'react';
import AlterPwd from "../AlterPwd/AlterPwd";

class ForgetPwd extends Component {

    render () {
        return (
            <div className='myForm'>
                <div style={{display:'inline-block', width:'600px', overflow:'hidden'}}>
                    <img src={'./images/passwordPicture.jpg'} alt='passwordPicture.jpg'  className='leftPicture' />
                </div>
                <div className='right'>
                    <h4 className='title'>忘记密码</h4>
                    <hr className='line'/>
                    <AlterPwd style={{width:"100%"}}/>
                </div>
            </div>

        );
    }
}

export default ForgetPwd;