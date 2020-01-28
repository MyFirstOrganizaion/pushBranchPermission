
##### Auto protect master branch on reposioty creation #####

Node.js App that listen to Github webhook events related to repository creation for an organization and on event create send a api call to protect the master brach.

Once protection has been added app create an issue on the repository mentioning the author and summarizing the added grants.

App use Github [@octokit](https://github.com/octokit)  [webhook.js](https://github.com/octokit/webhooks.js) to parse payload received form the weebhook and [request.js](https://github.com/octokit?utf8=✓&q=request&type=&language=) to consume api REST endpoints.

