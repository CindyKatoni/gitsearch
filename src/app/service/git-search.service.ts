import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';
import { Repo } from '../repo';
import { environment } from '../../environments/environment';
import { promise } from 'protractor';
import { error } from 'console';
import { resolve } from 'dns';
import { rejects } from 'assert';

@Injectable({
  providedIn: 'root'
})
export class GitSearchService {
  user:User;
  repo:Repo;

  constructor(private http:HttpClient) { 
    this.user = new User("","","","","","","","");
    this.repo = new Repo("","","","");
  }

  getUsers(userName:string){
    interface ApiResponse{
      public_repos:string,
      login:string,
      html_url:string,
      name:string,
      avatar_url: string,
      followers:string,
      following:string,
      repos_url:string,
    }
    let promise = new Promise((resolve, reject) => {
      let apiURL = 'https://api.github.com/users/' + userName + '?access_token=' + environment.apiKey;
      this.http.get<ApiResponse>(apiURL)
        .toPromise()
        .then(
          res => { // Success
            this.user = res;
            resolve();
          },
          (error) =>{
            reject();
          }
        );
    });
    return promise;
  }
    //Get Repo
    getRepo(userName:string){
      interface ApiResponse{
        html_url:string,
        name:string,
        repos_url:string,
        description:string,
      }
  
      let promise = new Promise((resolve, reject) => {
        let apiURL = 'https://api.github.com/users/' + userName + '/repos?access_token=' + environment.apiKey;
        this.http.get<ApiResponse>(apiURL)
          .toPromise()
          .then(
            res => { // Success
              this.repo = res;
              resolve();
            },
            (error)=>{
              reject();
            }
          );
      });
      return promise;
    }
  






}
