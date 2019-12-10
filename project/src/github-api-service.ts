import * as req from 'request';
import { request } from "http";
import { User } from './user';
import { Repo } from './repo';

const OPTIONS:any ={
    headers:{
        'User-Agent': 'request'
    },
    json:true

};

export class GitHubApiService{
    getUserInfo(username:string, cb:(user:User)=> any){
         
        req.get(`https://api.github.com/users/${username}`, OPTIONS, (error: any, response:any, body:any)=>{
            //let user = new User(JSON.parse(body));
            let user = new User(body);
            cb(user);
        });
    };

    getRepos(username:string, cb : (repos:Repo[])=> any){
        req.get(`https://api.github.com/users/${username}/repos`, OPTIONS, (error: any, response:any, body:any)=>{
            cb(body.map((repo: any) => new Repo(repo)));
        });
    }
}