"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var req = __importStar(require("request"));
var user_1 = require("./user");
var repo_1 = require("./repo");
var OPTIONS = {
    headers: {
        'User-Agent': 'request'
    },
    json: true
};
var GitHubApiService = /** @class */ (function () {
    function GitHubApiService() {
    }
    GitHubApiService.prototype.getUserInfo = function (username, cb) {
        req.get("https://api.github.com/users/" + username, OPTIONS, function (error, response, body) {
            //let user = new User(JSON.parse(body));
            var user = new user_1.User(body);
            cb(user);
        });
    };
    ;
    GitHubApiService.prototype.getRepos = function (username, cb) {
        req.get("https://api.github.com/users/" + username + "/repos", OPTIONS, function (error, response, body) {
            cb(body.map(function (repo) { return new repo_1.Repo(repo); }));
        });
    };
    return GitHubApiService;
}());
exports.GitHubApiService = GitHubApiService;
