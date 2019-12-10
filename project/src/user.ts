import { Repo } from "./repo";

export class User{
    login:string;
    fullName : string;
    repoCount : number;
    followedBy : number;
    repos: Repo[]
    constructor(userResp:any){
        this.login = userResp.login;
        this.fullName = userResp.name;
        this.repos = userResp.public_repos;
        this.followedBy = userResp.followers;
    }

}