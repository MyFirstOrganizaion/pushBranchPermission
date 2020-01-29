const { request } = require("@octokit/request");
const WebhooksApi = require("@octokit/webhooks");
const webhooks = new WebhooksApi({
  secret: "thisismysecretkey"
});

webhooks.on("*", ({ id, name, payload }) => {



url='https://api.github.com/repos/'+payload.repository.owner.login+'/'+payload.repository.name+'/branches/master/protection'
  if (payload.action='created'){

        const axios = require('axios')
        ;(async () => {
          const response = await axios({
            url: url,
            method: 'put',
            headers: {
                          accept: "application/vnd.github.luke-cage-preview+json",
                          "authorization": "token XXXXXXXX"
                        },
            data:'{"enforce_admins": true,"required_status_checks":null,"required_pull_request_reviews":null,"restrictions":null'
          }).then((res) => {
            ;(async () => {
            const createissue = await axios({
                        url: 'https://api.github.com/repos/'+payload.repository.owner.login+'/'+payload.repository.name+'/issues',
                        method: 'POST',
                        headers: {
                                      accept: "application/json",
                                      "authorization": "token XXXXXXXX"
                                    },
                        data: '{"title": "branch protected","body": "enforce_admins set to true","assignees": ["'+payload.sender.login+'"]}'
              }).then((res) => {
              console.log(`statusCode: ${res.statusCode}`)
              console.log(res)
            })
            })()
          })
        })()
      }

});


require("http")
  .createServer(webhooks.middleware)
  .listen(3000);
