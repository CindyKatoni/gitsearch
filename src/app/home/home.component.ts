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

  constructor() { }

  ngOnInit(): void {
  }

}
