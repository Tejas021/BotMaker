import React, { useState, useEffect } from 'react'
import "./Form.css"
import axios from 'axios'
import Card from './Card'

const Form = () => {

    const [data, setData] = useState({
        botName: '',
        workspaceName: "",
        channelName: "",
        slackToken: "",
    })

    const handleSubmit = async () => {
        console.log("data", data);
        const res =  axios.post("http://127.0.0.1:3000/bot", data).then(res=>console.log(res)).catch(e=>console.log(e));
    }

    return (
        <div className='formBody'>
            <div className="container">
                <div className="brand-title">Bot Maker</div>
                <div className="inputs">

                    <input
                        onChange={(e) => { setData({ ...data, botName: e.target.value }) }}
                        value={data.botName}
                        className="inpt"
                        type="text"
                        placeholder="enter bot name"
                    />

                    <input onChange={(e) => { setData({ ...data, workspaceName: e.target.value }) }} value={data.workspaceName} className="inpt" type="text" placeholder="enter workspace name" />

                    <input onChange={(e) => { setData({ ...data, channelName: e.target.value }) }} value={data.channelName} className="inpt" type="text" placeholder="enter channle name" />

                    <input onChange={(e) => { setData({ ...data, slackToken: e.target.value }) }} value={data.slackToken} className="inpt" type="text" placeholder="enter slack token" />
                    <button className="btn" onClick={handleSubmit} type="button">Submit</button>
                </div>
            </div>
            <div style={{
                    margin:'5% 0 0 0',
                    display:'flex',
                    flexWrap:'wrap',
                    alignItems:'center',
                    justifyContent:'space-evenly'
                    }}>
                        <Card />
                        <Card />
                        <Card />
                </div>
        </div>
    )
}

export default Form