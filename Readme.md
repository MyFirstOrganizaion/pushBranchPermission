
### Auto protect master branch on reposioty creation #####

[Node.js](https://nodejs.org/en/) raw web service that listen to Github webhook events related to repository creation for an organization and once created send an api call to protect the master brach.

Once protection has been added app create an issue on the repository mentioning the author and summarizing the grants added.

App use Github [@octokit](https://github.com/octokit) [webhook.js](https://github.com/octokit/webhooks.js) to listen on wehbooks and to parse received payload and [axios](https://flaviocopes.com/axios/#introduction-to-axios) to consume Github REST endpoints.

Check [Update branch protection](https://developer.github.com/v3/repos/branches/#update-branch-protection) for more details.
For further detail on how to manage branches che the Github [branches](https://developer.github.com/v3/repos/branches/) REST api

Check [Create an issue](https://developer.github.com/v3/issues/#create-an-issue)for more details.
For further detail on how to manage issues check the Github [issues](https://developer.github.com/v3/issues/) REST api

