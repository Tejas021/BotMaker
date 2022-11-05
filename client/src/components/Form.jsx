import React from 'react'
import "./Form.css"

const Form = () => {
    return (
        <div className='formBody'>
            <div className="container">
                <div className="brand-title">Bot Maker</div>
                <div className="inputs">
                  
                    <input className="inpt" type="text" placeholder="enter bot name" />
                   
                    <input className="inpt" type="text" placeholder="enter workspace name" />
                   
                    <input className="inpt" type="text" placeholder="enter channle name" />
                  
                    <input className="inpt" type="text" placeholder="enter slack token" />
                    <button className="btn" type="submit">Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Form