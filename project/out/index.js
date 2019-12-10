"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var github_api_service_1 = require("./github-api-service");
var svc = new github_api_service_1.GitHubApiService();
svc.getUserInfo('karthik-srivatsa', function (user) {
    svc.getRepos('karthik-srivatsa', function (repos) {
        user.repos = repos;
        console.log(user);
    });
});
