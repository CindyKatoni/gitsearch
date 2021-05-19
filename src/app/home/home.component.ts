import { Component, OnInit } from '@angular/core';
import { GitSearchService } from '../service/git-search.service';
import { User } from '../user';
import { Repo } from '../repo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user:User;
  repo:Repo;

  constructor(public gitSearchService:GitSearchService) {}

  getUsers(userName){ 
    this.gitSearchService.getUsers(userName).then(
      (success)=>{
        this.user= this.gitSearchService.user;
      },
      (error)=>{
        console.log(error);
      }
    )
    this.gitSearchService.getRepo(userName).then(
      (success)=>{
        this.repo= this.gitSearchService.repo;
      },
      (error)=>{
        console.log(error);
      }
    )
  }





  ngOnInit(): void {
  }

}
