import { Component, OnInit } from '@angular/core';

import { UserlistService } from '../userlist.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  // users:any = [];
  users;
;
  constructor(
    private userlistService : UserlistService,
  ) { }

  ngOnInit(): void {
    // this.userlistService.getAllUsers().subscribe(users => this.users = users);
    this.users = this.userlistService.getAllUsers();
  }

}
