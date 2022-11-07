const express = require('express')
const router = express.Router()
router.post("/",async(req,res)=>{
    await fetch("https://slack.com/api/apps.manifest.create",{
        method:"POST",
        headers:{
            Authorization:`Bearer ${req.body.token}`
        },
        body:JSON.stringify({
            "manifest":{
         "display_information": {
                "name": req.body.botName
            },
            "settings": {
                "org_deploy_enabled": false,
                "socket_mode_enabled": false,
                "is_hosted": false,
                "token_rotation_enabled": false
            },
            "features":{
                "bot_user":{
                    "display_name":"Tejas"
                }
            },
           "oauth_config":{
         "scopes":{
           "bot":[
            "commands",
              "chat:write",
              "chat:write.public"
           ]
            
         }
         
           }
 
            }
           
        })
    })
    res.send(req.body)
})

module.exports = router