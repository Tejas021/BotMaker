import React,{useState,useEffect} from 'react'
import "./Form.css"
import axios from 'axios'

const Form = () => {

    const [data,setData] = useState({
        botName:'',
        workspaceName:"",
        channelName:"",
        slackToken:"",
    })

    const handleSubmit = async ()=>{
        const data = await axios.post("url",data)
    }

    return (
        <div className='formBody'>
            <div className="container">
                <div className="brand-title">Bot Maker</div>
                <div className="inputs">
                  
                    <input onChange={()=>{setData({...data,botName:e.target.value})}} value={data.botName} className="inpt" type="text" placeholder="enter bot name" />
                   
                    <input onChange={()=>{setData({...data,workspaceName:e.target.value})}} value={data.workspaceName} className="inpt" type="text" placeholder="enter workspace name" />
                   
                    <input onChange={()=>{setData({...data,channelName:e.target.value})}} value={data.channelName} className="inpt" type="text" placeholder="enter channle name" />
                  
                    <input onChange={()=>{setData({...data,slackToken:e.target.value})}} value={data.slackToken} className="inpt" type="text" placeholder="enter slack token" />
                    <button className="btn" onClick={handleSubmit} type="button">Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Form