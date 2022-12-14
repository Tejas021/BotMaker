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
    const [bots, setBots] = useState([])

    const handleSubmit = async () => {
        console.log("data", data);
        await axios.post("http://127.0.0.1:3000/bot", data).then(res => setBots([...bots, { ...res.data, name: data.botName }])).catch(err => console.log(err));
        setData({
            botName: '',
            workspaceName: "",
            channelName: "",
            slackToken: "",
        })
    }
    console.log(bots);
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
            {
                (bots.length > 0) &&
                    bots.map((b)=>{
                        return <div style={{
                            margin: '5% 0 0 0',
                            display: 'flex',
                            flexWrap: 'wrap',
                            alignItems: 'center',
                            justifyContent: 'space-evenly'
                        }}>
                            <Card name={b.name} />
                        </div> 
                    })
            }

        </div>
    )
}

export default Form