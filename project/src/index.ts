import {GitHubApiService} from './github-api-service';
import { User } from './user';
import { Repo } from './repo';
import * as lod from 'lodash';


let svc = new GitHubApiService();
svc.getUserInfo('karthik-srivatsa',(user:User)=>{
    
    svc.getRepos('karthik-srivatsa',(repos:Repo[])=>{
        user.repos = repos;
        console.log(user);
    });
    
});


