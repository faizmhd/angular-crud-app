import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';

import { UserlistService } from '../userlist.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  displayedColumns: string[] = ['gender', 'firstname', 'lastname', 'email', 'edit', 'delete'];
  users;
  dataSource;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
;
  constructor(
    private userlistService : UserlistService,
  ) { }

  ngOnInit(): void {
    this.userlistService.getAllUsers().subscribe(res => {
      this.users = res;
      this.dataSource = new MatTableDataSource(this.users);
      this.dataSource.paginator = this.paginator;
    });
    
    
  }

  deleteUser(user) {
    if(confirm("Are you sure to delete this user ?")){
      this.userlistService.deleteUser(user).subscribe(res => {
        console.warn(res)
        window.location.reload()
      })
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
