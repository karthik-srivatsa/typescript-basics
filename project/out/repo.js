"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Repo = /** @class */ (function () {
    function Repo(repoResp) {
        this.name = repoResp.name;
        this.description = repoResp.description;
        this.url = repoResp.html_url;
        this.forkCount = repoResp.html_forks;
    }
    return Repo;
}());
exports.Repo = Repo;
