import React from 'react'

const Card = () => {
  return (
    <div
    style={{
        boxShadow: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
        width:'250px',
        height:'250px',
        margin:'0 10px'
    }}
    >
        <img
        style={{
            height:'150px',
            width:'150px',
            margin:'15px 0 0px 0'
        }}
         src="https://thumbs.dreamstime.com/b/ai-robot-head-chat-bot-icon-isolated-white-background-ai-robot-head-chat-bot-icon-109860127.jpg" alt="" />
        <p style={{color:'black'}}>Name</p>
    </div>
  )
}

export default Card