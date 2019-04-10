let AssistantV1 = require('watson-developer-cloud/assistant/v1')

const assistant = new AssistantV1({
    username: process.env.WATSON_USERNAME,
    password: process.env.WATSON_PASSWORD,
    url: process.env.URL,
    version: process.env.WATSON_VERSION
})

exports.getMessage = body =>
    new Promise((resolve, reject) => {
        assistant.message(
            {
                workspace_id: process.env.WATSON_WORKSPACE_ID,
                input: {
                    text: body.input
                },
                context: body.context
            },
            (err, response) => {
                if (err) {
                    console.log(err)
                    reject(err)
                } else {
                    response.workspace_id = process.env.WATSON_WORKSPACE_ID
                    resolve(response)
                }
            }
        )
    })
