import React from "react";
import cookie from 'react-cookies'
export default class Myrelease extends React.Component{
    state = {
        username:cookie.load('username'),
        sourcedata:[],
    }
    render(){
        return(
            <div>
                sdfsdf
            </div>
        )
    }
}