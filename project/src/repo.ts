export class Repo{
    name: string;
    description:string;
    url:string;
    size:number;
    forkCount:number; 
    constructor(repoResp:any){
        this.name = repoResp.name;
        this.description = repoResp.description;
        this.url = repoResp.html_url;
        this.forkCount = repoResp.html_forks;
    }
}