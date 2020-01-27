// install with: npm install @octokit/webhooks
//Install with npm install @octokit/request


const { request } = require("@octokit/request");
const WebhooksApi = require("@octokit/webhooks");
const webhooks = new WebhooksApi({
  secret: "mysecret"
});

webhooks.on("*", ({ id, name, payload }) => {
  //console.log(`"${event.name}" event received"`);
  if ($payload.action=='create'){
      const response1 = await request("PUT /repos/:owner/:repo/branches/master/protection", {
            data: '{"required_status_checks": {"strict": true, "contexts": ["continuous-integration/travis-ci"] }, "enforce_admins": true, "required_pull_request_reviews": {"dismissal_restrictions": {"users": ["octocat"], "teams": ["justice-league"] }, "dismiss_stale_reviews": true, "require_code_owner_reviews": true, "required_approving_review_count": 2 }, "restrictions": {"users": ["octocat"], "teams": ["justice-league"], "apps": ["super-ci"] }, "required_linear_history": true, "allow_force_pushes": true, "allow_deletions": true } ',
            headers: {
              accept: "application/json",
              authorization: "token 0000000000000000000000000000000000000001"
            },
            owner: $payload.owner.login,
            repo:  $payload.repository.name       
      });

      const response2 = await request("POST /repos/:owner/:repo/issues", {
            data: "@"+$payload.owner.login + " " + response1,
            headers: {
              accept: "application/json",
              authorization: "token 0000000000000000000000000000000000000001"
            }            
      });
  }

};


require("http")
  .createServer(webhooks.middleware)
  .listen(3000);
