"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(userResp) {
        this.login = userResp.login;
        this.fullName = userResp.name;
        this.repos = userResp.public_repos;
        this.followedBy = userResp.followers;
    }
    return User;
}());
exports.User = User;
