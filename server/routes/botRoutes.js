const express = require('express')
const axios = require('axios')
const router = express.Router()

router.post("/bot", async (req, res) => {
    console.log(req.body)
    const data = JSON.stringify({
        "manifest": {
            "display_information": {
                "name": req.body.botName
            },
            "settings": {
                "org_deploy_enabled": false,
                "socket_mode_enabled": false,
                "is_hosted": false,
                "token_rotation_enabled": false
            },
            "features": {
                "bot_user": {
                    "display_name": "Nilesh"
                }
            },
            "oauth_config": {
                "scopes": {
                    "bot": [
                        "commands",
                        "chat:write",
                        "chat:write.public"
                    ]

                }

            }

        }

    })
    console.log("bot called");
    const resp = await axios.post("https://slack.com/api/apps.manifest.create", data, {
        headers: {
            Authorization: `Bearer ${req.body.slackToken}`,
            "Content-type": "application/json",
            charset:"UTF-8"
        }
    })
    // const jsonResp = await resp.json();
    console.log("resp",resp.data);
    // res.send(req.body)
})

module.exports = router